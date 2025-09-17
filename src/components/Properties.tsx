import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import luxuryInterior from '@/assets/luxury-interior.jpg';
import modernHome from '@/assets/modern-home.jpg';
import penthouseView from '@/assets/penthouse-view.jpg';
import villaExterior from '@/assets/villa-exterior.jpg';
import { useParallax, useScrollReveal } from '@/hooks/useParallax';

const properties = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    price: '$12.5M',
    location: 'Upper East Side, NYC',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image: penthouseView,
    status: 'Featured',
  },
  {
    id: 2,
    title: 'Modern Estate',
    price: '$8.2M',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 4,
    sqft: '4,800',
    image: villaExterior,
    status: 'New Listing',
  },
  {
    id: 3,
    title: 'Luxury Interior',
    price: '$6.8M',
    location: 'Downtown Miami, FL',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: luxuryInterior,
    status: 'Premium',
  },
  {
    id: 4,
    title: 'Modern Home',
    price: '$4.2M',
    location: 'Austin, TX',
    beds: 4,
    baths: 3,
    sqft: '3,600',
    image: modernHome,
    status: 'Available',
  },
];

const Properties = () => {
  const backgroundRef = useParallax(0.2);
  const titleRef = useScrollReveal();
  
  return (
    <section id="properties" className="relative py-24 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 animate-drift opacity-20">
        <Star className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-30">
        <Star className="w-6 h-6 text-accent" />
      </div>
      
      {/* Parallax gradient overlay */}
      <div 
        ref={backgroundRef as any}
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--accent)) 0%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient animate-pulse-slow">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of exceptional luxury properties, 
            each representing the pinnacle of sophisticated living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property, index) => {
            const cardRef = useScrollReveal();
            const imageParallax = useParallax(0.1);
            
            return (
              <Card 
                key={property.id}
                ref={cardRef as any}
                className={`group overflow-hidden glass hover:shadow-luxury transition-all duration-700 hover:-translate-y-3 hover:rotate-1 border-border/20 scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
              >
                <div className="relative overflow-hidden h-80">
                  <div
                    ref={imageParallax as any}
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${property.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute top-4 left-4 animate-pulse-slow">
                    <Badge className="bg-accent text-accent-foreground font-semibold shadow-gold">
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover overlay with floating elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-gradient transition-all">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-bold text-gradient animate-pulse-slow">
                      {property.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                    <MapPin className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                    {property.location}
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                    <div className="flex items-center hover:scale-105 transition-transform">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.beds} Beds
                    </div>
                    <div className="flex items-center hover:scale-105 transition-transform">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.baths} Baths
                    </div>
                    <div className="flex items-center hover:scale-105 transition-transform">
                      <Square className="w-4 h-4 mr-1" />
                      {property.sqft} sq ft
                    </div>
                  </div>
                  
                  <Button className="w-full btn-luxury group-hover:scale-105 transition-transform">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="glass border-border hover:bg-accent/10 hover:border-accent transition-all hover:scale-105 animate-pulse-slow"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;