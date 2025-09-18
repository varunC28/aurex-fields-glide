import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

// Import images from assets folder
import luxuryInterior from "@/assets/luxury-interior.jpg";
import modernHome from "@/assets/modern-home.jpg";
import penthouseView from "@/assets/penthouse-view.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import apartmentBuilding from "@/assets/apartment-building.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import officeLobby from "@/assets/office-lobby.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

// Property data with titles and descriptions
const propertyData = [
  { image: luxuryInterior, title: "Luxury Interior", type: "Premium Design" },
  { image: modernHome, title: "Modern Home", type: "Contemporary Living" },
  { image: penthouseView, title: "Penthouse View", type: "City Skyline" },
  { image: villaExterior, title: "Villa Exterior", type: "Luxury Estate" },
  {
    image: apartmentBuilding,
    title: "Apartment Complex",
    type: "Urban Living",
  },
  { image: heroBuilding, title: "Commercial Building", type: "Business Hub" },
  { image: officeInterior, title: "Office Interior", type: "Workspace Design" },
  { image: officeLobby, title: "Office Lobby", type: "Corporate Space" },
  { image: teamMeeting, title: "Meeting Space", type: "Collaboration Area" },
  { image: luxuryInterior, title: "Luxury Interior", type: "Premium Design" },
  { image: modernHome, title: "Modern Home", type: "Contemporary Living" },
  { image: penthouseView, title: "Penthouse View", type: "City Skyline" },
  { image: villaExterior, title: "Villa Exterior", type: "Luxury Estate" },
];

const Properties = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#eee] text-black">
      <div className="font-geist flex h-screen items-center justify-center">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our diverse portfolio of premium real estate properties and
            design projects.
          </p>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white"
      >
        <Column
          properties={[propertyData[0], propertyData[1], propertyData[2]]}
          y={y}
        />
        <Column
          properties={[propertyData[3], propertyData[4], propertyData[5]]}
          y={y2}
        />
        <Column
          properties={[propertyData[6], propertyData[7], propertyData[8]]}
          y={y3}
        />
        <Column
          properties={[propertyData[9], propertyData[10], propertyData[11]]}
          y={y4}
        />
      </div>
      <div className="font-geist relative flex h-screen items-center justify-center gap-1">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-3 text-center text-black">
          <Skiper62/>
        </div>
      </div>
    </main>
  );
};

type PropertyItem = {
  image: string;
  title: string;
  type: string;
};

type ColumnProps = {
  properties: PropertyItem[];
  y: MotionValue<number>;
};

const Column = ({ properties, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {properties.map((property, i) => (
        <div
          key={i}
          className="group relative h-full w-full overflow-hidden rounded-lg cursor-pointer"
        >
          <img
            src={property.image}
            alt={property.title}
            className="pointer-events-none h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay with property info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-200">{property.type}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export { Properties };
export default Properties;


import { AnimatePresence } from "framer-motion";
import { useCallback, useMemo } from "react";

const useLoop = (delay = 1000) => {
  const [key, setKey] = useState(0);

  const incrementKey = useCallback(() => {
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementKey, delay);
    return () => clearInterval(interval);
  }, [delay, incrementKey]);

  return { key };
};

export { useLoop };

const Skiper62 = () => {
  const { key } = useLoop();

  const array = useMemo(
    () => [
      "Tik-Tik uno",
      "Tik-Tik dos",
      "Tik-Tik tres",
      "Tik-Tik cuatro",
      "Tik-Tik cinco",
      "Tik-Tik seis",
      "Tik-Tik siete",
      "Tik-Tik ocho",
      "Tik-Tik nueve",
      "Tik-Tik diez",
    ],
    [],
  );

  const currentItem = useMemo(() => {
    return array[key % array.length];
  }, [array, key]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="mb-20 grid content-start justify-items-center gap-6 text-center">
        <span className="after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:content-['']">
          useLoop hook
        </span>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.h1
          key={key}
          initial={{ opacity: 0, y: " 100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="bordr whitespace-nowrap text-center"
        >
          {currentItem}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export { Skiper62 };