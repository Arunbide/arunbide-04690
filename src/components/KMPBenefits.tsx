import { Zap, DollarSign, Gauge, Share2 } from "lucide-react";

const KMPBenefits = () => {
  const benefits = [
    { icon: Zap, title: "40% Faster", description: "Development time" },
    { icon: DollarSign, title: "Cost Effective", description: "Reduced expenses" },
    { icon: Gauge, title: "Native Performance", description: "Full speed ahead" },
    { icon: Share2, title: "Code Sharing", description: "Write once, run everywhere" },
  ];

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Kotlin Multiplatform?</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Share business logic between iOS and Android while keeping native UI — faster delivery,
          less duplication, lower cost.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="border border-border rounded-lg p-5">
              <Icon className="h-5 w-5 mb-3 text-foreground" />
              <p className="font-bold mb-1">{title}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KMPBenefits;
