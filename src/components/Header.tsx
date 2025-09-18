import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { TextRoll } from "@/components/ui/TextRoll";

const navigationItems = [
  {
    name: "Home",
    href: "#hero",
    description: "Luxury real estate redefined",
  },
  {
    name: "Services",
    href: "#services",
    description: "Our premium offerings",
  },
  {
    name: "Properties",
    href: "#properties",
    description: "Exclusive listings",
  },
  {
    name: "Showcase",
    href: "#showcase",
    description: "Featured properties",
  },
  {
    name: "About",
    href: "#about",
    description: "Our story and expertise",
  },
  {
    name: "Contact",
    href: "#contact",
    description: "Get in touch with us",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              AUREX & FIELDS
            </span>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigationItems.slice(0, 5).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative overflow-hidden"
              >
                {/* Black wave background */}
                <motion.div
                  className="absolute inset-0 bg-black rounded-sm"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />
                {/* Text that changes color with wave */}
                <div className="relative z-10 px-2 py-1">
                  <motion.div
                    initial={{ color: "#ffffff" }}
                    whileHover={{ color: "#000000" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <TextRoll className="text-sm font-medium uppercase tracking-wide">
                      {item.name}
                    </TextRoll>
                  </motion.div>
                </div>
              </a>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`relative z-50 flex items-center gap-2 rounded-lg p-2 transition-colors ${
              isMenuOpen
                ? "text-black hover:bg-black/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen
                ? <X className="h-6 w-6" />
                : <Menu className="h-6 w-6" />}
            </motion.div>
            <span className="hidden text-sm font-medium uppercase tracking-wide sm:block">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Full-Screen Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-white"
          >
            {/* Menu Content */}
            <div className="flex h-full flex-col">
              {/* Spacer for header */}
              <div className="h-14 sm:h-16 lg:h-20" />

              {/* Navigation Items */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-1 flex-col items-center justify-start px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16"
              >
                <nav className="w-full max-w-2xl">
                  <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="border-b border-gray-100 pb-4 last:border-b-0 sm:pb-6"
                      >
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className="group block w-full"
                        >
                          <div className="flex flex-col space-y-1 sm:space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                            <div className="relative overflow-hidden py-2">
                              {/* Black wave background */}
                              <motion.div
                                className="absolute inset-0 bg-black"
                                initial={{ scaleX: 0, originX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{
                                  duration: 0.6,
                                  ease: "easeInOut",
                                }}
                              />
                              {/* Text that changes color with wave */}
                              <div className="relative z-10">
                                <motion.div
                                  initial={{ color: "#000000" }}
                                  whileHover={{ color: "#ffffff" }}
                                  transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <TextRoll
                                    center
                                    className="text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl"
                                  >
                                    {item.name}
                                  </TextRoll>
                                </motion.div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-300 sm:text-sm lg:text-base">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>

              {/* Footer Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="border-t border-gray-100 p-4 sm:p-6 lg:p-8"
              >
                <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
                  <div className="text-center text-xs text-gray-500 sm:text-sm lg:text-left">
                    © 2024 Aurex. All rights reserved.
                  </div>
                  <div className="flex space-x-4 sm:space-x-6">
                    <a
                      href="/privacy"
                      className="text-xs text-gray-500 transition-colors hover:text-gray-900 sm:text-sm"
                      onClick={closeMenu}
                    >
                      Privacy
                    </a>
                    <a
                      href="/terms"
                      className="text-xs text-gray-500 transition-colors hover:text-gray-900 sm:text-sm"
                      onClick={closeMenu}
                    >
                      Terms
                    </a>
                    <a
                      href="/support"
                      className="text-xs text-gray-500 transition-colors hover:text-gray-900 sm:text-sm"
                      onClick={closeMenu}
                    >
                      Support
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
