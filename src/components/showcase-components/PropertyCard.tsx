import React from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  Heart, 
  Share2, 
  Star, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { 
  FloatingButton, 
  AnimatedButton
} from "@/components/ui/skiper-ui/skiper52";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  featured: boolean;
}

interface PropertyCardProps {
  property: Property;
  index: number;
  cardRef: any;
  imageParallax: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, cardRef, imageParallax }) => {
  return (
    <motion.div
      ref={cardRef as any}
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05
      }}
      viewport={{ once: true }}
    >
      {/* Property Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          ref={imageParallax as any}
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-2 left-2">
            <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star className="w-2.5 h-2.5 mr-1" />
              Featured
            </div>
          </div>
        )}

        {/* Property Type */}
        <div className="absolute top-2 right-2">
          <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
            {property.type}
          </div>
        </div>

        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="flex gap-2">
            <FloatingButton className="bg-white/80 text-black hover:bg-white p-1.5">
              <Eye className="w-3.5 h-3.5" />
            </FloatingButton>
            <FloatingButton className="bg-white/80 text-black hover:bg-accent hover:text-accent-foreground p-1.5">
              <Heart className="w-3.5 h-3.5" />
            </FloatingButton>
            <FloatingButton className="bg-white/80 text-black hover:bg-primary hover:text-primary-foreground p-1.5">
              <Share2 className="w-3.5 h-3.5" />
            </FloatingButton>
          </div>
        </div>
      </div>

      {/* Property Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-foreground text-sm">
            {property.title}
          </h3>
          <span className="text-sm font-bold text-primary">
            {property.price}
          </span>
        </div>

        <div className="flex items-center text-muted-foreground text-xs mb-3">
          <MapPin className="w-3 h-3 mr-1" />
          {property.location}
        </div>

        {/* Action Button */}
        <AnimatedButton 
          className="w-full justify-center text-xs py-2"
          variant="outline"
        >
          View Details
          <ArrowRight className="w-3 h-3 ml-1" />
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default PropertyCard;