import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Blocks, Bot, CheckSquare2, Database, Github, LayoutPanelTop, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const PROJECT_URL = "https://notask-omega.vercel.app";
const REPOSITORY_URL = "https://github.com/Arunbide/notask";

const buildBlocks = [
  { icon: Blocks, title: "Pages with the context attached", copy: "A Notion-inspired workspace where plans, product notes, and decisions live beside the work they explain, not in a separate document trail." },
  { icon: LayoutPanelTop, title: "Tasks built for flow", copy: "Board and list views give the same work two useful shapes: a visual path through progress and a focused view for planning what is next." },
  { icon: Database, title: "Workspaces that persist", copy: "Authentication, workspace separation, and a real Prisma + Turso backend make the product usable beyond a frontend demo." },
  { icon: Bot, title: "AI as an implementation partner", copy: "AI accelerated the build, while product decomposition, architecture, technical choices, review, and rejecting weak solutions stayed deliberate work." },
];

const stack = ["Next.js 16", "React", "TypeScript", "Prisma", "Turso", "NextAuth", "TanStack Query", "Zustand", "Tiptap", "Tailwind", "Radix"];

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

const NoTaskCaseStudy = () => {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 115, damping: 20, mass: 0.8 };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="shell flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="mono !text-[.72rem] !tracking-[.22em] font-medium text-foreground transition-opacity hover:opacity-65">Arun Bide</Link>
          <div className="flex items-center gap-2 sm:gap-4"><Link to="/" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"><ArrowLeft className="h-4 w-4" /> Back to portfolio</Link><ThemeToggle /></div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="grid-motif pointer-events-none absolute inset-0 -z-20 opacity-60" />
        <div className="pointer-events-none absolute -right-28 top-12 -z-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={transition} className="max-w-5xl">
            <p className="mono mb-6 text-accent">Case study / 02</p>
            <h1 className="display-md text-balance">NoTask</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">A Notion-inspired workspace and task manager for keeping pages, tasks, and project context in one calm place.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }} className="mt-12 grid border-y border-border sm:mt-16 md:grid-cols-3">
            {[{ label: "Role", value: "Product builder and full-stack developer" }, { label: "Scope", value: "Pages, tasks, board/list views, authentication, and backend" }, { label: "Build approach", value: "AI-assisted implementation, guided by product and engineering decisions" }].map((item) => <div key={item.label} className="border-border py-6 first:pt-6 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"><p className="mono-sm mb-3 text-muted-foreground">{item.label}</p><p className="max-w-xs text-sm leading-relaxed text-foreground/85">{item.value}</p></div>)}
          </motion.div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={transition} className="mono text-accent">The experiment</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">A quieter place to plan work, retain context, and move it forward.</h2><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">NoTask began as a chance to build outside my usual mobile stack. The goal was a focused workspace: pages hold the thinking behind a project; board and list views make tasks actionable; authentication and a persistent backend make it useful as a real product, rather than a UI experiment.</p><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">AI helped speed up implementation, but the product still needed structure: what belongs in a workspace, how pages and tasks connect, where state lives, and what should be kept simple.</p></motion.div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container mx-auto max-w-6xl"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={transition} className="mb-12 sm:mb-16"><p className="mono mb-4 text-accent">What I built</p><h2 className="display-md">A small product<br /><span className="outline-type">with real systems.</span></h2></motion.div>
          <div className="grid gap-4 md:grid-cols-2">{buildBlocks.map(({ icon: Icon, title, copy }, index) => <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.06 }} className="group rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-foreground/30 hover:bg-secondary/30 sm:p-8"><div className="mb-12 flex items-center justify-between"><span className="mono text-accent">0{index + 1}</span><span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"><Icon className="h-4 w-4" /></span></div><h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{copy}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="case-study-section"><div className="container mx-auto max-w-6xl"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={transition} className="rounded-[2rem] border border-border bg-secondary/35 p-7 sm:p-12 lg:p-16"><p className="mono mb-5 text-accent">Outcome</p><h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">A complete workspace product, from the thinking behind work to the tasks that ship it.</h2><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">NoTask combines the pieces that usually scatter across a team’s tools: project context, actionable tasks, flexible views, secure access, and persistent data. Building it also reinforced that AI works best inside a system with a clear product model and quality bar.</p></motion.div></div></section>

      <section className="case-study-section"><div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-16"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={transition}><p className="mono text-accent">Technical notes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">A deliberate full-stack product build.</h2></motion.div><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}><div className="flex flex-wrap gap-2">{stack.map((item) => <Badge key={item} variant="secondary" className="rounded-md px-2.5 py-1 font-normal">{item}</Badge>)}</div><p className="mt-6 leading-relaxed text-muted-foreground">Next.js, React, TypeScript, Prisma, Turso, NextAuth, TanStack Query, Zustand, Tiptap, Tailwind, and Radix form the product foundation, from rich page content and client state to authentication and persistence. AI supported implementation, while the architecture and quality bar stayed intentional.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild className="group"><a href={PROJECT_URL} target="_blank" rel="noreferrer">View NoTask <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></Button><Button asChild variant="outline" className="group"><a href={REPOSITORY_URL} target="_blank" rel="noreferrer"><Github /> View repository <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></Button></div></motion.div></div></section>

      <footer className="border-t border-border px-5 py-10 sm:px-6"><div className="container mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="mono-sm text-muted-foreground">NoTask / AI-assisted product build</p><Button asChild className="group w-full sm:w-auto"><Link to="/">Back to portfolio <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Button></div></footer>
    </main>
  );
};

export default NoTaskCaseStudy;
