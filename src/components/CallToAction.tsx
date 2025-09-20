import React from 'react';
import { Skiper52, AnimatedButton } from '@/components/ui/skiper-ui/skiper52';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import RotatingText from '@/components/ui/rotatingtext';

const CallToAction = () => {
  return (
    <section id="cta" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Experience
            <RotatingText 
              texts={["Luxury Real Estate?", "Premium Living?", "Your Dream Home?"]}
              interval={3000}
              className="text-primary block"
              transitionType="fade"
            />
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            Join hundreds of satisfied clients who have discovered their dream properties 
            through our exclusive marketing expertise and personalized service.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            
            <AnimatedButton 
              variant="outline"
              className="text-sm px-6 py-2.5 min-w-[140px]"
              onClick={() => window.location.href = 'mailto:contact@aurexfields.com'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline"
              className="text-sm px-6 py-2.5 min-w-[140px]"
              onClick={() => window.location.href = 'mailto:contact@aurexfields.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </AnimatedButton>
            
            <AnimatedButton 
              variant="ghost"
              className="text-sm px-6 py-2.5 min-w-[140px] text-primary"
              onClick={() => window.location.href = '#contact'}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </AnimatedButton>
          </div>

          {/* Trust indicators */}
          <div className="pt-6 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-lg font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-primary">$2.5B+</div>
                <div className="text-xs text-muted-foreground">Properties Sold</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;