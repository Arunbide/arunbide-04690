import { motion } from "framer-motion";

const roles = [
  {
    period: "Sep 2025 — May 2026",
    title: "Kotlin Multiplatform Developer",
    place: "Stealth Startup · Remote · Contract",
    points: [
      "Contributed to a V2 redesign in Kotlin Multiplatform and Compose Multiplatform for Android, iOS and Web.",
      "Built reusable Compose / Material 3 components and shared business logic across platforms.",
      "Worked with Kotlin WASM, JavaScript interop, localization and RTL support.",
      "Debugged Gradle, KMP, WASM, Firebase and cross-platform build issues.",
    ],
  },
  {
    period: "Jun 2023 — Present",
    title: "Android Developer",
    place: "Freelance · Worldwide",
    points: [
      "Android and cross-platform apps in Kotlin, Java, Flutter and Kotlin Multiplatform.",
      "Jetpack Compose, MVVM, Coroutines, Room, Retrofit and dependency injection.",
      "Firebase, REST APIs, AI services and third-party integrations.",
      "Worked directly with clients from requirements through release and handoff.",
    ],
  },
];

const Timeline = () => (
  <section id="experience" className="section-shell py-20 sm:py-28">
    <div className="shell">
      <p className="eyebrow">Experience</p>
      <h2 className="section-heading max-w-[18ch]">
        Real clients. <em>Shipped products.</em>
      </h2>

      <div className="mt-12 flex flex-col">
        {roles.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 border-t border-border py-8 md:grid-cols-[.5fr_1.5fr] md:gap-14 md:py-12"
          >
            <div className="flex flex-col gap-2">
              <span className="mono">{r.period}</span>
              <span className="mono text-foreground/70">{r.place}</span>
            </div>
            <div>
              <h3 className="display text-[clamp(1.5rem,3.6vw,2.6rem)]">{r.title}</h3>
              <ul className="mt-5 space-y-3">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
