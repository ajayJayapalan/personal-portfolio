import React, { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

// ================= Vertex Shader =================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `varying vec2 vUv;
uniform float time;
uniform vec2 mouse;
uniform float scroll;
uniform float brightness;
uniform float isLightTheme;
uniform float reveal;

// --- Oklch -> sRGB (accurate conversion) ---
float linearToSRGBComp(float c) {
  c = clamp(c, 0.0, 1.0);
  return (c <= 0.0031308) ? 12.92 * c : 1.055 * pow(c, 1.0 / 2.4) - 0.055;
}
vec3 linearToSRGB(vec3 c) {
  return vec3(
    linearToSRGBComp(c.r),
    linearToSRGBComp(c.g),
    linearToSRGBComp(c.b)
  );
}

// Oklch (L in 0..1, C, h degrees) -> sRGB
vec3 oklch_to_srgb(vec3 oklch) {
  float L = oklch.x;
  float C = oklch.y;
  float h = radians(oklch.z);
  float a = C * cos(h);
  float b = C * sin(h);

  // Oklab intermediate
  float l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  float m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  float s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  // cube
  float l = l_ * l_ * l_;
  float m = m_ * m_ * m_;
  float s = s_ * s_ * s_;

  // linear sRGB
  float R = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  float G = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  float B = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

  vec3 lin = vec3(R, G, B);
  lin = max(lin, vec3(0.0)); // avoid negative before gamma
  return linearToSRGB(lin);
}

// Your two strictly-specified Oklch stops (hotpink -> blue)
// TOP: hotpink (322.896), BOTTOM: blue (259.815)
const vec3 TOP_OKLCH = vec3(0.591, 0.293 * 0.95, 322.896);
const vec3 BOTTOM_OKLCH = vec3(0.623, 0.214 * 0.95, 259.815);

// small hash for reveal jitter
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  // --- optional mouse-based distortion of UVs (keeps interaction) ---
  float dist = distance(vUv, mouse);
  float factor = 1.0 + 0.55 * exp(-dist * 5.0);
  vec2 distortedUV = mouse + (vUv - mouse) * factor;
  vec2 uv = distortedUV;

  // --- original procedural math (keeps the organic detail) ---
  vec2 p = -1.0 + 2.0 * uv;
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

  // --- compute a procedural 'shade' scalar that preserves the texture ---
  float pattern = clamp((i * 0.8 + d * 6.0) * 0.6, 0.0, 1.25); // main detail
  float shade = max(0.12, pattern); // keep small floor but allow darker left

  // --- create the exact top->bottom gradient (hotpink at top, blue at bottom) ---
  vec3 topRGB = oklch_to_srgb(TOP_OKLCH);
  vec3 bottomRGB = oklch_to_srgb(BOTTOM_OKLCH);
  // Mix so uv.y = 0 -> bottomRGB (blue), uv.y = 1 -> topRGB (hotpink)
  vec3 gradientColor = mix(bottomRGB, topRGB, clamp(uv.y, 0.0, 1.0));

  // --- apply procedural shade to the gradient (no other hues introduced) ---
  vec3 baseColor = gradientColor * shade;

  // subtle interactive brightening near the mouse (preserves hue)
  float glow = pow(1.0 - smoothstep(0.0, 0.45, dist), 1.8);
  baseColor += gradientColor * glow * 0.19;

  // apply global brightness uniform
  baseColor *= brightness;

  // --- LEFT→RIGHT LUMINANCE RAMP (black -> full brightness) ---
  float xRamp = clamp(uv.x, 0.0, 1.0);
  baseColor *= xRamp;

  // light theme: invert luminance but keep hue family (gentle)
  if (isLightTheme > 0.5) {
    float lum = dot(baseColor, vec3(0.299, 0.587, 0.114));
    float inv = 1.0 - lum;
    baseColor = normalize(baseColor + 1e-5) * inv;
  }

  vec3 finalColor = baseColor;

  // --- Reveal mask: only active when reveal > tiny threshold ---
  if (reveal > 0.001) {
    float wave = sin((uv.y * 10.0) + (time * 1.2)) * 0.015;
    float n = (hash21(uv * 100.0) - 0.5) * 0.003;
    float edgePos = reveal + wave + n;

    float edgeLo = edgePos - 0.06;
    float edgeHi = edgePos + 0.06;
    float s = smoothstep(edgeLo, edgeHi, uv.x);
    float mask = 1.0 - s;

    // subtle edge brighten (keeps hue)
    float edgeGlow = exp(-pow((uv.x - edgePos) * 35.0, 2.0));
    finalColor += gradientColor * (edgeGlow * (1.0 - s) * 0.6);

    finalColor *= mask;
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ================= Globals =================
let smoothMouse = new THREE.Vector2(0.5, 0.5);

function ShaderPlane({
  targetMouse,
  scroll,
  isLightTheme,
}: {
  targetMouse: THREE.Vector2;
  scroll: React.MutableRefObject<number>;
  isLightTheme: boolean;
  meshScale?: [number, number, number];
}) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      mouse: { value: new THREE.Vector2(0.5, 0.5) },
      scroll: { value: 0 },
      brightness: { value: 0.6 },
      isLightTheme: { value: isLightTheme ? 1.0 : 0.0 },
      reveal: { value: -0.3 },
      rightColors: {
        value: [
          new THREE.Color("#22d3ee"),
          new THREE.Color("#38bdf8"),
          new THREE.Color("#60a5fa"),
          new THREE.Color("#818cf8"),
          new THREE.Color("#c084fc"),
        ],
      },
    }),
    []
  );

  useFrame(({ clock }, delta) => {
    if (!materialRef.current) return;

    // smooth the mouse
    smoothMouse.lerp(targetMouse, 0.05);
    materialRef.current.uniforms.mouse.value.copy(smoothMouse);

    materialRef.current.uniforms.time.value = clock.getElapsedTime();
    materialRef.current.uniforms.scroll.value = scroll.current * 3;
    materialRef.current.uniforms.isLightTheme.value = isLightTheme ? 1.0 : 0.0;

    // reveal easing
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

  useEffect(() => {
    return () => {
      // dispose material
      if (materialRef.current) {
        try {
          materialRef.current.dispose();
        } catch (e) {
          // swallow disposal errors — three.js may already have cleaned it
        }
        materialRef.current = null;
      }

      if (meshRef.current) {
        const geom = meshRef.current.geometry;
        if (geom) {
          try {
            geom.dispose();
          } catch (e) {
            /* ignore */
          }
        }
        // also try to dispose material if somehow still present on mesh
        const mat = meshRef.current.material as
          | THREE.Material
          | THREE.Material[]
          | null;
        if (mat) {
          try {
            if (Array.isArray(mat)) {
              mat.forEach((m) => m.dispose && m.dispose());
            } else {
              (mat as THREE.Material).dispose &&
                (mat as THREE.Material).dispose();
            }
          } catch (e) {
            /* ignore */
          }
        }
        meshRef.current = null;
      }
    };
  }, []);

  return (
    <mesh ref={meshRef} frustumCulled={false}>
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      scroll.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        minWidth: "40rem",
        minHeight: "50rem",
        height: "100vh",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ShaderPlane
        targetMouse={targetMouse}
        scroll={scroll}
        isLightTheme={isLight}
      />
    </Canvas>
  );
}
