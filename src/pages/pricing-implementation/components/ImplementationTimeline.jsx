import React from 'react';
import Icon from '../../../components/AppIcon';

const ImplementationTimeline = () => {
  const timelineSteps = [
    {
      phase: "Data Integration",
      duration: "Days 1-30",
      title: "System Setup & Data Migration",
      description: `Connect existing HIS systems (Medeil, eHospital)\nMigrate historical patient data\nSetup predictive algorithms\nInitial staff access configuration`,
      icon: "Database",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      phase: "Staff Training",
      duration: "Days 31-60", 
      title: "Comprehensive Team Onboarding",
      description: `Department-wise training sessions\nHindi language support materials\nRole-based dashboard customization\nPredictive analytics interpretation`,
      icon: "GraduationCap",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      phase: "Full Deployment",
      duration: "Days 61-90",
      title: "Live System Activation",
      description: `Real-time surge monitoring activation\nComplete workflow integration\nPerformance optimization\n24/7 support activation`,
      icon: "Rocket",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          90-Day Implementation Journey
        </h3>
        <p className="text-text-secondary">
          Structured rollout ensuring smooth transition and maximum adoption
        </p>
      </div>
      <div className="space-y-8">
        {timelineSteps?.map((step, index) => (
          <div key={index} className="relative">
            {index < timelineSteps?.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
            )}
            
            <div className="flex items-start space-x-6">
              <div className={`flex-shrink-0 w-12 h-12 ${step?.bgColor} rounded-full flex items-center justify-center`}>
                <Icon 
                  name={step?.icon} 
                  size={24} 
                  color={`var(--color-${step?.color?.split('-')?.[1]})`}
                  strokeWidth={2}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {step?.title}
                  </h4>
                  <span className="text-sm font-medium text-text-secondary bg-muted px-3 py-1 rounded-full">
                    {step?.duration}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className={`text-sm font-medium ${step?.color} bg-opacity-10 px-2 py-1 rounded`}>
                    {step?.phase}
                  </span>
                </div>
                
                <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                  {step?.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Clock" size={20} color="var(--color-primary)" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Implementation Guarantee
            </p>
            <p className="text-xs text-text-secondary">
              Full deployment within 90 days or receive 3 months free service extension
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTimeline;