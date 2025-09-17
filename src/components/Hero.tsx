import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-building.jpg';
import { useParallaxBackground, useParallaxContent } from '@/hooks/useSimpleParallax';
import { gsap } from 'gsap';
import { TextRoll } from "@/components/ui/TextRoll";


const Hero = () => {
  const backgroundRef = useParallaxBackground(1.3);
  const contentRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimize content animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }

    // Optimize floating elements
    if (sparklesRef.current) {
      const sparkles = sparklesRef.current.children;
      gsap.set(sparkles, { 
        willChange: "transform",
        backfaceVisibility: "hidden"
      });
      
      // Create smooth floating animations
      Array.from(sparkles).forEach((sparkle, index) => {
        gsap.to(sparkle, {
          y: -20,
          rotation: 360,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5
        });
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with simple-parallax-js */}
      <img 
        ref={backgroundRef as any}
        src={heroImage}
        alt="Luxury Real Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Optimized floating elements */}
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 gpu-accelerated">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <div className="absolute top-40 right-20 opacity-30 gpu-accelerated">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 gpu-accelerated">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
      </div>
      
      {/* Content layer */}
      <div className="relative z-20 flex items-center justify-center h-full text-center">
        <div ref={contentRef} className="max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
            <TextRoll> Luxury Real Estate</TextRoll>
            <span className="text-gradient block">Redefined</span>
            
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Where sophisticated marketing meets exceptional properties. 
            Aurex & Fields delivers unparalleled real estate solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-accent transition-colors animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;