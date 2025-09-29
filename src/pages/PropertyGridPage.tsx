import React, { useState, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShowcasePropertyGrid from "@/components/showcase-components/ShowcasePropertyGrid";
import ShowcaseHeader from "@/components/showcase-components/ShowcaseHeader";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/skiper-ui/skiper52";
import { Search, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { MenuToggle } from "@/components/header/MenuToggle";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Import all assets
import apartmentBuilding from "@/assets/apartment-building.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import modernHome from "@/assets/modern-home.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import penthouseView from "@/assets/penthouse-view.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  type: string;
  featured: boolean;
  bedrooms: number;
  bathrooms: number;
  size: number; // in sq ft
  project: string; // Added project field
}

// Custom NavigationItem that handles cross-route navigation
const CustomNavigationItem = ({ item, index, onClose, navigate }: any) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    
    // For hash links, navigate to home page with hash
    if (item.href.startsWith('#')) {
      navigate(`/${item.href}`);
    } else {
      navigate(item.href);
    }
  };

  return (
    <li
      className="border-b border-gray-100 last:border-b-0"
      style={{
        transform: 'translateY(50px)',
        opacity: 0,
        animation: `fadeInUp 0.4s ease-out forwards ${0.2 + index * 0.1}s`
      }}
    >
      <a
        href={item.href}
        onClick={handleClick}
        className="group block w-full"
      >
        <div className="flex justify-center">
          <div className="relative overflow-hidden py-2 w-full text-center">
            {/* Black wave background */}
            <div 
              className="absolute inset-0 bg-black"
              style={{
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.6s ease-in-out'
              }}
            />
            {/* Text that changes color with wave */}
            <div className="relative z-10">
              <div
                style={{
                  color: '#000000',
                  transition: 'color 0.6s ease-in-out'
                }}
              >
                <div className="font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl text-center">
                  {item.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

// Custom NavigationMenu that uses our custom NavigationItem
const CustomNavigationMenu = ({ isOpen, navigationItems, onClose, navigate }: any) => {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 30,
            backgroundColor: 'white',
            opacity: 0,
            animation: 'fadeIn 0.4s ease-in-out forwards'
          }}
        >
          <div className="flex h-full flex-col">
            {/* Spacer for header */}
            <div className="h-14 sm:h-16 lg:h-20" />

            {/* Navigation Items */}
            <div
              style={{
                opacity: 0,
                transform: 'translateY(50px)',
                animation: 'fadeInUp 0.5s ease-out 0.1s forwards'
              }}
              className="flex flex-1 flex-col items-center justify-start px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16"
            >
              <nav className="w-full max-w-4xl">
                <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {navigationItems.map((item: any, index: number) => (
                    <CustomNavigationItem
                      key={index}
                      item={item}
                      index={index}
                      onClose={onClose}
                      navigate={navigate}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

const PropertyGridPage = () => {
  const navigate = useNavigate();
  
  // Framer Motion parallax setup
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Property data with all images
  const initialProperties: Property[] = [
    {
      id: 1,
      title: "Skyline Penthouse",
      location: "Mumbai, Maharashtra",
      price: 12500000,
      image: penthouseView,
      type: "Penthouse",
      featured: true,
      bedrooms: 4,
      bathrooms: 4,
      size: 3500,
      project: "Skyline Heights"
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Pune, Maharashtra",
      price: 8200000,
      image: villaExterior,
      type: "Villa",
      featured: false,
      bedrooms: 5,
      bathrooms: 5,
      size: 5200,
      project: "Green Valley"
    },
    {
      id: 3,
      title: "Luxury Interior",
      location: "Bangalore, Karnataka",
      price: 6800000,
      image: luxuryInterior,
      type: "Apartment",
      featured: true,
      bedrooms: 3,
      bathrooms: 3,
      size: 2800,
      project: "Urban Oasis"
    },
    {
      id: 4,
      title: "Modern Home",
      location: "Hyderabad, Telangana",
      price: 4200000,
      image: modernHome,
      type: "House",
      featured: false,
      bedrooms: 4,
      bathrooms: 3,
      size: 3200,
      project: "Tech Park Residency"
    },
    {
      id: 5,
      title: "Luxury Apartment",
      location: "Chennai, Tamil Nadu",
      price: 3800000,
      image: apartmentBuilding,
      type: "Apartment",
      featured: true,
      bedrooms: 2,
      bathrooms: 2,
      size: 1800,
      project: "Sea Breeze"
    },
    {
      id: 6,
      title: "Executive Office",
      location: "Delhi, NCR",
      price: 15000000,
      image: officeInterior,
      type: "Commercial",
      featured: false,
      bedrooms: 0,
      bathrooms: 3,
      size: 4500,
      project: "Business Hub"
    },
    {
      id: 7,
      title: "Downtown Loft",
      location: "Kolkata, West Bengal",
      price: 2100000,
      image: modernHome,
      type: "Loft",
      featured: true,
      bedrooms: 2,
      bathrooms: 2,
      size: 1500,
      project: "City Center"
    },
    {
      id: 8,
      title: "Suburban Family Home",
      location: "Ahmedabad, Gujarat",
      price: 950000,
      image: villaExterior,
      type: "House",
      featured: false,
      bedrooms: 4,
      bathrooms: 3,
      size: 2800,
      project: "Sunny Meadows"
    },
    {
      id: 9,
      title: "Waterfront Condo",
      location: "Goa",
      price: 3200000,
      image: luxuryInterior,
      type: "Condo",
      featured: true,
      bedrooms: 3,
      bathrooms: 3,
      size: 2200,
      project: "Ocean View"
    },
    {
      id: 10,
      title: "Historic Townhouse",
      location: "Jaipur, Rajasthan",
      price: 4800000,
      image: apartmentBuilding,
      type: "Townhouse",
      featured: false,
      bedrooms: 5,
      bathrooms: 4,
      size: 3800,
      project: "Heritage Gardens"
    },
    {
      id: 11,
      title: "Mountain Retreat",
      location: "Manali, Himachal Pradesh",
      price: 5600000,
      image: villaExterior,
      type: "House",
      featured: true,
      bedrooms: 6,
      bathrooms: 5,
      size: 4200,
      project: "Hilltop Haven"
    },
    {
      id: 12,
      title: "Urban Studio",
      location: "Noida, Uttar Pradesh",
      price: 750000,
      image: modernHome,
      type: "Studio",
      featured: false,
      bedrooms: 1,
      bathrooms: 1,
      size: 600,
      project: "Metro Plaza"
    }
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(20000000);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [project, setProject] = useState<string>("all"); // Added project filter
  const [sortBy, setSortBy] = useState<string>("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const propertiesPerPage = 6;

  // Get unique property types for filter dropdown
  const propertyTypes = useMemo(() => {
    const types = initialProperties.map(property => property.type);
    return ["all", ...Array.from(new Set(types))];
  }, []);

  // Get unique projects for filter dropdown
  const projects = useMemo(() => {
    const projectList = initialProperties.map(property => property.project);
    return ["all", ...Array.from(new Set(projectList))];
  }, []);

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let result = [...initialProperties];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(term) ||
        property.location.toLowerCase().includes(term)
      );
    }
    
    // Apply property type filter
    if (propertyType !== "all") {
      result = result.filter(property => property.type === propertyType);
    }
    
    // Apply project filter
    if (project !== "all") {
      result = result.filter(property => property.project === project);
    }
    
    // Apply price filter (converted to Indian metrics)
    result = result.filter(property => 
      property.price >= minPrice && property.price <= maxPrice
    );
    
    // Apply bedrooms filter
    if (bedrooms > 0) {
      result = result.filter(property => property.bedrooms >= bedrooms);
    }
    
    // Apply bathrooms filter
    if (bathrooms > 0) {
      result = result.filter(property => property.bathrooms >= bathrooms);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "size":
        result.sort((a, b) => b.size - a.size);
        break;
      case "newest":
      default:
        // Properties are already in order by ID (newest first)
        break;
    }
    
    return result;
  }, [searchTerm, propertyType, project, minPrice, maxPrice, bedrooms, bathrooms, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const paginatedProperties = filteredAndSortedProperties.slice(startIndex, startIndex + propertiesPerPage);

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, propertyType, project, minPrice, maxPrice, bedrooms, bathrooms, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setPropertyType("all");
    setProject("all");
    setMinPrice(0);
    setMaxPrice(20000000);
    setBedrooms(0);
    setBathrooms(0);
    setSortBy("newest");
  };

  // Format price for Indian metrics
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} L`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-background py-12 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0 w-full h-full" />
      
      {/* Header with logo */}
      <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-transparent" style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: 'translateZ(0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        backgroundColor: 'transparent',
        pointerEvents: 'auto'
      }}>
        <div className="flex items-center justify-between p-4 lg:p-6">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-primary"
          >
            Aurex
          </button>
        </div>
      </header>
      
      {/* Menu Toggle Button - Using the same component as Index.tsx */}
      <div 
        className="fixed top-4 right-4 z-[10000]"
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 10000,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
      
      {/* Custom Navigation Menu */}
      <CustomNavigationMenu
        isOpen={isMenuOpen}
        navigationItems={navigationItems}
        onClose={closeMenu}
        navigate={navigate}
      />
      
      <div className="container mx-auto px-4 sm:px-6 pt-20 relative z-10">
        <ShowcaseHeader headerY={headerY} />
        
        {/* Search and Filters Section */}
        <motion.div 
          className="mb-8 p-4 sm:p-6 bg-card rounded-lg border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Property Type Filter */}
            <div>
              <select 
                value={propertyType} 
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">All Property Types</option>
                {propertyTypes.filter(type => type !== "all").map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Project Filter */}
            <div>
              <select 
                value={project} 
                onChange={(e) => setProject(e.target.value)}
                className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">All Projects</option>
                {projects.filter(proj => proj !== "all").map(proj => (
                  <option key={proj} value={proj}>
                    {proj}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort By */}
            <div>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="newest">Newest Listings</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="size">Size: Largest First</option>
              </select>
            </div>
            
            {/* Reset Filters Button */}
            <AnimatedButton 
              variant="outline" 
              onClick={resetFilters}
              className="flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              Reset Filters
            </AnimatedButton>
          </div>
          
          {/* Additional Filters - Made responsive for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Price Range */}
            <div className="col-span-1 sm:col-span-2 md:col-span-4">
              <label className="text-sm font-medium mb-2 block">Price Range: {formatPrice(minPrice)} - {formatPrice(maxPrice)}</label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">₹0</span>
                <input
                  type="range"
                  min="0"
                  max="20000000"
                  step="100000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground">₹2Cr</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">{formatPrice(minPrice)}</span>
                <span className="text-xs text-muted-foreground">{formatPrice(maxPrice)}</span>
              </div>
            </div>
            
            {/* Bedrooms */}
            <div>
              <label className="text-sm font-medium mb-2 block">Bedrooms: {bedrooms === 0 ? "Any" : bedrooms + "+"}</label>
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">0</span>
                <span className="text-xs text-muted-foreground">6+</span>
              </div>
            </div>
            
            {/* Bathrooms */}
            <div>
              <label className="text-sm font-medium mb-2 block">Bathrooms: {bathrooms === 0 ? "Any" : bathrooms + "+"}</label>
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={bathrooms}
                onChange={(e) => setBathrooms(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">0</span>
                <span className="text-xs text-muted-foreground">6+</span>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">
                Showing {paginatedProperties.length} of {filteredAndSortedProperties.length} properties
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Property Grid */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {paginatedProperties.length > 0 ? (
            <ShowcasePropertyGrid gridY={gridY} properties={paginatedProperties.map(property => ({
              ...property,
              price: formatPrice(property.price)
            }))} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results</p>
              <AnimatedButton onClick={resetFilters}>Reset All Filters</AnimatedButton>
            </div>
          )}
        </motion.div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center gap-2 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedButton
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="mr-2"
            >
              Previous
            </AnimatedButton>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <AnimatedButton
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  onClick={() => setCurrentPage(pageNum)}
                  className="mx-1"
                >
                  {pageNum}
                </AnimatedButton>
              );
            })}
            
            <AnimatedButton
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="ml-2"
            >
              Next
            </AnimatedButton>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PropertyGridPage;