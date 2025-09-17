import { usePageTransitions } from '@/hooks/usePageTransitions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const { containerRef } = usePageTransitions();

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="animate-section py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              This is a demo page to showcase smooth page transitions.
              Navigate between sections to see the smooth animations in action.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;