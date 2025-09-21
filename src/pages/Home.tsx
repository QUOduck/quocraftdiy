import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Palette, Layers } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
const slides = [
  {
    id: 1,
    title: "Explore Paper Models",
    button: "Build Now",
    link: "/gallery",
    icon: Layers,
    gradient: "carousel-slide-blue"
  },
  {
    id: 2,
    title: "Watch Craft Videos", 
    button: "Learn Now",
    link: "/craft-videos",
    icon: Play,
    gradient: "carousel-slide-pink"
  },
  {
    id: 3,
    title: "Fill Colouring Pages",
    button: "Colour",
    link: "/colouring-pages", 
    icon: Palette,
    gradient: "carousel-slide-orange"
  }
];
export default function Home() {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Update current slide index
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSlideClick = useCallback((link: string) => {
    navigate(link);
  }, [navigate]);

  return (
    <div className="min-h-screen relative">
      {/* Hero Carousel */}
      <section className="relative h-screen">
        <Carousel 
          setApi={setApi}
          className="h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => {
              const Icon = slide.icon;
              return (
                <CarouselItem key={slide.id} className="h-screen">
                  <div className={`h-full w-full ${slide.gradient} flex flex-col items-center justify-center text-center px-4 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
                      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/15 animate-pulse delay-700"></div>
                      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/10 animate-pulse delay-1000"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto">
                      {/* QuoCraft Title */}
                      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-black drop-shadow-lg">
                        QuoCraft
                      </h1>
                      
                      {/* Icon */}
                      <div className="mb-8">
                        <Icon className="h-20 w-20 mx-auto text-black/80 drop-shadow-md" />
                      </div>
                      
                      {/* Slide Title */}
                      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-black drop-shadow-md leading-tight">
                        {slide.title}
                      </h2>
                      
                      {/* CTA Button */}
                      <Button
                        onClick={() => handleSlideClick(slide.link)}
                        className="btn-material-glow text-lg md:text-xl px-8 py-4 md:px-12 md:py-6"
                      >
                        {slide.button}
                      </Button>
                    </div>
                    
                    {/* Slide Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-2">
                        {slides.map((_, slideIndex) => (
                          <div
                            key={slideIndex}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              slideIndex === current
                                ? 'bg-white scale-125'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </section>
    </div>
  );
}