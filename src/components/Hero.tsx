import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Github, Linkedin } from "lucide-react";
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-40 relative">
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <div className="animate-fade-in">
          <div className="mb-12">
            {/* Main Heading with Emoji */}
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold mb-10 leading-[1.05] tracking-tight">
              Heyy, I'm <span className="inline-block">Arun Bide</span> <span className="inline-block text-7xl md:text-9xl">👋</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-16 max-w-3xl mx-auto leading-relaxed">
              Specialized in <span className="text-foreground font-semibold">Kotlin Multiplatform (KMP)</span> and native Android development. 
              I help businesses build scalable, cross-platform mobile solutions with clean architecture and modern best practices.
            </p>
          </div>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground px-5 py-2.5 text-sm rounded-full">
              <Sparkles className="h-4 w-4 mr-2" />
              Kotlin Multiplatform
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-5 py-2.5 text-sm rounded-full">
              Android Native
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-5 py-2.5 text-sm rounded-full">
              Compose Multiplatform
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-5 py-2.5 text-sm rounded-full">
              Firebase & AI
            </Badge>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <Button 
              className="h-14 px-10 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-lg rounded-full"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center items-center mb-32">
            <a 
              href="https://github.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.fiverr.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium"
            >
              Fiverr
            </a>
            <a 
              href="https://www.upwork.com/freelancers/arunbide"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium"
            >
              Upwork
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;