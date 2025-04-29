
import React from 'react';
import { Timeline } from './ui/timeline';
import { motion } from 'framer-motion';

const DetailedServices: React.FC = () => {
  const timelineData = [
    {
      title: "Brand Strategy",
      content: (
        <motion.div 
          className="text-charcoal font-['ui-sans-serif']"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We partner with our clients to develop their brand identity and shape their narrative.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team specialises in crafting data-driven brand strategies that build strong market identities and foster customer loyalty. 
            Our informed approach helps brands create compelling narratives, advocating for their products and ensuring they are able to stand out from the noise.
          </p>
          <div className="mb-6">
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Brand positioning and messaging
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Market research and consumer insights
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Brand audits and competitor analysis
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Reputation Management",
      content: (
        <motion.div 
          className="text-charcoal font-['ui-sans-serif']"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We leverage our relationships with editors, influencers and key decision makers to build and protect our clients' reputations.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team's network sits across tier one national and international outlets in Europe and the US. 
            While our focus is positioning luxury consumer brands, our team's experience spans sectors including financial services, technology, fashion, and travel.
          </p>
          <div className="mb-6">
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Media relations
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Crisis management
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Influencer and brand partnerships
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Content Marketing",
      content: (
        <motion.div 
          className="text-charcoal font-['ui-sans-serif']"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We help our clients to explain complex issues succinctly to establish trust and build loyalty.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team of strategists and copywriters have substantial experience writing for clients across fashion, sustainability, finance, and technology. 
            As a result, they are well-versed in dissecting complex concepts and positioning them for a broad range of audiences, including high-net-worth individuals, government and regulatory bodies, and tier one media.
          </p>
          <div className="mb-6">
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Speechwriting
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Website copywriting
            </motion.div>
            <motion.div 
              className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Op-ed and blog authoring
            </motion.div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="bg-transparent overflow-hidden">
      <Timeline data={timelineData} />
    </div>
  );
};

export default DetailedServices;
