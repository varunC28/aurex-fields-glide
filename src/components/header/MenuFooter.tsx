import { motion } from "framer-motion";

interface MenuFooterProps {
  onClose: () => void;
}

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function MenuFooter({ onClose }: MenuFooterProps) {
  return (
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
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-gray-500 transition-colors hover:text-gray-900 sm:text-sm"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}