import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-40 gradient-hero relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <div className="animate-fade-in">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 framer-badge mb-12 animate-fade-in">
              <span>Android & KMP Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold mb-8 leading-[1.1] tracking-tight">
              Building Modern Apps<br />
              <span className="framer-text-gradient">for Startups & Businesses</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              Specialized in Kotlin Multiplatform (KMP) and native Android development.
              I help businesses build scalable, cross-platform mobile solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-16 animate-scale-in">
            <Badge variant="secondary" className="framer-badge px-4 py-2 text-sm">
              Kotlin Multiplatform
            </Badge>
            <Badge variant="secondary" className="framer-badge px-4 py-2 text-sm">
              Android Native
            </Badge>
            <Badge variant="secondary" className="framer-badge px-4 py-2 text-sm">
              Compose Multiplatform
            </Badge>
            <Badge variant="secondary" className="framer-badge px-4 py-2 text-sm">
              Firebase & AI
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="default" 
              size="lg" 
              className="framer-button h-12 px-8 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base rounded-xl border border-border hover:border-foreground/20 hover:bg-muted transition-smooth"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;