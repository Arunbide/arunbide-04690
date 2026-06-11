import { Calendar } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      title: "Kotlin Multiplatform Developer",
      company: "Stealth Startup",
      type: "Freelance · Remote",
      period: "Sep 2025 — May 2026",
      bullets: [
        "Led V2 redesign in Material 3, unifying Android, iOS, and Web (WASM) with Kotlin Multiplatform.",
        "Built shared business logic and reusable Compose components for cross-platform scalability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-14 sm:py-20 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Experience
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-10">
          Where I've worked
        </h2>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <div
                key={j.title + j.company}
                className="relative sm:pl-8 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <span className="absolute left-0 top-6 hidden sm:block h-4 w-4 rounded-full border-2 border-background bg-foreground" />
                <div className="border border-border rounded-xl p-5 sm:p-6 bg-secondary/20 hover:bg-secondary/40 hover:border-foreground/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{j.title}</h3>
                      <p className="text-sm text-muted-foreground">{j.company} · {j.type}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{j.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-sm text-foreground/80 mt-3">
                    {j.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-muted-foreground mt-1.5 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
