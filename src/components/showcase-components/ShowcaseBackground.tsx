import React from "react";
import { motion } from "framer-motion";
import { Building, Home, Sparkles } from "lucide-react";
import { useParallaxBackground, useParallaxContent, useParallaxHorizontal } from "@/hooks/useSimpleParallax";

interface ShowcaseBackgroundProps {
  backgroundY: any; // Framer Motion transform value
  backgroundImages: string[];
}

const ShowcaseBackground: React.FC<ShowcaseBackgroundProps> = ({ backgroundY, backgroundImages }) => {
  const backgroundRef = useParallaxBackground(1.1);
  const overlayRef = useParallaxContent("down", 0.4);
  const floatingLeftRef = useParallaxHorizontal("left", 1.05);
  const floatingRightRef = useParallaxHorizontal("right", 1.05);

  return (
    <>
      {/* Dynamic parallax background */}
      <img
        ref={backgroundRef as any}
        src={backgroundImages[0]}
        alt="Luxury Showcase"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Parallax gradient overlay */}
      <div
        ref={overlayRef as any}
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 40%, hsl(var(--accent)) 60%, transparent 100%)",
        }}
      />

      {/* Floating decorative elements */}
      <div
        ref={floatingLeftRef as any}
        className="absolute top-16 left-8 opacity-30"
      >
        <Building className="w-12 h-12 text-accent animate-pulse" />
      </div>
      <div
        ref={floatingRightRef as any}
        className="absolute bottom-16 right-8 opacity-25"
      >
        <Home className="w-10 h-10 text-primary animate-pulse" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-20">
        <Sparkles className="w-8 h-8 text-accent animate-bounce" />
      </div>

      {/* Enhanced Background Parallax */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
      </motion.div>
    </>
  );
};

export default ShowcaseBackground;