import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyPhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Eye",
      title: "Intelligent Sentinel",
      description: "Our AI never sleeps, continuously monitoring health patterns, environmental factors, and cultural events to predict healthcare surges before they happen.",
      features: ["24/7 Pattern Analysis", "Real-time Threat Detection", "Predictive Alerting"]
    },
    {
      icon: "Brain",
      title: "Explainable AI",
      description: "Every prediction comes with clear explanations, helping healthcare professionals understand the 'why' behind our recommendations.",
      features: ["Transparent Algorithms", "Decision Tree Visualization", "Confidence Scoring"]
    },
    {
      icon: "Layers",
      title: "Multi-Modal Intelligence",
      description: "We combine traditional health data with cultural calendars, weather patterns, pollution levels, and social media trends for comprehensive insights.",
      features: ["Cultural Pattern Recognition", "Environmental Health Correlation", "Social Sentiment Analysis"]
    },
    {
      icon: "Shield",
      title: "Privacy-First Design",
      description: "Built with DPDP Act compliance from the ground up, ensuring patient privacy while delivering powerful healthcare intelligence.",
      features: ["Data Anonymization", "Secure Processing", "Audit Trails"]
    }
  ];

  const technologyStack = [
    { name: "Machine Learning", description: "Advanced ML models for pattern recognition", icon: "Cpu" },
    { name: "Natural Language Processing", description: "Understanding cultural and medical texts", icon: "MessageSquare" },
    { name: "Time Series Analysis", description: "Predicting healthcare trends over time", icon: "TrendingUp" },
    { name: "Geospatial Analytics", description: "Location-based health pattern analysis", icon: "MapPin" },
    { name: "Real-time Processing", description: "Instant analysis of streaming health data", icon: "Zap" },
    { name: "Edge Computing", description: "Local processing for faster response times", icon: "Server" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Cog" size={16} />
            <span>Technology Philosophy</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            The <span className="text-accent">Intelligent Sentinel</span> Approach
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our technology philosophy centers on creating an AI system that acts as a vigilant guardian, 
            combining the wisdom of traditional Indian healthcare practices with cutting-edge predictive analytics.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {philosophyPrinciples?.map((principle, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={principle?.icon} size={24} color="var(--color-accent)" strokeWidth={2} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{principle?.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{principle?.description}</p>
                  
                  <div className="space-y-2">
                    {principle?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Technology Stack</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Built on a foundation of proven technologies, optimized for Indian healthcare environments 
              and designed to scale from small clinics to large hospital networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyStack?.map((tech, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-clinical transition-intelligence">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name={tech?.icon} size={20} color="var(--color-primary)" />
                  <h4 className="font-semibold text-foreground">{tech?.name}</h4>
                </div>
                <p className="text-sm text-text-secondary">{tech?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Commitment */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 shadow-clinical border border-border max-w-4xl mx-auto">
            <Icon name="Lightbulb" size={48} color="var(--color-accent)" className="mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Innovation</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              We invest 25% of our resources in R&D, continuously improving our algorithms based on 
              real-world feedback from healthcare professionals and emerging patterns in Indian healthcare.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25%</div>
                <div className="text-sm text-text-secondary">R&D Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">12</div>
                <div className="text-sm text-text-secondary">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-text-secondary">Model Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPhilosophySection;