import { Button } from "@/components/ui/button";
import { Star, Github, Linkedin } from "lucide-react";
import avatar from "@/assets/arun-avatar.png";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Get to know Arun Bide</h1>

        {/* Profile header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
          <img
            src={avatar}
            alt="Arun Bide"
            className="h-24 w-24 rounded-full object-cover border border-border flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-xl font-bold">Arun Bide</h2>
              <span className="online-badge">Online</span>
            </div>
            <p className="text-muted-foreground mb-3">
              Professional App Development with modern tech and expert skills!
            </p>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
              <span className="font-bold ml-1">4.9</span>
              <span className="text-muted-foreground underline underline-offset-2">(8)</span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="mb-10 rounded-md border-foreground/80 font-semibold"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contact me
        </Button>

        {/* Info card */}
        <div className="border border-border rounded-lg p-6 md:p-8 mb-8">
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm Arun Bide, a mobile app developer focused on building scalable, production-ready
              apps for Android and iOS.
            </p>
            <p>
              I work primarily with <span className="font-semibold text-foreground">Kotlin, Jetpack Compose, Flutter, and Kotlin Multiplatform (KMP)</span>,
              with experience in clean architecture, API integrations, AI-powered features, and
              performance-focused development.
            </p>
            <p>
              I focus on building apps that are smooth, reliable, maintainable, and ready for real
              users — whether you're improving an existing product or building from scratch.
            </p>
          </div>
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
            href="https://www.fiverr.com/arunbide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            Fiverr
          </a>
          <a
            href="https://www.upwork.com/freelancers/arunbide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:border-foreground/40 transition-colors text-sm font-medium"
          >
            Upwork
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
