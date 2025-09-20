import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  transitionType?: 'fade' | 'slide' | 'scale';
}

const RotatingText: React.FC<RotatingTextProps> = ({ 
  texts, 
  interval = 3000, 
  className = '',
  transitionType = 'fade'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const getAnimationVariants = () => {
    switch (transitionType) {
      case 'slide':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.2 }
        };
      case 'fade':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const animationVariants = getAnimationVariants();

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          exit={animationVariants.exit}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;