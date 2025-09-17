import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useParallax, useScrollReveal } from '@/hooks/useParallax';
import officeLobby from '@/assets/office-lobby.jpg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    subtitle: 'Mon-Fri 9AM-7PM',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@aurexfields.com',
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
  const backgroundRef = useParallax(0.3);
  const imageRef = useParallax(0.15);
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal();
  
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Parallax office lobby background */}
      <div 
        ref={imageRef as any}
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `url(${officeLobby})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Parallax gradient overlay */}
      <div 
        ref={backgroundRef as any}
        className="absolute inset-0 opacity-15"
        style={{
          background: 'linear-gradient(60deg, hsl(var(--accent)) 0%, transparent 40%, hsl(var(--primary)) 60%, transparent 100%)',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-16 left-10 animate-drift opacity-20">
        <Send className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-20 right-16 animate-float opacity-25">
        <Mail className="w-6 h-6 text-primary" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient animate-pulse-slow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your real estate experience? Let's discuss how we can 
            help you achieve your luxury property goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="scroll-reveal-left">
            <h3 className="font-serif text-2xl font-semibold mb-8 text-foreground">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className={`glass border-border/20 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-sway`}
                  style={{ animationDelay: `${index * 1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 hover:text-gradient transition-all">
                          {item.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1 hover:text-accent transition-colors">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card ref={formRef as any} className="glass border-border/20 scroll-reveal-right hover:shadow-luxury transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="hover:-translate-y-1 transition-transform">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="glass border-border/30 hover:border-accent/50 transition-all focus:scale-105"
                    />
                  </div>
                  <div className="hover:-translate-y-1 transition-transform">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="glass border-border/30 hover:border-accent/50 transition-all focus:scale-105"
                    />
                  </div>
                </div>
                
                <div className="hover:-translate-y-1 transition-transform">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    className="glass border-border/30 hover:border-accent/50 transition-all focus:scale-105"
                  />
                </div>
                
                <div className="hover:-translate-y-1 transition-transform">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="glass border-border/30 hover:border-accent/50 transition-all focus:scale-105"
                  />
                </div>
                
                <div className="hover:-translate-y-1 transition-transform">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your real estate needs..."
                    rows={5}
                    className="glass border-border/30 hover:border-accent/50 transition-all focus:scale-105"
                  />
                </div>
                
                <Button size="lg" className="w-full btn-luxury hover:scale-105 transition-transform animate-pulse-slow">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;