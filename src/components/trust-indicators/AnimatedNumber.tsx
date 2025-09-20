import { useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  finalCount: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  finalCount, 
  prefix = "", 
  suffix = "" 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });

  useEffect(() => {
    springValue.on("change", (value) => {
      setDisplayValue(Math.round(value));
    });
    
    if (inView) {
      springValue.set(finalCount);
    } else {
      springValue.set(0);
    }
    
    return () => {
      springValue.stop();
    };
  }, [inView, finalCount, springValue]);

  return (
    <div ref={ref} className="inline-block">
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
};

export default AnimatedNumber;