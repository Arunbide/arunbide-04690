import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "X", href: "https://x.com/bidearun" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arunbide" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/arunbide" },
  { label: "Fiverr", href: "https://www.fiverr.com/arunbide" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 420);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border/60" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex items-center justify-between h-16 sm:h-[76px]">
          <a href="#intro" onClick={(e) => { e.preventDefault(); go("#intro"); }} className="flex items-center gap-3 group">
            <span className="mono-sm font-semibold tracking-[0.24em]">ARUN BIDE</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 mono-sm text-muted-foreground">
              <i className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> AVAILABLE
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <nav className="hidden md:flex items-center gap-6 mr-3">
              {links.slice(0, 4).map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  className="mono-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {l.label.toUpperCase()}
                </a>
              ))}
            </nav>
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 border border-border px-3.5 py-2 mono-sm hover:bg-foreground hover:text-background transition-colors"
              aria-label="Open menu"
            >
              MENU <span className="text-base leading-none">+</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background grid-motif"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: .6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="shell h-16 sm:h-[76px] flex items-center justify-between">
              <span className="mono-sm font-semibold tracking-[0.24em]">ARUN BIDE</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 border border-border px-3.5 py-2 mono-sm hover:bg-foreground hover:text-background transition-colors"
                aria-label="Close menu"
              >
                CLOSE <span className="text-base leading-none">×</span>
              </button>
            </div>

            <div className="shell flex h-[calc(100%-76px)] flex-col justify-between pb-10 pt-6">
              <nav className="flex flex-col">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); go(l.href); }}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.18 + i * 0.06, duration: .6, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-4 border-b border-border/60 py-3 sm:py-4"
                  >
                    <span className="mono text-[.55rem] w-6">0{i + 1}</span>
                    <span className="display text-[clamp(2.2rem,8vw,6rem)] transition-transform duration-500 group-hover:translate-x-3">
                      {l.label}
                    </span>
                    <span className="ml-auto mono opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .5 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8"
              >
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mono hover:text-foreground transition-colors">
                    {s.label}
                  </a>
                ))}
                <a href="mailto:agbide7@gmail.com" className="mono hover:text-foreground transition-colors">agbide7@gmail.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
