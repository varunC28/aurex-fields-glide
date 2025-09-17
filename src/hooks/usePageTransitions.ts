import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const usePageTransitions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial page load animation
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power2.out'
      }
    );

    // Animate sections on scroll
    const sections = containerRef.current.querySelectorAll('.animate-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animatePageEnter = () => {
    // This is now handled in the useEffect above
  };

  const animatePageLeave = () => {
    if (!containerRef.current) return;

    return gsap.to(containerRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in'
    });
  };

  return {
    containerRef,
    animatePageEnter,
    animatePageLeave
  };
};