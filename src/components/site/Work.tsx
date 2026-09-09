import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import shot1 from "@/assets/costingwizard-1.png";
import shot2 from "@/assets/costingwizard-2.png";
import shot3 from "@/assets/costingwizard-3.png";
import shot4 from "@/assets/costingwizard-4.png";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.tovsoftware.costingapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dpricing_section%26utm_campaign%3Dcosting_wizard%26utm_content%3Dpricing_cta";
const APP_STORE_URL = "https://apps.apple.com/us/app/costingwizard-quote-cost/id6742328319";

const shots = [
  { src: shot1, alt: "CostingWizard — build estimates in minutes" },
  { src: shot2, alt: "CostingWizard — automatic item and resource calculations" },
  { src: shot3, alt: "CostingWizard — professional PDF reports" },
  { src: shot4, alt: "CostingWizard — AI assistant edits by chat" },
];

const reveal = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: .8, ease: [0.22, 1, 0.36, 1] as const } },
};

const secondary = [
  {
    n: "03",
    title: "GameHub",
    stack: ["KOTLIN MULTIPLATFORM", "COMPOSE MP", "KTOR", "KOIN", "RAWG API"],
    copy: "A cross-platform game discovery app — shared domain and data layers, pagination, caching and shimmer states, built once for Android, Desktop and Web.",
    tint: "from-emerald-500/20 to-transparent",
    glyph: "▲",
  },
  {
    n: "04",
    title: "BhaktiPoint",
    stack: ["FLUTTER", "FIREBASE", "FIRESTORE", "AWS S3"],
    copy: "Spiritual music and discourse streaming with a dynamic content pipeline, so new media ships without an app update.",
    tint: "from-amber-500/20 to-transparent",
    glyph: "◗",
  },
  {
    n: "05",
    title: "HealthSync",
    stack: ["KOTLIN", "COMPOSE", "MVVM", "HILT", "OPENAI"],
    copy: "Medicine and health tracker with a conversational AI assistant and reminders that actually land on time.",
    tint: "from-sky-500/20 to-transparent",
    glyph: "＋",
  },
  {
    n: "06",
    title: "KKN Live",
    stack: ["ANDROID", "JAVA", "FCM"],
    copy: "A news product converted from web to Android — categories, search, push notifications, released on Play.",
    tint: "from-rose-500/20 to-transparent",
    glyph: "◼",
  },
];

const Work = () => {
  const featured = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: featured, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const [hover, setHover] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="display-lg">Selected<br />work</h2>
          <p className="mono max-w-xs text-right ml-auto">
            Products and experiments — shipped, used, maintained.
          </p>
        </div>
      </div>

      {/* 01 — full-bleed device showcase */}
      <motion.div
        ref={featured}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .2 }}
        variants={reveal}
        className="shell mt-14 sm:mt-20"
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            <span className="mono text-accent pt-2">01</span>
            <div>
              <h3 className="display-md">CostingWizard</h3>
              <p className="mono mt-3">KOTLIN MULTIPLATFORM / COMPOSE MP / WASM / IOS / ANDROID / AI</p>
            </div>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            A costing platform for contractors: build estimates, manage projects, generate PDF reports,
            and edit everything by chatting with an AI assistant. One shared codebase, native on both stores.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden border border-border bg-gradient-to-b from-secondary/60 to-background">
          <motion.div style={{ y: imgY }} className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-5 py-10 sm:gap-8 sm:px-10 sm:py-16">
            {shots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08, duration: .7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -14 }}
                className="group relative shrink-0 snap-start w-[64%] sm:w-[38%] lg:w-[22%] overflow-hidden border border-border bg-background"
                style={{ aspectRatio: "1 / 2" }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  width={827}
                  height={1654}
                  className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-[1fr_auto] md:items-center">
          <blockquote className="max-w-2xl text-sm leading-relaxed text-foreground/85">
            “Arun did an excellent job developing my Kotlin Multiplatform app. Highly dedicated, reliable,
            and consistently delivers high-quality work on time. He always went the extra mile.”
            <span className="mono ml-2">— GILAD, CLIENT</span>
          </blockquote>
          <div className="flex gap-3">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-foreground px-5 py-3 mono-sm text-background">
              APP STORE <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <Link to="/case-studies/construction-cost-estimation" className="group inline-flex items-center gap-2 border border-border px-5 py-3 mono-sm hover:border-foreground">
              CASE STUDY <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-border px-5 py-3 mono-sm hover:border-foreground">
              GOOGLE PLAY <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 02 — NoTask case study */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .3 }}
        transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
        className="shell mt-16 sm:mt-24"
      >
        <Link
          to="/case-studies/notask"
          className="group grid items-start gap-6 border border-border p-6 transition-colors hover:border-foreground sm:p-10 md:grid-cols-[auto_1fr_auto]"
        >
          <span className="mono text-accent pt-2">02</span>
          <div>
            <h3 className="display-md transition-transform duration-500 group-hover:translate-x-2">NoTask</h3>
            <p className="mono mt-3">WORKSPACE / TASKS / AI-ASSISTED DEVELOPMENT</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A Notion-inspired workspace and task manager — an exploration of product judgment,
              system design and code review when building alongside AI.
            </p>
          </div>
          <span className="mono-sm inline-flex items-center gap-2 md:pt-3">
            CASE STUDY <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </span>
        </Link>
      </motion.div>

      {/* 03–06 — editorial rows with cursor-following preview */}
      <div
        className="shell mt-20 sm:mt-28"
        onPointerMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        onPointerLeave={() => setHover(null)}
      >
        {secondary.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .4 }}
            transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
            onPointerEnter={() => setHover(p.title)}
            className={`group grid items-center gap-4 border-t border-border py-7 sm:py-10 md:grid-cols-[auto_1fr_auto] ${
              i % 2 ? "md:pl-[8%]" : ""
            }`}
          >
            <span className="mono text-accent">{p.n}</span>
            <div className="md:flex md:items-baseline md:gap-8">
              <h3 className="display text-[clamp(2rem,6vw,4.4rem)] transition-transform duration-500 group-hover:translate-x-3">
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-0 md:opacity-70 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                {p.copy}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end md:text-right">
              {p.stack.map((s) => (
                <span key={s} className="mono-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </motion.article>
        ))}
        <div className="border-t border-border" />
      </div>

      {/* floating cursor preview (desktop only) */}
      <AnimatePresence>
        {hover && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: .85 }}
            animate={{ opacity: 1, scale: 1, x: cursor.x + 24, y: cursor.y - 90 }}
            exit={{ opacity: 0, scale: .85 }}
            transition={{ type: "spring", stiffness: 260, damping: 28, mass: .6 }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden h-44 w-32 items-center justify-center border border-border bg-secondary md:flex"
          >
            <span className="display text-4xl text-accent">
              {secondary.find((s) => s.title === hover)?.glyph}
            </span>
            <span className="mono absolute bottom-3">{hover}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
