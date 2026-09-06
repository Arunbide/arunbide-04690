import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Bot, Calculator, FileText, LayoutPanelTop, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import shot1 from "@/assets/costingwizard-1.png";
import shot2 from "@/assets/costingwizard-2.png";
import shot3 from "@/assets/costingwizard-3.png";
import shot4 from "@/assets/costingwizard-4.png";

const buildHighlights = [
  {
    number: "01",
    title: "UI redesign",
    description:
      "Rebuilt the project list, item selection, and cost breakdown screens around clarity, so dense line-item data stays scannable even as a project grows.",
    image: shot1,
    alt: "CostingWizard project list and estimate interface",
    icon: LayoutPanelTop,
  },
  {
    number: "02",
    title: "Automatic cost and resource calculations",
    description:
      "Selecting an item automatically calculates cost from quantity × unit price and rolls it into a live running total, replacing manual math and spreadsheets.",
    image: shot2,
    alt: "CostingWizard automatic cost and resource calculations",
    icon: Calculator,
  },
  {
    number: "03",
    title: "AI assistant for editing estimates",
    description:
      'A conversational interface where typing something like “add chapter for pipe installation” updates the estimate directly through LLM function calling. It is not just chat; it makes real structured data changes.',
    image: shot4,
    alt: "CostingWizard AI assistant editing an estimate",
    icon: Bot,
  },
  {
    number: "04",
    title: "Professional PDF report generation",
    description: "One tap turns the cost breakdown into a client-ready, itemized PDF report.",
    image: shot3,
    alt: "CostingWizard professional PDF report generation",
    icon: FileText,
  },
];

const overview = [
  { label: "Role", value: "Mobile developer with full ownership of design + build" },
  {
    label: "Stack",
    value: "Kotlin Multiplatform, Compose Multiplatform, OpenAI API, Claude Vision, and Gemini",
  },
  {
    label: "Scope",
    value: "UI/UX redesign, AI feature build, cost calculation engine, PDF report generation",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const ConstructionCostEstimationCaseStudy = () => {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 115, damping: 20, mass: 0.8 };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="shell flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="mono !text-[.72rem] !tracking-[.22em] font-medium text-foreground transition-opacity hover:opacity-65">
            Arun Bide
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="grid-motif pointer-events-none absolute inset-0 -z-20 opacity-60" />
        <div className="pointer-events-none absolute -right-28 top-12 -z-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={transition} className="max-w-5xl">
            <p className="mono mb-6 text-accent">Case study / 01</p>
            <h1 className="display-md max-w-5xl text-balance">CostingWizard</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A Kotlin Multiplatform estimating app with an AI assistant and end-to-end workflows for a client.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
            className="mt-12 grid border-y border-border sm:mt-16 md:grid-cols-3"
          >
            {overview.map((item) => (
              <div key={item.label} className="border-border py-6 first:pt-6 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="mono-sm mb-3 text-muted-foreground">{item.label}</p>
                <p className="max-w-xs text-sm leading-relaxed text-foreground/85">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={transition} className="mono text-accent">
            The problem
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Estimates were a fragmented, manual process.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Before the rebuild, creating a cost estimate meant manually entering every line item, calculating totals by hand or in a spreadsheet, and building reports separately. It was slow, error-prone, and made it hard to see the full cost picture at a glance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={reveal} transition={transition} className="mb-12 sm:mb-16">
            <p className="mono mb-4 text-accent">What I built</p>
            <h2 className="display-md">One workflow,<br /><span className="outline-type">built end to end.</span></h2>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {buildHighlights.map(({ number, title, description, image, alt, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
                transition={transition}
                className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-card/60 md:grid-cols-2"
              >
                <div className={`flex flex-col justify-between p-6 sm:p-9 md:p-12 ${index % 2 ? "md:order-2" : ""}`}>
                  <div>
                    <div className="mb-10 flex items-center justify-between">
                      <span className="mono text-accent">{number}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{title}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <p className="mono-sm mt-10 text-muted-foreground">CostingWizard / {number}</p>
                </div>
                <div className={`relative min-h-[26rem] overflow-hidden border-t border-border bg-gradient-to-br from-secondary via-background to-accent/10 p-7 sm:min-h-[34rem] sm:p-10 md:border-l md:border-t-0 ${index % 2 ? "md:order-1 md:border-l-0 md:border-r" : ""}`}>
                  <div className="absolute inset-x-[18%] bottom-0 top-8 rounded-t-[2rem] border border-border bg-background shadow-2xl shadow-foreground/15 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
                    <img src={image} alt={alt} className="h-full w-full rounded-t-[2rem] object-cover object-top" loading="lazy" decoding="async" />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.15em] text-muted-foreground backdrop-blur sm:left-7 sm:top-7">App screen</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={transition} className="rounded-[2rem] border border-border bg-secondary/35 p-7 sm:p-12 lg:p-16">
            <p className="mono mb-5 text-accent">Outcome</p>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">From manual, spreadsheet-adjacent work to one complete estimation app.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">The client went from a manual, spreadsheet-adjacent workflow to a single app handling estimate creation, calculation, and reporting end to end.</p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={transition}>
            <p className="mono text-accent">Technical notes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Native foundations, structured intelligence.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }} className="space-y-3">
            {[
              "Built with Kotlin Multiplatform and Compose Multiplatform for a shared, native-quality product experience.",
              "The AI assistant uses function/tool calling so natural language maps to structured data changes.",
              "The calculation engine updates live, with no manual refresh step.",
            ].map((note) => (
              <div key={note} className="flex gap-4 rounded-xl border border-border bg-card/50 p-5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="leading-relaxed text-foreground/85">{note}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-3">
              {["Kotlin Multiplatform", "Compose Multiplatform", "OpenAI API", "Claude Vision", "Gemini", "PDF generation"].map((item) => <Badge key={item} variant="secondary" className="rounded-md px-2.5 py-1 font-normal">{item}</Badge>)}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 sm:px-6">
        <div className="container mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-sm text-muted-foreground">Construction Cost Estimation App</p>
          <Button asChild className="group w-full sm:w-auto">
            <Link to="/">Back to portfolio <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default ConstructionCostEstimationCaseStudy;
