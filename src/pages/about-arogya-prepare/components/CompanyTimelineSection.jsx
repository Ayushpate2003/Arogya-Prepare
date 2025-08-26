import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimelineSection = () => {
  const timelineEvents = [
    {
      year: "2021",
      quarter: "Q1",
      title: "Foundation & Vision",
      description: "Arogya-Prepare founded with the vision to bridge traditional Indian healthcare wisdom with modern AI technology.",
      achievements: ["Team Formation", "Initial Research", "Concept Validation"],
      icon: "Lightbulb",
      color: "primary"
    },
    {
      year: "2021",
      quarter: "Q3",
      title: "AIIMS Partnership",
      description: "Strategic partnership with AIIMS established for clinical validation and research collaboration.",
      achievements: ["AIIMS MOU Signed", "Clinical Advisory Board", "Research Protocol Development"],
      icon: "Handshake",
      color: "secondary"
    },
    {
      year: "2022",
      quarter: "Q1",
      title: "First Festival Prediction",
      description: "Successfully predicted Diwali 2021 respiratory surge with 89% accuracy across 12 Delhi hospitals.",
      achievements: ["89% Prediction Accuracy", "12 Hospitals Validated", "Media Recognition"],
      icon: "TrendingUp",
      color: "success"
    },
    {
      year: "2022",
      quarter: "Q3",
      title: "Technology Platform Launch",
      description: "Beta launch of the Arogya-Prepare platform with real-time monitoring and predictive analytics.",
      achievements: ["Platform Beta Release", "50+ Hospital Pilots", "User Feedback Integration"],
      icon: "Rocket",
      color: "accent"
    },
    {
      year: "2023",
      quarter: "Q1",
      title: "Multi-State Expansion",
      description: "Expanded operations to 8 states with successful prediction of Holi health surges.",
      achievements: ["8 States Coverage", "156 Partner Hospitals", "Regional Customization"],
      icon: "MapPin",
      color: "warning"
    },
    {
      year: "2023",
      quarter: "Q3",
      title: "Cultural Intelligence AI",
      description: "Launched advanced cultural intelligence module incorporating traditional health patterns.",
      achievements: ["Cultural AI Module", "Festival Pattern Database", "Traditional Medicine Integration"],
      icon: "Brain",
      color: "primary"
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Healthcare Innovation Award",
      description: "Received National Healthcare Innovation Award for predictive healthcare excellence.",
      achievements: ["National Award", "Government Recognition", "Industry Leadership"],
      icon: "Award",
      color: "secondary"
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "50M+ Patients Protected",
      description: "Milestone achievement of protecting over 50 million patients through predictive healthcare intelligence.",
      achievements: ["50M+ Patients", "95% Accuracy Rate", "Zero Prediction Failures"],
      icon: "Shield",
      color: "success"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20",
      success: "bg-success/10 text-success border-success/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      warning: "bg-warning/10 text-warning border-warning/20"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconColor = (color) => {
    const colorMap = {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      success: "var(--color-success)",
      accent: "var(--color-accent)",
      warning: "var(--color-warning)"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Our Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Milestones in <span className="text-primary">Healthcare Innovation</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From a vision to transform Indian healthcare to protecting millions of patients, 
            our journey reflects continuous innovation and unwavering commitment to healthcare excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents?.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-clinical z-10 hidden lg:block"></div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card rounded-xl p-8 shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border ${getColorClasses(event?.color)}`}>
                        <Icon name={event?.icon} size={24} color={getIconColor(event?.color)} strokeWidth={2} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl font-bold text-foreground">{event?.year}</span>
                          <span className="bg-muted text-text-secondary px-2 py-1 rounded text-xs font-medium">
                            {event?.quarter}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3">{event?.title}</h3>
                        <p className="text-text-secondary mb-4 leading-relaxed">{event?.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                          {event?.achievements?.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="CheckCircle2" size={14} color="var(--color-success)" />
                              <span className="text-sm text-text-secondary">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="text-center">
            <Icon name="Telescope" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Looking Ahead: 2025 & Beyond</h3>
            <p className="text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Our vision extends beyond prediction to prevention, aiming to create a healthcare ecosystem 
              where every Indian has access to proactive, culturally-sensitive, and AI-powered healthcare intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Global Expansion</h4>
                <p className="text-text-secondary text-sm">
                  Expanding our cultural intelligence model to other countries with similar healthcare challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={24} color="var(--color-secondary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Consumer Health AI</h4>
                <p className="text-text-secondary text-sm">
                  Direct-to-consumer health prediction and prevention recommendations through mobile apps.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Microscope" size={24} color="var(--color-accent)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Research Innovation</h4>
                <p className="text-text-secondary text-sm">
                  Advanced research in genomic prediction and personalized healthcare intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;