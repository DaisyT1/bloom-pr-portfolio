
import React, { useRef } from 'react';
import { TextRotate, TextRotateRef } from '@/components/ui/text-rotate';
import { motion } from 'framer-motion';

const WhatWeOffer: React.FC = () => {
  const textRotateRef = useRef<TextRotateRef>(null);

  // Content for What We Offer section
  const offerTexts = [
    "Network\n\nOur team has deep relationships with key tier one editors established over decades of work. Whether it's an editor at a broadcaster or a broadsheet, our calls get answered and our clients' messages are heard.",
    "Focus\n\nWe take the time to understand our clients' business, the nuances of their industry and their customers, to help develop and deliver a data-driven media strategy that is aligned to their priorities.",
    "Quantifiable\n\nWe focus on creating measurable results. Whether it's increased media coverage, enhanced brand awareness, or stronger audience engagement, we deliver outcomes that are quantifiable."
  ];

  // Trigger the next text in rotation every 5 seconds
  const handleNextText = () => {
    if (textRotateRef.current) {
      textRotateRef.current.next();
    }
  };

  return (
    <section id="what-we-offer" className="bg-offwhite py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-16 text-center">What We Offer</h2>
          
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <TextRotate
              ref={textRotateRef}
              texts={offerTexts}
              splitBy="lines"
              auto={true}
              rotationInterval={5000}
              mainClassName="text-xl font-light leading-relaxed w-full flex flex-col"
              splitLevelClassName="my-4 overflow-hidden"
              elementLevelClassName="text-charcoal"
              staggerDuration={0.02}
              staggerFrom="first"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
            />
            
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
              <button 
                onClick={() => textRotateRef.current?.previous()} 
                className="px-4 py-2 rounded-md bg-pink-light text-pink-dark font-medium hover:bg-pink-dark hover:text-white transition-colors"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {offerTexts.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => textRotateRef.current?.jumpTo(idx)}
                    className="w-3 h-3 rounded-full bg-gray-200 hover:bg-pink"
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={handleNextText}
                className="px-4 py-2 rounded-md bg-pink-light text-pink-dark font-medium hover:bg-pink-dark hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
