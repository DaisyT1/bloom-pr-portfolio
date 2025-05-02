
import React from 'react';
import { Separator } from './ui/separator';

interface CaseStudyProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  challengeText: string;
  approachText: string;
  resultsText: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  imageSrc,
  imageAlt,
  challengeText,
  approachText,
  resultsText
}) => {
  return <div className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-md w-full h-auto" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl font-light mb-5 uppercase text-charcoal font-roboto">{title}</h3>

          <h4 className="font-medium text-charcoal mb-2 uppercase tracking-wider text-sm font-['roboto']">Challenge</h4>
          <p className="text-charcoal mb-4 font-light font-['roboto']">{challengeText}</p>

          <h4 className="font-medium text-charcoal mb-2 uppercase tracking-wider text-sm font-['roboto']">Approach</h4>
          <p className="text-charcoal mb-4 font-light font-['roboto'] text-base">{approachText}</p>

          <h4 className="font-medium text-charcoal mb-2 uppercase tracking-wider text-sm font-['roboto']">Results</h4>
          <p className="text-charcoal font-light font-['roboto']">{resultsText}</p>
        </div>
      </div>
    </div>;
};

const CaseStudies: React.FC = () => {
  return <section id="case-studies" className="px-6 md:px-12 py-[16px] bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">EXAMPLES OF OUR WORK</h2>

        <CaseStudy title="Luca Faloni" imageSrc="public/lovable-uploads/lucaws.webp" imageAlt="Luca Faloni shirt" challengeText="We were retained by Luca Faloni, the luxury Italian menswear designer, to develop a media campaign to raise awareness for the brand's linen and cashmere clothing. We were tasked with developing a PR strategy to showcase Luca's focus on craftsmanship and materials to demonstrate the quality of their product." approachText="We worked with the brand to devise messaging to highlight the process with which the team identifies and works with traditional Italian artisans. To complement this, we highlighted the brand's royal and celebrity following as a means to further establish the heritage of the brand and, by extension, the desirability of their products among a discerning audience. We arranged briefings and introductions with key lifestyle editors, ensuring coverage published to coincide with the newly-opened flagship store on the King's Road in Chelsea." resultsText="We partnered with John Arlidge at The Sunday Times for Luca's first major interview, with subsequent coverage seen in key trade publications such as Monocle and Tatler. The coverage reached more than 10 million people over the course of the following week." />

        <Separator className="my-12" />

        <CaseStudy title="Atlantic Money" imageSrc="public/lovable-uploads/atlanticws.png" imageAlt="Atlantic Money logo" challengeText="We were hired by Atlantic Money, the Index Ventures-backed foreign exchange firm, to help introduce their product in the UK. A month following their launch, they were delisted from their largest competitor's price comparison tool, in doing so, severely impeding Atlantic Money's ability to source new customers." approachText="We acted as a trusted advisor to Atlantic Money's senior team, organising their complaint to the Competition and Markets Authority, and managing the media response. Our approach was to stress the fact that the competitor had, in removing Atlantic Money, breached one of its founding principles of seeking to increase transparency and help consumers." resultsText="We were able to secure positive coverage in The Guardian, CNBC, The Daily Mail, and others, reaching over 200 million people. Our team also worked with Atlantic Money to ensure a swift product update which we had placed in TechCrunch to refocus the narrative to the team's focus on delivering for consumers. Working with the client, we helped turn an existential threat to their future to a month of record new customer onboarding and record user volume." />
      </div>
    </section>;
};

export default CaseStudies;
