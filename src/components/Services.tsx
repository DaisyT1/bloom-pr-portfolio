import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/advanced-card';
import { GlowEffect } from './ui/glow-effect';
import { cn } from '@/lib/utils';
interface ServiceBoxProps {
  title: string;
  description: string;
  borderColor: string;
  delay: string;
  colors: string[];
}
const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  description,
  borderColor,
  delay,
  colors
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: parseFloat(delay)
  }} viewport={{
    once: true,
    margin: "-100px"
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative">
      <div className="relative h-full">
        {isHovered && <div className="absolute inset-0 pointer-events-none">
            <GlowEffect colors={colors} mode="breathe" blur="medium" scale={1.05} duration={3} className="!inset-[-2px] !h-[calc(100%+4px)] !w-[calc(100%+4px)]" />
          </div>}
        <Card variant="neubrutalism" className={cn("h-full bg-offwhite border-[1px] border-zinc-300", "shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10", borderColor)} style={{
        animationDelay: delay
      }}>
          <CardContent>
            <h3 className="text-xl font-light mb-3 uppercase text-charcoal font-roboto">{title}</h3>
            <p className="text-charcoal text-sm leading-relaxed font-light font-roboto">{description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>;
};
const Services: React.FC = () => {
  const services = [{
    title: "Brand Strategy",
    description: "We partner with our clients to help develop their brand identity and shape their narrative.",
    borderColor: "border-pink-light",
    delay: "0s",
    colors: ['#FFDEE2', '#FFB5C5', '#FF8FAE', '#FFD1DC']
  }, {
    title: "Content Creation",
    description: "From speeches to blog posts, we work with clients to help articulate complex ideas succinctly.",
    borderColor: "border-blue-100",
    delay: "0.1s",
    colors: ['#D1E5F7', '#B0D5F5', '#8FB9F0', '#D1E9FF']
  }, {
    title: "Media Relations",
    description: "We leverage our extensive network of tier one editors to secure high-impact coverage.",
    borderColor: "border-green-100",
    delay: "0.2s",
    colors: ['#D1F7E0', '#B0F5C5', '#8FF0AA', '#D1FFE9']
  }, {
    title: "Crisis Management",
    description: "We are trusted advisers during the most testing of times for our clients' reputations.",
    borderColor: "border-yellow-100",
    delay: "0.3s",
    colors: ['#F7F1D1', '#F5E5B0', '#F0D68F', '#FFEED1']
  }, {
    title: "Partnerships",
    description: "We advise and connect our clients with like-minded brands and influencers.",
    borderColor: "border-purple-100",
    delay: "0.4s",
    colors: ['#E5D1F7', '#D0B0F5', '#B88FF0', '#E9D1FF']
  }];
  return <section id="services" className="py-16 px-6 md:px-12 relative bg-offwhite md:py-[51px]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true,
        margin: "-100px"
      }}>
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => <ServiceBox key={index} title={service.title} description={service.description} borderColor={service.borderColor} delay={service.delay} colors={service.colors} />)}
        </div>
      </div>
    </section>;
};
export default Services;