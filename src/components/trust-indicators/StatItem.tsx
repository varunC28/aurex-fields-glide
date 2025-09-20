import React from "react";

interface StatItemProps {
  value: React.ReactNode;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
        {value}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export default StatItem;