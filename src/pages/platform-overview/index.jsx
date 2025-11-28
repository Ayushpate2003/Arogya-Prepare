import React from 'react';
import Header from '../../components/ui/Header';
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
      <Header />
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