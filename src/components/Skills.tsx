import { Layers, Smartphone, Boxes, Cloud, Sparkles, Wrench } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      icon: Layers,
      title: "Cross-Platform",
      skills: ["Kotlin Multiplatform", "Compose Multiplatform", "Shared Business Logic", "iOS & Android", "WASM"],
    },
    {
      icon: Smartphone,
      title: "Native Android",
      skills: ["Jetpack Compose", "Android SDK", "Kotlin", "Material 3"],
    },
    {
      icon: Boxes,
      title: "Architecture",
      skills: ["MVVM", "Clean Architecture", "Coroutines & Flow", "Hilt / Koin", "Retrofit"],
    },
    {
      icon: Cloud,
      title: "Backend & Cloud",
      skills: ["Firebase", "Room", "REST APIs", "Cloud Storage", "AWS S3"],
    },
    {
      icon: Sparkles,
      title: "AI Integrations",
      skills: ["OpenAI", "Anthropic", "Claude Vision", "Gemini OCR", "Prompt Engineering"],
    },
    {
      icon: Wrench,
      title: "Tooling",
      skills: ["Git & GitHub", "Play Console", "App Store Connect", "CI/CD", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Skills
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
          The stack I ship with
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
          Tools and frameworks I use day-to-day to build production-ready mobile and cross-platform apps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <div
              key={title}
              className="group border border-border rounded-xl p-5 bg-secondary/20 hover:bg-secondary/40 hover:border-foreground/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-foreground/30">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-sm font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center text-[11px] sm:text-xs text-foreground/75 bg-background border border-border rounded-md px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
