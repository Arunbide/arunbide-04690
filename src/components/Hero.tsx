import { Button } from "@/components/ui/button";
import { Linkedin, ArrowRight } from "lucide-react";
import avatar from "@/assets/arun-avatar.png";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
          <img
            src={avatar}
            alt="Arun Bide"
            className="h-24 w-24 rounded-full object-cover border border-border flex-shrink-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Arun Bide</h1>
            <p className="text-muted-foreground">
              Android & Kotlin Multiplatform Developer · Building production-ready mobile apps.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 space-y-4 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              I build scalable, production-ready mobile apps for Android and iOS — with a focus on
              clean architecture, smooth UX, and modern tooling.
            </p>
            <p>
              My day-to-day stack is <span className="font-semibold text-foreground">Kotlin, Jetpack Compose,
              Flutter, and Kotlin Multiplatform</span>. I've shipped AI-powered features, integrated
              Firebase and REST APIs, and worked on cross-platform redesigns shared across Android,
              iOS, and Web.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Focus</p>
              <p className="font-medium">Android · KMP · Compose</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Available for</p>
              <p className="font-medium">Freelance & contract work</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Based in</p>
              <p className="font-medium">Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-md"
          >
            Get in touch <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-md"
          >
            View work
          </Button>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://x.com/bidearun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X
          </a>
          <a
            href="https://www.linkedin.com/in/arunbide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/arunbide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            Upwork
          </a>
          <a
            href="https://www.fiverr.com/arunbide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            Fiverr
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
