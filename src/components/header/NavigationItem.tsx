import { motion } from "framer-motion";
import { TextRoll } from "@/components/ui/TextRoll";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationItemProps {
  item: { name: string; href: string };
  index: number;
  onClose: () => void;
}

export function NavigationItem({ item, index, onClose }: NavigationItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();

    // Handle section links like "#contact" or "#hero"
    if (item.href.startsWith("#")) {
      const scrollToSection = () => {
        const target = document.querySelector(item.href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      };

      // If already on home page
      if (location.pathname == "") {
        scrollToSection();
      } else {
        // Navigate home first, then scroll after DOM updates
        navigate("/");
        setTimeout(scrollToSection, 1000);
      }
      return;
    }

    // Handle full route links (/about, /blog, etc.)
    navigate(item.href);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <button
        onClick={handleClick}
        className="group block w-full text-center focus:outline-none"
      >
        <div className="flex justify-center">
          <div className="relative overflow-hidden py-3 sm:py-4 md:py-5 lg:py-6 w-full text-center">
            {/* Wave hover animation */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Text */}
            <div className="relative z-10">
              <motion.div
                initial={{ color: "#000" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <TextRoll
                  center
                  className="text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center"
                >
                  {item.name}
                </TextRoll>
              </motion.div>
            </div>
          </div>
        </div>
      </button>
    </motion.li>
  );
}
