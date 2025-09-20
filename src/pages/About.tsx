import ReactLenis from "lenis/react";
import { ScrollSection } from "@/components/about/ScrollSection";
import { aboutContent } from "@/data/aboutContent";


const About = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <main className="w-full bg-white overflow-x-hidden">
        {/* Text Animation Section */}
        <ScrollSection
          content={aboutContent.text as any}
          animationType="text"
          showPerspective={true}
          height="h-[105vh]" // Half of original height
        />

        {/* Icon Scale Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons as any}
          animationType="icon-scale"
          headerText={aboutContent.headerText}
          marginTop="-mt-[50vh]" // Adjusted margin for half height
          height="h-[105vh]" // Half of original height
        />

        {/* Icon Rotate Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons as any}
          animationType="icon-rotate"
          headerText={aboutContent.headerText}
          marginTop="-mt-[47.5vh]" // Adjusted margin for half height
          showPerspective={true}
          height="h-[105vh]" // Half of original height
        />
      </main>
    </ReactLenis>
  );
};

export default About;