# Showcase Components

This directory contains reusable components extracted from the PropertyShowcase.tsx file to improve modularity and reusability.

## Components

1. **ShowcaseBackground.tsx** - Handles all parallax background elements
2. **ShowcaseHeader.tsx** - Renders the section header with title and description
3. **ShowcasePropertyGrid.tsx** - Manages the grid layout of property cards
4. **PropertyCard.tsx** - Individual property card component (was already existing)
5. **ShowcaseCTA.tsx** - Bottom call-to-action section with trust indicators

## Benefits

- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used in other parts of the application
- **Maintainability**: Changes to one component don't affect others
- **Testability**: Each component can be tested independently
- **Readability**: PropertyShowcase.tsx is now much cleaner and easier to understand

## Usage

The PropertyShowcase.tsx now acts as a container component that orchestrates the showcase section by combining these smaller components.