import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-building.jpg';
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
  const backgroundRef = useParallax(0.5);
  const contentRef = useParallax(0.2);
  const overlayRef = useParallax(0.3);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background layer - slowest */}
      <div 
        ref={backgroundRef as any}
        className="parallax-element scale-110"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay layer - medium speed */}
      <div 
        ref={overlayRef as any}
        className="parallax-element"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-drift opacity-20">
        <Sparkles className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute top-40 right-20 animate-sway opacity-30">
        <Sparkles className="w-4 h-4 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-25">
        <Sparkles className="w-5 h-5 text-accent" />
      </div>
      
      {/* Content layer - fastest */}
      <div ref={contentRef as any} className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-6 animate-slide-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg animate-fade-in">
            Luxury Real Estate
            <span className="text-gradient block animate-pulse-slow">Redefined</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Where sophisticated marketing meets exceptional properties. 
            Aurex & Fields delivers unparalleled real estate solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="btn-luxury text-lg px-8 py-4 hover:scale-105 transition-transform">
              Explore Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-accent transition-colors" />
      </div>
    </section>
  );
};

export default Hero;