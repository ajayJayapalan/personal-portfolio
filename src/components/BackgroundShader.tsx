import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ================= Vertex Shader =================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// ================= Fragment Shader =================
// const fragmentShader = `
//   varying vec2 vUv;
//   uniform float time;
//   uniform vec2 mouse;
//   uniform float scroll;
//   uniform float brightness;
//   uniform float isLightTheme;
//   uniform float reveal;
//   uniform vec3 rightColors[5];

//   float hash21(vec2 p) {
//     p = fract(p * vec2(123.34, 456.21));
//     p += dot(p, p + 45.32);
//     return fract(p.x * p.y);
//   }

//   void main() {
//     float dist = distance(vUv, mouse);
//     float factor = 1.0 + 0.55 * exp(-dist * 5.0);
//     vec2 distortedUV = mouse + (vUv - mouse) * factor;

//     vec2 p = -1.0 + 2.0 * distortedUV;
//     float a = time * 20.0 + scroll * 40.0;
//     float d, e, f, g = 1.0 / 40.0, h, i, r, q;

//     e = 400.0 * (p.x * 0.5 + 0.5);
//     f = 400.0 * (p.y * 0.5 + 0.5);
//     i = 200.0 + sin(e * g + a / 150.0) * (20.0 + scroll * 5.0);
//     d = 200.0 + cos(f * g / 2.0) * (18.0 + scroll * 4.0) + cos(e * g) * 7.0;
//     r = sqrt(pow(abs(i - e), 2.0) + pow(abs(d - f), 2.0));
//     q = f / r;
//     e = (r * cos(q)) - a / 2.0;
//     f = (r * sin(q)) - a / 2.0;

//     d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
//     h = ((f + d) + a / 2.0) * g;
//     i = cos(h + r * p.x / 1.3) * (e + e + a)
//         + cos(q * g * 6.0) * (r + h / 3.0);
//     h = sin(f * g) * 144.0 - sin(e * g) * 212.0 * p.x;
//     h = (h + (f - e) * q + sin(r - (a + h) / 7.0) * 10.0 + i / 4.0) * g;
//     i += cos(h * 2.3 * sin(a / 350.0 - q)) * 184.0 *
//          sin(q - (r * 4.3 + a / 12.0) * g)
//          + tan(r * g + h) * 184.0 * cos(r * g + h);
//     i = mod(i / 5.6, 256.0) / 64.0;
//     if (i < 0.0) i += 4.0;
//     if (i >= 2.0) i = 4.0 - i;
//     d = r / 2200.0;
//     d += sin(d * d * 8.0) * 0.99;

//     float centerGlow = mix(0.25, d, smoothstep(0.1, 0.4, r / 400.0));
//     d = centerGlow;
//     f = (sin(a * g) + 1.0) / 2.0;

//     vec3 leftColor = vec3(
//       i / 2.0,
//       i / 3.0,
//       i * 0.6
//     ) * d;

//     // ---- Gradient for Right Side ----
//     float gT = clamp(vUv.y, 0.0, 1.0);
//     vec3 c1, c2;

//     if (gT < 0.25) {
//       c1 = rightColors[0];
//       c2 = rightColors[1];
//       gT = gT / 0.25;
//     } else if (gT < 0.5) {
//       c1 = rightColors[1];
//       c2 = rightColors[2];
//       gT = (gT - 0.25) / 0.25;
//     } else if (gT < 0.75) {
//       c1 = rightColors[2];
//       c2 = rightColors[3];
//       gT = (gT - 0.5) / 0.25;
//     } else {
//       c1 = rightColors[3];
//       c2 = rightColors[4];
//       gT = (gT - 0.75) / 0.25;
//     }

//     vec3 rightColor = mix(c1, c2, gT);

//     // blend left ↔ right
//     float bias = pow(p.x * 0.5 + 0.5, 1.5);
//     vec3 baseColor = mix(leftColor, rightColor, bias);

//     // glow
//     float glowDist = distance(vUv, mouse);
//     float glow = pow(1.0 - smoothstep(0.0, 3.5, glowDist), 70.0);
//     float brightnessFactor = clamp(length(baseColor), 0.0, 1.0);
//     vec3 reflectionColor = vec3(0.6, 0.7, 1.4);
//     vec3 glowColor = reflectionColor * glow * brightnessFactor * 0.4;

//     vec3 finalColor = baseColor + glowColor;
//     finalColor = mix(finalColor, normalize(finalColor) * length(finalColor), 0.45);
//     finalColor *= brightness;

//     // light theme invert
//     if (isLightTheme > 0.5) {
//       float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
//       float invertedLuminance = 1.0 - luminance;
//       finalColor = normalize(finalColor + 0.0001) * invertedLuminance;
//     }

//     // ---- Reveal Mask ----
//     float wave = sin((vUv.y * 10.0) + (time * 1.2)) * 0.015;
//     float n = (hash21(vUv * 100.0) - 0.5) * 0.003;
//     float edgePos = reveal + wave + n;

//     float edgeLo = edgePos - 0.06;
//     float edgeHi = edgePos + 0.06;

//     float s = smoothstep(edgeLo, edgeHi, vUv.x);
//     float mask = 1.0 - s;

//     float edgeGlow = exp(-pow((vUv.x - edgePos) * 35.0, 2.0));
//     finalColor += vec3(0.12, 0.18, 0.35) * edgeGlow * (1.0 - s) * 0.9;

//     finalColor *= mask;

//     gl_FragColor = vec4(finalColor, 1.0);
//   }
// `;

// const fragmentShader = `
// varying vec2 vUv;
// uniform float time;
// uniform vec2 mouse;
// uniform float scroll;
// uniform float brightness;
// uniform float isLightTheme;
// uniform float reveal;
// uniform vec3 rightColors[5];

// float hash21(vec2 p) {
//   p = fract(p * vec2(123.34, 456.21));
//   p += dot(p, p + 45.32);
//   return fract(p.x * p.y);
// }

// void main() {
//   float dist = distance(vUv, mouse);
//   float factor = 1.0 + 0.55 * exp(-dist * 5.0);
//   vec2 distortedUV = mouse + (vUv - mouse) * factor;

//   vec2 p = -1.0 + 2.0 * distortedUV;
//   float a = time * 20.0 + scroll * 40.0;
//   float d, e, f, g = 1.0 / 40.0, h, i, r, q;

//   e = 400.0 * (p.x * 0.5 + 0.5);
//   f = 400.0 * (p.y * 0.5 + 0.5);
//   i = 200.0 + sin(e * g + a / 150.0) * (20.0 + scroll * 5.0);
//   d = 200.0 + cos(f * g / 2.0) * (18.0 + scroll * 4.0) + cos(e * g) * 7.0;
//   r = sqrt(pow(abs(i - e), 2.0) + pow(abs(d - f), 2.0));
//   q = f / r;
//   e = (r * cos(q)) - a / 2.0;
//   f = (r * sin(q)) - a / 2.0;

//   d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
//   h = ((f + d) + a / 2.0) * g;
//   i = cos(h + r * p.x / 1.3) * (e + e + a)
//       + cos(q * g * 6.0) * (r + h / 3.0);
//   h = sin(f * g) * 144.0 - sin(e * g) * 212.0 * p.x;
//   h = (h + (f - e) * q + sin(r - (a + h) / 7.0) * 10.0 + i / 4.0) * g;
//   i += cos(h * 2.3 * sin(a / 350.0 - q)) * 184.0 *
//        sin(q - (r * 4.3 + a / 12.0) * g)
//        + tan(r * g + h) * 184.0 * cos(r * g + h);
//   i = mod(i / 5.6, 256.0) / 64.0;
//   if (i < 0.0) i += 4.0;
//   if (i >= 2.0) i = 4.0 - i;
//   d = r / 2200.0;
//   d += sin(d * d * 8.0) * 0.99;

//   float centerGlow = mix(0.25, d, smoothstep(0.1, 0.4, r / 400.0));
//   d = centerGlow;
//   f = (sin(a * g) + 1.0) / 2.0;

//   // Left side (keep original procedural look)
//   vec3 leftColor = vec3(
//     i / 2.0,
//     i / 3.0,
//     i * 0.6
//   ) * d;

//   // ---- Gradient for Right Side (5 stops) ----
//   float gT = clamp(vUv.y, 0.0, 1.0);
//   vec3 c1;
//   vec3 c2;
//   float localT;

//   if (gT < 0.25) {
//     c1 = rightColors[0];
//     c2 = rightColors[1];
//     localT = gT / 0.25;
//   } else if (gT < 0.5) {
//     c1 = rightColors[1];
//     c2 = rightColors[2];
//     localT = (gT - 0.25) / 0.25;
//   } else if (gT < 0.75) {
//     c1 = rightColors[2];
//     c2 = rightColors[3];
//     localT = (gT - 0.5) / 0.25;
//   } else {
//     c1 = rightColors[3];
//     c2 = rightColors[4];
//     localT = (gT - 0.75) / 0.25;
//   }

//   vec3 gradColor = mix(c1, c2, localT);

//   // ---- Modulate gradient by procedural intensity so dark areas remain ----
//   // Use 'd' (centerGlow), 'f' (phase), and 'i' to preserve original contrast
//   float intensity = d * (0.45 + 0.55 * f) * clamp(i * 0.25, 0.2, 1.8);
//   intensity = clamp(intensity, 0.0, 1.6); // safety clamp to avoid overbright

//   vec3 rightColor = gradColor * intensity;

//   // blend left ↔ right
//   float bias = pow(p.x * 0.5 + 0.5, 1.5);
//   vec3 baseColor = mix(leftColor, rightColor, bias);

//   // glow
//   float glowDist = distance(vUv, mouse);
//   float glow = pow(1.0 - smoothstep(0.0, 3.5, glowDist), 70.0);
//   float brightnessFactor = clamp(length(baseColor), 0.0, 1.0);
//   vec3 reflectionColor = vec3(0.6, 0.7, 1.4);
//   vec3 glowColor = reflectionColor * glow * brightnessFactor * 0.4;

//   vec3 finalColor = baseColor + glowColor;
//   finalColor = mix(finalColor, normalize(finalColor) * length(finalColor), 0.45);
//   finalColor *= brightness;

//   // light theme invert
//   if (isLightTheme > 0.5) {
//     float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
//     float invertedLuminance = 1.0 - luminance;
//     finalColor = normalize(finalColor + 0.0001) * invertedLuminance;
//   }

//   // ---- Reveal Mask ----
//   float wave = sin((vUv.y * 10.0) + (time * 1.2)) * 0.015;
//   float n = (hash21(vUv * 100.0) - 0.5) * 0.003;
//   float edgePos = reveal + wave + n;

//   float edgeLo = edgePos - 0.06;
//   float edgeHi = edgePos + 0.06;

//   float s = smoothstep(edgeLo, edgeHi, vUv.x);
//   float mask = 1.0 - s;

//   float edgeGlow = exp(-pow((vUv.x - edgePos) * 35.0, 2.0));
//   finalColor += vec3(0.12, 0.18, 0.35) * edgeGlow * (1.0 - s) * 0.9;

//   finalColor *= mask;

//   gl_FragColor = vec4(finalColor, 1.0);
// }
// `;

const fragmentShader = `varying vec2 vUv;
uniform float time;
uniform vec2 mouse;
uniform float scroll;
uniform float brightness;
uniform float isLightTheme;
uniform float reveal;
uniform vec3 rightColors[5];

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float dist = distance(vUv, mouse);
  float factor = 1.0 + 0.55 * exp(-dist * 5.0);
  vec2 distortedUV = mouse + (vUv - mouse) * factor;

  vec2 p = -1.0 + 2.0 * distortedUV;
  float a = time * 20.0 + scroll * 40.0;
  float d, e, f, g = 1.0 / 40.0, h, i, r, q;

  e = 400.0 * (p.x * 0.5 + 0.5);
  f = 400.0 * (p.y * 0.5 + 0.5);
  i = 200.0 + sin(e * g + a / 150.0) * (20.0 + scroll * 5.0);
  d = 200.0 + cos(f * g / 2.0) * (18.0 + scroll * 4.0) + cos(e * g) * 7.0;
  r = sqrt(pow(abs(i - e), 2.0) + pow(abs(d - f), 2.0));
  q = f / r;
  e = (r * cos(q)) - a / 2.0;
  f = (r * sin(q)) - a / 2.0;

  d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
  h = ((f + d) + a / 2.0) * g;
  i = cos(h + r * p.x / 1.3) * (e + e + a)
      + cos(q * g * 6.0) * (r + h / 3.0);
  h = sin(f * g) * 144.0 - sin(e * g) * 212.0 * p.x;
  h = (h + (f - e) * q + sin(r - (a + h) / 7.0) * 10.0 + i / 4.0) * g;
  i += cos(h * 2.3 * sin(a / 350.0 - q)) * 184.0 *
       sin(q - (r * 4.3 + a / 12.0) * g)
       + tan(r * g + h) * 184.0 * cos(r * g + h);
  i = mod(i / 5.6, 256.0) / 64.0;
  if (i < 0.0) i += 4.0;
  if (i >= 2.0) i = 4.0 - i;
  d = r / 2200.0;
  d += sin(d * d * 8.0) * 0.99;

  float centerGlow = mix(0.25, d, smoothstep(0.1, 0.4, r / 400.0));
  d = centerGlow;
  f = (sin(a * g) + 1.0) / 2.0;

  // Left side (original procedural)
  vec3 leftColor = vec3(
    i / 2.0,
    i / 3.0,
    i * 0.6
  ) * d;

  // Original procedural right color (keeps original darkness/contrast)
  vec3 origRightProc = vec3(
    f * i / 2.0,
    (i / 2.0 + d / 10.0),
    pow(i * 1.8, 1.2)
  ) * d;

  // ---- Gradient for Right Side (5 stops) ----
  float gT = clamp(vUv.y, 0.0, 1.0);
  vec3 c1;
  vec3 c2;
  float localT;

  if (gT < 0.25) {
    c1 = rightColors[0];
    c2 = rightColors[1];
    localT = gT / 0.25;
  } else if (gT < 0.5) {
    c1 = rightColors[1];
    c2 = rightColors[2];
    localT = (gT - 0.25) / 0.25;
  } else if (gT < 0.75) {
    c1 = rightColors[2];
    c2 = rightColors[3];
    localT = (gT - 0.5) / 0.25;
  } else {
    c1 = rightColors[3];
    c2 = rightColors[4];
    localT = (gT - 0.75) / 0.25;
  }

  vec3 gradColor = mix(c1, c2, localT);

  // ---- Preserve exact procedural darkness by matching luminance ----
  // compute luminance of orig procedural and gradient (use standard luma)
  float procLum = dot(origRightProc, vec3(0.299, 0.587, 0.114));
  float gradLum = dot(gradColor, vec3(0.299, 0.587, 0.114));
  float eps = 1e-5;

  // scale gradient so its luminance equals the procedural luminance
  float scale = gradLum > eps ? procLum / (gradLum + eps) : 0.0;
  vec3 rightColor = gradColor * scale;

  // blend left ↔ right
  float bias = pow(p.x * 0.5 + 0.5, 1.5);
  vec3 baseColor = mix(leftColor, rightColor, bias);

  // glow
  float glowDist = distance(vUv, mouse);
  float glow = pow(1.0 - smoothstep(0.0, 3.5, glowDist), 70.0);
  float brightnessFactor = clamp(length(baseColor), 0.0, 1.0);
  vec3 reflectionColor = vec3(0.6, 0.7, 1.4);
  vec3 glowColor = reflectionColor * glow * brightnessFactor * 0.4;

  vec3 finalColor = baseColor + glowColor;
  finalColor = mix(finalColor, normalize(finalColor) * length(finalColor), 0.45);
  finalColor *= brightness;

  // light theme invert
  if (isLightTheme > 0.5) {
    float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
    float invertedLuminance = 1.0 - luminance;
    finalColor = normalize(finalColor + 0.0001) * invertedLuminance;
  }

  // ---- Reveal Mask ----
  float wave = sin((vUv.y * 10.0) + (time * 1.2)) * 0.015;
  float n = (hash21(vUv * 100.0) - 0.5) * 0.003;
  float edgePos = reveal + wave + n;

  float edgeLo = edgePos - 0.06;
  float edgeHi = edgePos + 0.06;

  float s = smoothstep(edgeLo, edgeHi, vUv.x);
  float mask = 1.0 - s;

  float edgeGlow = exp(-pow((vUv.x - edgePos) * 35.0, 2.0));
  finalColor += vec3(0.12, 0.18, 0.35) * edgeGlow * (1.0 - s) * 0.9;

  finalColor *= mask;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ================= Globals =================
let smoothMouse = new THREE.Vector2(0.5, 0.5);

// ================= Shader Plane =================
function ShaderPlane({
  targetMouse,
  scroll,
  isLightTheme,
  meshScale = [1, 1, 1],
}: {
  targetMouse: THREE.Vector2;
  scroll: React.MutableRefObject<number>;
  isLightTheme: boolean;
  meshScale?: [number, number, number];
}) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      mouse: { value: new THREE.Vector2(0.5, 0.5) },
      scroll: { value: 0 },
      brightness: { value: 0.8 },
      isLightTheme: { value: isLightTheme ? 1.0 : 0.0 },
      reveal: { value: -0.3 },
      rightColors: {
        value: [
          new THREE.Color("#22d3ee"), // cyan-400
          new THREE.Color("#38bdf8"), // sky-400
          new THREE.Color("#60a5fa"), // blue-400
          new THREE.Color("#818cf8"), // indigo-400
          new THREE.Color("#c084fc"), // purple-400
        ],
      },
    }),
    []
  );

  useFrame(({ clock }, delta) => {
    if (!materialRef.current) return;

    smoothMouse.lerp(targetMouse, 0.05);
    materialRef.current.uniforms.mouse.value.copy(smoothMouse);

    materialRef.current.uniforms.time.value = clock.getElapsedTime();
    materialRef.current.uniforms.scroll.value = scroll.current;
    materialRef.current.uniforms.isLightTheme.value = isLightTheme ? 1.0 : 0.0;

    const currentReveal = materialRef.current.uniforms.reveal.value;
    const targetReveal = 1.3;
    const lerpFactor = Math.min(1, delta * 0.6);
    materialRef.current.uniforms.reveal.value = THREE.MathUtils.lerp(
      currentReveal,
      targetReveal,
      lerpFactor
    );
    if (materialRef.current.uniforms.reveal.value > 1.299) {
      materialRef.current.uniforms.reveal.value = 1.3;
    }
  });

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.isLightTheme.value = isLightTheme
        ? 1.0
        : 0.0;
    }
  }, [isLightTheme]);

  return (
    <mesh frustumCulled={false} scale={meshScale}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

// ================= Main App =================
export default function BackgroundShader({
  targetMouse,
  isLight,
}: {
  targetMouse: THREE.Vector2;
  isLight: boolean;
}) {
  const scroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scroll.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      orthographic
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
      camera={{ position: [0, 0, 30], near: 0.1, far: 50, zoom: 10 }}
    >
      <ShaderPlane
        targetMouse={targetMouse}
        scroll={scroll}
        isLightTheme={isLight}
        meshScale={[40, 40, 1]}
      />
    </Canvas>
  );
}
