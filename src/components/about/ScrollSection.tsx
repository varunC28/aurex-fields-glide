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
}

export function ScrollSection({
  content,
  animationType,
  headerText,
  className = "",
  marginTop = "",
  showPerspective = false,
  children,
}: ScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Handle both string and icon array content
  const contentArray = typeof content === "string" ? content.split("") : content;
  const centerIndex = Math.floor(contentArray.length / 2);

  return (
    <div
      ref={targetRef}
      className={`relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] bg-[#f5f4f3] p-[2vw] ${marginTop} ${className}`}
    >
      {headerText && <SectionHeader text={headerText} />}

      <div
        className={`font-geist w-full max-w-4xl text-center ${animationType === "text"
            ? "text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-black leading-tight py-8"
            : "flex flex-wrap items-center justify-center gap-4 text-2xl font-medium py-4"
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