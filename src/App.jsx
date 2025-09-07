import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import CommercialLandAmenities from './components/CommercialLandAmenities.jsx';
// import PropertiesSection from './components/PropertiesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeatureSection />
      <AmenitiesSection />
      <CommercialLandAmenities/>
      {/* <PropertiesSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
