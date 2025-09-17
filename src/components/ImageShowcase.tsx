import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Import all assets
import apartmentBuilding from '@/assets/apartment-building.jpg';
import heroBuilding from '@/assets/hero-building.jpg';
import luxuryInterior from '@/assets/luxury-interior.jpg';
import modernHome from '@/assets/modern-home.jpg';
import officeInterior from '@/assets/office-interior.jpg';
import officeLobby from '@/assets/office-lobby.jpg';
import penthouseView from '@/assets/penthouse-view.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';
import villaExterior from '@/assets/villa-exterior.jpg';

const ImageShowcase = () => {
  const images = [
    {
      src: penthouseView,
      alt: "Luxury Penthouse with City Views",
      code: "# 01",
      title: "Penthouse"
    },
    {
      src: villaExterior,
      alt: "Modern Villa Exterior",
      code: "# 02",
      title: "Villa"
    },
    {
      src: luxuryInterior,
      alt: "Luxury Interior Design",
      code: "# 03",
      title: "Interior"
    },
    {
      src: modernHome,
      alt: "Contemporary Modern Home",
      code: "# 04",
      title: "Modern"
    },
    {
      src: apartmentBuilding,
      alt: "Luxury Apartment Building",
      code: "# 05",
      title: "Apartment"
    },
    {
      src: officeInterior,
      alt: "Executive Office Interior",
      code: "# 06",
      title: "Office"
    },
    {
      src: officeLobby,
      alt: "Elegant Office Lobby",
      code: "# 07",
      title: "Lobby"
    },
    {
      src: heroBuilding,
      alt: "Iconic Building Architecture",
      code: "# 08",
      title: "Building"
    },
    {
      src: teamMeeting,
      alt: "Professional Team Meeting",
      code: "# 09",
      title: "Team"
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20 py-16">
      <HoverExpand images={images} />
    </div>
  );
};

const HoverExpand = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string; title: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-7xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ width: "4rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "28rem" : "6rem",
                height: "28rem",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              {/* Gradient Overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
                  />
                )}
              </AnimatePresence>

              {/* Content Overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute flex h-full w-full flex-col items-start justify-end p-6 z-20"
                  >
                    <motion.h3 
                      className="text-2xl font-serif font-bold text-white mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-white/80 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {image.alt}
                    </motion.p>
                    <motion.p 
                      className="text-xs text-white/60 font-mono"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {image.code}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image */}
              <motion.img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                initial={{ scale: 1.1 }}
                animate={{ 
                  scale: activeImage === index ? 1 : 1.1,
                  filter: activeImage === index ? "brightness(1)" : "brightness(0.8)"
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Inactive state overlay */}
              {activeImage !== index && (
                <div className="absolute inset-0 bg-black/20" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageShowcase;
export { HoverExpand };