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
      className="border-b border-gray-100 last:border-b-0"
    >
      <a
        href={item.href}
        onClick={onClose}
        className="group block w-full"
      >
        <div className="flex justify-center">
          <div className="relative overflow-hidden py-2 w-full text-center">
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
            {/* Text that changes color with wave - Fixed color issue */}
            <div className="relative z-10">
              <motion.div
                initial={{ color: "#000000" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <TextRoll
                  center
                  className="font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl text-center"
                >
                  {item.name}
                </TextRoll>
              </motion.div>
            </div>
          </div>
        </div>
      </a>
    </motion.li>
  );
}