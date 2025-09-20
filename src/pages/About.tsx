import ReactLenis from "lenis/react";
import { ScrollSection } from "@/components/about/ScrollSection";
import { aboutContent } from "@/data/aboutContent";

const About = () => {
  return (
    <ReactLenis root>
      <main className="w-full bg-white">
        {/* Text Animation Section */}
        <ScrollSection
          content={aboutContent.text}
          animationType="text"
          showPerspective={true}
        />

        {/* Icon Scale Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons}
          animationType="icon-scale"
          headerText={aboutContent.headerText}
          marginTop="-mt-[100vh]"
        />

        {/* Icon Rotate Animation Section */}
        <ScrollSection
          content={aboutContent.techIcons}
          animationType="icon-rotate"
          headerText={aboutContent.headerText}
          marginTop="-mt-[95vh]"
          showPerspective={true}
        />
      </main>
    </ReactLenis>
  );
};

export default About;
