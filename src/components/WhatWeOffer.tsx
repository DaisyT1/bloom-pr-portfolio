
import React, { useRef, useEffect } from 'react';
import { TextRotate, TextRotateRef } from '@/components/ui/text-rotate';
import { motion } from 'framer-motion';

// City images for the sections
const cityImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2276&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=3087&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2838&auto=format&fit=crop"
];

// Content for What We Offer section
const offerSections = [
  {
    title: "Network",
    content: "Our team has deep relationships with key tier one editors established over decades of work. Whether it's an editor at a broadcaster or a broadsheet, our calls get answered and our clients' messages are heard.",
    image: cityImages[0]
  },
  {
    title: "Focus",
    content: "We take the time to understand our clients' business, the nuances of their industry and their customers, to help develop and deliver a data-driven media strategy that is aligned to their priorities.",
    image: cityImages[1]
  },
  {
    title: "Quantifiable",
    content: "We focus on creating measurable results. Whether it's increased media coverage, enhanced brand awareness, or stronger audience engagement, we deliver outcomes that are quantifiable.",
    image: cityImages[2]
  }
];

function Item({ 
  index, 
  section, 
  onInView 
}: { 
  index: number, 
  section: typeof offerSections[0], 
  onInView: (index: number, inView: boolean) => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        onInView(index, entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    observerRef.current.observe(ref.current);
    
    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [index, onInView]);

  return (
    <div 
      ref={ref}
      className="min-h-[80vh] md:min-h-[90vh] w-full snap-center py-12 md:py-24 flex justify-center items-center"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-full max-w-md h-48 md:h-64 overflow-hidden rounded-lg">
            <img 
              src={section.image} 
              alt={section.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-md">
            <h3 className="text-2xl md:text-3xl font-playfair mb-4">{section.title}</h3>
            <p className="text-base md:text-lg text-charcoal/80">{section.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const WhatWeOffer: React.FC = () => {
  const textRotateRef = useRef<TextRotateRef>(null);

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index);
    }
  };

  return (
    <section id="what-we-offer" className="bg-offwhite relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="sticky top-0 pt-20 pb-6 bg-offwhite z-10">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-3">What We Offer</h2>
          <div className="flex justify-center">
            <TextRotate
              ref={textRotateRef}
              texts={offerSections.map(section => section.title)}
              mainClassName="text-lg md:text-xl font-light text-pink w-full justify-center flex"
              splitLevelClassName="overflow-hidden"
              staggerFrom="first"
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.01}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            />
          </div>
        </div>

        <div className="overflow-auto snap-y snap-mandatory h-[calc(100vh-100px)]">
          {offerSections.map((section, index) => (
            <Item
              key={index}
              index={index}
              section={section}
              onInView={handleInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
