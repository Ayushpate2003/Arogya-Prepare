import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import TechnologyPhilosophySection from './components/TechnologyPhilosophySection';
import PartnershipsSection from './components/PartnershipsSection';
import CulturalIntelligenceSection from './components/CulturalIntelligenceSection';
import CompanyTimelineSection from './components/CompanyTimelineSection';
import CompanyValuesSection from './components/CompanyValuesSection';

const AboutArogyaPrepare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Arogya-Prepare - Bridging Ancient Wisdom with AI Healthcare Intelligence</title>
        <meta name="description" content="Learn about Arogya-Prepare's mission to transform Indian healthcare through predictive AI that combines traditional wisdom with modern technology. Discover our team, partnerships, and cultural intelligence approach." />
        <meta name="keywords" content="Arogya-Prepare, healthcare AI, predictive analytics, Indian healthcare, cultural intelligence, AIIMS partnership, healthcare innovation" />
        <meta property="og:title" content="About Arogya-Prepare - AI-Powered Healthcare Intelligence" />
        <meta property="og:description" content="Bridging ancient Indian wellness wisdom with cutting-edge predictive technology to revolutionize hospital preparedness and patient care." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-arogya-prepare" />
      </Helmet>
      <Header />
      <main className="relative">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <TechnologyPhilosophySection />
        <PartnershipsSection />
        <CulturalIntelligenceSection />
        <CompanyTimelineSection />
        <CompanyValuesSection />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Arogya-Prepare</span>
            </div>
            <p className="text-text-secondary mb-4">
              Intelligent Healthcare Guardian • Ancient Wisdom • Modern Technology
            </p>
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Arogya-Prepare. All rights reserved. 
              Protecting 50M+ patients through predictive healthcare intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutArogyaPrepare;