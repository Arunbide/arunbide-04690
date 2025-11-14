import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-40 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <div className="animate-fade-in">
          <div className="mb-12">
            {/* Greeting with Emoji */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="text-5xl animate-float">👋</span>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Heyy, I'm <span className="gradient-text">Arun Bide</span>
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold mb-10 leading-[1.05] tracking-tight">
              <span className="neon-text">UX by Sunlight ☀️</span><br />
              <span className="gradient-text">Framer by Moonlight 🌙</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-16 max-w-3xl mx-auto leading-relaxed">
              Specialized in <span className="gradient-text font-semibold">Kotlin Multiplatform (KMP)</span> and native Android development.
              I help businesses build scalable, cross-platform mobile solutions that shine ✨
            </p>
          </div>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-16 animate-scale-in">
            <Badge className="gradient-badge px-5 py-2.5 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Kotlin Multiplatform
            </Badge>
            <Badge className="gradient-badge px-5 py-2.5 text-sm">
              Android Native
            </Badge>
            <Badge className="gradient-badge px-5 py-2.5 text-sm">
              Compose Multiplatform
            </Badge>
            <Badge className="gradient-badge px-5 py-2.5 text-sm">
              Firebase & AI
            </Badge>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up mb-20">
            <Button 
              className="glow-button h-14 px-10 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 animate-pulse">
            <p className="text-sm text-muted-foreground/70 font-medium">Scroll to explore</p>
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;