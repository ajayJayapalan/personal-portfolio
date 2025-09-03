import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main glass panel */}
          <div className="glass rounded-3xl p-12 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                Alex Chen
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white/80 mb-8 font-normal">
              Senior React Developer with 4+ years of experience crafting modern
              web applications
            </h2>

            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              I specialize in building scalable, performant React applications
              with TypeScript and Node.js. Passionate about clean code, user
              experience, and modern development practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold px-8 py-3 neon-glow transition-all duration-300 border-0"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 px-8 py-3 transition-all duration-300 bg-transparent"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a
              href="https://github.com"
              className="glass glass-hover rounded-full p-4 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              className="glass glass-hover rounded-full p-4 text-white/70 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="glass glass-hover rounded-full p-4 text-white/70 hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
