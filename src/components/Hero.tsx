
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1572505829359-0ac1049db8b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-pink-light/40 to-offwhite/40 backdrop-blur-sm z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-20">
        <div className="max-w-3xl mx-auto md:ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in">
            We are a full-service communications agency for luxury consumer brands
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl opacity-0 animate-fade-in animate-delay-200">
            Crafting compelling stories and building powerful brand reputations for luxury and lifestyle businesses.
          </p>
          <button className="px-8 py-3 bg-pink rounded-md text-white hover:bg-pink-dark transition-colors opacity-0 animate-fade-in animate-delay-300">
            Discover Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
