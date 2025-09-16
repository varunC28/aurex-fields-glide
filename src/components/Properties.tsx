import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import luxuryInterior from '@/assets/luxury-interior.jpg';
import modernHome from '@/assets/modern-home.jpg';

const properties = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    price: '$12.5M',
    location: 'Upper East Side, NYC',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image: luxuryInterior,
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
    image: modernHome,
    status: 'New Listing',
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of exceptional luxury properties, 
            each representing the pinnacle of sophisticated living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-1 border-border/20"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-gradient">
                    {property.price}
                  </span>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.location}
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.sqft} sq ft
                  </div>
                </div>
                
                <Button className="w-full btn-luxury">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="glass border-border hover:bg-accent/10 hover:border-accent transition-all"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;