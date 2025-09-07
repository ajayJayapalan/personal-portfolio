import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Menu,
  Home,
  User,
  Code,
  Briefcase,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import DynamicText from "./custom/DynamicText";
import AuroraTextEffect from "./custom/AuroraText";
import HRGlow from "./custom/HRGlow";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home, color: "cyan" },
    { id: "about", label: "About", icon: User, color: "purple" },
    { id: "skills", label: "Skills", icon: Code, color: "blue" },
    { id: "projects", label: "Projects", icon: Briefcase, color: "pink" },
    { id: "experience", label: "Experience", icon: Briefcase, color: "green" },
    { id: "contact", label: "Contact", icon: Phone, color: "yellow" },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex">
      <div className="fixed inset-0 bg-gradient-to-r from-black/80 from-30% to-transparent to-100% "></div>

      <motion.nav className="fixed right-4 top-0 h-full w-20 z-50 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  delay: 1 + index * 0.08, // Stagger delay: starts at 3.5s, then +0.15s for each item
                  // ease: [0.25, 0.4, 0.25, 1], // Smooth cubic-bezier easing
                  ease: "easeOut",
                }}
                onClick={() => scrollToSection(item.id)}
                className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }} // Optional: slight scale on hover
                whileTap={{ scale: 0.95 }} // Optional: slight scale on click
              >
                <div
                  className={`w-2 h-8 bg-gradient-to-b ${
                    item.color === "cyan"
                      ? "from-cyan-400"
                      : item.color === "purple"
                      ? "from-purple-400"
                      : item.color === "blue"
                      ? "from-blue-400"
                      : item.color === "pink"
                      ? "from-pink-400"
                      : item.color === "green"
                      ? "from-green-400"
                      : "from-yellow-400"
                  } to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <span className="absolute bg-gradient-to-l from-black/50 to-transparent right-12 top-1/2 tracking-widest -translate-y-1/2 text-sm text-white px-2 py-1 pl-8 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 lg:ml-20 xl:ml-24 min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 ">
          <div className="max-w-6xl mx-auto">
            {/* Main Name Display */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-left mb-12 md:mb-16 pt-20 lg:pt-0 cursor-default"
            >
              <motion.h1
                className="text-9xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 md:mb-8 tracking-tight "
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.span
                  className="block text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 via-blue-400 via-indigo-400 to-purple-400 bg-clip-text"
                  // animate={{
                  //   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  // }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  // style={{
                  //   backgroundSize: "300% 300%",
                  //   filter:
                  //     "drop-shadow(0 0 35px rgba(0,255,255,0.35)) drop-shadow(0 0 25px rgba(150,100,255,0.3))",
                  // }}
                >
                  {/* Ajay */}
                  <AuroraTextEffect />
                </motion.span>

                <motion.span
                  className="block text-white/90 text-8xl "
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Jayapalan.
                  {/* <AuroraTextEffect /> */}
                </motion.span>
              </motion.h1>
              <HRGlow />
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-xl md:text-2xl text-white/70 font-light tracking-wide"
              >
                <DynamicText />
                {/* Senior React Developer. */}
              </motion.p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row items-center justify-left gap-6 mb-12 md:mb-16"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-light tracking-widest px-8 md:px-10 py-3 md:py-4 neon-glow transition-all duration-300 border-0 rounded-full group text-sm md:text-base"
              >
                Explore Work
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links - Hidden on Mobile (available in mobile menu) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="hidden md:flex items-center justify-left space-x-8"
            >
              <a
                href="https://github.com/ajayJayapalan"
                className="glass rounded-full p-4 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] group hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ajay-jayapalan-b4364a1b5/"
                className="glass rounded-full p-4 text-white/70 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ajai.jayapalan@example.com"
                className="glass rounded-full p-4 text-white/70 hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] group hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white/50 hover:text-cyan-400 transition-all duration-300 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2 group-hover:text-cyan-400">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

type Props = {
  text: string;
};

function GlowingDivider({
  duration = 1.5,
  delay = 1.2,
  maxWidth = "max-w-md",
  glowColor = "rgba(34,211,238,1)",
  rightExtend = "220%",
}) {
  return (
    <div
      className={`relative ${maxWidth} mb-8 ml-0 mr-auto`}
      style={{ height: 24 /* gives room for the glow vertically */ }}
      aria-hidden="true"
    >
      {/* Big soft glow that extends to the right */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0 pointer-events-none"
        style={{
          width: rightExtend,
          height: 32,
          filter: "blur(28px)",
          opacity: 0.55,
          transformOrigin: "left center",
          // gradient that is stronger in the center-left and fades rightwards
          background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0) 5%, ${glowColor} 15%, ${glowColor} 45%, rgba(255,255,255,0) 100%)`,
          // let it overflow visually to the right
          right: "auto",
        }}
      />

      {/* Narrower sharper glow directly under the line (subtle halo) */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 pointer-events-none"
        style={{
          width: "120%",
          height: 8,
          filter: "blur(10px)",
          opacity: 0.85,
          background: `linear-gradient(90deg, transparent 0%, ${glowColor} 20%, ${glowColor} 80%, transparent 100%)`,
        }}
      />

      {/* The actual thin animated divider (on top) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className="relative z-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{
          // keep the visible line crisp and slightly brighter than the glow
          boxShadow: `0 0 6px 1px rgba(0,0,0,0)`,
        }}
      />

      {/* small animated shimmer that travels from left to right (optional) */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 pointer-events-none"
        style={{
          width: "28%",
          height: 2,
          marginLeft: "-2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
          filter: "blur(6px)",
          opacity: 0.75,
          animation: "shimmer 2.4s linear infinite",
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-8%); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translateX(110%); opacity: 0.6; }
          100% { transform: translateX(220%); opacity: 0; }
        }

        /* Responsive tweak if the container is small */
        @media (max-width: 420px) {
          .${maxWidth} { height: 18px; }
        }
      `}</style>
    </div>
  );
}
