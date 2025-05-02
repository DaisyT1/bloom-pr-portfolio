
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/moving-border';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        <a href="#" className="text-xl font-light text-charcoal font-['Playfair_Display']">
          Beaufoy
        </a>

        <a
          href="mailto:will@beaufoycomms.com?subject=Just%20saying%20hi"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            className="font-light tracking-wider text-charcoal hover:text-pink-dark transition-colors"
            containerClassName="w-36 h-10"
            borderClassName="bg-[radial-gradient(#FF5C8A_100%,transparent_100%)]"
            duration={isHovered ? 2000 : 4000}
          > 
            CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
