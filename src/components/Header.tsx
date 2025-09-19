import { useState, useEffect } from "react";
import { Logo } from "./header/Logo";
import { MenuToggle } from "./header/MenuToggle";
import { NavigationMenu } from "./header/NavigationMenu";
import { navigationItems } from "@/data/navigation";

function Header() {
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

  return (
    <>
      {/* Header Bar - Always Visible */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-transparent">
        <div className="flex items-center justify-between p-4 lg:p-6">
          <Logo />
          <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
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
