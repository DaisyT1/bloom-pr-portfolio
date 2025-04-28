
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-offwhite">
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 opacity-0 animate-fade-in">
            We are a full-service communications agency for luxury consumer brands
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl font-light opacity-0 animate-fade-in animate-delay-200">
            Crafting compelling stories and building powerful brand reputations for luxury and lifestyle businesses.
          </p>
        </div>
        
        <div className="md:w-2/5 hidden md:block opacity-0 animate-fade-in animate-delay-300">
          <img 
            src="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" 
            alt="Cherry Blossom Tree" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
