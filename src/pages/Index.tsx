import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import PropertyShowcase from '@/components/PropertyShowcase';
import About from '@/pages/About';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePageTransitions } from '@/hooks/usePageTransitions';
import { MenuToggle } from "../components/header/MenuToggle";
import { useHeaderMenu } from '@/components/Header';

const Index = () => {
  const { containerRef } = usePageTransitions();
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
    <div ref={containerRef} className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <main>
        <section id="hero" className="animate-section h-screen">
          <Hero />
        </section>
        <section id="about" className="animate-section">
          <About />
        </section>
        <section id="properties" className="animate-section">
          <Properties />
        </section>
        <section id="services" className="animate-section">
          <Services />
        </section>
        <section id="showcase" className="animate-section">
          <PropertyShowcase />
        </section>
        <section id="cta" className="animate-section">
          <CallToAction />
        </section>
        <section id="contact" className="animate-section">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed top-4 right-4 z-[10000]"
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 10000,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>,
        document.getElementById('menu-toggle-portal') || document.body
      )}
    </div>
  );
};

export default Index;