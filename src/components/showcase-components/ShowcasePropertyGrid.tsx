import React from "react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/showcase-components/PropertyCard";
import { useScrollReveal } from "@/hooks/useParallax";
import { useParallaxContent } from "@/hooks/useSimpleParallax";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  featured: boolean;
}

interface ShowcasePropertyGridProps {
  gridY: any; // Framer Motion transform value
  properties: Property[];
}

const ShowcasePropertyGrid: React.FC<ShowcasePropertyGridProps> = ({ gridY, properties }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      style={{ y: gridY }}
    >
      {properties.map((property, index) => {
        const cardRef = useScrollReveal();
        const imageParallax = useParallaxContent("up", 0.3);
        
        return (
          <PropertyCard 
            key={property.id} 
            property={property} 
            index={index} 
            cardRef={cardRef}
            imageParallax={imageParallax}
          />
        );
      })}
    </motion.div>
  );
};

export default ShowcasePropertyGrid;