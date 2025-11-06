import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="glass relative py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 sm:mb-4">
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    Ajay
                  </span>
                  <span className="text-white"> Jayapalan</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  React Developer focused on building scalable applications and
                  seamless user experiences with modern web technologies.
                </p>
                <div className="flex justify-center md:justify-start space-x-6">
                  <a
                    href="https://github.com/ajayJayapalan"
                    className="glass rounded-full p-3 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5  transition-transform" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ajay-jayapalan-b4364a1b5/"
                    className="glass rounded-full p-3 text-white/70 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5  transition-transform" />
                  </a>
                  <a
                    href="mailto:ajayjayapalan.dev@gmail.com"
                    className="glass rounded-full p-3 text-white/70 hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] group"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5  transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-3 sm:mb-6 text-cyan-400 mb-3 sm:mb-6 flex items-center justify-center md:justify-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                  Quick Links
                </h4>
                <ul className="space-y-1 ">
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-white/70 text-sm sm:text-base  hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    >
                      About Me
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("skills")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-white/70  text-sm sm:text-base hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-white/70 text-sm sm:text-base hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("experience")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-white/70 text-sm sm:text-base hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    >
                      Experience
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-lg text-purple-400 mb-3 sm:mb-6 flex items-center justify-center md:justify-start">
                  <div className="w-2 h-2  bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  Get In Touch
                </h4>
                <div className="space-y-2 text-white/70 mb-6">
                  <p className="flex text-sm sm:text-base items-center justify-center md:justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-pink-400" />
                    Kerala, India
                  </p>
                  <p className="flex text-sm sm:text-base items-center justify-center md:justify-start">
                    <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                    ajayjayapalan.dev@gmail.com
                  </p>
                  <p className="flex text-sm sm:text-base items-center justify-center md:justify-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    Open to opportunities
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-gradient-to-r rounded-full from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/60 text-xs sm:text-sm">
                  © {currentYear} Ajay Jaypalan. All rights reserved.
                </p>
                <p className="text-white/60 text-xs sm:text-sm flex items-center">
                  Made with{" "}
                  <Heart className="h-4 w-4 text-red-400 mx-2 animate-pulse" />{" "}
                  using React
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
