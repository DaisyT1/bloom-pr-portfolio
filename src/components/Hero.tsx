
import React from 'react';
const Hero: React.FC = () => {
  return <section className="relative min-h-screen flex items-center bg-offwhite">
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 opacity-0 animate-fade-in font-['Playfair_Display']">
            We are a full-service communications agency for luxury consumer brands
          </h1>
          
        </div>
        
        <div className="md:w-2/5 hidden md:block opacity-0 animate-fade-in animate-delay-300">
          <img alt="Office Building" src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a" className="w-1/2 h-auto rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </section>;
};
export default Hero;
