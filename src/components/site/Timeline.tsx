import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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

const Timeline = () => {
  const [view, setView] = useState<"list" | "timeline">("list");
  const [expanded, setExpanded] = useState(0);
  return (
    <section id="experience" className="section-shell py-16 sm:py-24">
      <div className="shell max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow">Experience</p><h2 className="text-3xl font-semibold sm:text-5xl">Where I've worked.</h2></div>
          <div className="inline-flex border border-border p-1" aria-label="Experience view">
            <Button size="sm" variant={view === "list" ? "default" : "ghost"} className="h-8 rounded-sm px-4 text-xs" onClick={() => setView("list")} aria-pressed={view === "list"}>List</Button>
            <Button size="sm" variant={view === "timeline" ? "default" : "ghost"} className="h-8 rounded-sm px-4 text-xs" onClick={() => setView("timeline")} aria-pressed={view === "timeline"}>Timeline</Button>
          </div>
        </div>
        <div className={`mt-10 border-t border-border ${view === "timeline" ? "ml-2 border-l border-l-border pl-6 sm:ml-4 sm:pl-10" : ""}`}>
          {roles.map((r, i) => (
            <motion.article key={r.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .08 }} className="relative border-b border-border">
              {view === "timeline" && <span className="absolute -left-[31px] top-7 h-2 w-2 rounded-full bg-accent sm:-left-[45px]" />}
              <Button variant="ghost" className="h-auto w-full justify-between rounded-none px-0 py-6 text-left hover:bg-transparent sm:py-8" onClick={() => setExpanded(expanded === i ? -1 : i)} aria-expanded={expanded === i}>
                <span className="flex min-w-0 flex-col gap-1"><span className="text-lg font-semibold leading-tight sm:text-xl">{r.place.split(" · ")[0]}</span><span className="text-sm font-normal text-muted-foreground">{r.title}</span></span>
                <span className="ml-4 flex shrink-0 items-center gap-4 text-xs font-normal text-muted-foreground sm:gap-8"><span className="hidden sm:block">{r.period}</span><span className="text-lg text-accent">{expanded === i ? "−" : "+"}</span></span>
              </Button>
              <span className="mono -mt-4 mb-4 block sm:hidden">{r.period}</span>
              <AnimatePresence initial={false}>{expanded === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35 }} className="overflow-hidden"><div className="pb-8 sm:pl-1"><p className="mb-4 text-sm text-muted-foreground">{r.place}</p><ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">{r.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="text-accent">✳</span>{point}</li>)}</ul></div></motion.div>}</AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
