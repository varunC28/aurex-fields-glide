import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const smoothScrollTo = (target: string | HTMLElement, duration = 1) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!targetElement) return;

  gsap.to(window, {
    duration,
    scrollTo: {
      y: targetElement,
      offsetY: 80 // Account for fixed header
    },
    ease: 'power2.inOut'
  });
};

export const smoothScrollToTop = (duration = 0.8) => {
  gsap.to(window, {
    duration,
    scrollTo: { y: 0 },
    ease: 'power2.inOut'
  });
};

// Enhanced scroll with subtle transition effect
export const scrollWithTransition = (target: string | HTMLElement, duration = 1.2) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!targetElement) return;

  // Add a subtle fade effect during scroll
  gsap.to('main', {
    opacity: 0.9,
    duration: 0.15,
    ease: 'power2.out',
    onComplete: () => {
      smoothScrollTo(targetElement, duration);
      gsap.to('main', {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: 'power2.out'
      });
    }
  });
};