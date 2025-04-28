
import React from 'react';

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
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
          <div className="lg:w-1/2 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-lg mb-6 text-gray-700">{description}</p>
            <p className="text-gray-600 mb-8">{additionalText}</p>
            
            <h4 className="font-semibold text-lg mb-4">Services include:</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink mt-2 mr-2"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 bg-gradient-to-br from-pink-light/20 to-white rounded-lg shadow-sm flex items-center justify-center p-8 min-h-[300px] opacity-0 animate-fade-in animate-delay-200">
            <div className="w-20 h-20 rounded-full bg-pink-light flex items-center justify-center">
              <span className="text-3xl text-pink-dark font-bold">{title.charAt(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedServices: React.FC = () => {
  return (
    <div className="bg-gradient-radial from-pink-light/20 via-offwhite to-white">
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
