import { useState, useEffect } from "react";
import { Logo } from "./header/Logo";
import { NavigationMenu } from "./header/NavigationMenu";
import { navigationItems } from "@/data/navigation";

// Export menu state management functions
export const useHeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return { isMenuOpen, toggleMenu, closeMenu };
};

function Header({ isMenuOpen, closeMenu }: { isMenuOpen: boolean; closeMenu: () => void }) {
  return (
    <>
      {/* Header Bar - Always Visible */}
      <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-transparent" style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: 'translateZ(0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        backgroundColor: 'transparent',
        pointerEvents: 'auto'
      }}>
        <div className="flex items-center justify-between p-4 lg:p-6">
         
        </div>
      </header>

      {/* Full-Screen Dropdown Menu */}
      <NavigationMenu
        isOpen={isMenuOpen}
        navigationItems={navigationItems}
        onClose={closeMenu}
      />
    </>
  );
}

export default Header;