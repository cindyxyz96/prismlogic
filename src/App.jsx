import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounters from './components/ImpactCounters';
import Services from './components/Services';
import WorkflowPreview from './components/WorkflowPreview';
import DataDashboard from './components/DataDashboard';
import SpecialOffer from './components/SpecialOffer';
import Testimonials from './components/Testimonials';
import ROICalculator from './components/ROICalculator';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  useEffect(() => {
    // Show the special offer popup 2 seconds after the user lands on the site
    const timer = setTimeout(() => {
      setIsOfferOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <ImpactCounters />
        <Services />
        <WorkflowPreview />
        <DataDashboard />
        <Testimonials />
        <ROICalculator />
      </main>
      <Footer />
      
      <SpecialOffer 
        isOpen={isOfferOpen} 
        onClose={() => setIsOfferOpen(false)} 
        onOpenContact={() => {
          setIsOfferOpen(false);
          setIsContactModalOpen(true);
        }} 
      />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}

export default App;
