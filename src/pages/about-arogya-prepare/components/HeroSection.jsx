import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-clinical">
                  <Icon name="Heart" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">Arogya-Prepare</span>
                  <span className="text-sm text-text-secondary font-medium">Ancient Wisdom. Modern Intelligence.</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Bridging Traditional 
                <span className="text-primary"> Healthcare Wisdom</span> with 
                <span className="text-secondary"> AI Intelligence</span>
              </h1>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Born from the understanding that India's healthcare challenges are deeply rooted in cultural patterns, 
                seasonal changes, and traditional health practices. We combine ancient Ayurvedic insights with 
                cutting-edge predictive analytics to revolutionize hospital preparedness.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">156+</div>
                <div className="text-sm text-text-secondary">Hospitals Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">89%</div>
                <div className="text-sm text-text-secondary">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-text-secondary">Intelligent Monitoring</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} color="var(--color-success)" />
                <span className="text-sm text-text-secondary">AIIMS Partnership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} color="var(--color-success)" />
                <span className="text-sm text-text-secondary">Healthcare Innovation Award</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} color="var(--color-success)" />
                <span className="text-sm text-text-secondary">50,000+ Healthcare Workers</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-clinical-lg p-8 border border-border">
              <Image 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Modern hospital with traditional Indian architecture elements"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-clinical text-sm font-medium">
                <Icon name="TrendingUp" size={16} className="inline mr-2" />
                Festival Surge Predicted
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-clinical text-sm font-medium">
                <Icon name="Brain" size={16} className="inline mr-2" />
                AI-Powered Insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;