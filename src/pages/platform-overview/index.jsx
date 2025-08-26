import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import IntelligentDashboard from './components/IntelligentDashboard';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import ResourceOptimization from './components/ResourceOptimization';
import PatientGateway from './components/PatientGateway';
import CaseStudySection from './components/CaseStudySection';
import TechnicalSpecs from './components/TechnicalSpecs';
import Footer from './components/Footer';

const PlatformOverview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <IntelligentDashboard />
      <PredictiveAnalytics />
      <ResourceOptimization />
      <PatientGateway />
      <CaseStudySection />
      <TechnicalSpecs />
      <Footer />
    </div>
  );
};

export default PlatformOverview;