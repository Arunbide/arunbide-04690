import { Star } from "lucide-react";
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
          A consistent 5-star track record across freelance platforms.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">
          <div className="review-stat rounded-2xl border border-border p-4 sm:p-5 text-center bg-card/50">
            <p className="text-xl sm:text-2xl font-bold">10+</p>
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">Projects done</p>
          </div>
          <div className="review-stat rounded-2xl border border-border p-4 sm:p-5 text-center bg-card/50">
            <p className="text-xl sm:text-2xl font-bold">100%</p>
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">Success rate</p>
          </div>
          <div className="review-stat rounded-2xl border border-border p-4 sm:p-5 text-center bg-card/50">
            <p className="text-xl sm:text-2xl font-bold">4.9</p>
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">Avg. rating</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="testimonial-card rounded-3xl border border-border bg-card/70 p-7 sm:p-9 shadow-xl shadow-foreground/[.03]">
                    <div className="flex items-center gap-1 mb-3">{renderStars(t.rating)}</div>
                    <p className="text-lg sm:text-xl tracking-tight text-foreground/90 leading-relaxed mb-7">“{t.review}”</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold">{t.name}</span>
                      <span className="text-muted-foreground">{t.country}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-6 mt-6">
              <CarouselPrevious className="relative static translate-y-0 h-9 w-9 rounded-full" />
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
              <CarouselNext className="relative static translate-y-0 h-9 w-9 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
