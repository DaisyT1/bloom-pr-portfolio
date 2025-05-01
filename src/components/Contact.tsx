import React from 'react';
const Contact: React.FC = () => {
  return <section id="contact" className="py-16 px-6 md:px-12 text-white bg-slate-400">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-light text-center mb-12 uppercase tracking-wider text-charcoal font-roboto md:text-3xl">Get in touch</h2>

        <p className="text-lg mb-6 text-charcoal font-light font-['roboto']">
          We partner with leaders and disruptors to ensure their voices are heard. If you'd like to discuss how we can help bolster and protect your brand's reputation, {' '}
          <a href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi" className="underline hover:text-pink-light transition-colors">
            get in touch
          </a>
        </p>
      </div>
    </section>;
};
export default Contact;
