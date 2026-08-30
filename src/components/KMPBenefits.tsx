import { Zap, DollarSign, Gauge, Share2 } from "lucide-react";

const KMPBenefits = () => {
  const benefits = [
    { icon: Zap, title: "40% Faster", description: "Development time" },
    { icon: DollarSign, title: "Cost Effective", description: "Reduced expenses" },
    { icon: Gauge, title: "Native Performance", description: "Full speed ahead" },
    { icon: Share2, title: "Code Sharing", description: "Write once, run everywhere" },
  ];

  return (
    <section className="section-shell py-16 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow">The KMP advantage</p><h2 className="section-heading">Less duplicate work.<br /><em>More product velocity.</em></h2></div>
          <p className="max-w-xl text-muted-foreground">Share business logic between iOS and Android while retaining a platform-native experience—faster delivery, lower maintenance, and room to iterate.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl hover:shadow-foreground/5">
              <span className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:rotate-6"><Icon className="h-4 w-4" /></span>
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
