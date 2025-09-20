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
    xMultiplier: 50,
    rotateXMultiplier: 50,
  },
  "icon-scale": {
    xMultiplier: 40,
    yMultiplier: 25, // Reduced from 50 to prevent cropping
    scaleRange: [0.75, 1],
  },
  "icon-rotate": {
    xMultiplier: 60, // Reduced from 90
    yMultiplier: -15, // Reduced from -20
    rotateMultiplier: 30, // Reduced from 50
    scaleRange: [0.75, 1],
  },
};

interface AnimatedCharacterProps {
  content: string | { icon: LucideIcon; name: string };
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  type: AnimationType;
  className?: string;
}

export function AnimatedCharacter({
  content,
  index,
  centerIndex,
  scrollYProgress,
  type,
  className = "",
}: AnimatedCharacterProps) {
  const isSpace = typeof content === "string" && content === " ";
  const distanceFromCenter = index - centerIndex;
  const config = animationConfigs[type];

  // Common transforms
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * config.xMultiplier, 0]
  );

  const scale = config.scaleRange
    ? useTransform(scrollYProgress, [0, 0.5], config.scaleRange)
    : undefined;

  // Type-specific transforms
  const y = config.yMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5],
        [Math.abs(distanceFromCenter) * config.yMultiplier, 0]
      )
    : undefined;

  const rotate = config.rotateMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * config.rotateMultiplier, 0]
      )
    : undefined;

  const rotateX = config.rotateXMultiplier
    ? useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * config.rotateXMultiplier, 0]
      )
    : undefined;

  const baseClassName = cn("inline-block", isSpace && "w-4", className);

  if (type === "text") {
    return (
      <motion.span
        className={cn(baseClassName, "text-orange-500")}
        style={{
          x,
          rotateX,
        }}
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
      className={cn(baseClassName, "mx-2 sm:mx-4 md:mx-6")}
      style={{
        x,
        scale,
        y,
        rotate,
        transformOrigin: "center",
      }}
    >
      <IconComponent 
        size={48} 
        className="text-black hover:text-orange-500 transition-colors duration-300" 
        aria-label={iconData.name}
      />
    </motion.div>
  );
}