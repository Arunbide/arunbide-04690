import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 framer-badge">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="framer-text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Innovative mobile applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="framer-card cursor-pointer group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationName: 'fade-in',
                  animationDuration: '0.6s',
                  animationFillMode: 'both'
                }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`} />
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon with glassmorphism */}
                    <div className={`p-4 rounded-2xl glass glass-hover bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2.5 rounded-xl glass glass-hover">
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </button>
                      <button className="p-2.5 rounded-xl glass glass-hover">
                        <Github className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <div className="inline-flex items-center gap-1.5 framer-badge text-xs">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="text-primary">{project.highlight}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="framer-badge text-xs px-3 py-1 hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-muted-foreground/80 mb-8 text-lg">
            Want to see more or discuss your project?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="framer-button inline-flex items-center gap-2 text-white font-semibold"
            >
              <Github className="h-5 w-5" />
              View GitHub
            </a>
            <a 
              href="https://fiverr.com/arunbide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium glass glass-hover text-primary border-primary/40"
            >
              <ExternalLink className="h-5 w-5" />
              Hire Me on Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;