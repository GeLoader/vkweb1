import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background */}
 
<div 
    className="absolute top-[25%] right-0 -translate-y-1/2
      bg-gold text-navy font-bold py-3 px-6 
      rounded-md cursor-pointer shadow-lg z-[1000]
      sm:max-w-xs max-w-[calc(100vw-1rem)]
      transition-opacity duration-300 hover:opacity-50
      "
  >
    <span className="whitespace-nowrap text-sm sm:text-base">VOLOVE IS THE HECHSHER</span>
  </div>

      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${import.meta.env.BASE_URL}/pexels-anntarazevich-5425648.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
         {/* <div className="mt-6 text-2xl font-bold text-gold text-right">
            VOLOVE IS THE HECHSHER
          </div> */}
 
          {/* <div 
        className="fixed top-1/4 right-0 
          -translate-y-1/2 
          bg-gold text-navy font-bold py-3 px-6 
          rounded-t-md  
          cursor-pointer shadow-lg z-50 
           "
      >
        <span className="whitespace-nowrap">VOLOVE IS THE HECHSHER</span>
      </div> */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight mt-16">
          The Highest Standard in Kosher Certification. 
          <h2 className="font-serif text-1xl md:text-2xl  font-bold text-white mb-6 leading-tight">
          Also known as VK Kosher 
          </h2>
          </h2>
         
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Ensuring the integrity of kosher products through rigorous inspection, thorough analysis, and unwavering commitment to Jewish dietary laws with VK Kosher.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a 
              href="#services" 
              className="bg-gold text-navy font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 text-center"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 text-center"
            >
              Get Certified with VK Kosher
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Globally recognized certification</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Rigorous inspection process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>30+ years of expertise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Thousands of certified products</span>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;