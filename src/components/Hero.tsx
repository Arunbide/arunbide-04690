import { useState, type CSSProperties, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Linkedin, ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import avatar from "@/assets/arun-avatar.png";

const socialBase =
  "group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 hover:bg-secondary hover:border-foreground/25 hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium min-h-10";

const SocialLink = ({ href, label, hint, children }: { href: string; label: string; hint: string; children: ReactNode }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={socialBase}>
        {children}
      </a>
    </TooltipTrigger>
    <TooltipContent>{hint}</TooltipContent>
  </Tooltip>
);


const Hero = () => {
  const [pointer, setPointer] = useState({ x: 48, y: 38 });

  return (
    <section
      id="hero"
      className="hero-surface relative isolate overflow-hidden pt-28 pb-16 px-5 sm:pt-36 sm:pb-24 sm:px-6"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({ x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 });
      }}
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as CSSProperties}
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="hero-orb pointer-events-none absolute -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-7 flex items-center gap-3 animate-fade-in">
          <img src={avatar} alt="Arun Bide" className="h-10 w-10 rounded-full object-cover ring-1 ring-border" />
          <div className="text-sm leading-tight"><p className="font-semibold">Arun Bide</p><p className="text-muted-foreground">Maharashtra, India</p></div>
          <span className="ml-1 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />Available for select projects</span>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">Android · Kotlin Multiplatform · AI</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.06em] text-balance sm:text-7xl lg:text-[5.4rem] animate-fade-in" style={{ animationDelay: "60ms", animationFillMode: "backwards" }}>
              Mobile apps that feel <span className="text-gradient">inevitable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: "120ms", animationFillMode: "backwards" }}>
              I turn complex product ideas into polished Android and iOS experiences—built on scalable Kotlin Multiplatform foundations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "180ms", animationFillMode: "backwards" }}>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full group w-full sm:w-auto px-5"
          >
            Start a project <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full w-full sm:w-auto px-5"
          >
            Explore my work <ArrowDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
          </div>
          <div className="hero-workspace relative mx-auto w-full max-w-sm animate-fade-in" style={{ animationDelay: "160ms", animationFillMode: "backwards" }}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-blue-500/15 blur-2xl" />
            <div className="relative rounded-3xl border border-border/80 bg-background/75 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-5 flex items-center justify-between"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><i className="h-2.5 w-2.5 rounded-full bg-green-400" /></div><Code2 className="h-4 w-4 text-muted-foreground" /></div>
              <div className="rounded-2xl border border-border bg-secondary/35 p-5">
                <div className="mb-7 flex items-center justify-between"><span className="text-xs font-medium text-muted-foreground">Building for every screen</span><Sparkles className="h-4 w-4 text-accent" /></div>
                <div className="grid grid-cols-3 gap-2"><div className="h-28 rounded-xl bg-foreground/90" /><div className="h-28 rounded-xl border border-border bg-background" /><div className="h-28 rounded-xl bg-accent/90" /></div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-foreground/15" /><div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs"><span className="font-medium">One codebase. Native feel.</span><span className="text-muted-foreground">KMP / Compose</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex sm:items-center sm:gap-6 animate-fade-in" style={{ animationDelay: "240ms", animationFillMode: "backwards" }}>
          <SocialLink href="https://x.com/bidearun" label="X profile" hint="Build notes & updates">
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/arunbide" label="LinkedIn profile" hint="Full work history">
            <Linkedin className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" /> LinkedIn
          </SocialLink>
          <SocialLink href="https://www.upwork.com/freelancers/arunbide" label="Upwork profile" hint="Hire me on Upwork">
            Upwork
          </SocialLink>
          <SocialLink href="https://www.fiverr.com/arunbide" label="Fiverr profile" hint="Hire me on Fiverr">
            Fiverr
          </SocialLink>

        </div>
      </div>
    </section>
  );
};

export default Hero;
