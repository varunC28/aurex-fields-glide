import React from "react";
import {
  AnimatedButton,
  FloatingButton,
  Skiper52,
} from "@/components/ui/skiper-ui/skiper52";
import ImageShowcase from "@/components/ImageShowcase";
import {
  useParallaxBackground,
  useParallaxContent,
  useParallaxHorizontal,
} from "@/hooks/useSimpleParallax";
import { useScrollReveal } from "@/hooks/useParallax";
import {
  ArrowRight,
  Building,
  Camera,
  Eye,
  Heart,
  Home,
  MapPin,
  Play,
  Share2,
  Sparkles,
  Star,
} from "lucide-react";

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

const PropertyShowcase = () => {
  const backgroundRef = useParallaxBackground(1.1);
  const overlayRef = useParallaxContent("down", 0.4);
  const floatingLeftRef = useParallaxHorizontal("left", 1.05);
  const floatingRightRef = useParallaxHorizontal("right", 1.05);
  const titleRef = useScrollReveal();

  // Property data with all images
  const properties = [
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
      {/* Dynamic parallax background */}
      <img
        ref={backgroundRef as any}
        src={backgroundImages[0]}
        alt="Luxury Showcase"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Parallax gradient overlay */}
      <div
        ref={overlayRef as any}
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 40%, hsl(var(--accent)) 60%, transparent 100%)",
        }}
      />

      {/* Floating decorative elements */}
      <div
        ref={floatingLeftRef as any}
        className="absolute top-16 left-8 opacity-30"
      >
        <Building className="w-12 h-12 text-accent animate-pulse" />
      </div>
      <div
        ref={floatingRightRef as any}
        className="absolute bottom-16 right-8 opacity-25"
      >
        <Home className="w-10 h-10 text-primary animate-pulse" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-20">
        <Sparkles className="w-8 h-8 text-accent animate-bounce" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={titleRef as any} className="text-center mb-20 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Exclusive Property
            <span className="text-gradient block animate-pulse-slow">
              Collection
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our handpicked selection of the world's most prestigious
            properties, each representing the pinnacle of luxury living and
            architectural excellence.
          </p>

          {/* Main CTA with Skiper52 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Skiper52 className="text-lg px-10 py-4 min-w-[220px]">
              <Camera className="w-5 h-5 mr-3" />
              Virtual Tour
            </Skiper52>

            <AnimatedButton
              variant="outline"
              className="text-lg px-10 py-4 min-w-[220px] border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Play className="w-5 h-5 mr-3" />
              Watch Video
            </AnimatedButton>
          </div>
        </div>

        {/* Interactive Image Showcase */}
        <div className="mb-20">
          <ImageShowcase />
        </div>

        {/* Property Grid with Skiper52 Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => {
            const cardRef = useScrollReveal();
            const imageParallax = useParallaxContent("up", 0.3);

            return (
              <div
                key={property.id}
                ref={cardRef as any}
                className={`group relative overflow-hidden rounded-2xl glass hover:shadow-luxury transition-all duration-700 hover:-translate-y-4 hover:rotate-1 border-border/20 scroll-reveal ${
                  index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
                }`}
              >
                {/* Property Image with Parallax */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    ref={imageParallax as any}
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Property Type */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {property.type}
                    </div>
                  </div>

                  {/* Hover Overlay with Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        <FloatingButton className="bg-white/20 text-white hover:bg-white hover:text-black p-2">
                          <Eye className="w-4 h-4" />
                        </FloatingButton>
                        <FloatingButton className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground p-2">
                          <Heart className="w-4 h-4" />
                        </FloatingButton>
                        <FloatingButton className="bg-white/20 text-white hover:bg-primary hover:text-primary-foreground p-2">
                          <Share2 className="w-4 h-4" />
                        </FloatingButton>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-gradient transition-all">
                      {property.title}
                    </h3>
                    <span className="text-xl font-bold text-gradient">
                      {property.price}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                    <MapPin className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                    {property.location}
                  </div>

                  {/* Action Button */}
                  <Skiper52 className="w-full justify-center">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Skiper52>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <AnimatedButton
              variant="ghost"
              className="text-lg px-8 py-4 text-primary hover:bg-primary/10"
            >
              <Building className="w-5 h-5 mr-3" />
              Browse All Properties
            </AnimatedButton>

            <Skiper52
              href="#contact"
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Schedule Viewing
            </Skiper52>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Luxury Properties
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">
                $500M+
              </div>
              <div className="text-sm text-muted-foreground">
                Portfolio Value
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">25+</div>
              <div className="text-sm text-muted-foreground">
                Prime Locations
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
