import React from "react";
import StatItem from "@/components/trust-indicators/StatItem";
import AnimatedNumber from "@/components/trust-indicators/AnimatedNumber";
import CurrencyAnimatedNumber from "@/components/trust-indicators/CurrencyAnimatedNumber";

const TrustIndicators: React.FC = () => {
  const stats = [
    { 
      value: <AnimatedNumber finalCount={500} suffix="+" />, 
      label: "Properties Sold" 
    },
    { 
      value: <CurrencyAnimatedNumber finalValue={100} prefix="$" suffix="K+ USD" />, 
      label: "Prime Locations" 
    },
    { 
      value: <AnimatedNumber finalCount={50} suffix="+" />, 
      label: "Expert Agents" 
    },
    { 
      value: <AnimatedNumber finalCount={98} suffix="%" />, 
      label: "Client Satisfaction" 
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-border">
      {stats.map((stat, index) => (
        <StatItem 
          key={index}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default TrustIndicators;