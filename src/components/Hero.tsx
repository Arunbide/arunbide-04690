import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 framer-badge mb-8 animate-fade-in">
              <span className="text-primary">✨</span>
              <span>Android & KMP Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              Building Modern Apps<br />
              <span className="framer-text-gradient">for Startups & Businesses</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Specialized in <span className="text-primary font-semibold">Kotlin Multiplatform (KMP)</span> and native Android development.
              I help businesses build scalable, cross-platform mobile solutions with clean architecture and modern best practices.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-scale-in">
            <Badge variant="secondary" className="framer-badge px-5 py-2.5 text-sm font-medium">
              Kotlin Multiplatform
            </Badge>
            <Badge variant="secondary" className="framer-badge px-5 py-2.5 text-sm font-medium">
              Android Native
            </Badge>
            <Badge variant="secondary" className="framer-badge px-5 py-2.5 text-sm font-medium">
              Compose Multiplatform
            </Badge>
            <Badge variant="secondary" className="framer-badge px-5 py-2.5 text-sm font-medium">
              Firebase & AI
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="default" 
              size="lg" 
              className="framer-button h-14 px-10 text-base font-semibold shadow-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-base font-semibold rounded-2xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-spring"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;