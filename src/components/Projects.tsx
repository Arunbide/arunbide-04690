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
    <section id="projects" className="section-shell py-20 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="section-heading">Built with craft.<br /><em>Shipped with care.</em></h2></div>
          <p className="max-w-xl text-muted-foreground">A selection of products spanning music, news, health, and everyday utility—each shaped around a real use case.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="project-card group relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                <span className="mb-12 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-medium text-foreground/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => window.open("https://www.upwork.com/freelancers/arunbide", "_blank")}
            className="rounded-md w-full sm:w-auto"
          >
            <ExternalLink className="h-4 w-4 mr-2" /> Hire on Upwork
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("https://www.fiverr.com/arunbide", "_blank")}
            className="rounded-md w-full sm:w-auto"
          >
            <ExternalLink className="h-4 w-4 mr-2" /> Hire on Fiverr
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
