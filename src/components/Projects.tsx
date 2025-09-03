import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard built with React, TypeScript, and D3.js. Features real-time data visualization, custom charts, and responsive design.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4NDY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      demoUrl: "https://dashboard-demo.vercel.app",
      codeUrl: "https://github.com/alexchen/analytics-dashboard",
      highlights: [
        "Reduced data loading time by 60% with optimized queries",
        "Implemented real-time updates using WebSocket connections",
        "Built responsive design supporting mobile and desktop views"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with cart management, payment integration, and admin panel. Built with Next.js and Stripe integration.",
      image: "https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY4NzE4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "Prisma", "MongoDB"],
      demoUrl: "https://ecommerce-demo.vercel.app",
      codeUrl: "https://github.com/alexchen/ecommerce-platform",
      highlights: [
        "Integrated Stripe payment processing with 99.9% uptime",
        "Implemented advanced filtering and search functionality",
        "Built comprehensive admin dashboard for inventory management"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1651055693398-0d66969cf759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY3ODczNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "React DnD", "Material-UI"],
      demoUrl: "https://taskmanager-demo.vercel.app",
      codeUrl: "https://github.com/alexchen/task-manager",
      highlights: [
        "Implemented real-time collaboration for 100+ concurrent users",
        "Built intuitive drag-and-drop interface using React DnD",
        "Achieved 95% user satisfaction score in usability testing"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Mobile-First PWA",
      description: "Progressive Web App with offline capabilities, push notifications, and native-like experience. Optimized for mobile performance.",
      image: "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzU2ODAyNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "TypeScript", "PWA", "Service Workers", "IndexedDB", "Web Push"],
      demoUrl: "https://pwa-demo.vercel.app",
      codeUrl: "https://github.com/alexchen/mobile-pwa",
      highlights: [
        "Achieved 98/100 Lighthouse performance score",
        "Implemented offline-first architecture with data sync",
        "Reduced bundle size by 40% with code splitting and lazy loading"
      ],
      gradient: "from-pink-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with 
            cutting-edge technologies and best practices.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 group relative">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating neon elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000 opacity-60"></div>
                </div>
                
                <div className="relative p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="glass-hover px-3 py-1 text-xs text-white/80 border-white/20 bg-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-white/70 flex items-start">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-white/70 mb-6">
                Want to see more projects? Check out my GitHub for additional work and contributions.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/alexchen', '_blank')}
                className="glass-hover neon-border text-cyan-400 hover:text-cyan-300 bg-transparent"
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}