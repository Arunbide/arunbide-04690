import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between sm:h-20">
        <button onClick={() => go("hero")} className="mono !text-[.72rem] !tracking-[.22em] text-foreground font-medium">
          Arun Bide
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="mono link-underline transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <span className="mono flex items-center gap-2 text-foreground/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available
          </span>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="shell flex flex-col pt-10">
            {links.map((link, i) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
                className="display animate-fade-in border-b border-border/60 py-6 text-left text-4xl"
              >
                {link.label}
              </button>
            ))}
            <span className="mono mt-8 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for selected projects
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
