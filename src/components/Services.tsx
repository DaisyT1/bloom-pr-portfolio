
import React from 'react';
import { cn } from '@/lib/utils';
import { GlowEffect } from './ui/glow-effect';
import { motion } from 'framer-motion';

interface ServiceBoxProps {
  title: string;
  description: string;
  borderColor: string;
  delay: string;
  colors: string[];
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, borderColor, delay, colors }) => {
  return (
    <motion.div 
      className={cn("relative overflow-hidden p-6 rounded-lg bg-offwhite border border-2", borderColor)}
      style={{ animationDelay: delay }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <GlowEffect
          colors={colors}
          mode="colorShift"
          blur="soft"
          duration={3}
          scale={1.2}
        />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-light mb-3 font-['ui-sans-serif'] text-charcoal">{title}</h3>
        <p className="text-charcoal text-sm leading-relaxed font-light font-['ui-sans-serif']">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "We partner with our clients to help develop their brand identity and shape their narrative.",
      borderColor: "border-pink-light",
      delay: "0s",
      colors: ['#FFDEE2', '#FFB5C5', '#FF8FAE', '#FFD1DC']
    },
    {
      title: "Content Creation",
      description: "From speeches to blog posts, we work with clients to help articulate complex ideas succinctly.",
      borderColor: "border-blue-100",
      delay: "0.1s",
      colors: ['#D1E5F7', '#B0D5F5', '#8FB9F0', '#D1E9FF']
    },
    {
      title: "Media Relations",
      description: "We leverage our extensive network of tier one editors to secure high-impact coverage.",
      borderColor: "border-green-100",
      delay: "0.2s",
      colors: ['#D1F7E0', '#B0F5C5', '#8FF0AA', '#D1FFE9']
    },
    {
      title: "Crisis Management",
      description: "We are trusted advisers during the most testing of times for our clients' reputations.",
      borderColor: "border-yellow-100",
      delay: "0.3s",
      colors: ['#F7F1D1', '#F5E5B0', '#F0D68F', '#FFEED1']
    },
    {
      title: "Partnerships",
      description: "We advise and connect our clients with like-minded brands and influencers.",
      borderColor: "border-purple-100",
      delay: "0.4s",
      colors: ['#E5D1F7', '#D0B0F5', '#B88FF0', '#E9D1FF']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 relative bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 uppercase tracking-wider font-['ui-sans-serif'] text-charcoal">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              description={service.description}
              borderColor={service.borderColor}
              delay={service.delay}
              colors={service.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
