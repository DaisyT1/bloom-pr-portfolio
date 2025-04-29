
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-8 font-['Playfair_Display']">About Beaufoy</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-gray-700 font-light">
            Beaufoy is a full-service communications agency specialising in positioning luxury consumer brands.
          </p>
          
          <p className="text-lg mb-6 text-gray-700 font-light">
            Uniquely complemented by the insights of data scientists and anthropologists, we combine storytelling with data, delivering outcomes that are quantifiable and commercially-aligned to our clients' brands.
          </p>
          
          <p className="text-lg text-gray-700 font-light">
            With a presence in fifteen locations, our team has deep relationships with key tier one editors, influencers, and decision-makers across Europe and North America.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
