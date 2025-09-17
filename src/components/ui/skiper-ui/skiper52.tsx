"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skiper52Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Skiper52: React.FC<Skiper52Props> = ({ 
  children, 
  className, 
  href, 
  onClick 
}) => {
  const Component = href ? "a" : "button";
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3",
        "bg-gradient-to-r from-primary to-accent text-primary-foreground",
        "transition-all duration-300 hover:scale-105 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        className
      )}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-sm"
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />
    </Component>
  );
};

// Alternative animated button variations
const AnimatedButton = ({ 
  children, 
  variant = "default",
  className,
  ...props 
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  [key: string]: any;
}) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-primary hover:bg-primary/10"
  };

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const FloatingButton = ({ 
  children, 
  className,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-4",
        "bg-accent text-accent-foreground shadow-lg",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}
      whileTap={{ scale: 0.9 }}
      animate={{ 
        y: [0, -10, 0],
        transition: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export { Skiper52, AnimatedButton, FloatingButton };

/**
 * Skiper 52 Animated Button Components
 * 
 * Features:
 * - Smooth hover animations with framer-motion
 * - Multiple button variants (default, outline, ghost)
 * - Floating button with continuous animation
 * - Gradient backgrounds and glow effects
 * - Accessibility compliant with focus states
 * 
 * Usage:
 * <Skiper52>Click me</Skiper52>
 * <AnimatedButton variant="outline">Outline Button</AnimatedButton>
 * <FloatingButton>🚀</FloatingButton>
 */
