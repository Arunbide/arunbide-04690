import { useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Code2, Globe2, Sparkles } from "lucide-react";
import avatar from "@/assets/arun-avatar.png";
import appleLogo from "@/assets/apple-logo.png";
import androidLogo from "@/assets/android-logo.png";

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
      <div className="section-grid pointer-events-none absolute inset-0 -z-10 opacity-75" aria-hidden="true" />
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
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full w-full sm:w-auto px-5"
          >
            Explore case studies <ArrowDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
          </div>
          <div className="hero-workspace relative mx-auto w-full max-w-sm animate-fade-in" style={{ animationDelay: "160ms", animationFillMode: "backwards" }}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-blue-500/15 blur-2xl" />
            <div className="relative rounded-3xl border border-border/80 bg-background/75 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-5 flex items-center justify-between"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><i className="h-2.5 w-2.5 rounded-full bg-green-400" /></div><Code2 className="h-4 w-4 text-muted-foreground" /></div>
              <div className="rounded-2xl border border-border bg-secondary/35 p-5">
                <div className="mb-7 flex items-center justify-between"><span className="text-xs font-medium text-muted-foreground">Building for every screen</span><Sparkles className="h-4 w-4 text-accent" /></div>
                <div className="grid grid-cols-3 gap-2">
                  <div aria-label="Android" className="flex h-28 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 hover:-translate-y-1">
                    <img src={androidLogo} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                  </div>
                  <div aria-label="iOS" className="flex h-28 items-center justify-center rounded-xl border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1">
                    <img src={appleLogo} alt="" aria-hidden="true" className="h-9 w-9 object-contain mix-blend-multiply" />
                  </div>
                  <div aria-label="Web" className="flex h-28 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 hover:-translate-y-1">
                    <Globe2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-foreground/15" /><div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs"><span className="font-medium">One codebase. Native feel.</span><span className="text-muted-foreground">KMP / Compose</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
