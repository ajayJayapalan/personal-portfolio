import { Button } from "./ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Home,
  User,
  Code,
  Briefcase,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
      {/* Desktop Right Navigation */}
      <motion.nav
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed right-4 top-0 h-full w-20 z-50 flex flex-col items-center justify-center space-y-4"
      >
        <div className="flex flex-col space-y-4">
          {navigationItems.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/25"
                title={item.label}
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
                      : "from-green-400"
                  } to-transparent rounded-full opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <span className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 mr-24 min-h-screen flex items-center justify-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          ></motion.div>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Name Display */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 md:mb-8 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.span
                  className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text drop-shadow-lg"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  ALEX
                </motion.span>
                <motion.span
                  className="block text-white/90"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  CHEN
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto max-w-md mb-8"
              ></motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-xl md:text-2xl text-white/70 font-light tracking-wide"
              >
                Senior React Developer
              </motion.p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-16"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold px-8 md:px-10 py-3 md:py-4 shadow-lg shadow-cyan-500/25 transition-all duration-300 border-0 rounded-full group text-sm md:text-base hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Explore Work
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links - Now visible on all screen sizes */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex items-center justify-center space-x-8"
            >
              <a
                href="https://github.com"
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group hover:scale-110 hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 text-white/70 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group hover:scale-110 hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 text-white/70 hover:text-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group hover:scale-110 hover:bg-white/20"
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
