
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceBoxProps {
  title: string;
  description: string;
  borderColor: string;
  delay: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, borderColor, delay }) => {
  return (
    <div className={cn("service-box", borderColor)} style={{ animationDelay: delay }}>
      <h3 className="text-xl font-light mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed font-light">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "We partner with our clients to help develop their brand identity and shape their narrative.",
      borderColor: "border-pink-light",
      delay: "0s"
    },
    {
      title: "Content Creation",
      description: "From speeches to blog posts, we work with clients to help articulate complex ideas succinctly.",
      borderColor: "border-blue-100",
      delay: "0.1s"
    },
    {
      title: "Media Relations",
      description: "We leverage our extensive network of tier one editors to secure high-impact coverage.",
      borderColor: "border-green-100",
      delay: "0.2s"
    },
    {
      title: "Crisis Management",
      description: "We are trusted advisers during the most testing of times for our clients' reputations.",
      borderColor: "border-yellow-100",
      delay: "0.3s"
    },
    {
      title: "Partnerships",
      description: "We advise and connect our clients with like-minded brands and influencers.",
      borderColor: "border-purple-100",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 opacity-0 animate-fade-in">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              description={service.description}
              borderColor={service.borderColor}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
