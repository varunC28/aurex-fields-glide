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

        {/* Image Scale Animation Section */}
        <ScrollSection
          content={aboutContent.macIcons}
          animationType="image-scale"
          headerText={aboutContent.headerText}
          marginTop="-mt-[100vh]"
        />

        {/* Image Rotate Animation Section */}
        <ScrollSection
          content={aboutContent.macIcons}
          animationType="image-rotate"
          headerText={aboutContent.headerText}
          marginTop="-mt-[95vh]"
          showPerspective={true}
        />
      </main>
    </ReactLenis>
  );
};

export default About;
