import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-off-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-charcoal text-sm font-['roboto']">© 2025 Beaufoy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="text-charcoal text-sm font-['roboto']">hello@beaufoy.co</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
