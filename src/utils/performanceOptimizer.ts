import { gsap } from 'gsap';

// Performance optimization utilities
export class PerformanceOptimizer {
  private static rafId: number | null = null;
  private static callbacks: (() => void)[] = [];

  // Throttled scroll handler using RAF
  static onScroll(callback: () => void) {
    this.callbacks.push(callback);
    
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(() => {
        this.callbacks.forEach(cb => cb());
        this.callbacks = [];
        this.rafId = null;
      });
    }
  }

  // Optimize element for animations
  static optimizeElement(element: HTMLElement) {
    gsap.set(element, {
      willChange: "transform",
      backfaceVisibility: "hidden",
      perspective: 1000,
      transformStyle: "preserve-3d",
    });
  }

  // Clean up optimizations
  static cleanupElement(element: HTMLElement) {
    gsap.set(element, {
      willChange: "auto",
      backfaceVisibility: "visible",
      perspective: "none",
      transformStyle: "flat",
    });
  }

  // Check if element is in viewport
  static isInViewport(element: HTMLElement, threshold = 0.1): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    return (
      rect.bottom >= -windowHeight * threshold &&
      rect.top <= windowHeight * (1 + threshold) &&
      rect.right >= -windowWidth * threshold &&
      rect.left <= windowWidth * (1 + threshold)
    );
  }

  // Debounce function for resize events
  static debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Check device capabilities
  static getDeviceCapabilities() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    return {
      isMobile,
      isLowEnd,
      prefersReducedMotion,
      shouldReduceAnimations: isMobile || isLowEnd || prefersReducedMotion
    };
  }
}

// Enhanced parallax hook with performance optimizations
export const createOptimizedParallax = (speed: number = 0.5, options: {
  shouldAnimate?: boolean;
  threshold?: number;
} = {}) => {
  const { shouldAnimate = true, threshold = 0.1 } = options;
  const capabilities = PerformanceOptimizer.getDeviceCapabilities();
  
  // Reduce or disable parallax on low-end devices
  if (capabilities.shouldReduceAnimations && !shouldAnimate) {
    return { ref: { current: null }, cleanup: () => {} };
  }

  const element = document.createElement('div');
  PerformanceOptimizer.optimizeElement(element);

  const cleanup = () => {
    PerformanceOptimizer.cleanupElement(element);
  };

  return { ref: { current: element }, cleanup };
};