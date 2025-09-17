import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PerformanceOptimizer } from '@/utils/performanceOptimizer';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
  threshold?: number;
  enableOnMobile?: boolean;
}

export const useOptimizedParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    disabled = false,
    threshold = 0.1,
    enableOnMobile = false
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!ref.current || disabled) return;

    const element = ref.current;
    const capabilities = PerformanceOptimizer.getDeviceCapabilities();

    // Disable on mobile devices unless explicitly enabled
    if (capabilities.isMobile && !enableOnMobile) return;

    // Disable if user prefers reduced motion
    if (capabilities.prefersReducedMotion) return;

    // Optimize element for animations
    PerformanceOptimizer.optimizeElement(element);

    // Use Intersection Observer to track visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin: '50px 0px 50px 0px'
      }
    );

    observer.observe(element);

    // Create GSAP ScrollTrigger only when element is in view
    const createScrollTrigger = () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (isInView) {
            const progress = self.progress;
            const yPos = progress * speed * 100;
            
            gsap.set(element, {
              yPercent: -yPos,
              force3D: true,
            });
          }
        }
      });
    };

    if (isInView) {
      createScrollTrigger();
    }

    // Cleanup function
    return () => {
      observer.disconnect();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      PerformanceOptimizer.cleanupElement(element);
    };
  }, [speed, disabled, threshold, enableOnMobile, isInView]);

  return ref;
};

// Simplified parallax for better performance on low-end devices
export const useSimpleParallax = (speed: number = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const capabilities = PerformanceOptimizer.getDeviceCapabilities();

    // Use simple transform on low-end devices
    if (capabilities.shouldReduceAnimations) {
      gsap.set(element, { y: -20 });
      return;
    }

    // Use optimized GSAP animation
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return ref;
};