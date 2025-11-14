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
    <section id="skills" className="py-32 px-4 relative">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8">
            <Star className="h-5 w-5" />
            <span className="font-bold">Technical Expertise 💻</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="gradient-text">What I Do Best</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Building scalable cross-platform solutions with <span className="neon-text font-semibold">Kotlin Multiplatform</span> ⚡
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`animate-fade-in ${
                category.featured ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full relative group">
                {category.featured && (
                  <div className="absolute top-0 right-0 gradient-badge text-sm px-5 py-2 rounded-bl-3xl rounded-tr-3xl">
                    ⭐ Specialty
                  </div>
                )}
                
                <CardHeader className={category.featured ? "pb-6" : "pb-5"}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className={`${category.featured ? "text-3xl" : "text-xl"} group-hover:text-primary transition-colors`}>
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className={`flex flex-wrap gap-3 ${category.featured ? 'justify-center' : ''}`}>
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`px-4 py-2 ${category.featured ? 'text-sm' : 'text-xs'} font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all cursor-default`}
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