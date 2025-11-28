import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import ProvenImpact from './components/ProvenImpact';
import TestimonialCarousel from './components/TestimonialCarousel';
import PlatformPreview from './components/PlatformPreview';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Arogya-Prepare - AI-Powered Healthcare Intelligence Platform</title>
        <meta 
          name="description" 
          content="Transform reactive hospital management into proactive surge preparedness with AI-powered predictive analytics. Trusted by 156+ hospitals across India." 
        />
        <meta 
          name="keywords" 
          content="healthcare intelligence, hospital management, surge prediction, AI healthcare, Indian hospitals, predictive analytics" 
        />
        <meta property="og:title" content="Arogya-Prepare - Predict. Prepare. Protect." />
        <meta 
          property="og:description" 
          content="Intelligence that saves lives before emergencies happen. Join 156+ hospitals preventing overcrowding with predictive healthcare." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arogya-prepare.com/homepage" />
      </Helmet>
      <Header />

      <div className="min-h-screen bg-background">
        {/* Hero Section with Dynamic Surge Risk Meter */}
        <HeroSection />

        {/* Interactive Hospital Network Map */}
        <InteractiveMap />

        {/* Proven Impact Metrics */}
        <ProvenImpact />

        {/* Customer Testimonials */}
        <TestimonialCarousel />

        {/* Platform Preview with Live Demo */}
        <PlatformPreview />

        {/* Call to Action Section */}
        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;