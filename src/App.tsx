import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ProductSearch from './components/sections/ProductSearch';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Resources from './components/sections/Resources';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import StatsStrip from './components/sections/StatsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <ProductSearch />
        <Testimonials /> */}
        <StatsStrip />
        <About />
        
        {/* <Resources /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;