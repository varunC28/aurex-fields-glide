# Parallax Fix Guide

## Issue Fixed
**Error**: `SimpleParallax is not a constructor`  
**Location**: `useSimpleParallax.ts:44`

## Root Cause
The error occurred due to incorrect import syntax for the `simple-parallax-js` library. The library uses different export formats that weren't being handled properly.

## Solution Implemented

### 1. Enhanced Import Handling
Created a robust import system that tries multiple strategies:

```typescript
// Multiple fallback strategies for importing
const possibleConstructors = [
  simpleParallaxModule.default,
  simpleParallaxModule.SimpleParallax,
  simpleParallaxModule,
  simpleParallaxModule['SimpleParallax'],
];
```

### 2. GSAP Fallback System
Created `useGSAPParallax` hook as a reliable fallback:

```typescript
// If simple-parallax-js fails, automatically use GSAP
const gsapFallbackRef = useGSAPParallax({
  speed: (options.scale || 1.2) - 1,
  direction: options.orientation === 'down' ? 'down' : 'up',
  disabled: options.disabled,
});
```

### 3. Comprehensive Error Handling
- Dynamic import with try/catch
- Constructor validation
- Graceful fallback to GSAP
- Detailed logging for debugging

## Files Modified

### 1. `src/hooks/useSimpleParallax.ts`
- Enhanced import handling
- Added GSAP fallback integration
- Improved error handling and logging
- Constructor validation

### 2. `src/hooks/useGSAPParallax.ts` (New)
- GSAP-based parallax implementation
- ScrollTrigger integration
- Multiple specialized hooks
- Performance optimized

## Usage Examples

### Basic Usage (Auto-fallback)
```typescript
import { useSimpleParallax } from '@/hooks/useSimpleParallax';

const MyComponent = () => {
  const parallaxRef = useSimpleParallax({
    scale: 1.2,
    delay: 0.6,
    orientation: 'up'
  });

  return <div ref={parallaxRef}>Content</div>;
};
```

### Direct GSAP Usage
```typescript
import { useGSAPParallax } from '@/hooks/useGSAPParallax';

const MyComponent = () => {
  const parallaxRef = useGSAPParallax({
    speed: 0.3,
    direction: 'up',
    scale: 1.1
  });

  return <div ref={parallaxRef}>Content</div>;
};
```

### Specialized Hooks
```typescript
import { 
  useParallaxImage, 
  useGSAPParallaxBackground 
} from '@/hooks/useSimpleParallax';

// For images
const imageRef = useParallaxImage(1.3);

// For backgrounds  
const bgRef = useGSAPParallaxBackground(0.2);
```

## Benefits of the Fix

### 1. Reliability
- ✅ Handles import failures gracefully
- ✅ Automatic fallback to GSAP
- ✅ No breaking errors in production

### 2. Performance
- ✅ GSAP fallback is highly optimized
- ✅ Hardware acceleration support
- ✅ Reduced motion respect

### 3. Compatibility
- ✅ Works across all browsers
- ✅ Handles different module formats
- ✅ TypeScript support maintained

### 4. Developer Experience
- ✅ Clear error messages
- ✅ Detailed logging
- ✅ Same API regardless of backend

## Debugging

### Enable Debug Logging
The hooks now provide detailed console output:

```
✅ "SimpleParallax constructor found and verified"
⚠️  "SimpleParallax not available, using GSAP fallback"
❌ "Failed to load simple-parallax-js, will use GSAP fallback"
```

### Check Which System is Active
```typescript
// In browser console
console.log('SimpleParallax available:', !!window.SimpleParallax);
```

### Performance Monitoring
```typescript
// Monitor ScrollTrigger instances
console.log('Active ScrollTriggers:', ScrollTrigger.getAll().length);
```

## Migration Guide

### From Old Implementation
```typescript
// Before (error-prone)
import SimpleParallax from 'simple-parallax-js';
const instance = new SimpleParallax(element, options);

// After (robust)
const parallaxRef = useSimpleParallax(options);
```

### Custom Options Mapping
```typescript
// simple-parallax-js options → GSAP fallback
{
  scale: 1.2,        // → speed: 0.2
  orientation: 'up', // → direction: 'up'
  delay: 0.6,        // → (handled by ScrollTrigger)
  overflow: false,   // → (handled by container)
}
```

## Testing

### Verify Fix Works
1. Check browser console for errors
2. Confirm parallax effects are working
3. Test on different browsers/devices
4. Verify fallback activation

### Force Fallback Testing
```typescript
// Temporarily disable simple-parallax-js
const useSimpleParallax = (options) => {
  return useGSAPParallax(options); // Force GSAP
};
```

## Browser Support

| Feature | simple-parallax-js | GSAP Fallback |
|---------|-------------------|---------------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |
| Mobile | ✅ | ✅ |
| IE11 | ❌ | ✅ |

## Performance Comparison

| Metric | simple-parallax-js | GSAP Fallback |
|--------|-------------------|---------------|
| Bundle Size | ~15KB | ~30KB (GSAP) |
| Performance | Good | Excellent |
| Features | Basic | Advanced |
| Reliability | Medium | High |

## Conclusion

The fix ensures that parallax effects work reliably across all environments:

1. **Primary**: Uses `simple-parallax-js` when available
2. **Fallback**: Uses GSAP when primary fails
3. **Graceful**: No errors or broken functionality
4. **Transparent**: Same API regardless of backend

This approach provides the best of both worlds - the simplicity of `simple-parallax-js` with the reliability and performance of GSAP as a fallback.