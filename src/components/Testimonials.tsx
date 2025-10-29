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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 framer-badge">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            What Clients Say About<br />
            <span className="framer-text-gradient">Working With Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto">
            Real feedback from clients I've had the pleasure to work with
          </p>
        </div>
        
        {/* Testimonials Carousel - Single Card */}
        <div className="mb-16">
          <Carousel
            setApi={setApi}
            className="w-full max-w-3xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="framer-card h-full group">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Quote Icon with glassmorphism */}
                      <div className="mb-6">
                        <div className="inline-flex p-3 rounded-2xl glass">
                          <Quote className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-base text-foreground/90 leading-relaxed mb-8 flex-grow">
                        "{testimonial.review}"
                      </p>
                      
                      {/* Rating with glow */}
                      <div className="flex items-center gap-1.5 mb-6">
                        {renderStars(testimonial.rating)}
                        <span className="text-sm font-semibold ml-2 text-primary">
                          {testimonial.rating}
                        </span>
                      </div>
                      
                      {/* Author Info with better visual hierarchy */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-base font-bold text-primary">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-0.5">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.role} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats with glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "5+", label: "Happy Clients" },
            { value: "4.9", label: "Average Rating" },
            { value: "10+", label: "Projects Done" },
            { value: "100%", label: "Success Rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-3xl glass glass-hover"
            >
              <div className="text-4xl md:text-5xl font-bold framer-text-gradient mb-3">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;