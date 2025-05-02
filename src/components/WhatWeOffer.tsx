
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

const content = [
  {
    title: "Network",
    description:
      "Our team has deep relationships with key tier one editors established over decades of work. Whether it's an editor at a broadcaster or a broadsheet, our calls get answered and our clients' messages are heard.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-roboto font-light text-xl p-4">
        Network
      </div>
    ),
  },
  {
    title: "Focus",
    description:
      "We take the time to understand our clients' business, the nuances of their industry and their customers, to help develop and deliver a data-driven media strategy that is aligned to their priorities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white font-roboto font-light text-xl p-4">
        Focus
      </div>
    ),
  },
  {
    title: "Quantifiable",
    description:
      "We focus on creating measurable results. Whether it's increased media coverage, enhanced brand awareness, or stronger audience engagement, we deliver outcomes that are quantifiable.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-roboto font-light text-xl p-4">
        Quantifiable
      </div>
    ),
  }
];

const WhatWeOffer: React.FC = () => {
  return (
    <section id="what-we-offer" className="py-16 px-6 md:px-12 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl"
        >
          What We Offer
        </motion.h2>

        <div className="mt-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
