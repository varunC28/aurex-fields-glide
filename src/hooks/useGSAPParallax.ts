import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GSAPParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  rotation?: number;
  disabled?: boolean;
  trigger?: string;
  start?: string;
  end?: string;
}

export const useGSAPParallax = (options: GSAPParallaxOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const defaultOptions: Required<GSAPParallaxOptions> = {
      speed: 0.5,
      direction: 'up',
      scale: 1,
      rotation: 0,
      disabled: false,
      trigger: '',
      start: 'top bottom',
      end: 'bottom top',
      ...options
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || defaultOptions.disabled) {
      return;
    }

    const element = ref.current;
    const trigger = defaultOptions.trigger || element;

    // Calculate movement based on direction and speed
    const getMovement = (progress: number) => {
      const movement = progress * defaultOptions.speed * 100;
      
      switch (defaultOptions.direction) {
        case 'up':
          return { y: -movement };
        case 'down':
          return { y: movement };
        case 'left':
          return { x: -movement };
        case 'right':
          return { x: movement };
        default:
          return { y: -movement };
      }
    };

    // Create ScrollTrigger animation
    animationRef.current = gsap.to(element, {
      ...getMovement(1),
      scale: defaultOptions.scale,
      rotation: defaultOptions.rotation,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: defaultOptions.start,
        end: defaultOptions.end,
        scrub: true,
        onUpdate: (self) => {
          const movement = getMovement(self.progress);
          gsap.set(element, {
            ...movement,
            scale: 1 + (defaultOptions.scale - 1) * self.progress,
            rotation: defaultOptions.rotation * self.progress,
          });
        },
      },
    });

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [
    options.speed,
    options.direction,
    options.scale,
    options.rotation,
    options.disabled,
    options.trigger,
    options.start,
    options.end,
  ]);

  return ref;
};

// Specialized GSAP parallax hooks
export const useGSAPParallaxImage = (speed: number = 0.3) => {
  return useGSAPParallax({
    speed,
    direction: 'up',
    scale: 1.1,
  });
};

export const useGSAPParallaxBackground = (speed: number = 0.2) => {
  return useGSAPParallax({
    speed,
    direction: 'up',
    scale: 1.05,
  });
};

export const useGSAPParallaxContent = (direction: 'up' | 'down' = 'up', speed: number = 0.4) => {
  return useGSAPParallax({
    speed,
    direction,
    scale: 1,
  });
};

export const useGSAPParallaxHorizontal = (direction: 'left' | 'right' = 'left', speed: number = 0.3) => {
  return useGSAPParallax({
    speed,
    direction,
    scale: 1,
  });
};