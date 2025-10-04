import { motion, useScroll, useTransform } from "framer-motion";
import ImageShowcase from "@/components/ImageShowcase";
import { useNavigate } from "react-router-dom";

// Import all assets
import apartmentBuilding from "@/assets/apartment-building.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import modernHome from "@/assets/modern-home.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import penthouseView from "@/assets/penthouse-view.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

// Import new sub-components
import ShowcaseHeader from "@/components/showcase-components/ShowcaseHeader";
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
  const navigate = useNavigate();
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

  return (
    <section
      id="showcase"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ShowcaseHeader headerY={headerY} />

        {/* Interactive Image Showcase with Parallax */}
        <motion.div 
          className="mb-12 sm:mb-16 md:mb-20 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          role="button"
          tabIndex={0}
          aria-label="View all properties"
          onClick={() => navigate('/properties')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigate('/properties');
            }
          }}
        >
          <ImageShowcase />
        </motion.div>
        <ShowcaseCTA statsY={statsY} />
      </div>
    </section>
  );
};

export default PropertyShowcase;