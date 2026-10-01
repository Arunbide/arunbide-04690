import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/smooth-scroll";
import avatar from "@/assets/arun-avatar.png";

const SOCIALS = [
  { label: "X", href: "https://x.com/bidearun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunbide" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/arunbide" },
  { label: "Fiverr", href: "https://www.fiverr.com/arunbide" },
];

const Intro = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="intro" className="relative border-b border-border pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="shell max-w-6xl">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, .36, 1] }}>
          <div className="mb-7 inline-flex items-center gap-2.5 mono-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> AVAILABLE FOR FREELANCE
          </div>
          <div className="grid gap-9 md:grid-cols-[minmax(0,1fr)_minmax(200px,280px)] md:items-end md:gap-12">
            <div>
              <h1 className="font-semibold uppercase leading-[.86] text-[clamp(4.25rem,12vw,9.5rem)]">ARUN<br />BIDE<span className="text-accent">.</span></h1>
              <p className="mt-8 max-w-[34rem] text-xl font-medium leading-snug sm:text-2xl">I build the apps <span className="text-accent">startups ship.</span></p>
              <p className="mt-3 max-w-[34rem] text-base leading-relaxed text-muted-foreground">Android and iOS app development for startups and businesses, from first conversation to store release. Kotlin Multiplatform, Compose and Flutter.</p>
            </div>
            <div className="flex flex-col items-start gap-5 border-t border-border pt-6 md:border-t-0 md:pt-0">
              <img src={avatar} alt="Arun Bide" width={160} height={160} className="h-20 w-20 rounded-full border border-border object-cover sm:h-24 sm:w-24" />
              <div><span className="mono block">Based in</span><span className="text-sm">India · Working worldwide</span></div>
              <div><span className="mono block">Specialization</span><span className="text-sm">Android · iOS · KMP</span></div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-sm"><a href="https://cal.com/bidearun/" target="_blank" rel="noopener noreferrer">Book a call <ArrowUpRight /></a></Button>
            <Button asChild variant="outline" className="rounded-sm border"><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection("#work"); }}>Selected work <ArrowRight /></a></Button>
            <a href="mailto:agbide7@gmail.com" className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:ml-3">agbide7@gmail.com</a>
          </div>
          <div className="mt-12 grid gap-5 border-t border-border pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div><span className="mono block mb-2">Find me</span><div className="flex flex-wrap gap-x-6 gap-y-2">{SOCIALS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-accent">{s.label} ↗</a>)}</div></div>
            <span className="mono">Kotlin · Compose · KMP · Flutter · Firebase</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
