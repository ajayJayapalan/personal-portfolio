import ScrollReveal from "./custom/ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import developerImage from "../assets/ajay-jayapalan-software-engineer.jpg";

export function About() {
  return (
    <section id="about" className="py-17 sm:py-20 relative">
      <div className="mx-auto px-2  xs:px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 xs:mb-10 sm:mb-16">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Me
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="glass rounded-3xl p-4 xs:p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    Hi, I’m Ajay 👋 — a Software Engineer with 4+ years of
                    experience building modern, scalable web applications. I
                    thrive on solving tough problems and turning them into
                    smooth, user-friendly experiences that people actually
                    enjoy. With a Computer Science background and projects
                    ranging from startups to enterprise platforms, I’ve helped
                    create products trusted by thousands of users.
                  </p>

                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    I specialize in building applications that deal with heavy
                    logic— whether it’s dynamic 3D viewers, complex data
                    handling, or performance optimization. Writing clean,
                    maintainable code that scales is my way of making sure the
                    experience stays simple, no matter how complex things get
                    under the hood.
                  </p>

                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    Outside of code, I explore 3D with Three.js, sketch
                    realistic drawings, and dive into digital illustration. That
                    creative side keeps me detail-focused, curious, and always
                    looking for new ways to connect design with technology.
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3 sm:pt-6">
                    <div className="glass rounded-xl p-3 sm:p-4">
                      <h3 className="font-semibold text-cyan-400 mb-1 sm:mb-2">
                        Based in
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        Kerala, India
                      </p>
                    </div>
                    <div className="glass rounded-xl p-3 sm:p-4">
                      <h3 className="font-semibold text-cyan-400 mb-1 sm:mb-2">
                        Experience
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        4+ Years
                      </p>
                    </div>
                    <div className="glass rounded-xl p-3 sm:p-4">
                      <h3 className="font-semibold text-cyan-400 mb-1 sm:mb-2">
                        Focus
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        Frontend & Full-Stack
                      </p>
                    </div>
                    <div className="glass rounded-xl p-3 sm:p-4 neon-glow">
                      <h3 className="font-semibold text-cyan-400 mb-1 sm:mb-2">
                        Available
                      </h3>
                      <p className="text-cyan-300 font-medium text-sm sm:text-base">
                        Open to Opportunities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center mt-4 sm:mt-8 md:mt-0">
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                    <div className="w-full h-full rounded-3xl overflow-hidden glass neon-glow">
                      <ImageWithFallback
                        src={developerImage}
                        alt="Ajay Jayapalan - React Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating neon elements */}
                    <div className="absolute -top-6 -right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-cyan-500/20 to-cyan-500/35 rounded-2xl blur-xl  animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-blue-500/20 to-pink-500/35 rounded-2xl blur-xl animate-pulse [animation-delay:1000ms]"></div>
                    <div className="absolute top-1/2 -right-3 sm:-right-4 w-3 sm:w-4 h-3 sm:h-4 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 -left-3 sm:-left-4 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-purple-400 rounded-full animate-ping [animation-delay:500ms]"></div>
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
