import { useEffect, useRef } from 'react';
import { useGSAPParallax } from './useGSAPParallax';

// Safe import for simple-parallax-js with multiple fallback strategies
let SimpleParallaxConstructor: any = null;
let importAttempted = false;

// Initialize the library with comprehensive error handling
const getSimpleParallax = async () => {
  if (SimpleParallaxConstructor) return SimpleParallaxConstructor;
  if (importAttempted) return null; // Don't retry if already failed
  
  importAttempted = true;
  
  try {
    // Strategy 1: Try dynamic ES6 import
    const simpleParallaxModule = await import('simple-parallax-js');
    
    // Strategy 2: Handle different export formats
    const possibleConstructors = [
      simpleParallaxModule.default,
      simpleParallaxModule.SimpleParallax,
      simpleParallaxModule,
      // @ts-ignore - Try accessing as property
      simpleParallaxModule['SimpleParallax'],
    ];
    
    for (const constructor of possibleConstructors) {
      if (typeof constructor === 'function') {
        SimpleParallaxConstructor = constructor;
        console.log('SimpleParallax constructor found and verified');
        return SimpleParallaxConstructor;
      }
    }
    
    console.warn('SimpleParallax constructor not found in module exports');
    return null;
    
  } catch (error) {
    console.warn('Failed to load simple-parallax-js, will use GSAP fallback:', error);
    return null;
  }
};

interface SimpleParallaxOptions {
    scale?: number;
    delay?: number;
    orientation?: 'up' | 'down' | 'left' | 'right' | 'up left' | 'up right' | 'down left' | 'down right';
    overflow?: boolean;
    transition?: string;
    customContainer?: string;
    customWrapper?: string;
    maxTransition?: number;
    disabled?: boolean;
}

export const useSimpleParallax = (options: SimpleParallaxOptions = {}) => {
    const ref = useRef<HTMLElement>(null);
    const instanceRef = useRef<any>(null);
    
    // Fallback to GSAP parallax if simple-parallax-js fails
    const gsapFallbackRef = useGSAPParallax({
        speed: (options.scale || 1.2) - 1,
        direction: options.orientation === 'down' ? 'down' : 'up',
        disabled: options.disabled,
    });

    useEffect(() => {
        if (!ref.current) return;

        const defaultOptions: SimpleParallaxOptions = {
            scale: 1.2,
            delay: 0.6,
            orientation: 'up',
            overflow: false,
            transition: 'cubic-bezier(0,0,0,1)',
            maxTransition: 0,
            disabled: false,
            ...options
        };

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            defaultOptions.disabled = true;
        }

        // Initialize parallax with safe loading and fallback
        const initParallax = async () => {
            try {
                const ParallaxClass = await getSimpleParallax();
                
                if (ParallaxClass && ref.current) {
                    instanceRef.current = new ParallaxClass(ref.current, defaultOptions);
                    console.log('SimpleParallax initialized successfully');
                } else {
                    console.warn('SimpleParallax not available, using GSAP fallback');
                    // Use GSAP fallback by copying ref
                    if (ref.current && gsapFallbackRef.current !== ref.current) {
                        gsapFallbackRef.current = ref.current;
                    }
                }
            } catch (error) {
                console.warn('SimpleParallax initialization failed, using GSAP fallback:', error);
                // Use GSAP fallback
                if (ref.current && gsapFallbackRef.current !== ref.current) {
                    gsapFallbackRef.current = ref.current;
                }
            }
        };

        initParallax();

        // Cleanup function
        return () => {
            if (instanceRef.current && typeof instanceRef.current.destroy === 'function') {
                instanceRef.current.destroy();
                instanceRef.current = null;
            }
        };
    }, [options.scale, options.delay, options.orientation, options.overflow, options.disabled]);

    // Return the ref, but also ensure GSAP fallback can use the same element
    useEffect(() => {
        if (ref.current && gsapFallbackRef.current !== ref.current) {
            gsapFallbackRef.current = ref.current;
        }
    }, [gsapFallbackRef]);

    return ref;
};

// Specialized hooks for different parallax effects
export const useParallaxImage = (scale: number = 1.3) => {
    return useSimpleParallax({
        scale,
        delay: 0.6,
        orientation: 'up',
        overflow: false,
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
};

export const useParallaxBackground = (scale: number = 1.2) => {
    return useSimpleParallax({
        scale,
        delay: 0.4,
        orientation: 'up',
        overflow: true,
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
};

export const useParallaxContent = (orientation: 'up' | 'down' = 'up', delay: number = 0.8) => {
    return useSimpleParallax({
        scale: 1.1,
        delay,
        orientation,
        overflow: false,
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
};

export const useParallaxHorizontal = (direction: 'left' | 'right' = 'left', scale: number = 1.15) => {
    return useSimpleParallax({
        scale,
        delay: 0.5,
        orientation: direction,
        overflow: false,
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
};