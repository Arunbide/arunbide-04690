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
    <section id="skills" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 framer-badge mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="framer-text-gradient">Specialized in Modern<br />Mobile Development</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Building scalable cross-platform solutions with <span className="text-primary font-semibold">Kotlin Multiplatform</span> and native Android development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`framer-card transition-spring group relative overflow-hidden ${
                category.featured ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {category.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-bl-2xl text-xs font-semibold">
                  ⭐ Specialty
                </div>
              )}
              
              <CardHeader className={category.featured ? "pb-6" : "pb-5"}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                    {category.icon}
                  </div>
                  <CardTitle className={category.featured ? "text-2xl" : "text-lg"}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className={`flex flex-wrap gap-2 ${category.featured ? 'justify-center' : ''}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`framer-badge ${
                        category.featured 
                          ? 'px-5 py-2.5 text-sm font-medium' 
                          : 'px-3 py-1.5 text-xs'
                      } hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="framer-card max-w-4xl mx-auto">
            <CardContent className="p-10 md:p-14">
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-[1.2] tracking-tight">
                <span className="framer-text-gradient">Why Choose KMP for<br />Your Next Project?</span>
              </h3>
              <p className="text-muted-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                Kotlin Multiplatform lets you share business logic between iOS and Android while keeping native UI. 
                This means <span className="text-primary font-semibold">faster development</span>, <span className="text-primary font-semibold">less code duplication</span>, and <span className="text-primary font-semibold">reduced costs</span> — perfect for startups and growing businesses.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="framer-badge py-3 px-4">
                  ⚡ 40% Faster
                </div>
                <div className="framer-badge py-3 px-4">
                  💰 Cost Effective
                </div>
                <div className="framer-badge py-3 px-4">
                  📱 Native Performance
                </div>
                <div className="framer-badge py-3 px-4">
                  🔄 Code Sharing
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;