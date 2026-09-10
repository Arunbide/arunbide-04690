import { useRef } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "X", href: "https://x.com/bidearun", handle: "@bidearun", note: "Build notes & updates" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunbide", handle: "in/arunbide", note: "Experience & network" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/arunbide", handle: "freelancers/arunbide", note: "Hire me on Upwork" },
  { label: "Fiverr", href: "https://www.fiverr.com/arunbide", handle: "/arunbide", note: "Hire me on Fiverr" },
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

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          <a href="mailto:agbide7@gmail.com" className="group flex flex-col gap-2 bg-background p-6 transition-colors hover:bg-secondary/50">
            <span className="mono">Email</span>
            <span className="text-lg font-medium sm:text-xl">agbide7@gmail.com</span>
            <span className="mono text-muted-foreground">Replies within 24 hours</span>
          </a>
          <a href="tel:+919322832034" className="group flex flex-col gap-2 bg-background p-6 transition-colors hover:bg-secondary/50">
            <span className="mono">Phone</span>
            <span className="text-lg font-medium sm:text-xl">+91 93228 32034</span>
            <span className="mono text-muted-foreground">Mon–Fri, 9 AM – 6 PM IST</span>
          </a>
        </div>


        <div className="mt-16 flex flex-col gap-6 border-t border-border py-8 sm:mt-24 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="mono-sm font-semibold tracking-[0.24em]">ARUN BIDE</span>
            <span className="mono">Android · Kotlin · KMP · Compose · Flutter</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono link-underline hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
            <a href="mailto:agbide7@gmail.com" className="mono link-underline hover:text-foreground transition-colors">
              Email
            </a>
          </div>
          <span className="mono">© 2026 Arun Bide</span>
        </div>
      </div>
    </footer>
  );
};

export default Closing;
