import { useEffect, useRef } from 'react';
import SimpleParallax from 'simple-parallax-js';

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
    const instanceRef = useRef<SimpleParallax | null>(null);

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

        // Initialize simple-parallax-js
        try {
            instanceRef.current = new SimpleParallax(ref.current, defaultOptions);
        } catch (error) {
            console.warn('SimpleParallax initialization failed:', error);
        }

        // Cleanup function
        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
                instanceRef.current = null;
            }
        };
    }, [options.scale, options.delay, options.orientation, options.overflow, options.disabled]);

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