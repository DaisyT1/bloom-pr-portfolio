
import React, { useEffect, useRef } from 'react';

interface ServiceDetailsProps {
  id: string;
  title: string;
  description: string;
  additionalText: string;
  services: string[];
  isReversed?: boolean;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  id, 
  title, 
  description, 
  additionalText, 
  services, 
  isReversed = false 
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const { top } = section.getBoundingClientRect();
      const speed = id === 'strategy' ? 0.3 : id === 'reputation' ? 0.2 : 0.1;
      const offset = window.scrollY * speed;
      const translateY = Math.min(offset, 50); // Limit the parallax effect

      section.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <section ref={sectionRef} id={id} className="py-10 md:py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
          <div className="lg:w-1/2 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-800">{title}</h2>
            <p className="text-lg mb-6 text-gray-700 font-light">{description}</p>
            <p className="text-gray-600 mb-8 font-light">{additionalText}</p>
            
            <h4 className="font-light text-lg mb-4 text-gray-800">Services include:</h4>
            <ul className="space-y-2 font-light">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block text-gray-500 mr-2">—</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 flex items-center justify-center p-8 min-h-[300px] opacity-0 animate-fade-in animate-delay-200">
            {/* Removed the pink circles with letters */}
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pink-light/50 to-offwhite">
      <div className="max-w-7xl mx-auto pt-12 pb-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-8 font-['Playfair_Display']">Our Approach</h2>
      </div>
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
        isReversed
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
      />
    </div>
  );
};

export default DetailedServices;
