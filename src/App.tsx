import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BackgroundShader from "./components/BackgroundShader";
import * as THREE from "three";

let targetMouse = new THREE.Vector2(0.5, 0.5);

export default function App() {
  const onPointerMove = (e: React.PointerEvent) => {
    targetMouse.set(
      e.clientX / window.innerWidth,
      1.0 - e.clientY / window.innerHeight
    );
  };

  return (
    <>
      <div onPointerMove={onPointerMove} className="min-h-screen dark">
        {/* <BackgroundShader targetMouse={targetMouse} /> */}
        <Header />
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
