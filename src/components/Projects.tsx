import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Newspaper, Cloud, Contact as ContactIcon, Heart, Lock, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bhakti Point",
      description: "Flutter app for streaming spiritual music and kathas with dynamic content management via Firebase and AWS S3.",
      tech: ["Flutter", "Firebase", "AWS S3"],
      icon: Music,
    },
    {
      title: "KKN Live",
      description: "Real-time news app with category filtering, search, and push notifications.",
      tech: ["Java", "FCM", "XML"],
      icon: Newspaper,
    },
    {
      title: "CloudTrack",
      description: "Weather app using live location and OpenWeather API with adaptive UI.",
      tech: ["Kotlin", "Retrofit", "OpenWeather API"],
      icon: Cloud,
    },
    {
      title: "Contact App",
      description: "Modern contact manager built with Jetpack Compose, Room and clean architecture.",
      tech: ["Compose", "Kotlin", "Room", "Hilt", "MVVM"],
      icon: ContactIcon,
    },
    {
      title: "HealthSync",
      description: "Health and medicine tracker with an AI chatbot powered by the OpenAI API.",
      tech: ["Kotlin", "Compose", "MVVM", "Hilt", "OpenAI API"],
      icon: Heart,
    },
    {
      title: "SoulScribe",
      description: "Privacy-first journaling app with app lock for secure, organized notes.",
      tech: ["Kotlin", "Compose", "MVVM", "Room", "Hilt"],
      icon: Lock,
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 px-5 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selected Work
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
          A few apps I've built
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
          From spiritual-music streaming to AI health trackers — shipped end-to-end.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative border border-border rounded-xl p-5 bg-secondary/20 hover:bg-secondary/40 hover:border-foreground/20 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background mb-4 transition-colors group-hover:border-foreground/30">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-base sm:text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center text-[11px] text-foreground/75 bg-background border border-border rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
