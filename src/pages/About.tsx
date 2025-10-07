import React, { useEffect } from 'react';
import ReactLenis from "lenis/react";
import { ScrollSection } from "@/components/about/ScrollSection";
import { SectionHeader } from "@/components/about/SectionHeader";
import { aboutContent } from "@/data/aboutContent";
import Header, { useHeaderMenu } from '@/components/Header';
import Footer from '@/components/Footer';
import { MenuToggle } from "@/components/header/MenuToggle";
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";


const About = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderMenu();

  // Create a div element for the portal
  useEffect(() => {
    const menuToggleDiv = document.createElement('div');
    menuToggleDiv.id = 'menu-toggle-portal';
    document.body.appendChild(menuToggleDiv);
    
    return () => {
      if (document.body.contains(menuToggleDiv)) {
        document.body.removeChild(menuToggleDiv);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      
      <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
        <main className="w-full bg-background overflow-x-hidden pt-20">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10 px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
              >
                {aboutContent.hero.title}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-8"
              >
                {aboutContent.hero.subtitle}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {aboutContent.hero.description}
              </motion.p>
            </div>
          </section>

          {/* Values Section with Icon Animation */}
          <ScrollSection
            content={aboutContent.values as any}
            animationType="icon-scale"
            headerText="Why Clients Choose Aurex & Field"
            height="h-[120vh] md:h-[120vh] lg:h-[120vh]"
            className="bg-secondary"
          />

          {/* Brokerage Section */}
          <section className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4">
              <SectionHeader text="💼 What Makes Us Different?" className="text-4xl md:text-5xl font-bold text-center mb-16" />
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Resale Properties */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center mb-6">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <TrendingUp className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          {aboutContent.brokerage.resale.title}
                        </CardTitle>
                      </div>
                      <div className="text-4xl font-bold text-primary mb-4">
                        {aboutContent.brokerage.resale.rate}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">
                        {aboutContent.brokerage.resale.description}
                      </CardDescription>
                      <ul className="space-y-3">
                        {aboutContent.brokerage.resale.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Fresh Deals */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center mb-6">
                        <div className="bg-secondary/10 p-3 rounded-full mr-4">
                          <Shield className="h-8 w-8 text-secondary" />
                        </div>
                        <CardTitle className="text-2xl">
                          {aboutContent.brokerage.fresh.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">
                        {aboutContent.brokerage.fresh.description}
                      </CardDescription>
                      <div className="space-y-4">
                        {aboutContent.brokerage.fresh.tiers.map((tier, index) => (
                          <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                            <span className="font-semibold text-foreground">{tier.range}</span>
                            <span className="text-2xl font-bold text-primary">{tier.rate}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
            <div className="max-w-4xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {aboutContent.mission.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg">
                        {aboutContent.mission.text}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {aboutContent.vision.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg">
                        {aboutContent.vision.text}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </ReactLenis>
      
      <Footer />
      
      {typeof document !== 'undefined' && createPortal(
        <div className="fixed top-4 right-4 z-[10000]">
          <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>,
        document.getElementById('menu-toggle-portal') || document.body
      )}
    </div>
  );
};

export default About;