import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const missionPoints = [
    {
      icon: "Target",
      title: "Proactive Healthcare",
      description: "Transform reactive hospital management into intelligent surge preparedness that anticipates patient needs before emergencies occur."
    },
    {
      icon: "Calendar",
      title: "Cultural Intelligence",
      description: "Integrate Indian festival calendars and seasonal health patterns to predict festival-related admissions and cultural health trends."
    },
    {
      icon: "Wind",
      title: "Environmental Awareness",
      description: "Monitor pollution levels and environmental factors to predict respiratory cases and pollution-induced health emergencies."
    },
    {
      icon: "Users",
      title: "Healthcare Democratization",
      description: "Make predictive healthcare intelligence accessible across India's diverse healthcare landscape, from tier-1 cities to rural areas."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Compass" size={16} />
            <span>Our Mission</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Revolutionizing Healthcare Through 
            <span className="text-primary"> Predictive Intelligence</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We believe healthcare should be proactive, not reactive. Our mission is to empower Indian hospitals 
            with the intelligence they need to anticipate patient surges, optimize resources, and deliver 
            exceptional care during critical periods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints?.map((point, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name={point?.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">{point?.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{point?.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="text-center">
            <Icon name="Heart" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "To be the intelligent sentinel that never sleeps, continuously analyzing patterns to ensure 
              hospitals are ready before the storm hits, combining the wisdom of Arogya with the power of AI."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <span className="text-sm text-text-secondary font-medium">Arogya-Prepare Vision</span>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;