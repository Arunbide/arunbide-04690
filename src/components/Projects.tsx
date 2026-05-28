import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Newspaper, Cloud, Contact as ContactIcon, Heart, Lock } from "lucide-react";

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
    <section id="projects" className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Selected Work</h2>
        <p className="text-muted-foreground mb-10">A few apps I've built recently.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group border border-border rounded-lg p-5 hover:border-foreground/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <Icon className="h-5 w-5 mb-4 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-accent" />
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground font-normal text-xs rounded-md px-2 py-0.5"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => window.open("https://www.upwork.com/freelancers/arunbide", "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" /> Hire on Upwork
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("https://www.fiverr.com/arunbide", "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" /> Hire on Fiverr
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
