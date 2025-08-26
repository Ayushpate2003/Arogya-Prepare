import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import InteractiveTimeline from './components/InteractiveTimeline';
import CulturalHealthIntelligence from './components/CulturalHealthIntelligence';
import ExplainableAI from './components/ExplainableAI';
import EnvironmentalHealthMonitoring from './components/EnvironmentalHealthMonitoring';
import SuccessMetrics from './components/SuccessMetrics';
import InteractiveCharts from './components/InteractiveCharts';

const HealthcareIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-clinical-lg pulse-intelligence">
                <Icon name="Brain" size={32} color="white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground breathing-text">
                  Healthcare Intelligence
                </h1>
                <p className="text-lg text-primary font-medium">
                  AI-Powered Predictive Analytics for Indian Healthcare
                </p>
              </div>
            </div>
            
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Deep-dive into Arogya-Prepare's advanced AI capabilities that transform cultural events, 
              environmental data, and historical patterns into actionable healthcare insights for Indian hospitals.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-clinical">
                <div className="text-3xl font-bold text-success mb-2">94%</div>
                <div className="text-sm text-text-secondary">Festival Surge Accuracy</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-clinical">
                <div className="text-3xl font-bold text-primary mb-2">87%</div>
                <div className="text-sm text-text-secondary">Pollution Prediction Precision</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-clinical">
                <div className="text-3xl font-bold text-warning mb-2">156+</div>
                <div className="text-sm text-text-secondary">Hospitals Protected</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-clinical">
                <div className="text-3xl font-bold text-error mb-2">2.3M+</div>
                <div className="text-sm text-text-secondary">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Timeline Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Festival-Health Correlation Analysis
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Interactive timeline showcasing how cultural events impact hospital admissions, 
              with data points for major celebrations and their healthcare implications.
            </p>
          </div>
          
          <InteractiveTimeline />
        </div>
      </section>
      {/* Cultural Health Intelligence Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Cultural Health Intelligence
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Integration of traditional Indian calendars with modern healthcare data, 
              including pollution spike predictions and respiratory admission forecasts.
            </p>
          </div>
          
          <CulturalHealthIntelligence />
        </div>
      </section>
      {/* Explainable AI Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explainable AI Visualizations
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Breaking down complex algorithms into understandable insights for healthcare administrators, 
              showing factors like weather patterns, air quality, and social gathering predictions.
            </p>
          </div>
          
          <ExplainableAI />
        </div>
      </section>
      {/* Environmental Health Monitoring Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Environmental Health Monitoring
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-time integration with pollution monitoring stations across Indian cities, 
              correlating AQI levels with predicted respiratory cases and health impacts.
            </p>
          </div>
          
          <EnvironmentalHealthMonitoring />
        </div>
      </section>
      {/* Interactive Charts Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Seasonal Healthcare Patterns
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Interactive charts showing seasonal patterns specific to Indian healthcare, 
              with hover states revealing detailed breakdowns and predictive insights.
            </p>
          </div>
          
          <InteractiveCharts />
        </div>
      </section>
      {/* Success Metrics Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Validated Performance Metrics
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-time accuracy tracking and impact measurement, highlighting our success rates 
              and continuous improvement in healthcare prediction capabilities.
            </p>
          </div>
          
          <SuccessMetrics />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Intelligence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 156+ hospitals already using our AI-powered predictive analytics 
              to stay ahead of healthcare surges and optimize patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-intelligence shadow-clinical-lg">
                Schedule AI Demo
              </button>
              <button className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-intelligence border border-white/30">
                View Implementation Guide
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>AIIMS Partnership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>94% Accuracy Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>2.3M+ Lives Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={24} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-foreground">Arogya-Prepare</span>
            </div>
            <p className="text-text-secondary mb-6">
              Intelligent Healthcare Intelligence Platform
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <span>© {new Date()?.getFullYear()} Arogya-Prepare. All rights reserved.</span>
              <span>•</span>
              <span>Transforming Healthcare with AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareIntelligence;