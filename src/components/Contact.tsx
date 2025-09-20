import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./custom/ScrollReveal";
import SendMessage from "./custom/SendMessage";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ajai.jayapalan@gmail.com",
      href: "mailto:ajai.jayapalan@gmail.com",
      description: "Drop me a line anytime",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/ajay-jayapalan",
      href: "https://www.linkedin.com/in/ajay-jayapalan-b4364a1b5/",
      description: "Let's connect professionally",
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/ajayJayapalan",
      href: "https://github.com/ajayJayapalan",
      description: "Check out my code",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
      description: "Open to opportunities",
      gradient: "from-pink-500/20 to-cyan-500/20",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section id="contact" className="py-17 sm:py-20 relative">
      <div className=" mx-auto px-2  xs:px-4  sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Let's Work{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Together
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-center text-white/70 mb-8 xs:mb-10 sm:mb-16 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities,
              interesting projects, or just having a chat about technology and
              development.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal>
                <div className="glass rounded-2xl p-4  xs:p-6  sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-6 flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                    Get In Touch
                  </h3>
                  <p className="text-sm sm:text-lg text-white/80 mb-2 sm:mb-8 leading-relaxed">
                    Whether you're looking to hire, collaborate on a project, or
                    just want to say hello, I'd love to hear from you. I
                    typically respond within 24 hours.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {contactLinks.map((link, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <div
                      key={index}
                      className="glass-hover cursor-pointer rounded-2xl p-3 sm:p-6  transition-all duration-300 group relative overflow-hidden"
                      onClick={() =>
                        link.href !== "#" && window.open(link.href, "_blank")
                      }
                    >
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex items-center space-x-4">
                          <div className="glass rounded-full p-3  transition-transform">
                            <link.icon
                              className={`h-6 w-6 ${link.iconColor}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">
                              {link.label}
                            </h4>
                            <p className="text-sm text-white/60 mb-1">
                              {link.description}
                            </p>
                            <p
                              className={`text-sm font-medium ${link.iconColor}`}
                            >
                              {link.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="glass rounded-2xl p-4 xs:p-6 neon-glow-purple">
                  <h4 className="font-semibold text-purple-400 mb-4">
                    Currently Available For:
                  </h4>
                  <ul className="space-y-3 text-white/70 text-sm sm:text-base">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      Full-time React/Node Developer positions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse delay-300"></div>
                      Freelance/Contract projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse delay-700"></div>
                      Technical consulting
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <SendMessage />
          </div>
        </div>
      </div>
    </section>
  );
}
