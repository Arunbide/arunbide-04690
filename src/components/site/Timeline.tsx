import { motion } from "framer-motion";

const roles = [
  {
    period: "Sep 2025 to May 2026",
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
    period: "Jun 2023 to Present",
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

      <div className="mt-14 flex flex-col">
        {roles.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid gap-6 border-t border-border py-10 transition-colors md:grid-cols-[.42fr_1.58fr] md:gap-16 md:py-14"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />

            <div className="flex flex-col gap-3">
              <span className="mono text-foreground">{r.period}</span>
              <span className="mono text-muted-foreground">{r.place}</span>
            </div>

            <div>
              <h3 className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold tracking-[-.045em] leading-[1.02]">
                {r.title}
              </h3>
              <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                {r.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground"
                  >
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
