# Scroll Lock Mechanism Guide

## Overview

This implementation provides a scroll-locking mechanism for the Services component that:

1. **Disables main page scroll** when the user enters the Services section
2. **Requires horizontal navigation** through all images before re-enabling main scroll
3. **Cross-browser and device compatible** with support for mouse, touch, and keyboard navigation

## Features

### Navigation Methods
- **Mouse Wheel**: Horizontal scroll or Shift + vertical scroll to navigate
- **Touch Gestures**: Swipe left/right to navigate between images
- **Keyboard**: Arrow keys (Left/Right/Up/Down) to navigate
- **Escape Key**: Force unlock scroll at any time

### Visual Indicators
- **Progress Dots**: Show current image position and total count
- **Navigation Hint**: Instructions and current position display
- **Smooth Animations**: GSAP-powered transitions between images

### Smart Unlock Logic
- Scroll is only unlocked after viewing the **last image**
- Users can navigate backward and forward freely
- Vertical scroll attempts are blocked until completion
- Touch gestures are properly differentiated (horizontal vs vertical)

## Implementation Details

### Core Components

#### `useScrollLock` Hook
Located in `src/hooks/useScrollLock.ts`

```typescript
const { initScrollLock, currentImageIndex } = useScrollLock({
  totalImages: cards.length,
  threshold: 0.3, // Intersection threshold
  onImageChange: animateToImage, // Callback for image transitions
  onComplete: () => console.log('All images viewed')
});
```

#### Services Component
Enhanced with scroll lock integration in `src/components/Services.tsx`

### Key Features

1. **Intersection Observer**: Detects when user enters/exits the Services section
2. **Event Handling**: Comprehensive mouse, touch, and keyboard support
3. **State Management**: Tracks current image and completion status
4. **Animation Integration**: Works seamlessly with GSAP animations

### Browser Compatibility

- **Modern Browsers**: Full support for all features
- **Touch Devices**: Optimized touch gesture recognition
- **Accessibility**: Keyboard navigation and reduced motion support
- **Mobile**: Responsive design with mobile-specific optimizations

## Usage

The scroll lock is automatically initialized when the Services component mounts. No additional setup required.

### Customization Options

```typescript
// Adjust intersection threshold
threshold: 0.5 // 50% of element must be visible

// Custom completion callback
onComplete: () => {
  // Custom logic when all images are viewed
}

// Custom image change callback
onImageChange: (index) => {
  // Custom animation or tracking logic
}
```

### CSS Classes

Custom styles are available in `src/styles/scroll-lock.css`:

- `.services-section`: Main container styles
- `.services-image-container`: Touch interaction optimizations
- `.services-progress-dots`: Progress indicator styling
- `.services-navigation-hint`: Instruction text styling

## Testing

To test the implementation:

1. Navigate to the Services section
2. Notice the main page scroll is disabled
3. Try different navigation methods:
   - Mouse wheel (horizontal)
   - Touch swipes (left/right)
   - Arrow keys
4. Navigate through all images
5. Verify scroll unlocks after viewing the last image

## Performance Considerations

- **Event Listeners**: Properly cleaned up on component unmount
- **Animation**: Uses GSAP for hardware-accelerated transitions
- **Touch Events**: Optimized with proper passive/active event handling
- **Memory**: Minimal memory footprint with efficient state management

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Reduced Motion**: Respects user's motion preferences
- **Screen Readers**: Proper alt text and ARIA labels
- **Focus Management**: Maintains proper focus states

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (including iOS)
- Mobile browsers: Optimized touch support

## Troubleshooting

### Common Issues

1. **Scroll not locking**: Check intersection observer threshold
2. **Touch not working**: Verify touch-action CSS properties
3. **Animation glitches**: Ensure GSAP is properly loaded
4. **Memory leaks**: Verify event listeners are cleaned up

### Debug Mode

Add console logs to track behavior:

```typescript
onImageChange: (index) => {
  console.log(`Navigated to image ${index + 1}`);
}
```