import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-lg">Arun Bide</div>

          <div className="hidden md:flex items-center gap-7">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button size="sm" onClick={() => scrollToSection("contact")}>
              Contact me
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border py-3">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-2 py-3 text-sm hover:bg-muted rounded"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-2 py-3 text-sm font-semibold hover:bg-muted rounded"
            >
              Contact me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
