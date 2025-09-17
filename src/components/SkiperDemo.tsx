import React from 'react';
import { Skiper52, AnimatedButton, FloatingButton } from '@/components/ui/skiper-ui/skiper52';
import { Link001, Link002, Link003 } from '@/components/ui/skiper-ui/skiper40';
import { Send, Star, ArrowRight } from 'lucide-react';

const SkiperDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Skiper UI Components Demo</h2>
        <p className="text-muted-foreground">Interactive animated components for your luxury real estate site</p>
      </div>

      {/* Animated Buttons Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Animated Buttons (Skiper52)</h3>
        <div className="flex flex-wrap gap-4">
          <Skiper52>
            <Send className="w-4 h-4 mr-2" />
            Contact Us
          </Skiper52>
          
          <AnimatedButton variant="outline">
            <Star className="w-4 h-4 mr-2" />
            View Properties
          </AnimatedButton>
          
          <AnimatedButton variant="ghost">
            <ArrowRight className="w-4 h-4 mr-2" />
            Learn More
          </AnimatedButton>
          
          <FloatingButton>
            🏠
          </FloatingButton>
        </div>
      </div>

      {/* Animated Links Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Animated Links (Skiper40)</h3>
        <div className="flex flex-col gap-4 max-w-md">
          <Link001 href="mailto:contact@aurexfields.com" className="text-lg">
            contact@aurexfields.com
          </Link001>
          
          <Link002 href="/properties" className="text-lg">
            Browse Properties
          </Link002>
          
          <Link003 href="/about" className="text-lg">
            About Aurex & Fields
          </Link003>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
        <div className="space-y-2 text-sm font-mono bg-background p-4 rounded">
          <div>{'<Skiper52>Contact Us</Skiper52>'}</div>
          <div>{'<AnimatedButton variant="outline">View Properties</AnimatedButton>'}</div>
          <div>{'<FloatingButton>🏠</FloatingButton>'}</div>
          <div>{'<Link001 href="mailto:contact@example.com">Email</Link001>'}</div>
        </div>
      </div>
    </div>
  );
};

export default SkiperDemo;