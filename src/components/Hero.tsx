import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import { useParallaxBackground } from "@/hooks/useSimpleParallax";
import { gsap } from "gsap";
import { TextRoll } from "@/components/ui/TextRoll";

const Hero = () => {
  const backgroundRef = useParallaxBackground(1.3);
  const contentRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimize content animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.95,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3,
      });
    }

    // Optimize floating elements
    if (sparklesRef.current) {
      const sparkles = sparklesRef.current.children;
      gsap.set(sparkles, {
        willChange: "transform",
        backfaceVisibility: "hidden",
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
          delay: index * 0.5,
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
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
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
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="block"
              whileHover={{
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 },
              }}
            >Real Estate
            </motion.span>
            <motion.span
              className="text-gradient block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(212,175,55,0.4)",
                transition: { duration: 0.3 },
              }}
            >
              Redefined
            </motion.span>
          </motion.h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-accent transition-colors animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
