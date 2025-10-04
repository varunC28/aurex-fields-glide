import ReactLenis from "lenis/react";
import { ScrollSection } from "@/components/about/ScrollSection";
import { aboutContent } from "@/data/aboutContent";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <main className="w-full bg-background overflow-x-hidden">
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
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
            >
              💼 What Makes Us Different?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Resale Properties */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {aboutContent.brokerage.resale.title}
                  </h3>
                </div>
                <div className="text-4xl font-bold text-primary mb-4">
                  {aboutContent.brokerage.resale.rate}
                </div>
                <p className="text-muted-foreground mb-6">
                  {aboutContent.brokerage.resale.description}
                </p>
                <ul className="space-y-3">
                  {aboutContent.brokerage.resale.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Fresh Deals */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {aboutContent.brokerage.fresh.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {aboutContent.brokerage.fresh.description}
                </p>
                <div className="space-y-4">
                  {aboutContent.brokerage.fresh.tiers.map((tier, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-foreground">{tier.range}</span>
                      <span className="text-2xl font-bold text-primary">{tier.rate}</span>
                    </div>
                  ))}
                </div>
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
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {aboutContent.mission.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {aboutContent.mission.text}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {aboutContent.vision.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {aboutContent.vision.text}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

export default About;