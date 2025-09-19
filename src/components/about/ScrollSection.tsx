import { motion, useScroll, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { AnimatedCharacter, AnimationType } from "./AnimatedCharacter";
import { SectionHeader } from "./SectionHeader";

interface ScrollSectionProps {
  content: string[] | string;
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

  // Handle both string and array content
  const contentArray = Array.isArray(content) ? content : content.split("");
  const centerIndex = Math.floor(contentArray.length / 2);

  return (
    <div
      ref={targetRef}
      className={`relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw] ${marginTop} ${className}`}
    >
      {headerText && <SectionHeader text={headerText} />}
      
      <div
        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={showPerspective ? { perspective: "500px" } : undefined}
      >
        {contentArray.map((item, index) => (
          <AnimatedCharacter
            key={index}
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