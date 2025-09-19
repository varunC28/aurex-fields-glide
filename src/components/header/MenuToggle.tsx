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
      className={`relative z-50 flex items-center gap-2 rounded-lg p-2 transition-colors ${
        isOpen
          ? "text-black hover:bg-black/10"
          : "text-white hover:bg-white/10"
      }`}
      aria-label="Toggle navigation menu"
    >
      <motion.div
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.div>
      <span className="hidden text-sm font-medium uppercase tracking-wide sm:block">
        {isOpen ? "Close" : "Menu"}
      </span>
    </button>
  );
}