import ScrollReveal from "./custom/ScrollReveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Experience() {
  const experiences = [
    {
      title: "Senior React Developer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading frontend development for a SaaS platform serving 50K+ users. Architecting and implementing scalable React applications with modern tooling.",
      achievements: [
        "Led migration from legacy codebase to React 18 + TypeScript, improving performance by 40%",
        "Mentored 3 junior developers and established code review best practices",
        "Implemented automated testing suite, increasing code coverage from 45% to 90%",
        "Built reusable component library used across 5+ product teams",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "AWS",
        "Docker",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects ranging from e-commerce platforms to corporate websites. Collaborated with designers and backend teams.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved website performance scores by average of 35% across all projects",
        "Implemented responsive designs supporting all major browsers and devices",
        "Established development workflow reducing deployment time by 50%",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Sass",
        "Webpack",
        "REST APIs",
        "Firebase",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Junior React Developer",
      company: "StartupHub",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      type: "Full-time",
      description:
        "Started my professional journey building user interfaces for various startup projects. Gained experience in agile development and cross-functional collaboration.",
      achievements: [
        "Built 10+ React components following company design system",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Participated in daily standups and sprint planning sessions",
        "Contributed to open source projects and internal tooling",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Jira", "Figma"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Frontend Developer Intern",
      company: "WebDev Agency",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      type: "Internship",
      description:
        "Summer internship focused on learning React fundamentals and contributing to client projects under senior developer mentorship.",
      achievements: [
        "Completed 3-month intensive React bootcamp with 95% success rate",
        "Built responsive landing pages for 5+ client projects",
        "Learned version control, testing, and deployment best practices",
        "Received full-time offer based on strong performance",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "Git",
      ],
      gradient: "from-pink-500/20 to-purple-500/20",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Professional{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Experience
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
              4+ years of progressive growth in frontend development, from
              intern to senior developer, with a track record of delivering
              impactful solutions.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Glowing timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 shadow-[0_0_10px_rgba(0,255,255,0.3)]"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0 group">
                {/* Glowing timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse z-10"></div>

                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
                  }`}
                >
                  <ScrollReveal>
                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-400 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-white/60 text-sm">
                              {exp.location}
                            </p>
                          </div>
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-sm text-white/70">
                              {exp.period}
                            </p>
                            <Badge className="glass-hover px-3 py-1 text-xs text-cyan-400 border-cyan-400/30 bg-cyan-400/10 mt-1">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-white/80 mb-6 leading-relaxed">
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
                                className="text-sm text-white/70 flex items-start"
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
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <div className="text-center mt-16">
              <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
                <p className="text-white/70 mb-6">
                  Looking for my full resume or want to discuss opportunities?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
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
                    className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
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
