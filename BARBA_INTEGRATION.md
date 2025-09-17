# Simple-Parallax-JS Integration

This project now includes comprehensive parallax effects using simple-parallax-js library, providing smooth and performant parallax animations across all components.

## Features Added

### 1. Parallax Effects
- **Background image parallax** with customizable scale and speed
- **Content parallax** with directional movement
- **Horizontal parallax** for floating elements
- **Smooth scroll** between sections
- **Performance optimized** for all devices

### 2. Components Created

#### `SmoothNavLink.tsx`
Navigation links with smooth scrolling:
```tsx
<SmoothNavLink to="#section" className="nav-link">
  Section Name
</SmoothNavLink>
```

### 3. Hooks

#### `useSimpleParallax.ts`
Main parallax hook with full customization:
```tsx
const parallaxRef = useSimpleParallax({
  scale: 1.2,
  delay: 0.6,
  orientation: 'up',
  overflow: false
});
```

#### Specialized Parallax Hooks

**`useParallaxBackground(scale)`** - For background images:
```tsx
const bgRef = useParallaxBackground(1.3);
<img ref={bgRef} src={image} alt="Background" />
```

**`useParallaxContent(orientation, delay)`** - For content elements:
```tsx
const contentRef = useParallaxContent('up', 0.8);
<div ref={contentRef}>Content</div>
```

**`useParallaxHorizontal(direction, scale)`** - For horizontal movement:
```tsx
const floatingRef = useParallaxHorizontal('left', 1.1);
<div ref={floatingRef}>Floating Element</div>
```

**`useParallaxImage(scale)`** - Optimized for images:
```tsx
const imageRef = useParallaxImage(1.15);
<img ref={imageRef} src={image} alt="Parallax Image" />
```

### 4. Utilities

#### `smoothScroll.ts`
Smooth scrolling utilities:
```tsx
import { smoothScrollTo, scrollWithTransition } from '@/utils/smoothScroll';

// Basic smooth scroll
smoothScrollTo('#target');

// Scroll with transition effect
scrollWithTransition('#target');
```

## Usage Examples

### Hero Section with Background Parallax
```tsx
import { useParallaxBackground } from '@/hooks/useSimpleParallax';

const Hero = () => {
  const backgroundRef = useParallaxBackground(1.3);

  return (
    <section className="relative h-screen overflow-hidden">
      <img 
        ref={backgroundRef}
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20">
        {/* Content */}
      </div>
    </section>
  );
};
```

### Content Section with Multiple Parallax Elements
```tsx
import { 
  useParallaxBackground, 
  useParallaxContent, 
  useParallaxHorizontal 
} from '@/hooks/useSimpleParallax';

const Section = () => {
  const bgRef = useParallaxBackground(1.2);
  const overlayRef = useParallaxContent('up', 0.7);
  const floatingRef = useParallaxHorizontal('left', 1.1);

  return (
    <section className="relative py-24 overflow-hidden">
      <img ref={bgRef} src={bgImage} className="absolute inset-0" />
      <div ref={overlayRef} className="absolute inset-0 bg-gradient" />
      <div ref={floatingRef} className="absolute top-10 left-10">
        <Icon />
      </div>
      {/* Content */}
    </section>
  );
};
```

### Navigation with Smooth Scrolling
```tsx
import SmoothNavLink from '@/components/SmoothNavLink';

const Navigation = () => (
  <nav>
    <SmoothNavLink to="#hero">Home</SmoothNavLink>
    <SmoothNavLink to="#services">Services</SmoothNavLink>
    <SmoothNavLink to="#about">About</SmoothNavLink>
  </nav>
);
```

## CSS Classes Available

### Animation Classes
- `.animate-section` - Sections that animate on scroll
- `.fade-in` - Fade in animation
- `.slide-up` - Slide up animation
- `.stagger-item` - Staggered animations for multiple elements

### Transition Classes
- `.page-transition-overlay` - Overlay during page transitions
- `.barba-loading` - Loading state styles

## Configuration

### Transition Types
You can customize transitions in `utils/barba.ts`:

1. **Fade Transition** - Smooth opacity change
2. **Slide Transition** - Horizontal slide effect
3. **Custom Transitions** - Add your own GSAP animations

### Scroll Trigger Settings
Modify scroll trigger settings in `hooks/usePageTransitions.ts`:
- `start: 'top 80%'` - When animation starts
- `end: 'bottom 20%'` - When animation ends
- `toggleActions: 'play none none reverse'` - Animation behavior

## Performance Tips

1. **Use `will-change: transform`** for animated elements
2. **Limit concurrent animations** to maintain 60fps
3. **Use `transform` and `opacity`** for best performance
4. **Clean up ScrollTrigger instances** in useEffect cleanup

## Browser Support

- Modern browsers with ES6+ support
- CSS transforms and transitions
- IntersectionObserver API (for scroll triggers)

## Parallax Configuration Options

### Simple-Parallax-JS Options
- **`scale`** (number): Scale factor for the parallax effect (default: 1.2)
- **`delay`** (number): Delay factor for the parallax effect (default: 0.6)
- **`orientation`** (string): Direction of parallax ('up', 'down', 'left', 'right', etc.)
- **`overflow`** (boolean): Whether to show overflow (default: false)
- **`transition`** (string): CSS transition timing function
- **`maxTransition`** (number): Maximum transition value
- **`disabled`** (boolean): Disable parallax on certain conditions

### Performance Features
- **Automatic reduced motion detection** - Respects `prefers-reduced-motion`
- **Mobile optimization** - Lighter effects on mobile devices
- **Intersection Observer** - Only animates visible elements
- **Hardware acceleration** - Uses CSS transforms for smooth animations

## Dependencies Added

- `simple-parallax-js` - High-performance parallax library
- `gsap` - Additional animations and scroll triggers

## Next Steps

1. Add more transition types (scale, rotate, etc.)
2. Implement page-specific animations
3. Add loading states between transitions
4. Create mobile-optimized animations