import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      title: "Kotlin Multiplatform Developer",
      company: "Stealth Startup",
      type: "Contract · Remote",
      period: "Sep 2025 — May 2026",
      bullets: [
        "Contributed to a V2 redesign using Kotlin Multiplatform and Compose Multiplatform for Android, iOS and Web.",
        "Built reusable Compose and Material 3 components with shared business logic across platforms.",
        "Worked with Kotlin WASM, JavaScript interoperability, localization and RTL support.",
        "Made implementation decisions around shared vs. platform-specific code based on product needs.",
        "Debugged Gradle, KMP, WASM, Firebase and cross-platform build issues.",
      ],
    },
    {
      title: "Freelance Android & Mobile Developer",
      company: "Freelance",
      type: "Remote · Worldwide",
      period: "Jun 2023 — Present",
      bullets: [
        "Built Android and cross-platform apps with Kotlin, Java, Flutter and Kotlin Multiplatform.",
        "Shipped with Jetpack Compose, MVVM, Coroutines, Room, Retrofit and dependency injection.",
        "Integrated Firebase, REST APIs, AI services, media services and third-party platforms.",
        "Worked directly with clients on requirements, scope, estimates and technical approach.",
        "Owned projects from build and debugging through testing, Play Console release and handoff.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-shell py-16 sm:py-24 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading font-bold">
              Where I've<br />
              <em>worked.</em>
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Two and a half years of shipping production mobile apps — for a product team and directly for clients.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent hidden sm:block" />
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <div
                key={j.title + j.company}
                className="group relative sm:pl-8 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <span className="absolute left-0 top-6 hidden sm:block h-4 w-4 rounded-full border-2 border-background bg-foreground transition-transform duration-300 group-hover:scale-125" />
                <span className="absolute left-0 top-6 hidden sm:block h-4 w-4 rounded-full bg-accent/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-xl hover:shadow-foreground/5">
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight">{j.title}</h3>
                      <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/80">{j.company}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{j.type}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground shrink-0 self-start">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{j.period}</span>
                    </div>
                  </div>
                  <ul className="relative space-y-1.5 text-sm text-foreground/80 mt-3">
                    {j.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground transition-colors duration-300 group-hover:bg-accent" />
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
