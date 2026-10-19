import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { scrollToSection } from "@/lib/smooth-scroll";
import shot1 from "@/assets/costingwizard-1.png";
import shot2 from "@/assets/costingwizard-2.png";
import shot4 from "@/assets/costingwizard-4.png";

const SOCIALS = [
  { label: "X", href: "https://x.com/bidearun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunbide" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/arunbide" },
  { label: "Fiverr", href: "https://www.fiverr.com/arunbide" },
];

const screens = [
  { src: shot1, alt: "CostingWizard project overview", className: "hero-device hero-device-left" },
  { src: shot2, alt: "CostingWizard estimate details", className: "hero-device hero-device-center" },
  { src: shot4, alt: "CostingWizard AI assistant", className: "hero-device hero-device-right" },
];

const Intro = () => {
  const root = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 44]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.12,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={root}
      className="relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-36"
    >
      <div className="shell">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <span className="mono-sm font-semibold tracking-[0.24em] text-foreground">ARUN BIDE</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="mono">Based in India · Working worldwide</span>
            <span className="mono inline-flex items-center gap-2 text-foreground">
              <i className="h-1.5 w-1.5 rounded-full bg-accent" /> Taking on new projects
            </span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-8">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display max-w-[10ch] text-[clamp(3rem,7.2vw,6.8rem)] leading-[.88]"
            >
              I build <span className="text-accent">AI-powered apps</span> startups ship.
            </motion.h1>
            <p className="intro-reveal mono mt-7 max-w-xl text-foreground/75">
              Android · iOS · Kotlin Multiplatform · Compose · Flutter
            </p>
            <p className="intro-reveal mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Android and iOS apps from one Kotlin codebase, with AI features built in. I take products
              from the first conversation to store release, owning the architecture, experience, and delivery.
            </p>

            <div className="intro-reveal mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.upwork.com/freelancers/arunbide"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 bg-foreground px-5 py-3 mono-sm text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                HIRE ME <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToSection("#work"); }}
                className="group inline-flex min-h-12 items-center gap-3 border border-border bg-card/60 px-5 py-3 mono-sm transition-colors hover:border-accent"
              >
                VIEW MY WORK <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                className="group inline-flex min-h-12 items-center gap-3 px-3 py-3 mono-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LET'S TALK <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            </div>

            <div className="intro-reveal mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="mono text-muted-foreground">Find me</span>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 mono-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  <span className="link-underline">{social.label.toUpperCase()}</span>
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y: imageY }}
            className="product-surface relative mx-auto flex w-full max-w-[650px] items-center justify-center overflow-hidden px-3 py-8 sm:px-8 sm:py-12"
          >
            <div className="pointer-events-none absolute inset-0 grid-motif opacity-30" />
            <div className="relative z-10 flex w-full max-w-[540px] items-center justify-center gap-[-1rem] sm:gap-[-1.5rem]">
              {screens.map((screen, index) => (
                <motion.div
                  key={screen.alt}
                  initial={{ opacity: 0, y: 30, rotate: index === 0 ? -7 : index === 2 ? 7 : 0 }}
                  animate={{ opacity: 1, y: 0, rotate: index === 0 ? -7 : index === 2 ? 7 : 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, rotate: 0, transition: { duration: 0.3 } }}
                  className={`${screen.className} relative aspect-[.51] w-[29%] shrink-0 overflow-hidden rounded-[1.2rem] border border-foreground/15 bg-background p-1.5 shadow-xl sm:rounded-[1.5rem] sm:p-2`}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    width={827}
                    height={1654}
                    decoding="async"
                    className="h-full w-full rounded-[.9rem] object-cover sm:rounded-[1.15rem]"
                  />
                </motion.div>
              ))}
            </div>
            <span className="mono absolute bottom-3 right-4 z-10 sm:bottom-5 sm:right-6">01 / 04</span>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-end border-t border-border pt-4">
          <span className="mono">© 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;