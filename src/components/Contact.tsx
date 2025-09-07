import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./custom/ScrollReveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      value: "Kerala, India",
      href: "#",
      description: "Available in Dubai",
      gradient: "from-pink-500/20 to-cyan-500/20",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section id="contact" className="py-17 sm:py-20 relative">
      <div className="container mx-auto px-2  xs:px-4  sm:px-6">
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
                      className="glass-hover cursor-pointer rounded-2xl p-3 sm:p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
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
                          <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform">
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
                      Full-time React Developer positions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse delay-300"></div>
                      Freelance/Contract projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse delay-700"></div>
                      Technical consulting
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse delay-1000"></div>
                      Open source collaborations
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal>
              <div className="glass rounded-3xl p-4 xs:p-6 sm:p-8 relative overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-sm sm:text-base text-white/70">
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        rows={6}
                        className="glass neon-border text-white placeholder:text-white/50 focus:border-cyan-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
