import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleScheduleCall = () => window.open("https://cal.com/bidearun/", "_blank");

  return (
    <section id="contact" className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's work together</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Whether it's Kotlin Multiplatform, native Android, or AI integration — I'd love to hear
          what you're building.
        </p>

        {/* Schedule card */}
        <div className="border border-border rounded-lg p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Schedule a free consultation</h3>
              <p className="text-sm text-muted-foreground">
                Discuss your project requirements, timeline, and how I can help bring your app to
                life.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-5">
            <span>Kotlin Multiplatform</span>
            <span>·</span>
            <span>Android Native</span>
            <span>·</span>
            <span>Compose Multiplatform</span>
            <span>·</span>
            <span>Firebase & AI</span>
          </div>

          <Button onClick={handleScheduleCall} className="rounded-md">
            <Calendar className="h-4 w-4 mr-2" /> Book a 15-min call
          </Button>

          <p className="text-xs text-muted-foreground mt-3">
            Free 15-minute consultation · Mon–Fri 9 AM – 6 PM IST
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4" />
              <span className="font-bold">Email</span>
            </div>
            <a
              href="mailto:Agbide7@gmail.com"
              className="text-sm text-foreground/80 hover:text-foreground underline underline-offset-2"
            >
              Agbide7@gmail.com
            </a>
            <p className="text-xs text-muted-foreground mt-2">Replies within 24 hours.</p>
          </div>

          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span className="font-bold">Phone</span>
            </div>
            <a
              href="tel:+919322832034"
              className="text-sm text-foreground/80 hover:text-foreground underline underline-offset-2"
            >
              +91 9322832034
            </a>
            <p className="text-xs text-muted-foreground mt-2">Mon–Fri, 9 AM – 6 PM IST.</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a href="https://github.com/arunbide" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/arunbide" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://www.upwork.com/freelancers/arunbide" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium">
            Upwork
          </a>
          <a href="https://www.fiverr.com/arunbide" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium">
            Fiverr
          </a>
        </div>

        <div className="border-t border-border pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Arun Bide. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
