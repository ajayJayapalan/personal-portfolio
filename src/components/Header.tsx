import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            <span className="text-cyan-400">Alex</span> Chen
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
              Experience
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold neon-glow transition-all duration-300 border-0"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}