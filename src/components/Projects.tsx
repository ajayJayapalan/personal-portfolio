import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollReveal from "./custom/ScrollReveal";
import digitalTwinImage from "../assets/digitaltwin.jpg";
import packageImage from "../assets/package.png";
import healthtechImage from "../assets/healthtech.avif";
import reelShowingImage from "../assets/reelshowingapp.png";
import rcMarketImage from "../assets/rc-market.png";
import theWebMaverickImage from "../assets/thewebmaverick.png";

export function Projects() {
  const projects = [
    {
      title: "Digital Twin Viewers",
      description:
        "Created interactive viewers for IFC, SVG, and 3D models using React and TypeScript, enabling real-time visualization, analysis and seamless integration of complex model/data formats.",
      image: digitalTwinImage,
      technologies: [
        "React",
        "TypeScript",
        "Rematch Redux",
        "Three.js",
        "nats.io",
        "Tailwind CSS",
        "Unity Game Engine",
      ],
      highlights: [
        "Engineered support for multiple data formats (IFC, SVG, glTF/other 3D) with format-specific loaders and parsers",
        "Optimized rendering performance via memoization, lazy & incremental loading, level-of-detail (LOD), and geometry simplification techniques",
        "Implemented real-time updates and interactive visualization for digital twin applications, including sensor data overlays and dynamic state changes",
        "Handled large model size by employing progressive loading, visibility/occlusion culling, and cleanup of unused geometries/textures",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      demoUrl: "https://www.thingspine.com/",
    },
    {
      title: "RC Market",
      description:
        "Built a marketplace platform for posting and managing ads using Next.js and TypeScript, featuring dynamic filters, robust form validation, and responsive UI for smooth cross-device experience.",
      image: rcMarketImage,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tanstack Query",
        "Zustand",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
      ],
      highlights: [
        "Built ad posting and management workflows with form validation using React Hook Form and Zod, ensuring robust input handling and clean UX",
        "Integrated dynamic category, brand, and model dropdowns with Zustand for efficient global state management",
        "Implemented image upload, preview, and edit features with optimized client-side caching using Tanstack Query",
        "Created responsive UI components and filters with Tailwind CSS for smooth navigation and consistent visual hierarchy across devices",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      demoUrl: "https://rcmarketspace-user.lupinarylabs.xyz/",
    },
    {
      title: "The Web Maverick",
      description:
        "Built a collection of free micro-SaaS tools for web designers and developers, offering utilities like color theory generators, gradient builders, and CSS effect creators under a unified brand.",
      image: theWebMaverickImage,
      technologies: [
        "Next.js",
        "Shadcn UI",
        "Tailwind CSS",
        "Lucide-react",
        "Framer Motion",
      ],
      highlights: [
        "Designed modular Next.js architecture to host multiple micro-tools under a single scalable platform",
        "Developed CSS and color utilities including shade/tint generator, gradient builder, and box-shadow designer",
        "Implemented responsive, minimal UI using Shadcn UI and Tailwind for a cohesive design experience",
        "Optimized SEO and ad-ready metadata for organic traffic growth and monetization readiness",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      demoUrl: "https://www.thewebmaverick.com/",
    },
    {
      title: "Internal Reusable Viewer Component Library",
      description:
        "Created a private React + TypeScript package consisting of 2D/3D viewer components (SVG, IFC, glTF etc.), bundled via Rollup, for consistent, high-performance visualization across multiple enterprise applications.",
      image: packageImage,
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "d3.js",
        "WASM",
        "Web Workers",
        "Rollup",
        "Vite",
      ],
      highlights: [
        "Designed reusable viewer components that support a range of data formats (IFC, SVG, 3D glTF-like formats) to avoid duplication in downstream apps",
        "Improved developer productivity & code consistency by enabling multiple teams to use the same library instead of rewriting similar viewer logic",
        "Applied scalable architecture and clean-code practices: modular component boundaries, strong typing, themes/style isolation to ensure maintainability",
        "Optimized bundle size and load performance using Rollup for tree-shaking, code splitting, and lazy loading of heavy viewer internals",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Multi-City Healthcare Booking Platform",
      description:
        "Built a scalable healthcare booking app using React, enabling patients in multiple cities to quickly discover and schedule medical or surgical services.",
      image: healthtechImage,
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "SCSS",
        "Styled Components",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      highlights: [
        "Launched MVP in just **one week**, accelerating time-to-market and enabling early feedback loops",
        "Developed a JSON-driven content & routing engine to auto-generate surgery-specific pages, allowing new service variations to be added with minimal engineering effort",
        "Designed and implemented a fully responsive UI to deliver seamless patient experience across mobile, tablet, and desktop",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      demoUrl: "https://mykarehealth.com/plan-your-surgery",
    },
    {
      title: "Short Video Social App MVP",
      description:
        "Built a TikTok-style short video app with smooth scroll-based reel navigation, immersive interactive UI, and server-backed media handling for mobile platforms.",
      technologies: [
        "React Native",
        "Expo",
        "Redux",
        "Reanimated",
        "Node.js",
        "MongoDB",
        "Google Cloud Storage",
        "React Query / TanStack Query",
      ],
      image: reelShowingImage,
      highlights: [
        "Implemented smooth vertical reel navigation with optimized lists and touch-responsive UI components using Reanimated for fluid performance",
        "Integrated backend media handling: video upload, adaptive bitrate transcoding, cloud storage, and CDN delivery for low-latency streaming",
        "Optimized mobile performance with adaptive video quality, smart caching (React Query), lazy loading, and profiling to maintain stable frame rates on lower-end devices",
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

          <div className="grid lg:grid-cols-2 gap-8  ">
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

                    {project?.demoUrl ? (
                      <div className="flex gap-3 pt-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-3 pt-4">
                        <Button
                          size="sm"
                          disabled
                          className="bg-gradient-to-r from-gray-300 to-gray-400 text-black font-semibold cursor-not-allowed opacity-70 border-0"
                        >
                          <Lock className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="flex justify-end">
            <span
              role="button"
              aria-label="View more projects on GitHub"
              onClick={() =>
                window.open(
                  "https://github.com/ajayJayapalan?tab=repositories",
                  "_blank"
                )
              }
              className="inline-block text-sm p-5 m-5 text-white/75 underline decoration-1 underline-offset-2 italic tracking-wider cursor-pointer hover:text-white text-right"
            >
              see more..
            </span>
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
