import { motion, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export type AnimationType = "text" | "icon-scale" | "icon-rotate";

interface AnimationConfig {
  xMultiplier: number;
  yMultiplier?: number;
  rotateMultiplier?: number;
  scaleRange?: [number, number];
  rotateXMultiplier?: number;
}

const animationConfigs: Record<AnimationType, AnimationConfig> = {
  text: {
    xMultiplier: 30, // Reduced for smoother animation
    rotateXMultiplier: 30, // Reduced for smoother animation
  },
  "icon-scale": {
    xMultiplier: 25, // Reduced for smoother animation
    yMultiplier: 15, // Reduced from 25 to prevent cropping
    scaleRange: [0.8, 1], // Adjusted scale range
  },
  "icon-rotate": {
    xMultiplier: 40, // Reduced for smoother animation
    yMultiplier: -10, // Reduced for smoother animation
    rotateMultiplier: 20, // Reduced for smoother animation
    scaleRange: [0.8, 1], // Adjusted scale range
  },
};

interface AnimatedCharacterProps {
  content: string | { icon: LucideIcon; name: string };
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  type: AnimationType;
  className?: string;
  scrollDuration?: number; // Add scroll duration prop
}

export function AnimatedCharacter({
  content,
  index,
  centerIndex,
  scrollYProgress,
  type,
  className = "",
  scrollDuration = 0.9, // Default scroll duration
}: AnimatedCharacterProps) {
  const isSpace = typeof content === "string" && content === " ";
  const distanceFromCenter = index - centerIndex;
  const config = animationConfigs[type];

  // Common transforms with adjusted range for smoother animation
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Reduced range for faster effect
    [distanceFromCenter * config.xMultiplier, 0, 0]
  );

  const scale = config.scaleRange
    ? useTransform(scrollYProgress, [0, 0.5, 1], [config.scaleRange[0], config.scaleRange[1], config.scaleRange[1]])
    : undefined;

  // Type-specific transforms with adjusted range
  const y = config.yMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5, 1], // Reduced range for faster effect
        [Math.abs(distanceFromCenter) * config.yMultiplier, 0, 0]
      )
    : undefined;

  const rotate = config.rotateMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5, 1], // Reduced range for faster effect
        [distanceFromCenter * config.rotateMultiplier, 0, 0]
      )
    : undefined;

  const rotateX = config.rotateXMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5, 1], // Reduced range for faster effect
        [distanceFromCenter * config.rotateXMultiplier, 0, 0]
      )
    : undefined;

  const baseClassName = cn("inline-block", isSpace && "w-2 sm:w-3 md:w-4", className);

  if (type === "text") {
    return (
      <motion.span
        className={cn(baseClassName, "text-primary")}
        style={{
          x,
          rotateX,
        }}
        transition={{ duration: scrollDuration }}
      >
        {content as string}
      </motion.span>
    );
  }

  // For icon types
  const iconData = content as { icon: LucideIcon; name: string };
  const IconComponent = iconData.icon;

  return (
    <motion.div
      className={cn(baseClassName, "mx-1 sm:mx-2 md:mx-3 lg:mx-4")}
      style={{
        x,
        scale,
        y,
        rotate,
        transformOrigin: "center",
      }}
      transition={{ duration: scrollDuration }}
    >
      <IconComponent 
        size={32} 
        className="text-foreground hover:text-accent transition-colors duration-300 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
        aria-label={iconData.name}
      />
    </motion.div>
  );
}