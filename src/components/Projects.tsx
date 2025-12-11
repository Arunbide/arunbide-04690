import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Music, Newspaper, Cloud, Contact, Heart, Lock, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bhakti Point",
      description: "A Flutter application for streaming spiritual music and kathas. Fully dynamic content management using Firebase and AWS S3 for storage.",
      tech: ["Flutter", "Firebase", "AWS S3"],
      highlight: "Dynamic content management",
      icon: Music,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "KKN Live",
      description: "Real-time news app with category-based filtering, search functionality, push notifications, and intuitive user interface.",
      tech: ["Java", "FMS", "XML"],
      highlight: "Real-time news delivery",
      icon: Newspaper,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "CloudTrack",
      description: "Weather tracking app using live location and OpenWeather API. Dynamic UI that adapts to weather conditions.",
      tech: ["Kotlin", "Retrofit", "OpenWeather API"],
      highlight: "Dynamic weather-based UI",
      icon: Cloud,
      gradient: "from-blue-400/20 to-sky-400/20"
    },
    {
      title: "Contact App",
      description: "Modern contact management app built with Jetpack Compose, featuring Room database and clean architecture.",
      tech: ["Jetpack Compose", "Kotlin", "Room", "Dagger-Hilt", "MVVM"],
      highlight: "Modern Android architecture",
      icon: Contact,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "HealthSync",
      description: "Health and medicine tracker with AI-powered chatbot using OpenAI API for personalized health advice and medication reminders.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger Hilt", "OpenAI API"],
      highlight: "AI-powered health assistant",
      icon: Heart,
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      title: "SoulScribe",
      description: "Personal journaling app with privacy-first features including app lock. Secure and organized note-keeping application.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Dagger Hilt"],
      highlight: "Privacy-focused design",
      icon: Lock,
      gradient: "from-slate-500/20 to-gray-500/20"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold">Portfolio ✨</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Innovative mobile applications built with modern technologies and best practices 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <Card className="h-full cursor-pointer group relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge className="gradient-badge mb-4 w-fit">
                      {project.highlight}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs font-medium bg-muted/50 hover:bg-muted transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* GitHub & Fiverr Links */}
        <div className="mt-20 text-center animate-scale-in">
          <p className="text-lg text-muted-foreground/80 mb-8">
            Want to see more? Check out my profiles 👇
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8"
              onClick={() => window.open('https://github.com/ArunBisht/Kotlin-Multiplatform-Apps-portfolio', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8"
              onClick={() => window.open('https://www.fiverr.com/arunbide', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Hire on Fiverr
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8"
              onClick={() => window.open('https://www.upwork.com/freelancers/arunbide', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Hire on Upwork
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;