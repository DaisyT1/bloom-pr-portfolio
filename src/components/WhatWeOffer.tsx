
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
      className="min-h-[80vh] md:min-h-[90vh] w-full snap-center py-0 md:py-0 flex justify-center items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 max-w-sm">
            <h3 className="text-1xl md:text-2xl mb-4 uppercase text-charcoal font-roboto">{section.title}</h3>
            <p className="text-lg mb-6 text-charcoal font-light font-['roboto']">{section.content}</p>
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
          <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">What We Offer</h2>
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
