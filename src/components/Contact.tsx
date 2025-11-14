import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Calendar } from "lucide-react";

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
                <Calendar className="h-20 w-20 text-primary-foreground" />
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
                  className="glow-button h-16 px-12 text-lg mx-auto"
                >
                  <Calendar className="h-6 w-6 mr-3" />
                  <span className="whitespace-nowrap">Schedule Your Call Now</span>
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
          <Card className="text-center group hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="p-6 rounded-full bg-primary/20 inline-flex mb-6 group-hover:bg-primary/30 transition-colors">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Email Me Directly 📧
              </h3>
              <p className="text-muted-foreground/80 mb-6">
                For detailed inquiries and project discussions
              </p>
              <a 
                href="mailto:arunbisht0018@gmail.com"
                className="text-primary hover:text-primary/80 font-semibold text-lg link-gradient"
              >
                arunbisht0018@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center group hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="p-6 rounded-full bg-primary/20 inline-flex mb-6 group-hover:bg-primary/30 transition-colors">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Quick Response 💬
              </h3>
              <p className="text-muted-foreground/80 mb-6">
                Usually respond within 24 hours
              </p>
              <p className="text-primary font-semibold text-lg">
                Available on Email & Cal.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;