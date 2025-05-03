
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DetailedServices from '@/components/DetailedServices';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MeteorsDemo } from '@/components/ui/meteors-demo';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen font-roboto">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <DetailedServices />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-offwhite"
          id="what-we-offer"
        >
          <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">What We Offer</h2>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
            <MeteorsDemo
              title="Network"
              description="Our team has deep relationships with key tier one editors established over decades of work. Whether it's an editor at a broadcaster or a broadsheet, our clients' messages are heard."
              bgColorClass="from-pink-light to-offwhite"
            />

            <MeteorsDemo
              title="Focus"
              description="We take the time to understand our clients' business, the nuances of their industry and their customers, to help develop and deliver a data-driven media strategy that is aligned to their priorities."
              bgColorClass="from-blue-300 to-violet-200"
            />

            <MeteorsDemo
              title="Quantifiable"
              description="We focus on creating measurable results. Whether it's increased media coverage, enhanced brand awareness, or stronger audience engagement, we deliver outcomes that are quantifiable."
              bgColorClass="from-indigo-300 to-blue-500/30"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CaseStudies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
