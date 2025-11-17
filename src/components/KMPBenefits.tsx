import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, DollarSign, Gauge, Share2 } from "lucide-react";

const KMPBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "40% Faster",
      description: "Development time",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Reduced expenses",
    },
    {
      icon: Gauge,
      title: "Native Performance",
      description: "Full speed ahead",
    },
    {
      icon: Share2,
      title: "Code Sharing",
      description: "Write once, run everywhere",
    },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="gradient-badge mb-6">
              <span className="font-bold">Why KMP?</span>
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Why Choose <span className="gradient-text">KMP</span> for<br />
              Your Next Project?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Kotlin Multiplatform lets you share business logic between iOS and Android while keeping native UI. 
              This means faster development, less code duplication, and reduced costs — perfect for startups and growing businesses.
            </p>
          </div>

          <Card className="animate-fade-in group hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="mb-4 mx-auto h-16 w-16 rounded-full flex items-center justify-center animated-gradient group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/80">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KMPBenefits;
