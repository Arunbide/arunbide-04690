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
    <section id="testimonials" className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Reviews</h2>
        <p className="text-muted-foreground mb-10">What clients say about working with me.</p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="border border-border rounded-lg p-5 text-center">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-xs text-muted-foreground mt-1">Projects done</p>
          </div>
          <div className="border border-border rounded-lg p-5 text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-muted-foreground mt-1">Success rate</p>
          </div>
          <div className="border border-border rounded-lg p-5 text-center">
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-xs text-muted-foreground mt-1">Average rating</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-1 mb-3">{renderStars(t.rating)}</div>
                    <p className="text-foreground/90 leading-relaxed mb-5">"{t.review}"</p>
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
