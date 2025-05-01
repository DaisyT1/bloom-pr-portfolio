
import React from 'react';
import { Button } from './ui/moving-border';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return <section id="contact" className="py-16 px-6 md:px-12 text-white bg-slate-400">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">Get in touch</h2>

        <p className="text-lg mb-8 text-charcoal font-light font-['roboto']">
          We partner with leaders and disruptors to ensure their voices are heard. If you'd like to discuss how we can help bolster and protect your brand's reputation:
        </p>
        
        <div className="flex justify-center">
          <Button 
            as="a"
            href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi"
            borderRadius="0.5rem"
            containerClassName="w-44 h-12"
            className="bg-transparent border-pink-light hover:bg-pink-light/10 text-charcoal font-normal font-roboto transition-all duration-300"
            borderClassName="bg-[radial-gradient(var(--pink-300)_40%,transparent_60%)]"
          >
            Get in touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Contact;
