import ReactLenis from "lenis/react";
import { ScrollSection } from "@/components/about/ScrollSection";
import { aboutContent } from "@/data/aboutContent";

const About = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <main className="w-full bg-background overflow-x-hidden">
        {/* Text Animation Section */}
        <ScrollSection
          content={aboutContent.text as any}
          animationType="text"
          showPerspective={true}
          height="h-[120vh] md:h-[120vh] lg:h-[120vh]" // Reduced height for closer sections
          className="bg-secondary" // Using project's color scheme
        />

        {/* Icon Scale Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons as any}
          animationType="icon-scale"
          headerText={aboutContent.headerText}
          marginTop="-mt-[30vh] md:-mt-[30vh] lg:-mt-[30vh]" // Reduced negative margin for closer sections
          height="h-[120vh] md:h-[120vh] lg:h-[120vh]" // Reduced height for closer sections
          className="bg-background" // Using project's color scheme
        />

        {/* Icon Rotate Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons as any}
          animationType="icon-rotate"
          headerText={aboutContent.headerText}
          marginTop="-mt-[28vh] md:-mt-[28vh] lg:-mt-[28vh]" // Reduced negative margin for closer sections
          showPerspective={true}
          height="h-[120vh] md:h-[120vh] lg:h-[120vh]" // Reduced height for closer sections
          className="bg-secondary" // Using project's color scheme
        />
      </main>
    </ReactLenis>
  );
};

export default About;