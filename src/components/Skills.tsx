import { useState } from "react";
import { Code2, Smartphone, Boxes, Layers, Cloud, Sparkles, Wrench } from "lucide-react";

const Skills = () => {
  const [active, setActive] = useState<string | null>(null);

  const categories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Kotlin", "Java", "Dart", "Python"],
    },
    {
      icon: Smartphone,
      title: "Android",
      skills: ["Android SDK", "Jetpack Compose", "Material 3", "XML", "Coroutines", "Room", "Retrofit", "Gradle"],
    },
    {
      icon: Layers,
      title: "Kotlin Multiplatform",
      skills: ["Compose Multiplatform", "Android", "iOS", "Web / WASM", "JS interoperability"],
    },
    {
      icon: Boxes,
      title: "Architecture",
      skills: ["MVVM", "Clean Architecture", "Dependency Injection", "Repository Pattern"],
    },
    {
      icon: Cloud,
      title: "Backend & Cloud",
      skills: ["REST APIs", "Firebase Auth", "Firestore", "Cloud Storage", "AWS S3", "Ktor"],
    },
    {
      icon: Sparkles,
      title: "AI",
      skills: ["OpenAI API", "Anthropic", "Claude Vision", "Gemini OCR", "LLM integrations"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git & GitHub", "Android Studio", "Linux", "Play Console"],
    },
  ];

  const strengths = [
    "Break product ideas into practical features and tasks",
    "Choose architecture, APIs and libraries that fit the product",
    "Balance scope, UX, maintainability and complexity",
    "Own the path from build to testing, release and handoff",
  ];

  return (
    <section id="skills" className="section-shell py-16 sm:py-24 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-heading font-bold">
              The stack<br />
              <em>I ship with.</em>
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            2+ years building mobile and cross-platform products — from shared Kotlin logic to polished Compose
            interfaces and AI-powered features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <div
              key={title}
              onMouseEnter={() => setActive(title)}
              onMouseLeave={() => setActive(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl hover:shadow-foreground/5 animate-fade-in"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: "backwards" }}
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-center gap-2.5 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background transition-all duration-300 group-hover:border-foreground/30 group-hover:rotate-6 group-hover:scale-105">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-sm font-semibold">{title}</h3>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="relative flex flex-wrap gap-1.5">
                {skills.map((s, si) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-[11px] sm:text-xs text-foreground/75 transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                    style={{
                      transitionDelay: active === title ? `${si * 25}ms` : "0ms",
                      transform: active === title ? "translateY(-1px)" : "none",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <div
              key={s}
              className="rounded-2xl border border-border bg-secondary/30 p-4 text-sm leading-relaxed text-foreground/80 transition-colors duration-300 hover:border-foreground/25 animate-fade-in"
              style={{ animationDelay: `${300 + i * 60}ms`, animationFillMode: "backwards" }}
            >
              <span className="mb-2 block h-1 w-6 rounded-full bg-accent" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
