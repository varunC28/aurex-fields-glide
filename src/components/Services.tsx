import { Home, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useParallax, useScrollReveal } from '@/hooks/useParallax';
import officeInterior from '@/assets/office-interior.jpg';

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
  const backgroundRef = useParallax(0.3);
  const imageRef = useParallax(0.2);
  const titleRef = useScrollReveal();
  
  return (
    <section id="services" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Parallax office background */}
      <div 
        ref={imageRef as any}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${officeInterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Parallax gradient overlay */}
      <div 
        ref={backgroundRef as any}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 30%, hsl(var(--accent)) 70%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient animate-pulse-slow">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine innovative marketing strategies with deep market knowledge 
            to deliver exceptional results in luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const cardRef = useScrollReveal();
            return (
              <Card 
                key={index}
                ref={cardRef as any}
                className={`group glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-border/20 scroll-reveal-scale animate-sway`}
                style={{ animationDelay: `${index * 2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-accent-foreground transition-transform" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-foreground group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;