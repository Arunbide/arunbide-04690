import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Calendar, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleScheduleCall = () => {
    window.open('https://cal.com/bidearun/', '_blank');
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-mesh)' }}></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8">
            <Mail className="h-5 w-5" />
            <span className="font-bold">Get In Touch 📬</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-bold mb-8 leading-[1.05] tracking-tight">
            Let's Build Something<br />
            <span className="gradient-text">Amazing Together ✨</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Whether it's KMP, native Android, or AI integration, 
            let's create something exceptional 🚀
          </p>
        </div>
        
        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="text-center relative overflow-hidden pulse-glow">
            <div className="absolute inset-0 animated-gradient opacity-10"></div>
            
            <CardHeader className="pb-8 pt-12 px-6 relative z-10">
              <div className="mx-auto mb-8 p-8 rounded-full inline-flex animated-gradient">
                <Calendar className="h-20 w-20 text-white" />
              </div>
              <CardTitle className="text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="gradient-text">Schedule a Free Consultation</span>
              </CardTitle>
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project requirements, timeline, and how I can help bring your app to life with modern technologies.
              </p>
            </CardHeader>
            
            <CardContent className="pb-12 px-6 relative z-10">
              <div className="space-y-8">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
                  {["KMP Development", "Android Native", "Compose Multiplatform", "Firebase & AI"].map((skill) => (
                    <Badge key={skill} className="gradient-badge px-5 py-2.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={handleScheduleCall}
                  className="glow-button h-16 px-8 md:px-12 text-base md:text-lg mx-auto"
                >
                  <Calendar className="h-6 w-6 mr-2 md:mr-3" />
                  <span className="hidden sm:inline">Schedule Your Call Now</span>
                  <span className="sm:hidden">Book a Call</span>
                </Button>
                
                <p className="text-sm text-muted-foreground/70">
                  ⚡ Free 15-minute consultation • Available Mon-Fri 9 AM - 6 PM IST
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-scale-in">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="mb-6 mx-auto h-16 w-16 rounded-full flex items-center justify-center bg-foreground/5">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Me</h3>
              <p className="text-sm text-muted-foreground/70 mb-3">
                Drop me an email and I'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:Agbide7@gmail.com" 
                className="text-base text-foreground/70 hover:text-foreground underline-offset-4 hover:underline transition-colors inline-block"
              >
                Agbide7@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="mb-6 mx-auto h-16 w-16 rounded-full flex items-center justify-center bg-foreground/5">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Me</h3>
              <a 
                href="tel:+919322832034" 
                className="text-base text-foreground/70 hover:text-foreground underline-offset-4 hover:underline transition-colors inline-block mb-3"
              >
                +91 9322832034
              </a>
              <p className="text-sm text-muted-foreground/60">
                Available for calls during business hours<br />
                (9 AM - 6 PM IST)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center items-center mt-12">
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
            href="https://www.upwork.com/freelancers/arunbide"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium"
          >
            Upwork
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;