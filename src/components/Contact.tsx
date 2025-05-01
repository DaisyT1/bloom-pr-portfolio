import React from 'react';
const Contact: React.FC = () => {
  return <section id="contact" className="py-16 px-6 md:px-12 text-white bg-slate-400">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl mb-8 uppercase tracking-wider font-['ui-sans-serif'] font-light text-neutral-600 md:text-4xl">Get in touch</h2>
        
        <p className="mb-8 font-light font-['ui-sans-serif'] text-lg text-zinc-600">
          We partner with leaders and disruptors to ensure their voices are heard. If you'd like to discuss how we can help bolster and protect your brand's reputation, {' '}
          <a href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi" className="underline hover:text-pink-light transition-colors">
            get in touch
          </a>
        </p>
      </div>
    </section>;
};
export default Contact;