
import React from 'react';
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <AuroraBackground className="min-h-screen bg-offwhite">
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          className="w-full md:w-4/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6 font-['ui-sans-serif']">
            We are a full-service communications agency for luxury consumer brands
          </h1>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
