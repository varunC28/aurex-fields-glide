import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '$2.5B', label: 'Properties Sold' },
  { icon: Target, value: '15+', label: 'Years Experience' },
  { icon: Zap, value: '98%', label: 'Success Rate' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Aurex & Fields</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of excellence and innovation, Aurex & Fields 
              has become the premier destination for luxury real estate marketing. 
              Our team combines decades of market expertise with cutting-edge marketing 
              strategies to deliver unparalleled results.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that luxury real estate is more than just property—it's 
              about lifestyle, aspiration, and creating lasting impressions. Every 
              campaign we craft tells a story that resonates with discerning buyers.
            </p>
            
            <Button size="lg" className="btn-luxury">
              Learn Our Story
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="glass hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border-border/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;