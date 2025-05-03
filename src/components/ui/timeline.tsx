
"use client";

import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
export const Timeline = ({
  data
}: {
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Monitor scroll progress to determine which title should be highlighted
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate which section is active based on scroll progress
    const sectionProgress = latest * data.length;
    const activeSection = Math.min(Math.floor(sectionProgress), data.length - 1);
    setActiveIndex(activeSection >= 0 ? activeSection : null);
  });

  return <div className="w-full bg-offwhite px-4 md:px-10 font-roboto" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 md:py-[5px]">
        <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">
          What we offer
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-30 md:gap-10 py-[50px]">
            <div className="sticky top-40 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-offwhite flex items-center justify-center">
                <div className={`h-4 w-4 rounded-full ${activeIndex === index ? 'bg-gradient-to-t from-[#FFCAD4] via-[#BDE4A8] to-transparent' : 'bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700'} p-2`} />
              </div>
              <h3
                className={`hidden md:block text-xl md:pl-20 md:text-3xl font-light font-roboto uppercase tracking-wider transition-colors duration-300 ${
                  activeIndex === index
                    ? 'text-pink-dark'
                    : 'text-charcoal'
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={`md:hidden block text-2xl mb-4 text-left font-light font-roboto uppercase tracking-wider transition-colors duration-300 ${
                  activeIndex === index
                    ? 'text-pink-dark'
                    : 'text-charcoal'
                }`}
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div style={{
        height: height + "px"
      }} className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div style={{
          height: heightTransform,
          opacity: opacityTransform
        }} className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-[#FFCAD4] via-[#BDE4A8] to-transparent from-[0%] via-[30%] rounded-full" />
        </div>
      </div>
    </div>;
};
