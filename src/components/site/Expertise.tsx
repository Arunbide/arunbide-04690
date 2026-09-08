import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rows = [
  { name: "Android", note: "Kotlin, Jetpack Compose, Material 3, Coroutines, Room, Retrofit" },
  { name: "Kotlin Multiplatform", note: "Shared domain + data layers across Android, iOS, Desktop and Web" },
  { name: "Compose Multiplatform", note: "One design system, rendered natively on every target" },
  { name: "Flutter", note: "Dart, Firebase, media-heavy consumer apps" },
  { name: "Backend & Cloud", note: "REST, Ktor, Firebase Auth/Firestore/Storage, AWS S3" },
  { name: "AI Integrations", note: "OpenAI, Anthropic, Claude Vision, Gemini OCR" },
];

const Expertise = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="expertise" className="section-shell py-20 sm:py-28">
      <div className="shell">
        <p className="eyebrow">Expertise</p>
        <h2 className="section-heading max-w-[18ch]">
          What I work with <em>every day.</em>
        </h2>

        <div className="mt-12 border-t border-border">
          {rows.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setActive(r.name)}
              onHoverEnd={() => setActive(null)}
              className="group border-b border-border py-5 sm:py-7"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="mono w-7 shrink-0">0{i + 1}</span>
                <h3 className="display text-[clamp(1.6rem,5.2vw,3.6rem)] transition-transform duration-500 group-hover:translate-x-2 sm:group-hover:translate-x-4">
                  {r.name}
                </h3>
                <span className="ml-auto mono hidden shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline">
                  →
                </span>
              </div>
              <AnimatePresence initial={false}>
                {active === r.name && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden pl-11 text-sm text-muted-foreground sm:pl-[3.75rem]"
                  >
                    <span className="block pt-3">{r.note}</span>
                  </motion.p>
                )}
              </AnimatePresence>
              <p className="mt-2 pl-11 text-sm text-muted-foreground sm:hidden">{r.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
