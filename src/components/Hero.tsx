import { Button } from "@/components/ui/button";
import { Linkedin, ArrowRight } from "lucide-react";
import avatar from "@/assets/arun-avatar.png";

const socialBase =
  "group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 text-sm font-medium min-h-10";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-14 px-5 sm:pt-28 sm:pb-16 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Profile header */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5 sm:gap-6 mb-8 sm:mb-10 animate-fade-in">
          <div className="relative w-fit flex-shrink-0 self-start group">
            <span className="absolute -inset-1 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={avatar}
              alt="Arun Bide"
              className="relative h-24 w-24 sm:h-24 sm:w-24 rounded-full object-cover border border-border transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background animate-pulse" />
          </div>
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Arun Bide</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Android & Kotlin Multiplatform Developer · Building production-ready mobile apps.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 space-y-4 text-foreground/80 leading-relaxed animate-fade-in" style={{ animationDelay: "60ms", animationFillMode: "backwards" }}>
            <p className="text-lg sm:text-xl text-balance">
              I build scalable, production-ready mobile apps for Android and iOS — with a focus on
              clean architecture, smooth UX, and modern tooling.
            </p>
            <p className="text-base sm:text-lg">
              My day-to-day stack is <span className="font-semibold text-foreground">Kotlin, Jetpack Compose,
              Kotlin Multiplatform, and Flutter</span>. I've shipped AI-powered features, integrated
              Firebase and REST APIs, and worked on cross-platform redesigns shared across Android,
              iOS, and Web.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 space-y-3 text-sm hover:border-foreground/40 hover:shadow-sm transition-all duration-300 animate-fade-in" style={{ animationDelay: "120ms", animationFillMode: "backwards" }}>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Focus</p>
              <p className="font-medium">Android · iOS · KMP · Compose</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Available for</p>
              <p className="font-medium inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Freelance
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Based in</p>
              <p className="font-medium">Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "180ms", animationFillMode: "backwards" }}>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-md group w-full sm:w-auto"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-md w-full sm:w-auto"
          >
            View work
          </Button>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center gap-3 animate-fade-in" style={{ animationDelay: "240ms", animationFillMode: "backwards" }}>
          <a href="https://x.com/bidearun" target="_blank" rel="noopener noreferrer" className={socialBase}>
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X
          </a>
          <a href="https://www.linkedin.com/in/arunbide" target="_blank" rel="noopener noreferrer" className={socialBase}>
            <Linkedin className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" /> LinkedIn
          </a>
          <a href="https://www.upwork.com/freelancers/arunbide" target="_blank" rel="noopener noreferrer" className={socialBase}>
            Upwork
          </a>
          <a href="https://www.fiverr.com/arunbide" target="_blank" rel="noopener noreferrer" className={socialBase}>
            Fiverr
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
