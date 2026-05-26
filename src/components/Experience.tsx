import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      title: "Kotlin Multiplatform Developer",
      company: "Stealth Startup",
      type: "Freelance",
      meta: "Sep 2025 — Present · Remote (Vaughan, ON, Canada)",
      bullets: [
        "V2 redesign in Material 3, unifying Android, iOS, and Web (WASM) with Kotlin Multiplatform.",
        "Built shared business logic, reusable Compose components, and improved cross-platform scalability.",
      ],
    },
    {
      title: "Freelance Android Developer",
      company: "Bank UP",
      type: "Freelance",
      meta: "Contract",
      bullets: [
        "Built a bank locator app with bonus offers and a referral system to drive engagement.",
        "Debugged and optimized performance; managed Google Play Console releases and policy compliance.",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Fiverr Platform",
      type: "Freelance",
      meta: "Ongoing",
      bullets: [
        "Shipped multiple Android apps using Firebase and modern Android practices.",
        "Owned the full lifecycle from build to publish with high client satisfaction.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-4 mb-12">
          {jobs.map((j) => (
            <div key={j.title + j.company} className="border border-border rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold">{j.title}</h3>
                  <p className="text-sm text-muted-foreground">{j.company}</p>
                </div>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-normal rounded-md">
                  {j.type}
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                <Calendar className="h-3.5 w-3.5" />
                <span>{j.meta}</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                {j.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
        <div className="border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-1">Bachelor in Computer Science</h3>
          <p className="text-sm text-muted-foreground mb-3">Dr. Babasaheb Ambedkar Marathwada University</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> 2022 — 2025</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Maharashtra, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
