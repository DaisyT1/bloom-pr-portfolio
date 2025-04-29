
import React from 'react';
import { Timeline } from './ui/timeline';

const DetailedServices: React.FC = () => {
  const timelineData = [
    {
      title: "Brand Strategy",
      content: (
        <div className="text-charcoal font-['ui-sans-serif']">
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We partner with our clients to develop their brand identity and shape their narrative.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team specialises in crafting data-driven brand strategies that build strong market identities and foster customer loyalty. 
            Our informed approach helps brands create compelling narratives, advocating for their products and ensuring they are able to stand out from the noise.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Brand positioning and messaging
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Market research and consumer insights
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm">
              — Brand audits and competitor analysis
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Reputation Management",
      content: (
        <div className="text-charcoal font-['ui-sans-serif']">
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We leverage our relationships with editors, influencers and key decision makers to build and protect our clients' reputations.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team's network sits across tier one national and international outlets in Europe and the US. 
            While our focus is positioning luxury consumer brands, our team's experience spans sectors including financial services, technology, fashion, and travel.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Media relations
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Crisis management
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm">
              — Influencer and brand partnerships
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Content Marketing",
      content: (
        <div className="text-charcoal font-['ui-sans-serif']">
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-['ui-sans-serif']">
            We help our clients to explain complex issues succinctly to establish trust and build loyalty.
          </p>
          <p className="text-charcoal text-sm md:text-base font-light mb-6 font-['ui-sans-serif']">
            Our team of strategists and copywriters have substantial experience writing for clients across fashion, sustainability, finance, and technology. 
            As a result, they are well-versed in dissecting complex concepts and positioning them for a broad range of audiences, including high-net-worth individuals, government and regulatory bodies, and tier one media.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Speechwriting
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm mb-2">
              — Website copywriting
            </div>
            <div className="flex gap-2 items-center text-charcoal font-['ui-sans-serif'] text-sm">
              — Op-ed and blog authoring
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-offwhite overflow-hidden">
      <Timeline data={timelineData} />
    </div>
  );
};

export default DetailedServices;
