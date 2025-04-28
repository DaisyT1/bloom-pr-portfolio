
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          filter: 'brightness(0.9)'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl mx-auto md:ml-0 bg-white/80 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 opacity-0 animate-fade-in">
            We are a full-service communications agency for luxury consumer brands
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl font-light opacity-0 animate-fade-in animate-delay-200">
            Crafting compelling stories and building powerful brand reputations for luxury and lifestyle businesses.
          </p>
          <button className="px-8 py-3 bg-pink rounded-md text-white hover:bg-pink-dark transition-colors font-light opacity-0 animate-fade-in animate-delay-300">
            Discover Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
