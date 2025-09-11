import { useRef } from "react";
import ScrollReveal from "./custom/ScrollReveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      subtitle: "React JS, IoT, Digital Twin",
      company: "Toobler Technologies",
      location: "Infopark, Kochi, India",
      period: "July 2022 - Aug 2024",
      type: "Full-time",
      description:
        "Building scalable, high-performance frontend applications with React and TypeScript. Focused on reusable UI libraries, performance optimization, and visualization tools for complex data formats including 3D models.",
      achievements: [
        "Developed and maintained reusable React + TypeScript component libraries for enterprise apps",
        "Engineered dynamic viewers for IFC, SVG, and 3D models, improving visualization workflows",
        "Optimized performance with memoization, lazy loading, and tree shaking, boosting responsiveness by up to 60%",
        "Built a reusable UI package with Rollup to reduce duplication across projects",
        "Collaborated in Agile sprints with designers, backend developers, and product managers",
        "Implemented clean code principles, SOLID patterns, and scalable architecture practices",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Three.js",
        "Rollup",
        "Redux",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Python (tooling)",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Jr. Software Engineer",
      subtitle: "React JS, React Native",
      company: "Mykare Health Technologies",
      location: "KSUM, Kalamassery, India",
      period: "Sept 2021 - July 2022",
      type: "Full-time",
      description:
        "Contributed to healthcare web and mobile platforms using React and React Native. Designed scalable architectures and developed apps that improved booking, consultations, and provider workflows.",
      achievements: [
        "Built and launched a multi-city healthcare booking platform in just one week",
        "Developed the MyKare Praktice app in React Native, enabling providers to manage bookings",
        "Created real-time video consultation app using WebRTC with prescription support",
        "Designed scalable frontend architecture using JSON-driven configuration for dynamic page creation",
        "Built and integrated REST APIs with Express.js and MongoDB for seamless data flow",
        "Developed reusable React component libraries to improve consistency across apps",
      ],
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Redux",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "WebRTC",
        "Tailwind CSS",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const sectionRef = useRef(null);

  // scrollYProgress goes 0 -> 1 while `sectionRef` moves through the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // offset controls when progress starts/stops (explained below)
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" className="py-17 sm:py-20 relative">
      <div className=" mx-auto px-2  xs:px-4  sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Professional{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Experience
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-center text-white/70 mb-8 xs:mb-10 sm:mb-16 max-w-2xl mx-auto">
              4+ years of progressive growth in frontend development, from
              intern to senior developer, with a track record of delivering
              impactful solutions.
            </p>
          </ScrollReveal>

          <div ref={sectionRef} className="relative">
            {/* Glowing timeline line */}
            {/* <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 shadow-[0_0_10px_rgba(0,255,255,0.3)]"></div> */}
            <ScrollLine scrollYProgress={scrollYProgress} />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0 group">
                {/* Glowing timeline dot */}
                <ScrollReveal>
                  <div className="absolute -left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse z-10"></div>
                  {/* <ScrollLine /> */}

                  <div
                    className={`ml-8  md:ml-0 md:w-1/2  ${
                      index % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <div className=" before:bg-red-500/20">
                      <div className="glass  rounded-2xl p-3 xs:p-6 sm:p-8  transition-all duration-500 relative overflow-hidden">
                        {/* Gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}
                        ></div>

                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                                {exp.title}
                              </h3>
                              <h3 className="text-xs sm:text-sm font-light text-white/60 mb-1">
                                ~ {exp.subtitle}
                              </h3>
                            </div>
                            <div className="text-center  md:text-left mt-2 sm:mt-0">
                              <p className="text-sm text-white/70">
                                {exp.period}
                              </p>
                              <Badge className="glass-hover px-3 py-1 text-xs text-cyan-400 border-cyan-400/30 bg-cyan-400/10 mt-1">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex items-center text-white/70 mb-2 xs:mb-4 gap-2">
                            <p className=" text-cyan-400 font-medium">
                              {exp.company},
                            </p>
                            <p className="text-white/60 text-sm">
                              {exp.location}
                            </p>
                          </div>
                          <p className="text-white/80 text-sm sm:text-base mb-4 xs:mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-cyan-400 mb-3">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-xs sm:text-sm text-white/70 flex items-start"
                                >
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                className="glass-hover px-3 py-1 text-xs text-white/80 border-white/20 bg-white/10"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <div className="text-center mt-16">
              <div className="glass rounded-2xl p-4 xs:p-6 sm:p-8 max-w-lg mx-auto">
                <p className="text-white/70 mb-3 sm:mb-6">
                  Looking for my full resume or want to discuss opportunities?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                  >
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="glass-hover rounded-full neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ScrollLine({ scrollYProgress }) {
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute left-3 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px">
      <motion.div
        style={{ height }}
        className="w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 
                   shadow-[0_0_10px_rgba(0,255,255,0.3)]"
      />
    </div>
  );
}
