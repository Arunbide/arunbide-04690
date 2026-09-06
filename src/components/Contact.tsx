import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const handleScheduleCall = () => window.open("https://cal.com/bidearun/", "_blank");

  return (
    <section id="contact" className="section-shell py-16 sm:py-24 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="eyebrow">Have a project in mind?</p>
        <h2 className="section-heading mb-4">Let's make it<br /><em>feel remarkable.</em></h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
          Whether it's Kotlin Multiplatform, native Android, or AI integration, I'd love to hear
          what you're building.
        </p>

        {/* Schedule card */}
        <div className="connect-panel rounded-[2rem] p-6 shadow-2xl md:p-10 mb-6">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
          <div className="flex items-start gap-4 mb-5">
            <div className="connect-icon h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="connect-kicker">Complimentary discovery call</p>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Let's talk through it.</h3>
              <p className="connect-muted text-sm max-w-xl">
                Discuss your project requirements, timeline, and how I can help bring your app to
                life.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs connect-muted mb-6">
            <span>Kotlin Multiplatform</span>
            <span>·</span>
            <span>Android Native</span>
            <span>·</span>
            <span>Compose Multiplatform</span>
            <span>·</span>
            <span>Firebase & AI</span>
          </div>

          <Button onClick={handleScheduleCall} className="connect-cta rounded-full px-5">
            <Calendar className="h-4 w-4 mr-2" /> Book a 15-min call
          </Button>

          <p className="text-xs connect-muted mt-3">
            Free 15-minute consultation · Mon–Fri 9 AM – 6 PM IST
          </p>
          </div>
          <div className="connect-ticket grid grid-cols-2 gap-3 rounded-2xl p-4 text-sm md:w-56">
            <div><p className="connect-kicker mb-1">Format</p><p className="font-semibold">Video call</p></div>
            <div><p className="connect-kicker mb-1">Length</p><p className="font-semibold">15 min</p></div>
            <div className="col-span-2 border-t pt-3"><span className="inline-flex items-center gap-2 text-xs font-medium"><i className="h-2 w-2 rounded-full bg-accent" />Usually replies within 24h</span></div>
          </div>
          </div>
        </div>

        {/* Contact channels */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            <a href="mailto:Agbide7@gmail.com" className="group flex min-h-[132px] items-start gap-4 p-5 text-left transition-colors hover:bg-muted/50 sm:p-6 md:border-r md:border-border">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background"><Mail className="h-4 w-4" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold leading-none">Email</span><ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                <p className="mt-2 truncate text-sm leading-none text-foreground/85">Agbide7@gmail.com</p>
                <p className="mt-3 text-xs leading-none text-muted-foreground">Replies within 24 hours.</p>
              </div>
            </a>
            <a href="tel:+919322832034" className="group flex min-h-[132px] items-start gap-4 border-t border-border p-5 text-left transition-colors hover:bg-muted/50 sm:p-6 md:border-l-0 md:border-t-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background"><Phone className="h-4 w-4" /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold leading-none">Phone</span><ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
                <p className="mt-2 text-sm leading-none text-foreground/85">+91 9322832034</p>
                <p className="mt-3 text-xs leading-none text-muted-foreground">Mon–Fri, 9 AM – 6 PM IST.</p>
              </div>
            </a>
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
