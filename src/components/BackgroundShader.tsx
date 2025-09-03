import React, { useRef } from "react";
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
const fragmentShader = `
  varying vec2 vUv;
  uniform float time;
  uniform vec2 mouse;

  void main() {
    float dist = distance(vUv, mouse);
    float factor = 1.0 + 0.55 * exp(-dist * 5.0);
    vec2 distortedUV = mouse + (vUv - mouse) * factor;

    vec2 p = -1.0 + 2.0 * distortedUV;
    float a = time * 20.0;
    float d, e, f, g = 1.0 / 40.0, h, i, r, q;

    e = 400.0 * (p.x * 0.5 + 0.5);
    f = 400.0 * (p.y * 0.5 + 0.5);
    i = 200.0 + sin(e * g + a / 150.0) * 20.0;
    d = 200.0 + cos(f * g / 2.0) * 18.0 + cos(e * g) * 7.0;
    r = sqrt(pow(abs(i - e), 2.0) + pow(abs(d - f), 2.0));
    q = f / r;
    e = (r * cos(q)) - a / 2.0;
    f = (r * sin(q)) - a / 2.0;
    d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
    h = ((f + d) + a / 2.0) * g;
    i = cos(h + r * p.x / 1.3) * (e + e + a) + cos(q * g * 6.0) * (r + h / 3.0);
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

    vec3 baseColor = vec3(
      f * i / 1.6, 
      i / 2.0 + d / 13.0, 
      i
    ) * d * p.x +
    vec3(
      i / 1.3 + d / 8.0, 
      i / 2.0 + d / 18.0, 
      i
    ) * d * (1.0 - p.x);

    gl_FragColor = vec4(baseColor, 1.0);
  }
`;

// ================= Globals for smooth mouse =================
let smoothMouse = new THREE.Vector2(0.5, 0.5);

// ================= Shader Plane Component =================
function ShaderPlane({ targetMouse }: { targetMouse: THREE.Vector2 }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      smoothMouse.lerp(targetMouse, 0.05);
      materialRef.current.uniforms.mouse.value.copy(smoothMouse);
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
          mouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

// ================= Main App =================
export default function BackgroundShader({
  targetMouse,
}: {
  targetMouse: THREE.Vector2;
}) {
  return (
    <>
      {/* Shader Background */}
      <Canvas
        orthographic
        camera={{ position: [0, 0, 30], near: 0, far: 50, zoom: -10 }}
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
        // onPointerMove={onPointerMove}
      >
        <ShaderPlane targetMouse={targetMouse} />
      </Canvas>

      {/* Overlay UI */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      >
        hello world
      </div>
    </>
  );
}
