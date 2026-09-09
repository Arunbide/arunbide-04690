import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

const NAME = "ARUN BIDE";

const Intro = () => {
  const root = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-letter", {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.035,
        delay: 0.1,
      });
      gsap.from(".intro-line", {
        y: 24,
        opacity: 0,
        duration: .9,
        ease: "expo.out",
        stagger: 0.09,
        delay: 0.55,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(".intro-letter", { x: (i) => nx * (8 + i * 2.2), y: ny * 10, duration: .9, ease: "power3.out" });
      gsap.to(glow.current, { x: nx * 120, y: ny * 90, duration: 1.2, ease: "power3.out" });
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="intro"
      ref={root}
      className="relative isolate min-h-[100svh] overflow-hidden pt-24 pb-10 flex flex-col justify-between"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-motif opacity-60" />
      <div
        ref={glow}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[46vw] w-[46vw] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
      />

      <motion.div style={{ y, opacity: fade }} className="shell flex flex-1 flex-col justify-center">
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="mono">Based in India · Working worldwide</span>
          <span className="mono inline-flex items-center gap-2 text-foreground">
            <i className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Available for selected projects
          </span>
        </div>

        <h1 className="display-xl flex flex-wrap overflow-hidden leading-[.82]" aria-label="Arun Bide">
          {NAME.split("").map((c, i) => (
            <span key={i} className="intro-letter inline-block will-change-transform">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 border-t border-border pt-7 md:grid-cols-[1.1fr_.9fr]">
          <p className="intro-line display-md max-w-[18ch]">
            One codebase. <span className="text-accent">Every platform.</span>
          </p>
          <div className="flex flex-col gap-5">
            <p className="intro-line mono text-foreground/70">
              Android · Kotlin · KMP · Compose · Flutter
            </p>
            <p className="intro-line max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Kotlin Multiplatform developer shaping thoughtful mobile experiences — from the first
              sketch to the store release. Two and a half years, real clients, shipped apps.
            </p>

            <div className="intro-line flex flex-wrap gap-3">
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 mono-sm text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                VIEW MY WORK <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group inline-flex items-center gap-3 border border-border px-6 py-3.5 mono-sm transition-colors hover:border-foreground"
              >
                LET'S TALK <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="shell flex items-end justify-between">
        <span className="mono">Scroll</span>
        <motion.span
          className="mono"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        <span className="mono">© 2026</span>
      </div>
    </section>
  );
};

export default Intro;
