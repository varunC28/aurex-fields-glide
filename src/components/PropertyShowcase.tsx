import { motion, useScroll, useTransform } from "framer-motion";
import ImageShowcase from "@/components/ImageShowcase";

// Import all assets
import apartmentBuilding from "@/assets/apartment-building.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import modernHome from "@/assets/modern-home.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import officeLobby from "@/assets/office-lobby.jpg";
import penthouseView from "@/assets/penthouse-view.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

// Import new sub-components
import ShowcaseHeader from "@/components/showcase-components/ShowcaseHeader";
import ShowcasePropertyGrid from "@/components/showcase-components/ShowcasePropertyGrid";
import ShowcaseCTA from "@/components/showcase-components/ShowcaseCTA";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  featured: boolean;
}

const PropertyShowcase = () => {
  // Framer Motion parallax setup
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const statsY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Property data with all images
  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Manhattan, NYC",
      price: "$12.5M",
      image: penthouseView,
      type: "Penthouse",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Beverly Hills, CA",
      price: "$8.2M",
      image: villaExterior,
      type: "Villa",
      featured: false,
    },
    {
      id: 3,
      title: "Luxury Interior",
      location: "Miami Beach, FL",
      price: "$6.8M",
      image: luxuryInterior,
      type: "Condo",
      featured: true,
    },
    {
      id: 4,
      title: "Modern Home",
      location: "Austin, TX",
      price: "$4.2M",
      image: modernHome,
      type: "House",
      featured: false,
    },
    {
      id: 5,
      title: "Luxury Apartment",
      location: "Chicago, IL",
      price: "$3.8M",
      image: apartmentBuilding,
      type: "Apartment",
      featured: true,
    },
    {
      id: 6,
      title: "Executive Office",
      location: "Downtown NYC",
      price: "$15M",
      image: officeInterior,
      type: "Commercial",
      featured: false,
    },
  ];

  const backgroundImages = [officeLobby, teamMeeting, heroBuilding];

  return (
    <section
      id="showcase"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/5"
    >
      <div className="container mx-auto px-6 relative z-10">
        <ShowcaseHeader headerY={headerY} />

        {/* Interactive Image Showcase with Parallax */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ImageShowcase />
        </motion.div>

        <ShowcasePropertyGrid 
          gridY={gridY} 
          properties={properties} 
        />

        <ShowcaseCTA statsY={statsY} />
      </div>
    </section>
  );
};

export default PropertyShowcase;
