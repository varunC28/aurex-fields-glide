import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-serif text-2xl font-bold text-gradient mb-4">
              Aurex & Fields
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Redefining luxury real estate through sophisticated marketing 
              and exceptional client service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Property Marketing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Client Relations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Premium Branding</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Properties</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Homes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Penthouses</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Investment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Aurex & Field
                  Office No. 914, 9th Floor,
                  Emaar Emerald Plaza, Sector 65,
                  Gurgaon – 122002, Haryana</li>
                  <br/>
              <li>+91 9821624222</li>
              <li>+91 7987642268</li>
              <li>Info@aurexfield.com</li>
              <li>Mon-Fri 9AM-7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Aurex & Fields. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;