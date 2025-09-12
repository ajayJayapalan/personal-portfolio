import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollReveal from "./custom/ScrollReveal";
import digitalTwinImage from "../assets/digitaltwin.jpg";
import packageImage from "../assets/package.png";
import healthtechImage from "../assets/healthtech.avif";
import reelShowingImage from "../assets/reelshowingapp.png";

export function Projects() {
  const projects = [
    {
      title: "Digital Twin Viewers for 3D & 2D Data",
      description:
        "Developed interactive digital twin viewers for IFC, SVG, and 3D models in React, enabling real-time visualization and analysis of complex datasets.",
      image: digitalTwinImage,
      technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
      highlights: [
        "Built scalable viewers supporting multiple 3D/2D data formats",
        "Enhanced rendering performance with memoization and lazy loading",
        "Enabled real-time updates and interactive visualization for digital twin applications",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Reusable Viewer Component Library",
      description:
        "Built a React + TypeScript component library for 2D/3D viewers, bundled with Rollup to provide consistent, high-performance visualization tools across enterprise projects.",
      image: packageImage,
      technologies: ["React", "TypeScript", "Three.js", "Rollup", "SCSS"],
      highlights: [
        "Developed reusable viewer components supporting multiple data formats",
        "Improved developer productivity and reduced redundancy across applications",
        "Applied clean code and scalable architecture principles for maintainability",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Healthcare Booking Platform",
      description:
        "Launched a multi-city healthcare booking platform in React, enabling patients to find and book services quickly and easily.",
      image: healthtechImage,
      technologies: ["React", "JavaScript", "REST APIs", "MongoDB"],
      highlights: [
        "Delivered MVP in one week for fast time-to-market",
        "Built a JSON-driven system to generate dynamic surgery pages and routes, enabling easy addition of new variations with minimal development.",
        "Designed fully responsive UI for smooth patient experience",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Short Video Social App",
      description:
        "Built a TikTok-style short video app with scroll-based reel navigation and interactive UI for mobile platforms.",
      technologies: ["React Native", "Redux", "Animations"],
      image: reelShowingImage,
      highlights: [
        "Implemented smooth vertical reel navigation",
        "Created engaging UI components to boost interactivity",
        "Optimized performance for mobile responsiveness",
      ],
      gradient: "from-pink-500/20 to-purple-500/20",
    },
  ];

  return (
    <section id="projects" className="py-17 sm:py-20 relative">
      <div className="mx-auto px-2  xs:px-4  sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                Projects
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-center  text-white/70 mb-8 xs:mb-10 sm:mb-16 max-w-2xl mx-auto">
              A showcase of my work, built with modern technologies and best
              practices.{" "}
              <p>(Some projects are private and can’t be publicly shared.)</p>
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={0.2 * index}>
                <div
                  key={index}
                  className="glass rounded-3xl overflow-hidden  transition-all duration-500 group relative"
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}
                  ></div>

                  <div className="relative h-34 xs:h-44 sm:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover  transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Floating neon elements */}
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping [animation-delay:0ms] opacity-60`}
                    ></div>
                    <div
                      className={`absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping [animation-delay:500ms] opacity-60`}
                    ></div>
                  </div>

                  <div className="relative p-3 xs:p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="glass-hover px-3 py-1 text-xs text-white/80 border-white/20 bg-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-white/70 flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
                        onClick={() => window.open(project.codeUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div> */}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* <ScrollReveal>
            <div className="text-center mt-16">
              <div className="glass rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-white/70 mb-6">
                  Want to see more projects? Check out my GitHub for additional
                  work and contributions.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open("https://github.com/ajayJayapalan", "_blank")
                  }
                  className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View All Projects
                </Button>
              </div>
            </div>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
}
