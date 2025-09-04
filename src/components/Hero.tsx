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

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const navigationItems = [
    { id: "hero", label: "Home", icon: Home, color: "cyan" },
    { id: "about", label: "About", icon: User, color: "cyan" },
    { id: "skills", label: "Skills", icon: Code, color: "purple" },
    { id: "projects", label: "Projects", icon: Briefcase, color: "blue" },
    { id: "experience", label: "Experience", icon: Briefcase, color: "pink" },
    { id: "contact", label: "Contact", icon: Phone, color: "green" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex">
      <div className="fixed inset-0 bg-gradient-to-r from-black/80 from-30% to-transparent to-100%"></div>

      {/* Mobile Menu Button */}
      <div className="fixed top-6 left-6 z-50 lg:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="glass p-3 rounded-xl hover:neon-glow transition-all duration-300"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-80 glass border-r border-white/10 bg-black/20 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-6 mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  Alex Chen
                </h2>
                <p className="text-sm text-white/60 mb-4">
                  Senior React Developer
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>

              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center space-x-4 p-4 rounded-xl glass-hover transition-all duration-300 hover:neon-glow text-left"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${
                        item.color === "cyan"
                          ? "from-cyan-500/20 to-cyan-600/20"
                          : item.color === "purple"
                          ? "from-purple-500/20 to-purple-600/20"
                          : item.color === "blue"
                          ? "from-blue-500/20 to-blue-600/20"
                          : item.color === "pink"
                          ? "from-pink-500/20 to-pink-600/20"
                          : "from-green-500/20 to-green-600/20"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          item.color === "cyan"
                            ? "text-cyan-400"
                            : item.color === "purple"
                            ? "text-purple-400"
                            : item.color === "blue"
                            ? "text-blue-400"
                            : item.color === "pink"
                            ? "text-pink-400"
                            : "text-green-400"
                        }`}
                      />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}

              {/* Social Links in Mobile Menu */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-white/60 mb-4 text-center">
                  Connect with me
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com"
                    className="p-3 rounded-xl glass-hover text-white/70 hover:text-cyan-400 transition-all duration-300 hover:neon-glow"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-3 rounded-xl glass-hover text-white/70 hover:text-blue-400 transition-all duration-300 hover:neon-glow"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:alex@example.com"
                    className="p-3 rounded-xl glass-hover text-white/70 hover:text-purple-400 transition-all duration-300 hover:neon-glow"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Left Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex fixed left-0 top-0 h-full w-20 lg:w-24 z-50 glass-hover flex-col items-center justify-center space-y-8"
      >
        <div className="flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection("about")}
            className="group relative p-3 rounded-xl glass-hover transition-all duration-300 hover:neon-glow"
            title="About"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              About
            </span>
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="group relative p-3 rounded-xl glass-hover transition-all duration-300 hover:neon-glow"
            title="Skills"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Skills
            </span>
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group relative p-3 rounded-xl glass-hover transition-all duration-300 hover:neon-glow"
            title="Projects"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Projects
            </span>
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="group relative p-3 rounded-xl glass-hover transition-all duration-300 hover:neon-glow"
            title="Experience"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-pink-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Experience
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative p-3 rounded-xl glass-hover transition-all duration-300 hover:neon-glow"
            title="Contact"
          >
            <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Contact
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 lg:ml-20 xl:ml-24 min-h-screen flex items-center justify-center relative">
        {/* Animated background elements */}
        {/* <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          ></motion.div>
        </div> */}

        <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 ">
          <div className="max-w-6xl mx-auto">
            {/* Main Name Display */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-left mb-12 md:mb-16 pt-20 lg:pt-0"
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
                  className="block text-white/90 text-8xl"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Jayapalan.
                  {/* <AuroraTextEffect /> */}
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-md mt-3 mb-5 ml-0 mr-auto"
              ></motion.div>

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
                href="https://github.com"
                className="glass rounded-full p-4 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] group hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="glass rounded-full p-4 text-white/70 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:alex@example.com"
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
            <ChevronDown className="h-6 w-6" />
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
