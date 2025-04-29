
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DetailedServices from '@/components/DetailedServices';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <Services />
        <DetailedServices />
        <CaseStudies />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
