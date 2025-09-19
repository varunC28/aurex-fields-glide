import { motion, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationType = "text" | "image-scale" | "image-rotate";

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
  "image-scale": {
    xMultiplier: 50,
    yMultiplier: 50,
    scaleRange: [0.75, 1],
  },
  "image-rotate": {
    xMultiplier: 90,
    yMultiplier: -20,
    rotateMultiplier: 50,
    scaleRange: [0.75, 1],
  },
};

interface AnimatedCharacterProps {
  content: string;
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
  const isSpace = content === " ";
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
        {content}
      </motion.span>
    );
  }

  // For image types
  return (
    <motion.img
      src={content}
      alt={`Icon ${index}`}
      className={baseClassName}
      style={{
        x,
        scale,
        y,
        rotate,
        transformOrigin: "center",
      }}
    />
  );
}