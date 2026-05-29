import { Apple, Play, ArrowUpRight, Sparkles, FileText, Calculator, Bot, Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import shot1 from "@/assets/costingwizard-1.png";
import shot2 from "@/assets/costingwizard-2.png";
import shot3 from "@/assets/costingwizard-3.png";
import shot4 from "@/assets/costingwizard-4.png";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.tovsoftware.costingapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dpricing_section%26utm_campaign%3Dcosting_wizard%26utm_content%3Dpricing_cta";
const APP_STORE_URL = "https://apps.apple.com/us/app/costingwizard-quote-cost/id6742328319";

const screenshots = [
  { src: shot1, alt: "CostingWizard — create cost estimates in minutes" },
  { src: shot2, alt: "CostingWizard — automatic item and resource calculations" },
  { src: shot3, alt: "CostingWizard — generate professional reports instantly" },
  { src: shot4, alt: "CostingWizard — tell the AI what to change" },
];

const highlights = [
  { icon: Calculator, label: "Cost estimates in minutes" },
  { icon: Sparkles, label: "Automatic item & resource calc" },
  { icon: FileText, label: "Professional PDF reports" },
  { icon: Bot, label: "AI assistant — edit by chat" },
];

const stack = [
  "Kotlin Multiplatform",
  "Compose Multiplatform",
  "WASM Multiplatform",
  "iOS",
  "Android",
  "OpenAI",
  "Anthropic",
  "Claude Vision",
  "Gemini OCR",
];

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-14 sm:py-20 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Featured Project
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
              CostingWizard — Quote & Cost
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              A Kotlin Multiplatform app for contractors to build estimates, manage projects,
              generate PDF reports, and edit data through an AI assistant — shipped natively on
              iOS and Android from a single codebase.
            </p>
          </div>
        </div>

        {/* Main card */}
        <div className="group/card border border-border rounded-2xl overflow-hidden bg-secondary/30 transition-all duration-500 hover:border-foreground/20">
          {/* Screenshots row */}
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/40 px-4 sm:px-8 pt-6 sm:pt-10 pb-4 sm:pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="group relative aspect-[9/19] rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${i * 90}ms`, animationFillMode: "backwards" }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer / details */}
          <div className="p-5 sm:p-8 border-t border-border">
            {/* Stack chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              {stack.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-md font-normal text-[11px] sm:text-xs"
                >
                  {t}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-8 mb-7">
              {/* Highlights */}
              <div className="space-y-2.5">
                {highlights.map(({ icon: Icon, label }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-sm group/row animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-all duration-300 group-hover/row:border-foreground/40 group-hover/row:scale-105">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/85">{label}</span>
                  </div>
                ))}
              </div>

              {/* Gilad testimonial */}
              <div className="relative rounded-xl border border-border bg-background/60 p-5 sm:p-6">
                <Quote className="absolute top-4 right-4 h-5 w-5 text-muted-foreground/30" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                  "Arun did an excellent job developing my Kotlin Multiplatform app. Highly
                  dedicated, reliable, and consistently delivers high-quality work on time.
                  Communication was smooth and he always went the extra mile. Highly recommend
                  working with Arun."
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">Gilad</span>
                  <span className="text-muted-foreground">Client · CostingWizard</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => window.open(APP_STORE_URL, "_blank")}
                className="rounded-md group w-full sm:w-auto"
              >
                <Apple className="h-4 w-4 mr-2" /> App Store
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(PLAY_URL, "_blank")}
                className="rounded-md group w-full sm:w-auto"
              >
                <Play className="h-4 w-4 mr-2" /> Google Play
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
