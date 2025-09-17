import React from 'react';
import { Skiper52, AnimatedButton, FloatingButton } from '@/components/ui/skiper-ui/skiper52';
import { useParallaxBackground, useParallaxContent, useParallaxHorizontal } from '@/hooks/useSimpleParallax';
import { useScrollReveal } from '@/hooks/useParallax';
import { Phone, Mail, Calendar, ArrowRight, Star, Sparkles } from 'lucide-react';
import luxuryOffice from '@/assets/office-interior.jpg';

const CallToAction = () => {
  const backgroundRef = useParallaxBackground(1.15);
  const overlayRef = useParallaxContent('up', 0.5);
  const floatingLeftRef = useParallaxHorizontal('left', 1.08);
  const floatingRightRef = useParallaxHorizontal('right', 1.08);
  const contentRef = useScrollReveal();

  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Parallax background */}
      <img
        ref={backgroundRef as any}
        src={luxuryOffice}
        alt="Luxury Office"
        className="absolute inset-0 w-full h-full object-cover opacity-8"
      />
      
      {/* Parallax gradient overlay */}
      <div 
        ref={overlayRef as any}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, transparent 30%, hsl(var(--accent)) 70%, transparent 100%)',
        }}
      />

      {/* Floating decorative elements */}
      <div ref={floatingLeftRef as any} className="absolute top-20 left-10 opacity-30">
        <Star className="w-8 h-8 text-accent animate-pulse" />
      </div>
      <div ref={floatingRightRef as any} className="absolute bottom-20 right-10 opacity-25">
        <Sparkles className="w-10 h-10 text-primary animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef as any} className="text-center max-w-4xl mx-auto scroll-reveal">
          {/* Main heading */}
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Experience
            <span className="text-gradient block animate-pulse-slow">Luxury Real Estate?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have discovered their dream properties 
            through our exclusive marketing expertise and personalized service.
          </p>

          {/* Skiper52 Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Skiper52 
              href="tel:+1-555-123-4567"
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </Skiper52>
            
            <AnimatedButton 
              variant="outline"
              className="text-lg px-8 py-4 min-w-[200px] border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.location.href = 'mailto:contact@aurexfields.com'}
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Email
            </AnimatedButton>
            
            <AnimatedButton 
              variant="ghost"
              className="text-lg px-8 py-4 min-w-[200px] text-primary hover:bg-primary/10"
              onClick={() => window.location.href = '#contact'}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Meeting
            </AnimatedButton>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FloatingButton className="bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground">
              <ArrowRight className="w-6 h-6" />
            </FloatingButton>
            
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                Or explore our featured properties
              </p>
              <AnimatedButton 
                variant="ghost"
                className="text-accent hover:text-accent-foreground hover:bg-accent/20"
                onClick={() => window.location.href = '#properties'}
              >
                View Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </AnimatedButton>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Properties Sold</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;