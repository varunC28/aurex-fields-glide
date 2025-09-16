import { Home, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Property Marketing',
    description: 'Strategic marketing campaigns that showcase luxury properties with sophisticated visual storytelling and targeted outreach.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'Data-driven insights and comprehensive market analysis to optimize pricing strategies and investment decisions.',
  },
  {
    icon: Users,
    title: 'Client Relations',
    description: 'Personalized service and relationship management ensuring exceptional experiences for buyers and sellers.',
  },
  {
    icon: Award,
    title: 'Premium Branding',
    description: 'Elevated brand positioning and marketing collateral that reflects the prestige of luxury real estate.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine innovative marketing strategies with deep market knowledge 
            to deliver exceptional results in luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 border-border/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;