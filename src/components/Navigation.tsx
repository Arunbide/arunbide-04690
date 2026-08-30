import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Resume" },
    { id: "testimonials", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:top-5">
      <div className={`mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border px-2.5 transition-all duration-300 ${scrolled ? "border-border bg-background/80 shadow-lg shadow-foreground/5 backdrop-blur-xl" : "border-transparent bg-background/35 backdrop-blur-sm"}`}>
          <button onClick={() => scrollToSection("hero")} className="px-2 text-sm font-bold tracking-tight">AB<span className="text-accent">.</span></button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button size="sm" onClick={() => scrollToSection("contact")} className="rounded-full px-4">
              Let's talk <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-16 rounded-3xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl md:hidden">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold hover:bg-muted"
            >
              Contact me
            </button>
          </div>
        )}
    </nav>
  );
};

export default Navigation;
