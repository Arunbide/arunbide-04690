import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      name: "sireeshaba",
      role: "Repeat Client",
      company: "United States",
      rating: 5,
      review: "Arun's contribution to our project was nothing short of exceptional. His coding skills were top-notch, delivering clean and well-documented code that significantly contributed to the success of the project."
    },
    {
      name: "atreyarao",
      role: "Client", 
      company: "India",
      rating: 5,
      review: "Arun has delivered exceptional work in app testing. His attention to detail, expertise, and professionalism truly stand out. I highly recommend him for any app testing projects."
    },
    {
      name: "activealex",
      role: "Client",
      company: "United Kingdom",
      rating: 5,
      review: "Pleasure to work with. Very professional, helpful and patient!"
    },
    {
      name: "kknlive",
      role: "Client",
      company: "India",
      rating: 5,
      review: "Arun did an exceptional job updating my app. Their attention to detail is remarkable, ensuring everything was handled with precision. They are incredibly polite and professional."
    },
    {
      name: "sireeshaba",
      role: "Repeat Client",
      company: "United States",
      rating: 4.3,
      review: "Met expectation and responsive to queries"
    },
    {
      name: "tengohambre",
      role: "Repeat Client",
      company: "Canada",
      rating: 5,
      review: "Arun went above and beyond to complete the work I gave him. I would defintly hire him again."
    },
    {
      name: "tengohambre",
      role: "Repeat Client",
      company: "Canada",
      rating: 5,
      review: "I really enjoy working with Arun, will keep order his services"
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      );
    }

    if (hasPartialStar) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="w-4 h-4 text-muted-foreground/30" />
          <Star 
            className="w-4 h-4 fill-amber-400 text-amber-400 absolute inset-0" 
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        </div>
      );
    }

    return stars;
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-32 px-4 relative">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 gradient-badge mb-8">
            <Quote className="h-5 w-5" />
            <span className="font-bold">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            What Clients Say<br />
            <span className="gradient-text">About Working With Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied clients across the globe 🌍
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-20">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-2 mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      
                      <p className="text-base text-muted-foreground/90 mb-8 leading-relaxed">
                        "{testimonial.review}"
                      </p>
                      
                      <div className="border-t border-border/50 pt-6">
                        <p className="font-bold text-lg text-foreground mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-6 mt-12">
              <CarouselPrevious className="relative static translate-y-0 h-12 w-12 rounded-full glass-card hover:bg-primary/20" />
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index + 1 === current 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
              <CarouselNext className="relative static translate-y-0 h-12 w-12 rounded-full glass-card hover:bg-primary/20" />
            </div>
          </Carousel>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                10+
              </div>
              <p className="text-muted-foreground/70 text-sm">Projects Done</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                5+
              </div>
              <p className="text-muted-foreground/70 text-sm">Happy Clients</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                4.9
              </div>
              <p className="text-muted-foreground/70 text-sm">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;