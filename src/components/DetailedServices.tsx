
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ServicePointProps {
  text: string;
  index: number;
  isVisible: boolean;
}

const ServicePoint: React.FC<ServicePointProps> = ({ text, index, isVisible }) => {
  return (
    <motion.li 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <span className="inline-block text-charcoal mr-2">—</span>
      <span className="text-charcoal">{text}</span>
    </motion.li>
  );
};

interface ServiceDetailsProps {
  id: string;
  title: string;
  description: string;
  additionalText: string;
  services: string[];
  isActive: boolean;
  onEnter: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  id, 
  title, 
  description, 
  additionalText, 
  services,
  isActive,
  onEnter
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visiblePoints, setVisiblePoints] = useState<boolean[]>(services.map(() => false));

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      
      if (isVisible && !isActive) {
        onEnter();
      }

      // Check if service points should be visible
      if (isVisible && isActive) {
        const pointsContainer = section.querySelector('.service-points');
        if (pointsContainer) {
          const pointsRect = pointsContainer.getBoundingClientRect();
          const pointsVisible = pointsRect.top < window.innerHeight * 0.8;
          
          if (pointsVisible) {
            setVisiblePoints(prev => prev.map((_, i) => true));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, isActive, onEnter]);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className="py-10 md:py-16 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-charcoal uppercase tracking-wider font-['ui-sans-serif']">{title}</h2>
            <p className="text-lg mb-6 text-charcoal font-light font-['ui-sans-serif']">{description}</p>
            <p className="text-charcoal mb-8 font-light font-['ui-sans-serif']">{additionalText}</p>
            
            <h4 className="font-light text-lg mb-4 text-charcoal uppercase tracking-wider font-['ui-sans-serif']">Services include:</h4>
            <ul className="space-y-2 font-light service-points font-['ui-sans-serif']">
              {services.map((service, index) => (
                <ServicePoint 
                  key={index}
                  text={service}
                  index={index}
                  isVisible={visiblePoints[index]}
                />
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 flex items-center justify-center p-8 min-h-[300px]">
            {/* Empty space for layout */}
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedServices: React.FC = () => {
  const [activeService, setActiveService] = useState('strategy');
  
  const handleServiceEnter = (serviceId: string) => {
    setActiveService(serviceId);
  };

  return (
    <div className="bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-8 uppercase tracking-wider font-['ui-sans-serif'] text-charcoal">Our Approach</h2>
      </div>
      
      <div className="relative">
        <ServiceDetails 
          id="strategy"
          title="Brand Strategy"
          description="We partner with our clients to develop their brand identity and shape their narrative."
          additionalText="Our team specialises in crafting data-driven brand strategies that build strong market identities and foster customer loyalty. Our informed approach helps brands create compelling narratives, advocating for their products and ensuring they are able to stand out from the noise."
          services={[
            "Brand positioning and messaging",
            "Market research and consumer insights",
            "Brand audits and competitor analysis"
          ]}
          isActive={activeService === 'strategy'}
          onEnter={() => handleServiceEnter('strategy')}
        />
        
        <ServiceDetails 
          id="reputation"
          title="Reputation Management"
          description="We leverage our relationships with editors, influencers and key decision makers to build and protect our clients' reputations."
          additionalText="Our team's network sits across tier one national and international outlets in Europe and the US. While our focus is positioning luxury consumer brands, our team's experience spans sectors including financial services, technology, fashion, and travel."
          services={[
            "Media relations",
            "Crisis management",
            "Influencer and brand partnerships"
          ]}
          isActive={activeService === 'reputation'}
          onEnter={() => handleServiceEnter('reputation')}
        />
        
        <ServiceDetails 
          id="content"
          title="Content Marketing"
          description="We help our clients to explain complex issues succinctly to establish trust and build loyalty."
          additionalText="Our team of strategists and copywriters have substantial experience writing for clients across fashion, sustainability, finance, and technology. As a result, they are well-versed in dissecting complex concepts and positioning them for a broad range of audiences, including high-net-worth individuals, government and regulatory bodies, and tier one media."
          services={[
            "Speechwriting",
            "Website copywriting",
            "Op-ed and blog authoring"
          ]}
          isActive={activeService === 'content'}
          onEnter={() => handleServiceEnter('content')}
        />
      </div>
    </div>
  );
};

export default DetailedServices;
