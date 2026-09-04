import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Newspaper, Cloud, Contact as ContactIcon, Heart, Gamepad2, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GameHub",
      description:
        "Cross-platform game discovery app on the RAWG API — shared domain and data layers, pagination, caching and shimmer loading, built for Android, Desktop and Web.",
      tech: ["Kotlin Multiplatform", "Compose MP", "Ktor", "Koin", "MVVM", "RAWG API"],
      icon: Gamepad2,
    },
    {
      title: "BhaktiPoint",
      description:
        "Spiritual music and discourse streaming app with dynamic content management, so media updates ship without an app release.",
      tech: ["Flutter", "Firebase", "Firestore", "AWS S3"],
      icon: Music,
    },
    {
      title: "HealthSync",
      description:
        "Health and medicine tracker with an AI conversational assistant, medication reminders and a Compose-first interface.",
      tech: ["Kotlin", "Compose", "MVVM", "Dagger Hilt", "OpenAI API"],
      icon: Heart,
    },
    {
      title: "CloudTrack",
      description: "Location-based weather app with live REST data and a UI that adapts to current conditions.",
      tech: ["Kotlin", "Retrofit", "OpenWeather API"],
      icon: Cloud,
    },
    {
      title: "KKN Live",
      description:
        "News app converting a web experience into Android — categories, search and push notifications, published to Play.",
      tech: ["Java", "XML", "Firebase Cloud Messaging"],
      icon: Newspaper,
    },
    {
      title: "Contact App",
      description: "Modern contact manager built with Jetpack Compose, Room and clean architecture.",
      tech: ["Compose", "Kotlin", "Room", "Hilt", "MVVM"],
      icon: ContactIcon,
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
