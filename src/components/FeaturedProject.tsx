import { Apple, Play, ArrowUpRight, Sparkles, FileText, Calculator, Bot } from "lucide-react";
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
  { icon: Bot, label: "AI-powered editing" },
];

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-16 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Featured Project · Live on stores
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
              CostingWizard — Quote & Cost
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A Kotlin Multiplatform app for contractors to build cost estimates, manage projects,
              generate PDF reports, and edit data through an AI assistant — shipped on both Android
              and iOS from a single codebase.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Kotlin Multiplatform", "Compose Multiplatform", "iOS", "Android", "AI"].map((t) => (
              <Badge key={t} variant="secondary" className="rounded-md font-normal">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main card */}
        <div className="border border-border rounded-2xl overflow-hidden bg-secondary/30">
          {/* Screenshots row */}
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/40 px-4 sm:px-8 pt-8 pb-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="group relative aspect-[9/19] rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer / details */}
          <div className="p-6 sm:p-8 border-t border-border">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/85">{label}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  <span className="font-semibold text-foreground">My role:</span> Built shared
                  business logic, networking, and UI in Compose Multiplatform — shipped natively to
                  iOS and Android with a single Kotlin codebase.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Stack:</span> Kotlin, KMP,
                  Compose Multiplatform, Ktor, SQLDelight, OpenAI API.
                </p>
              </div>
            </div>

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
