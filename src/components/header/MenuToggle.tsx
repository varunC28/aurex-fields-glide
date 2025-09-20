import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative z-50 flex items-center justify-center rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
        isOpen
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-white text-black hover:bg-gray-100"
      }`}
      aria-label="Toggle navigation menu"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.div
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.div>
      <span className="sr-only">
        {isOpen ? "Close menu" : "Open menu"}
      </span>
    </button>
  );
}