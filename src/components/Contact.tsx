import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  const handleScheduleCall = () => {
    window.open('https://cal.com/bidearun/', '_blank');
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 framer-badge">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's Build Something<br />
            <span className="framer-text-gradient">Amazing Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Whether it's KMP, native Android, or AI integration, 
            let's create something exceptional.
          </p>
        </div>
        
        {/* Centered Contact Cards */}
        <div className="max-w-5xl mx-auto">
          {/* Main Call to Action Card */}
          <div className="mb-12">
            <Card className="framer-card text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
              
              <CardHeader className="pb-6 pt-8 md:pt-12 px-4 md:px-6 relative z-10">
                <div className="mx-auto mb-6 md:mb-8 p-6 md:p-8 rounded-3xl glass inline-flex bg-gradient-to-br from-primary/30 to-accent/30">
                  <Calendar className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto" />
                </div>
                <CardTitle className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                  <span className="framer-text-gradient">Schedule a Free Consultation</span>
                </CardTitle>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed px-2">
                  Let's discuss your project requirements, timeline, and how I can help bring your app to life with modern technologies.
                </p>
              </CardHeader>
              
              <CardContent className="pb-8 md:pb-12 px-4 md:px-6 relative z-10">
                <div className="space-y-6 md:space-y-8">
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-xl mx-auto">
                    {["KMP Development", "Android Native", "Compose Multiplatform", "Firebase & AI"].map((skill) => (
                      <div key={skill} className="framer-badge py-2 md:py-2.5 px-3 md:px-5 text-xs md:text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button with glow */}
                  <Button 
                    onClick={handleScheduleCall}
                    className="framer-button h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold text-white border-0 mx-auto w-full md:w-auto"
                  >
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                    <span className="whitespace-nowrap">Schedule Your Call Now</span>
                  </Button>
                  
                  <p className="text-xs md:text-sm text-muted-foreground/70 px-2">
                    ⚡ Free 15-minute consultation • Available Mon-Fri 9 AM - 6 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <Card className="framer-card group">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="p-4 rounded-2xl glass bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  Email Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                  Drop me an email and I'll get back to you within 24 hours.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-2xl glass glass-hover font-medium"
                  onClick={() => window.location.href = 'mailto:agbide7@gmail.com'}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  agbide7@gmail.com
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="framer-card group">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="p-4 rounded-2xl glass bg-gradient-to-br from-accent/20 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-7 w-7 text-accent" />
                  </div>
                  Call Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                  Available for calls during business hours (9 AM - 6 PM IST).
                </p>
                <Button 
                  variant="outline" 
                  className="w-full h-12 rounded-2xl glass glass-hover font-medium"
                  onClick={() => window.location.href = 'tel:+919322832034'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9322832034
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;