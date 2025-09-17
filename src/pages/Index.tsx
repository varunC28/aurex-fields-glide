import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import PropertyShowcase from '@/components/PropertyShowcase';
import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePageTransitions } from '@/hooks/usePageTransitions';

const Index = () => {
  const { containerRef } = usePageTransitions();

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="hero" className="animate-section">
          <Hero />
        </section>
        <section id="services" className="animate-section">
          <Services />
        </section>
        <section id="properties" className="animate-section">
          <Properties />
        </section>
        <section id="showcase" className="animate-section">
          <PropertyShowcase />
        </section>
        <section id="about" className="animate-section">
          <About />
        </section>
        <section id="cta" className="animate-section">
          <CallToAction />
        </section>
        <section id="contact" className="animate-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
