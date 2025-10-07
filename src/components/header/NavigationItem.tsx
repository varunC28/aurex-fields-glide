import { motion } from "framer-motion";
import { TextRoll } from "@/components/ui/TextRoll";

interface NavigationItemProps {
  item: { name: string; href: string };
  index: number;
  onClose: () => void;
}

export function NavigationItem({ item, index, onClose }: NavigationItemProps) {
  return (
    <motion.li
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.2 + index * 0.1,
        ease: "easeOut",
      }}
      className="border-b border-gray-100 last:border-b-0 w-full flex justify-center"
    >
      <a
        href={item.href}
        onClick={onClose}
        className="group block w-full"
      >
        <div className="relative overflow-hidden py-3 sm:py-4 md:py-5 lg:py-6 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ scaleX: 0, originX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Text */}
          <div className="relative z-10">
            <TextRoll
              center
              className="truncate text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight text-center"
            >
              {item.name}
            </TextRoll>
          </div>
        </div>
      </a>
    </motion.li>
  );
}
