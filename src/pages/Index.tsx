
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DetailedServices from '@/components/DetailedServices';
import CaseStudies from '@/components/CaseStudies';
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
          <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">Our approach</h2>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 px-4">
            <MeteorsDemo
              title="Product First"
              description="We only partner with clients whose products we genuinely believe in. We invest fully in understanding the nuances of our clients’ products and the problems they are trying to solve."
              bgColorClass="from-pink-light to-offwhite"
            />

            <MeteorsDemo
              title="Data-Driven"
              description="Everything we do for our clients is underpinned by data. Whether it's enhanced brand awareness or stronger engagement, we deliver outcomes that are quantifiable."
              bgColorClass="from-blue-300 to-violet-200"
            />

            <MeteorsDemo
              title="Network Effects"
              description="Our team has built long-standing, trusted relationships with top-tier editors over decades of work. These connections value our insights, helping to ensure our clients' messages are heard."
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
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
