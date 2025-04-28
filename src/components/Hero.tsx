import React from 'react';
const Hero: React.FC = () => {
  return <section className="relative min-h-screen flex items-center bg-offwhite">
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 opacity-0 animate-fade-in">
            We are a full-service communications agency for luxury consumer brands
          </h1>
          
        </div>
        
        <div className="md:w-2/5 hidden md:block opacity-0 animate-fade-in animate-delay-300">
          <img alt="Cherry Blossom Tree" src="/lovable-uploads/e6e03fdb-93cb-4a38-8e18-ac769d37e1be.jpg" className="w-full h-auto rounded-lg shadow-lg object-scale-down" />
        </div>
      </div>
    </section>;
};
export default Hero;