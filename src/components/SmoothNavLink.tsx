import React from 'react';
import { scrollWithTransition } from '@/utils/smoothScroll';

interface SmoothNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothNavLink: React.FC<SmoothNavLinkProps> = ({ 
  to, 
  children, 
  className = '',
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) onClick();
    
    // Smooth scroll to target
    scrollWithTransition(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`transition-all duration-300 hover:opacity-80 ${className}`}
    >
      {children}
    </a>
  );
};

export default SmoothNavLink;