
import React, { useState } from 'react';
import { Button } from '@/components/ui/moving-border';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-16 px-6 md:px-12 text-white bg-slate-300">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">Get in touch</h2>

        <p className="text-lg mb-10 text-charcoal font-light font-['roboto']">
          We partner with leaders and disruptors to ensure their voices are heard. If you'd like to discuss how we can help bolster and protect your brand's reputation.
        </p>

        <a
          href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            className="font-light tracking-wider text-charcoal hover:text-pink-dark transition-colors mx-auto"
            containerClassName="w-48 h-14"
            borderClassName="bg-[radial-gradient(#FF5C8A_100%,transparent_100%)]"
            duration={isHovered ? 2000 : 4000}
          >
            CONTACT US <ArrowRight className="ml-2" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
