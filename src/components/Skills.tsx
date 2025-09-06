import { Scroll } from "lucide-react";
import { Badge } from "./ui/badge";
import ScrollReveal from "./custom/ScrollReveal";

export function Skills() {
  // const skillCategories = [
  //   {
  //     title: "Frontend",
  //     color: "cyan",
  //     skills: [
  //       "React",
  //       "TypeScript",
  //       "JavaScript (ES6+)",
  //       "Next.js",
  //       "HTML5",
  //       "CSS3",
  //       "Tailwind CSS",
  //       "Styled Components",
  //       "Redux",
  //       "Zustand",
  //     ],
  //   },
  //   {
  //     title: "Backend & Tools",
  //     color: "purple",
  //     skills: [
  //       "Node.js",
  //       "Express",
  //       "REST APIs",
  //       "GraphQL",
  //       "PostgreSQL",
  //       "MongoDB",
  //       "Docker",
  //       "AWS",
  //       "Git",
  //       "Webpack",
  //     ],
  //   },
  //   {
  //     title: "Testing & Quality",
  //     color: "blue",
  //     skills: [
  //       "Jest",
  //       "React Testing Library",
  //       "Cypress",
  //       "ESLint",
  //       "Prettier",
  //       "TypeScript",
  //       "Code Reviews",
  //       "Unit Testing",
  //       "Integration Testing",
  //     ],
  //   },
  //   {
  //     title: "Soft Skills",
  //     color: "pink",
  //     skills: [
  //       "Problem Solving",
  //       "Team Leadership",
  //       "Agile/Scrum",
  //       "Mentoring",
  //       "Technical Writing",
  //       "Code Architecture",
  //       "Performance Optimization",
  //     ],
  //   },
  // ];

  const skillCategories = [
    {
      title: "Frontend",
      color: "cyan",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "React Native",
        "Three.js",
        "HTML5",
        "CSS3 / SCSS",
        "Tailwind CSS",
        "Styled Components",
        "MUI",
        "Redux / Redux Toolkit",
        "Context API",
        "Zustand (familiar)",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Tools",
      color: "purple",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL (basic)",
        "MongoDB",
        "Postman",
        "Git / GitHub / GitLab",
        "Webpack / Vite / Rollup",
        "GitHub Actions (familiar)",
        "Docker (basic)",
        "AWS / GCP (basic awareness)",
      ],
    },
    {
      title: "Testing & Quality",
      color: "blue",
      skills: [
        "Jest",
        "React Testing Library (familiar)",
        "Unit Testing",
        "Integration Testing",
        "Clean Code Principles",
        "Code Reviews",
        "ESLint & Prettier",
      ],
    },
    {
      title: "Soft Skills",
      color: "pink",
      skills: [
        "Problem Solving",
        "Attention to Detail",
        "Agile / Scrum",
        "Team Collaboration",
        "Mentoring (peer support)",
        "Code Architecture",
        "Performance Optimization",
        "Curiosity & Continuous Learning",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getTextColor = (color: string) => {
    const colors = {
      cyan: "text-cyan-400",
      purple: "text-purple-400",
      blue: "text-blue-400",
      pink: "text-pink-400",
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Skills &{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Expertise
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
              A comprehensive toolkit built through 4+ years of hands-on
              development experience and continuous learning.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div
                  key={index}
                  className={`glass rounded-2xl p-8 hover:scale-102  transition-all duration-300 relative overflow-hidden group`}
                >
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-${category.color}-600 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <h3
                      className={`text-xl font-semibold ${getTextColor(
                        category.color
                      )} mb-6 flex items-center`}
                    >
                      <div
                        className={`w-3 h-3 bg-${category.color}-400 rounded-full mr-3 animate-pulse`}
                      ></div>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="glass-hover px-3 py-1 text-white/80 hover:text-white border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-white/70 mb-6">
                  Always learning and staying up-to-date with the latest
                  technologies
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "React 18",
                    "TypeScript 5",
                    "Next.js 14",
                    "Tailwind CSS v4",
                  ].map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold neon-glow hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
}
