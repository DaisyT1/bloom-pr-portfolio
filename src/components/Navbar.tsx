
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled ? "bg-white/80 shadow-sm backdrop-blur" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-semibold text-gray-800 font-['Playfair_Display']">
          BLOOM PR
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-pink-dark transition-colors">
            Services
          </a>
          <a href="#strategy" className="text-sm font-medium text-gray-700 hover:text-pink-dark transition-colors">
            Strategy
          </a>
          <a href="#reputation" className="text-sm font-medium text-gray-700 hover:text-pink-dark transition-colors">
            Reputation
          </a>
          <a href="#content" className="text-sm font-medium text-gray-700 hover:text-pink-dark transition-colors">
            Content
          </a>
        </div>

        <button className="hidden md:block px-6 py-2 bg-pink-light text-pink-dark rounded hover:bg-pink hover:text-white transition-colors font-medium">
          Contact Us
        </button>
        
        <button className="md:hidden text-gray-800">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
