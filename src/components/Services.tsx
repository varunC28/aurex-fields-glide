import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images from assets
import luxuryInterior from "@/assets/luxury-interior.jpg";
import modernHome from "@/assets/modern-home.jpg";
import penthouseView from "@/assets/penthouse-view.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import apartmentBuilding from "@/assets/apartment-building.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import officeLobby from "@/assets/office-lobby.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

// Interface for image data
interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// Interface for Services component props
interface ServicesProps {
  images: ImageData[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}

const Skiper48 = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const images = [
    {
      src: luxuryInterior,
      alt: "Luxury Interior Design Services",
      title: "Luxury Interior Design",
      description:
        "Transform your space with our premium interior design services. We create sophisticated and elegant living environments that reflect your personal style.",
    },
    {
      src: modernHome,
      alt: "Modern Home Architecture & Design",
      title: "Modern Home Architecture",
      description:
        "Contemporary architectural solutions that blend functionality with aesthetic appeal. Our designs embrace clean lines and innovative materials.",
    },
    {
      src: penthouseView,
      alt: "Penthouse Property Management",
      title: "Penthouse Management",
      description:
        "Exclusive property management services for luxury penthouses. We ensure your premium investment receives the attention it deserves.",
    },
    {
      src: villaExterior,
      alt: "Villa Sales & Marketing Services",
      title: "Villa Sales & Marketing",
      description:
        "Comprehensive marketing strategies for luxury villas. Our expertise helps you reach the right buyers and achieve optimal property values.",
    },
    {
      src: apartmentBuilding,
      alt: "Apartment Complex Development",
      title: "Apartment Development",
      description:
        "Full-service apartment complex development from concept to completion. We handle every aspect of your residential project.",
    },
    {
      src: heroBuilding,
      alt: "Hero Building Architecture",
      title: "Commercial Architecture",
      description:
        "Innovative commercial building designs that make a statement. Our architectural solutions enhance your business presence.",
    },
    {
      src: officeInterior,
      alt: "Office Interior Design",
      title: "Office Interior Solutions",
      description:
        "Professional office interior design that boosts productivity and creates inspiring work environments for your team.",
    },
    {
      src: officeLobby,
      alt: "Office Lobby Design",
      title: "Corporate Lobby Design",
      description:
        "Impressive lobby designs that create lasting first impressions. We craft welcoming spaces that reflect your company's values.",
    },
    {
      src: teamMeeting,
      alt: "Team Meeting Space",
      title: "Collaborative Spaces",
      description:
        "Dynamic meeting and collaboration spaces designed to foster creativity and enhance team productivity in modern work environments.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f4f3] py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile and Tablet Layout (Stack Vertically) */}
        <div className="flex flex-col lg:hidden space-y-8 sm:space-y-12">
          {/* Image Section - Mobile */}
          <div className="w-full flex items-center justify-center">
            <Services className="" images={images} loop />
          </div>
          
          {/* Text Section - Mobile First */}
          <div className="w-full flex flex-col justify-center space-y-6 text-center sm:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Our Premium Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                Discover our comprehensive range of real estate and design
                services. From luxury interior design to commercial
                architecture, we deliver exceptional results that exceed
                expectations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto sm:mx-0">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Expert team with 15+ years of experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Personalized approach to every project
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  Premium quality materials and finishes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0">
                  </span>
                  On-time delivery and budget management
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button className="bg-[#2E3A59] hover:bg-[#1F2937] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Side by Side) */}
        <div className="hidden lg:flex lg:gap-8 xl:gap-12 2xl:gap-16 items-center min-h-[80vh]">
          {/* Image Section - Desktop (2/3 of space) */}
          <div className="w-2/3 flex items-center justify-center">
            <Services className="" images={images} loop />
          </div>

          {/* Text Section - Desktop (1/3 of space) */}
          <div className="w-1/3 flex flex-col justify-center space-y-6 xl:space-y-8">
            <div className="space-y-4 xl:space-y-6">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
                Our Premium Services
              </h2>
              <motion.p
                ref={textRef}
                className="text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                Discover our comprehensive range of real estate and design
                services. From luxury interior design to commercial
                architecture, we deliver exceptional results that exceed
                expectations.
              </motion.p>
            </div>

            <div className="space-y-4 xl:space-y-6">
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 xl:space-y-4 text-sm xl:text-base 2xl:text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 bg-[#FFD700] rounded-full mt-2 mr-3 xl:mr-4 flex-shrink-0">
                  </span>
                  Expert team with 15+ years of experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 bg-[#FFD700] rounded-full mt-2 mr-3 xl:mr-4 flex-shrink-0">
                  </span>
                  Personalized approach to every project
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 bg-[#FFD700] rounded-full mt-2 mr-3 xl:mr-4 flex-shrink-0">
                  </span>
                  Premium quality materials and finishes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 bg-[#FFD700] rounded-full mt-2 mr-3 xl:mr-4 flex-shrink-0">
                  </span>
                  On-time delivery and budget management
                </li>
              </ul>
            </div>

            <div className="pt-4 xl:pt-6">
              <button className="bg-[#2E3A59] hover:bg-[#1F2937] text-white px-8 xl:px-10 py-3 xl:py-4 rounded-lg font-semibold transition-colors duration-200 text-base xl:text-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: ServicesProps) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  
  /* Responsive Swiper Styles - Increased image sizes */
  @media (max-width: 640px) {
    .Carousal_002 {
      height: 320px !important;
      width: 240px !important;
    }
  }
  
  @media (min-width: 641px) and (max-width: 768px) {
    .Carousal_002 {
      height: 380px !important;
      width: 280px !important;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .Carousal_002 {
      height: 420px !important;
      width: 320px !important;
    }
  }
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    .Carousal_002 {
      height: 460px !important;
      width: 360px !important;
    }
  }
  
  @media (min-width: 1281px) and (max-width: 1536px) {
    .Carousal_002 {
      height: 500px !important;
      width: 400px !important;
    }
  }
  
  @media (min-width: 1537px) {
    .Carousal_002 {
      height: 550px !important;
      width: 450px !important;
    }
  }
  
  /* Navigation buttons styling with theme colors */
  .swiper-button-next,
  .swiper-button-prev {
    background: hsl(222, 47%, 11%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: hsl(43, 100%, 68%);
    transform: scale(1.1);
  }
  
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  
  /* Pagination styling */
  .swiper-pagination-bullet {
    background: hsl(220, 14%, 96%);
    opacity: 1;
    width: 10px;
    height: 10px;
  }
  
  .swiper-pagination-bullet-active {
    background: hsl(43, 100%, 68%);
    transform: scale(1.2);
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full flex justify-center", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={autoplay
          ? {
            delay: 1000,
            disableOnInteraction: false,
          }
          : false}
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={showPagination
          ? {
            clickable: true,
          }
          : false}
        navigation={showNavigation
          ? {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
          : false}
        className="Carousal_002"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Services };
export default Skiper48;