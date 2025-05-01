import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4 font-['Playfair_Display'] text-charcoal">Beaufoy</h3>
            <p className="text-charcoal font-['ui-sans-serif']">
              A full-service communications agency for luxury consumer brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-charcoal font-['ui-sans-serif'] uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-charcoal font-['ui-sans-serif']">
              <li><a href="#strategy" className="hover:text-pink-dark transition-colors">Brand Strategy</a></li>
              <li><a href="#reputation" className="hover:text-pink-dark transition-colors">Reputation Management</a></li>
              <li><a href="#content" className="hover:text-pink-dark transition-colors">Content Marketing</a></li>
              <li><a href="#services" className="hover:text-pink-dark transition-colors">Media Relations</a></li>
              <li><a href="#services" className="hover:text-pink-dark transition-colors">Crisis Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-charcoal font-['ui-sans-serif'] uppercase tracking-wider">Contact</h4>
            <address className="text-charcoal not-italic font-['ui-sans-serif']">
              <p>123 Luxury Lane</p>
              <p>London, UK</p>
              <p className="mt-2">Email: hello@beaufoy.com</p>
              <p>Phone: +44 20 1234 5678</p>
            </address>
          </div>
          
          
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-charcoal text-sm font-['ui-sans-serif']">© 2025 Beaufoy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;