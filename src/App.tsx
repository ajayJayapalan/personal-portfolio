import FrostedEffect from "./components/FrostedEffect";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BackgroundShader from "./components/BackgroundShader";
import AvailableMarquee from "./components/custom/AvailableMarquee";
import * as THREE from "three";
import { useRef, useState } from "react";
import CursorFollower from "./components/custom/CursorFollower";

let targetMouse = new THREE.Vector2(0.5, 0.5);

export default function App() {
  const targetMouseRef = useRef(targetMouse);

  const onPointerMove = (e: React.PointerEvent) => {
    targetMouseRef.current.set(
      e.clientX / window.innerWidth,
      1.0 - e.clientY / window.innerHeight
    );
  };

  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <div onPointerMove={onPointerMove} className="min-h-screen dark">
        <CursorFollower />
        <BackgroundShader
          isLight={isLight}
          targetMouse={targetMouseRef.current}
        />
        {/* <Header isLight={isLight} setIsLight={setIsLight} /> */}
        {/* <AvailableMarquee /> */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
