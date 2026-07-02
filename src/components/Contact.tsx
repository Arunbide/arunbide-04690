import { Button } from "@/components/ui/button";
import { Calendar, Github, Linkedin } from "lucide-react";

const Contact = () => {
    <section id="contact" className="py-14 sm:py-20 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Let's work together</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
          Whether it's Kotlin Multiplatform, native Android, or AI integration — I'd love to hear
          what you're building.
        </p>

        {/* Hire on Upwork */}
        <div className="border border-border rounded-lg p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Hire on Upwork</h3>
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

          <div className="flex items-center gap-3 mb-3">
            <Button onClick={() => window.open("https://www.upwork.com/freelancers/arunbide", "_blank")} className="rounded-md">
              <Calendar className="h-4 w-4 mr-2" /> Hire on Upwork
            </Button>
            <span className="text-sm font-semibold text-foreground">$30/hour</span>
          </div>

          <p className="text-xs text-muted-foreground">
            Fixed-price projects also available · Mon–Fri 9 AM – 6 PM IST
          </p>
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
        </div>

        <div className="border-t border-border pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Arun Bide. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
