import React from "react";
import { Building, MapPin } from "lucide-react";
import { AnimatedButton } from "@/components/ui/skiper-ui/skiper52";

const ShowcaseCTA: React.FC = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <AnimatedButton
          variant="ghost"
          className="text-sm px-4 py-2 text-primary hover:bg-primary/10"
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
    </div>
  );
};

export default ShowcaseCTA;