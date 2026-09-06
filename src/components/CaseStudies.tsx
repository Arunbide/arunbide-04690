import { ArrowUpRight, Bot, Gamepad2, HeartPulse, Music2, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    number: "03",
    title: "GameHub",
    description:
      "A cross-platform game discovery app with shared domain and data layers, API-driven browsing, pagination, caching, and shimmer loading.",
    stack: ["Kotlin Multiplatform", "Compose MP", "Ktor", "Koin", "RAWG API"],
    icon: Gamepad2,
  },
  {
    number: "04",
    title: "BhaktiPoint",
    description:
      "A spiritual music and discourse streaming product with a dynamic content pipeline, allowing new media to ship without an app update.",
    stack: ["Flutter", "Firebase", "Firestore", "AWS S3"],
    icon: Music2,
  },
  {
    number: "05",
    title: "HealthSync",
    description:
      "A Compose-first medicine and health tracker combining reminders with an AI-powered conversational assistant.",
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "OpenAI API"],
    icon: HeartPulse,
  },
  {
    number: "06",
    title: "KKN Live",
    description:
      "A web-to-Android news product with categories, search, push notifications, and Play Store release ownership.",
    stack: ["Android", "Java", "Firebase Cloud Messaging"],
    icon: Newspaper,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-shell relative isolate overflow-hidden px-5 py-16 sm:px-6 sm:py-24">
      <div className="section-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="container relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-border pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected case studies</p>
            <h2 className="section-heading">Products with<br /><em>real constraints.</em></h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
            A focused selection of mobile products across cross-platform architecture, AI workflows, and content systems.
          </p>
        </div>

        <Link
          to="/case-studies/construction-cost-estimation"
          className="group mb-3 grid gap-6 rounded-xl border border-border bg-card/95 p-6 shadow-sm transition-all hover:border-foreground/30 hover:shadow-md sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
        >
          <span className="mono text-accent">01</span>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">CostingWizard</h3>
              <Badge variant="secondary" className="rounded-md font-normal">Full case study</Badge>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">Kotlin Multiplatform estimating software for contractors covering estimates, calculations, PDFs, and AI-assisted edits.</p>
          </div>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/case-studies/notask"
          className="group mb-4 grid gap-6 rounded-xl border border-border bg-card/95 p-6 shadow-sm transition-all hover:border-foreground/30 hover:shadow-md sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
        >
          <span className="mono text-accent">02</span>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">NoTask</h3>
              <Badge variant="secondary" className="rounded-md font-normal">Full case study</Badge>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">A Notion-inspired workspace and task manager that explores AI-assisted development through product judgment, system design, and code review.</p>
          </div>
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>

        <div className="divide-y divide-border border-y border-border">
          {caseStudies.map(({ number, title, description, stack, icon: Icon }) => (
            <article key={title} className="group grid gap-4 py-7 sm:py-9 md:grid-cols-[auto_minmax(0,1fr)_minmax(13rem,.7fr)] md:items-start md:gap-8">
              <span className="mono pt-1 text-muted-foreground">{number}</span>
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card transition-colors group-hover:border-foreground/30"><Icon className="h-4 w-4" /></span>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {stack.map((item) => <Badge key={item} variant="secondary" className="rounded-md font-normal text-[10px]">{item}</Badge>)}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><Bot className="h-3.5 w-3.5 text-accent" /> Detailed breakdowns are added as project material becomes available.</p>
      </div>
    </section>
  );
};

export default CaseStudies;
