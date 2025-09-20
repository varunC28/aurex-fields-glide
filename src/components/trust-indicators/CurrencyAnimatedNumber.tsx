import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CurrencyAnimatedNumberProps {
  finalValue: number;
  prefix?: string;
  suffix?: string;
}

const CurrencyAnimatedNumber: React.FC<CurrencyAnimatedNumberProps> = ({ 
  finalValue,
  prefix = "$",
  suffix = "K"
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      animate(count, finalValue, {
        duration: 1,
        ease: "easeInOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
    } else {
      setDisplayValue(0);
    }
  }, [inView, finalValue, count]);

  return (
    <div ref={ref} className="inline-block">
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
};

export default CurrencyAnimatedNumber;