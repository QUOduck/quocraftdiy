import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Slide {
  id: number;
  backgroundClass: string;
  headline1: string;
  headline2: string;
  buttonText: string;
  buttonRoute: string;
}

const slides: Slide[] = [
  {
    id: 1,
    backgroundClass: 'hero-slide-blue',
    headline1: 'Explore',
    headline2: 'Paper Models',
    buttonText: 'Build Now',
    buttonRoute: '/gallery'
  },
  {
    id: 2,
    backgroundClass: 'hero-slide-pink',
    headline1: 'Watch',
    headline2: 'Craft Videos',
    buttonText: 'Learn Now',
    buttonRoute: '/craft-videos'
  },
  {
    id: 3,
    backgroundClass: 'hero-slide-yellow',
    headline1: 'Fill',
    headline2: 'Colouring Pages',
    buttonText: 'Colour',
    buttonRoute: '/colouring-pages'
  }
];

const sidebarItems = [
  { label: 'Home', route: '/' },
  { label: 'Explore Paper Models', route: '/gallery' },
  { label: 'Watch Videos', route: '/craft-videos' },
  { label: 'Colouring Pages', route: '/colouring-pages' },
  { label: 'Information', route: '/information' }
];

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 25,
      dragFree: false
    },
    [Autoplay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return;
    
    if (isHovered) {
      emblaApi.plugins().autoplay?.stop();
    } else {
      emblaApi.plugins().autoplay?.play();
    }
  }, [emblaApi, isHovered]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
      if (e.key === 'ArrowLeft' && !sidebarOpen) {
        scrollPrev();
      }
      if (e.key === 'ArrowRight' && !sidebarOpen) {
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, scrollPrev, scrollNext]);

  const handleButtonClick = (route: string) => {
    navigate(route);
  };

  const handleSidebarItemClick = (route: string) => {
    navigate(route);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div 
        className={`sidebar-content ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6 text-black" />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-4">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSidebarItemClick(item.route)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-black hover:bg-black/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-6 left-6 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6 text-black" />
      </button>

      {/* Main Carousel */}
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0">
                <div className={`slide-content ${slide.backgroundClass}`}>
                  {/* QuoCraft Brand */}
                  <div className="slide-title">
                    QuoCraft
                  </div>
                  
                  {/* Main Headline */}
                  <div className="mb-8">
                    <div className="slide-headline">
                      {slide.headline1}
                    </div>
                    <div className="slide-headline-bold">
                      {slide.headline2}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={() => handleButtonClick(slide.buttonRoute)}
                    className="hero-button"
                    aria-label={`${slide.buttonText} - Navigate to ${slide.headline2.toLowerCase()}`}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Live region for screen readers */}
        <div 
          className="sr-only" 
          aria-live="polite" 
          aria-atomic="true"
        >
          Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide]?.headline1} {slides[currentSlide]?.headline2}
        </div>
      </div>
    </>
  );
}