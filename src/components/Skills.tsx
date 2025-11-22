import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Users, Brain, Zap, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cross-Platform Development",
      icon: <Star className="h-6 w-6" />,
      skills: ["Kotlin Multiplatform (KMP)", "Compose Multiplatform (CMP)", "Shared Business Logic", "iOS & Android"],
      color: "from-primary to-accent",
      featured: true
    },
    {
      title: "Native Android",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Jetpack Compose", "Android SDK", "Kotlin", "Material Design 3", "Android Studio"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Architecture & Patterns",
      icon: <Zap className="h-6 w-6" />,
      skills: ["MVVM", "Clean Architecture", "Coroutines & Flow", "Dependency Injection", "Retrofit"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: ["Firebase", "Room Database", "RESTful APIs", "Cloud Storage", "AWS S3"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["OpenAI API", "GPT-5 Integration", "AI Model Fine-tuning", "Prompt Engineering", "AI-Powered Apps"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Modern Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Git & GitHub", "Google Play Console", "App Analytics", "CI/CD", "Agile Development"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8 animate-glow-pulse">
            <Star className="h-5 w-5 animate-spin-slow" />
            <span className="font-bold text-sm tracking-wide">TECHNICAL MASTERY</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05] tracking-tighter">
            <span className="gradient-text">Extraordinary Skills</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Building next-generation cross-platform solutions with <span className="neon-text font-semibold">Kotlin Multiplatform</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`animate-fade-in ${
                category.featured ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full relative group overflow-hidden border-border/40 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {category.featured && (
                  <div className="absolute top-0 right-0 gradient-badge text-xs px-4 py-2 rounded-bl-2xl rounded-tr-lg backdrop-blur-xl border-l border-b border-border/30 animate-glow-pulse">
                    <span className="neon-text">★ SPECIALTY</span>
                  </div>
                )}
                
                <CardHeader className={category.featured ? "pb-6 relative z-10" : "pb-5 relative z-10"}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className={`${category.featured ? "text-3xl md:text-4xl" : "text-xl"} group-hover:gradient-text transition-all duration-300 font-bold tracking-tight`}>
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className={`flex flex-wrap gap-2.5 ${category.featured ? 'justify-center' : ''}`}>
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`px-4 py-2 ${category.featured ? 'text-sm' : 'text-xs'} font-medium bg-muted/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30 hover:text-primary hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default backdrop-blur-sm`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;