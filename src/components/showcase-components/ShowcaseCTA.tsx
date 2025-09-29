import React from "react";
import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";
import { AnimatedButton } from "@/components/ui/skiper-ui/skiper52";
import { useNavigate } from "react-router-dom";

interface ShowcaseCTAProps {
  statsY: any; // Framer Motion transform value
}

const ShowcaseCTA: React.FC<ShowcaseCTAProps> = ({ statsY }) => {
  const navigate = useNavigate();

  const handleBrowseProperties = () => {
    navigate("/properties");
  };

  return (
    <motion.div 
      className="text-center"
      style={{ y: statsY }}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <AnimatedButton
          variant="ghost"
          className="text-sm px-4 py-2 text-primary hover:bg-primary/10"
          onClick={handleBrowseProperties}
        >
          <Building className="w-4 h-4 mr-2" />
          Browse All Properties
        </AnimatedButton>

        <AnimatedButton
          variant="ghost"
          className="text-sm px-4 py-2 text-primary hover:bg-primary/10"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Schedule Viewing 
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default ShowcaseCTA;