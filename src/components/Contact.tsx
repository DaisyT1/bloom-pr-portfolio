
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#1e3a5f] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-8 uppercase tracking-wider font-['Playfair_Display']">Get in touch</h2>
        
        <p className="text-lg mb-8 font-light">
          We partner with leaders and disruptors to ensure their voices are heard. If you'd like to discuss how we can help bolster and protect your brand's reputation, {' '}
          <a 
            href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi" 
            className="underline hover:text-pink-light transition-colors"
          >
            get in touch
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
