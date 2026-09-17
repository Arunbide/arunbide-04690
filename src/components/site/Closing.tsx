import { useRef } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "X", href: "https://x.com/bidearun", handle: "bidearun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunbide", handle: "in/arunbide" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/arunbide", handle: "arunbide" },
  { label: "Fiverr", href: "https://www.fiverr.com/arunbide", handle: "arunbide" },
];

const Closing = () => {
  const btn = useRef<HTMLAnchorElement>(null);

  const magnet = (e: React.MouseEvent) => {
    const el = btn.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.18}px, ${
      (e.clientY - (r.top + r.height / 2)) * 0.3
    }px)`;
  };
  const reset = () => {
    if (btn.current) btn.current.style.transform = "translate(0,0)";
  };

  return (
    <footer id="contact" className="section-shell relative overflow-hidden pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 section-grid opacity-70" />
      <div className="shell">
        <p className="eyebrow">Contact</p>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-lg max-w-[14ch]"
        >
          Have an idea? <span className="text-accent">Let's build it.</span>
        </motion.h2>

        <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Have a product, startup or mobile experience in mind? I'm open to selected freelance and
          agency contracts.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4" onMouseMove={magnet} onMouseLeave={reset}>
          <a
            ref={btn}
            href="https://cal.com/bidearun/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 mono-sm text-background transition-transform duration-300 ease-out"
          >
            BOOK A 15-MIN CALL
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
          <a
            href="mailto:agbide7@gmail.com"
            className="group inline-flex items-center gap-3 border border-border px-7 py-4 mono-sm transition-colors hover:border-foreground"
          >
            START A CONVERSATION
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

        <div className="mt-14 border-t border-border">
          {[
            { label: "Email", value: "agbide7@gmail.com", href: "mailto:agbide7@gmail.com" },
            { label: "Phone", value: "+91 93228 32034", href: "tel:+919322832034" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-1 border-b border-border py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="mono">{c.label}</span>
              <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                {c.value}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12">
          <p className="mono mb-5">Profiles</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group inline-flex items-baseline gap-3 border border-border px-5 py-3.5 transition-colors hover:border-foreground hover:bg-secondary/40"
              >
                <span className="text-base font-medium tracking-tight sm:text-lg">{s.label}</span>
                <span className="mono text-muted-foreground transition-colors group-hover:text-foreground/80">{s.handle}</span>
                <span className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border py-8 sm:mt-24 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="mono-sm font-semibold tracking-[0.24em]">ARUN BIDE</span>
            <span className="mono">Android · Kotlin · KMP · Compose · Flutter</span>
          </div>
          <span className="mono">© 2026 Arun Bide</span>
        </div>
      </div>
    </footer>
  );
};

export default Closing;
