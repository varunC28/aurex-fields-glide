import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useParallaxBackground, useParallaxContent, useParallaxHorizontal } from '@/hooks/useSimpleParallax';
import { useScrollReveal } from '@/hooks/useParallax';
import { BackgroundBeams } from '@/components/ui/background-beams';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9821624222, +91 7987642268',
    subtitle: 'Mon-Fri 9AM-7PM',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'Info@aurexfield.com',
    subtitle: 'We respond within 24h',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: '432 Park Avenue, NYC',
    subtitle: 'Manhattan Headquarters',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri 9AM-7PM',
    subtitle: 'Sat 10AM-4PM',
  },
];

const Contact = () => {
  const overlayRef = useParallaxContent('up', 0.6);
  const floatingLeftRef = useParallaxHorizontal('left', 1.08);
  const floatingRightRef = useParallaxHorizontal('right', 1.08);
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal();
  
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background beams */}
      <BackgroundBeams className="absolute inset-0 w-full h-full opacity-12" />
      
      {/* Parallax gradient overlay */}
      <div 
        ref={overlayRef as any}
        className="absolute inset-0 opacity-15"
        style={{
          background: 'linear-gradient(60deg, hsl(var(--accent)) 0%, transparent 40%, hsl(var(--primary)) 60%, transparent 100%)',
        }}
      />
      
      {/* Floating elements with parallax */}
      <div ref={floatingLeftRef as any} className="absolute top-6 left-3 sm:top-8 sm:left-4 opacity-20">
        <Send className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
      </div>
      <div ref={floatingRightRef as any} className="absolute bottom-6 right-3 sm:bottom-8 sm:right-4 opacity-25">
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Text elements in the center of the left 1/2 */}
          <div className="flex items-center">
            <div ref={titleRef as any} className="scroll-reveal text-center w-full">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Get In <span className="text-gradient animate-pulse-slow">Touch</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">
                Ready to elevate your real estate experience? Let's discuss how we can 
                help you achieve your luxury property goals.
              </p>
            </div>
          </div>

          {/* Contact form on the right side */}
          <div ref={formRef as any} className="scroll-reveal-right flex items-center">
            <Card className="glass border-border/20 hover:shadow-luxury transition-all duration-300 w-full">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
                  Send Us a Message
                </h3>
                
                <form className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="glass border-border/30 hover:border-accent/50 transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="glass border-border/30 hover:border-accent/50 transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="Info@aurexfield.com"
                      className="glass border-border/30 hover:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+91 9821624222"
                      className="glass border-border/30 hover:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your real estate needs..."
                      rows={3}
                      className="glass border-border/30 hover:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button size="sm" className="w-full btn-luxury hover:scale-105 transition-transform">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;