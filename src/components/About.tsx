import ScrollReveal from "./custom/ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Me
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    Hi, I’m Ajay 👋 — a React developer with 4+ years of
                    experience building modern, scalable web applications. I
                    thrive on solving tough problems and turning them into
                    smooth, user-friendly experiences that people actually
                    enjoy. With a Computer Science background and projects
                    ranging from startups to enterprise platforms, I’ve helped
                    create products trusted by thousands of users.
                  </p>

                  <p className="text-lg text-white/80 leading-relaxed">
                    I specialize in building applications that deal with heavy
                    logic—whether it’s dynamic 3D viewers, complex data
                    handling, or performance optimization. Writing clean,
                    maintainable code that scales is my way of making sure the
                    experience stays simple, no matter how complex things get
                    under the hood.
                  </p>

                  <p className="text-lg text-white/80 leading-relaxed">
                    Outside of code, I explore 3D with Three.js, sketch
                    realistic drawings, and dive into digital illustration. That
                    creative side keeps me detail-focused, curious, and always
                    looking for new ways to connect design with technology.
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="glass rounded-xl p-4">
                      <h3 className="font-semibold text-cyan-400 mb-2">
                        Based in
                      </h3>
                      <p className="text-white/70">Kerala, India</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <h3 className="font-semibold text-cyan-400 mb-2">
                        Experience
                      </h3>
                      <p className="text-white/70">4+ Years</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <h3 className="font-semibold text-cyan-400 mb-2">
                        Focus
                      </h3>
                      <p className="text-white/70">Frontend & Full-Stack</p>
                    </div>
                    <div className="glass rounded-xl p-4 neon-glow">
                      <h3 className="font-semibold text-cyan-400 mb-2">
                        Available
                      </h3>
                      <p className="text-cyan-300 font-medium">
                        Open to Opportunities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl overflow-hidden glass neon-glow">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4NDY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Ajay Jayapalan - React Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating neon elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 -right-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
