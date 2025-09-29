import { motion, useScroll, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { AnimatedCharacter, AnimationType } from "./AnimatedCharacter";
import { SectionHeader } from "./SectionHeader";
import { LucideIcon } from "lucide-react";

interface ScrollSectionProps {
  content: string | Array<{ icon: LucideIcon; name: string }>;
  animationType: AnimationType;
  headerText?: string;
  className?: string;
  marginTop?: string;
  showPerspective?: boolean;
  children?: ReactNode;
  height?: string; // Add height prop
  scrollDuration?: number; // Add scroll duration prop
}

export function ScrollSection({
  content,
  animationType,
  headerText,
  className = "",
  marginTop = "",
  showPerspective = false,
  children,
  height = "h-[150vh]", // Reduced height for faster effect
  scrollDuration = 0.5, // Reduced scroll duration for faster effect
}: ScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Handle both string and icon array content
  const contentArray = typeof content === "string" ? content.split("") : content;
  const centerIndex = Math.floor(contentArray.length / 2);

  return (
    <div
      ref={targetRef}
      className={`relative box-border flex ${height} flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 bg-background p-4 sm:p-6 md:p-8 ${marginTop} ${className}`}
    >
      {headerText && <SectionHeader text={headerText} />}

      <div
        className={`font-geist w-full max-w-4xl text-center ${animationType === "text"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-foreground leading-tight py-4 sm:py-6 md:py-8"
            : "flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl font-medium py-3 sm:py-4 md:py-6"
          }`}
        style={showPerspective ? { perspective: "500px" } : undefined}
      >
        {contentArray.map((item, index) => (
          <AnimatedCharacter
            key={typeof item === "string" ? index : item.name}
            content={item}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
            type={animationType}
          />
        ))}
      </div>

      {children}
    </div>
  );
}