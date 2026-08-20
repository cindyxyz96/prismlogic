import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounters from './components/ImpactCounters';
import Services from './components/Services';
import WorkflowPreview from './components/WorkflowPreview';
import DataDashboard from './components/DataDashboard';
import ROICalculator from './components/ROICalculator';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <ImpactCounters />
        <Services />
        <WorkflowPreview />
        <DataDashboard />
        <ROICalculator />
      </main>
      <Footer />
    </>
  );
}

export default App;
