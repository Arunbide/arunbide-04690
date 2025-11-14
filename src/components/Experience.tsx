import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Calendar, MapPin, Award, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8">
            <Award className="h-5 w-5" />
            <span className="font-bold">Background 📚</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            My journey in software development and continuous learning 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div className="space-y-10 animate-slide-up">
            <h3 className="text-4xl font-bold mb-10 flex items-center gap-4">
              <div className="p-4 rounded-2xl animated-gradient">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="gradient-text">Work Experience</span>
            </h3>
            
            <Card className="group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      Freelance Android Developer
                    </CardTitle>
                    <CardDescription className="text-lg font-bold gradient-text">
                      Bank UP
                    </CardDescription>
                  </div>
                  <Badge className="gradient-badge">
                    Freelance
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 glow-pulse"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Developed bank locator app with bonus offers and referral system, 
                      enhancing user engagement and promoting financial services
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Resolved technical issues and enhanced application performance through 
                      systematic debugging and optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Managed Google Play Console operations and ensured compliance with 
                      platform policies and guidelines
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Collaborated with development team on feature planning and 
                      learned industry best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      Freelance Developer
                    </CardTitle>
                    <CardDescription className="text-lg font-bold gradient-text">
                      Fiverr Platform
                    </CardDescription>
                  </div>
                  <Badge className="gradient-badge">
                    Freelance
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Successfully delivered 50+ Android projects with 5-star ratings
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Specialized in Kotlin, Jetpack Compose, KMP, and AI integration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Built strong client relationships through quality work and communication
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-4xl font-bold mb-10 flex items-center gap-4">
              <div className="p-4 rounded-2xl animated-gradient">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="gradient-text">Education</span>
            </h3>
            
            <Card className="group">
              <CardHeader>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                  Bachelor of Computer Applications
                </CardTitle>
                <CardDescription className="text-lg font-bold gradient-text mb-2">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-muted-foreground/70">
                  <Calendar className="h-4 w-4" />
                  <span>2020 - 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground/70 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madhya Pradesh, India</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Focused on Software Development, Data Structures, and Mobile App Development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Built strong foundation in programming concepts and software engineering principles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      Completed multiple projects in Android development and web technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;