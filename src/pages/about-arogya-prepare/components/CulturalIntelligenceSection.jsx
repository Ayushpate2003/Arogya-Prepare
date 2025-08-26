import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalIntelligenceSection = () => {
  const culturalFeatures = [
    {
      icon: "Calendar",
      title: "Festival Calendar Integration",
      description: "Comprehensive database of Indian festivals with historical health pattern analysis to predict surge timing and intensity.",
      examples: ["Diwali respiratory cases", "Holi eye injuries", "Karva Chauth fasting complications"]
    },
    {
      icon: "MapPin",
      title: "Regional Health Patterns",
      description: "State and region-specific health trend analysis considering local customs, dietary habits, and environmental factors.",
      examples: ["Kerala monsoon diseases", "Punjab pesticide exposure", "Rajasthan heat-related illnesses"]
    },
    {
      icon: "Users",
      title: "Culturally-Sensitive Messaging",
      description: "Health advisories and communications tailored to local languages, cultural sensitivities, and traditional beliefs.",
      examples: ["Ayurvedic terminology", "Religious considerations", "Community-specific outreach"]
    },
    {
      icon: "Leaf",
      title: "Traditional Medicine Integration",
      description: "Recognition of traditional healing practices and their interaction with modern medical treatments for comprehensive care.",
      examples: ["Ayurvedic interactions", "Herbal medicine effects", "Traditional dietary practices"]
    }
  ];

  const festivalPredictions = [
    {
      festival: "Diwali",
      healthImpacts: ["Respiratory Issues", "Burn Injuries", "Noise-related Stress"],
      predictionAccuracy: "92%",
      timeframe: "7-14 days",
      color: "text-warning"
    },
    {
      festival: "Holi",
      healthImpacts: ["Eye Infections", "Skin Allergies", "Alcohol Poisoning"],
      predictionAccuracy: "88%",
      timeframe: "3-7 days",
      color: "text-success"
    },
    {
      festival: "Durga Puja",
      healthImpacts: ["Food Poisoning", "Crowd Injuries", "Fatigue Cases"],
      predictionAccuracy: "85%",
      timeframe: "5-10 days",
      color: "text-primary"
    },
    {
      festival: "Kumbh Mela",
      healthImpacts: ["Infectious Diseases", "Dehydration", "Stampede Injuries"],
      predictionAccuracy: "94%",
      timeframe: "14-21 days",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Globe" size={16} />
            <span>Cultural Intelligence</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Understanding India's 
            <span className="text-warning"> Cultural Health Patterns</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our AI doesn't just analyze medical data—it understands the deep cultural, religious, and seasonal patterns that influence health outcomes across India's diverse communities and traditions.
          </p>
        </div>

        {/* Cultural Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {culturalFeatures?.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-warning/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={24} color="var(--color-warning)" strokeWidth={2} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature?.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{feature?.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Examples:</h4>
                    {feature?.examples?.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Dot" size={16} color="var(--color-warning)" />
                        <span className="text-sm text-text-secondary">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Festival Prediction Showcase */}
        <div className="bg-gradient-to-r from-warning/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-warning/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Festival Health Prediction Accuracy</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our cultural intelligence enables precise prediction of health surges during major Indian festivals, 
              helping hospitals prepare with specific resources and staffing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivalPredictions?.map((prediction, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-clinical transition-intelligence">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-foreground mb-2">{prediction?.festival}</h4>
                  <div className={`text-2xl font-bold ${prediction?.color} mb-1`}>
                    {prediction?.predictionAccuracy}
                  </div>
                  <div className="text-xs text-text-secondary">Prediction Accuracy</div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-xs font-medium text-foreground mb-1">Common Health Impacts:</h5>
                    {prediction?.healthImpacts?.map((impact, idx) => (
                      <div key={idx} className="text-xs text-text-secondary">{impact}</div>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={12} color="var(--color-text-secondary)" />
                      <span className="text-xs text-text-secondary">Forecast: {prediction?.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Sensitivity Approach */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Cultural Sensitivity Approach</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={16} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Respectful Integration</h4>
                  <p className="text-text-secondary text-sm">
                    We honor traditional practices while providing evidence-based health guidance that 
                    complements rather than conflicts with cultural beliefs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={16} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Engagement</h4>
                  <p className="text-text-secondary text-sm">
                    Local healthcare workers and community leaders help validate our cultural insights 
                    and ensure our recommendations are culturally appropriate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={16} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                  <p className="text-text-secondary text-sm">
                    Our AI continuously learns from cultural feedback and regional health patterns 
                    to improve prediction accuracy and cultural sensitivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl p-6 shadow-clinical border border-border">
              <Image 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop" 
                alt="Indian cultural festival celebration with health awareness"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Cultural Health Intelligence Dashboard</h4>
                <p className="text-text-secondary text-sm">
                  Real-time monitoring of cultural events and their health implications across different regions of India.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-warning">28</div>
                    <div className="text-xs text-text-secondary">Active Festivals</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-success">156</div>
                    <div className="text-xs text-text-secondary">Cultural Patterns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalIntelligenceSection;