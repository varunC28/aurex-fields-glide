import React from "react";

interface ShowcaseHeaderProps {
  headerY: any; // Framer Motion transform value
}

const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({ headerY }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
        Exclusive Property
        <span className="text-primary block">
          Collection
        </span>
      </h2>
      <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
        Discover our handpicked selection of the world's most prestigious
        properties, each representing the pinnacle of luxury living and
        architectural excellence.
      </p>
    </div>
  );
};

export default ShowcaseHeader;