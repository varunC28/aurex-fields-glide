import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Zap, TrendingUp } from 'lucide-react';
import { useParallax, useScrollReveal } from '@/hooks/useParallax';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '$2.5B', label: 'Properties Sold' },
  { icon: Target, value: '15+', label: 'Years Experience' },
  { icon: Zap, value: '98%', label: 'Success Rate' },
];

const About = () => {
  const backgroundRef = useParallax(0.4);
  const contentRef = useScrollReveal();
  const statsRef = useScrollReveal();
  
  return (
    <section id="about" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Parallax background elements */}
      <div 
        ref={backgroundRef as any}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 30% 80%, hsl(var(--accent)) 0%, transparent 50%)',
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 animate-drift opacity-20">
        <TrendingUp className="w-10 h-10 text-accent" />
      </div>
      <div className="absolute bottom-32 left-16 animate-sway opacity-30">
        <Award className="w-8 h-8 text-primary" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef as any} className="scroll-reveal-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient animate-pulse-slow">Aurex & Fields</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed hover:text-foreground transition-colors duration-300">
              Founded on the principles of excellence and innovation, Aurex & Fields 
              has become the premier destination for luxury real estate marketing. 
              Our team combines decades of market expertise with cutting-edge marketing 
              strategies to deliver unparalleled results.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed hover:text-foreground transition-colors duration-300">
              We understand that luxury real estate is more than just property—it's 
              about lifestyle, aspiration, and creating lasting impressions. Every 
              campaign we craft tells a story that resonates with discerning buyers.
            </p>
            
            <Button size="lg" className="btn-luxury hover:scale-105 transition-transform animate-pulse-slow">
              Learn Our Story
            </Button>
          </div>

          <div ref={statsRef as any} className="grid grid-cols-2 gap-6 scroll-reveal-right">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className={`glass hover:shadow-gold transition-all duration-500 hover:-translate-y-2 hover:rotate-2 border-border/20 animate-float`}
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2 hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">
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