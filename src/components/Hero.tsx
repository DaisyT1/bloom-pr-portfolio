
import React from 'react';
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <AuroraBackground className="min-h-screen bg-offwhite">
      <div className="container mx-auto px-10 md:px-16 lg:px-40 relative z-20 flex items-center justify-center">
        <motion.div
          className="w-full md:w-4/5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-6 roboto">
            Defining Leaders and Disruptors
          </h1>
          <h2 className="text-1xl md:text-1xl lg:text-1xl font-light text-charcoal mb-6 uppercase roboto">
            Beaufoy is a full-service communications agency
          </h2>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
