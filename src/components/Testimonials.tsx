import { Quote, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    { name: "Gilad", country: "Client", rating: 5, review: "Arun did an excellent job developing my Kotlin Multiplatform app. He is highly dedicated, reliable, and consistently delivers high-quality work on time. Communication was smooth throughout the project, and he was always willing to go the extra mile to solve issues and improve the product. I highly recommend working with Arun." },
    { name: "sireeshaba", country: "United States", rating: 5, review: "Arun's contribution to our project was nothing short of exceptional. Clean, well-documented code that significantly contributed to the success of the project." },
    { name: "atreyarao", country: "India", rating: 5, review: "Exceptional work in app testing. Attention to detail, expertise, and professionalism truly stand out." },
    { name: "activealex", country: "United Kingdom", rating: 5, review: "Pleasure to work with. Very professional, helpful and patient!" },
    { name: "kknlive", country: "India", rating: 5, review: "Did an exceptional job updating my app. Attention to detail is remarkable — incredibly polite and professional." },
    { name: "sireeshaba", country: "United States", rating: 4.3, review: "Met expectations and responsive to queries." },
    { name: "tengohambre", country: "Canada", rating: 5, review: "Arun went above and beyond to complete the work. Would definitely hire him again." },
    { name: "tengohambre", country: "Canada", rating: 5, review: "Really enjoy working with Arun, will keep ordering his services." },
  ];

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const partial = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < full; i++) {
      stars.push(<Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />);
    }
    if (partial) {
      stars.push(
        <div key="p" className="relative">
          <Star className="w-3.5 h-3.5 text-muted-foreground/30" />
          <Star className="w-3.5 h-3.5 fill-foreground text-foreground absolute inset-0" style={{ clipPath: "inset(0 50% 0 0)" }} />
        </div>
      );
    }
    return stars;
  };

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section id="testimonials" className="section-shell py-16 sm:py-24 px-5 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-2 md:items-end mb-10">
          <div><p className="eyebrow">Client notes</p><h2 className="section-heading">What clients<br /><em>say.</em></h2></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            Client feedback from shipped work across mobile, AI, and product delivery.
          </p>
        </div>

        <div className="mb-8 grid overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:mb-10 sm:grid-cols-3">
          <div className="border-b border-border p-4 sm:border-b-0 sm:border-r sm:p-5">
            <p className="text-2xl font-semibold tracking-tight">10+</p>
            <p className="mt-1 text-xs text-muted-foreground">Projects delivered</p>
          </div>
          <div className="border-b border-border p-4 sm:border-b-0 sm:border-r sm:p-5">
            <p className="text-2xl font-semibold tracking-tight">100%</p>
            <p className="mt-1 text-xs text-muted-foreground">Success rate</p>
          </div>
          <div className="p-4 sm:p-5">
            <p className="text-2xl font-semibold tracking-tight">4.9 / 5</p>
            <p className="mt-1 text-xs text-muted-foreground">Average rating</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-sm sm:p-9">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/15 sm:right-8 sm:top-8" />
                    <div className="mb-5 flex items-center gap-1">{renderStars(t.rating)}</div>
                    <p className="max-w-2xl text-lg leading-relaxed tracking-tight text-foreground/90 sm:text-xl">“{t.review}”</p>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-muted-foreground">{t.country}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-6">
              <CarouselPrevious className="relative static h-9 w-9 translate-y-0 rounded-md border-border bg-card shadow-sm" />
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i + 1 === current ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static h-9 w-9 translate-y-0 rounded-md border-border bg-card shadow-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
