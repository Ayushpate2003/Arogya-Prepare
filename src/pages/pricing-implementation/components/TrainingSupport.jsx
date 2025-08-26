import React from 'react';
import Icon from '../../../components/AppIcon';

const TrainingSupport = () => {
  const trainingModules = [
    {
      title: "Administrator Dashboard",
      duration: "4 hours",
      participants: "Hospital Management",
      description: "Complete overview of predictive analytics, resource planning, and performance monitoring",
      icon: "Monitor",
      language: "English + Hindi"
    },
    {
      title: "Clinical Staff Training",
      duration: "6 hours",
      participants: "Doctors & Nurses",
      description: "Patient flow optimization, surge alerts interpretation, and workflow integration",
      icon: "Stethoscope",
      language: "Hindi + Regional"
    },
    {
      title: "IT Integration Workshop",
      duration: "8 hours",
      participants: "Technical Team",
      description: "System integration, data migration, API configuration, and troubleshooting",
      icon: "Settings",
      language: "English"
    },
    {
      title: "Department Coordinators",
      duration: "3 hours",
      participants: "Department Heads",
      description: "Department-specific analytics, resource allocation, and team coordination",
      icon: "Users",
      language: "English + Hindi"
    }
  ];

  const supportTiers = [
    {
      tier: "Essential",
      responseTime: "48 hours",
      channels: ["Email", "Phone"],
      hours: "9 AM - 6 PM IST",
      features: ["Basic troubleshooting", "Email support", "Knowledge base access"]
    },
    {
      tier: "Professional",
      responseTime: "24 hours",
      channels: ["Email", "Phone", "Chat"],
      hours: "24/7",
      features: ["Priority support", "Video consultations", "Dedicated account manager", "Monthly health checks"]
    },
    {
      tier: "Enterprise",
      responseTime: "4 hours",
      channels: ["Email", "Phone", "Chat", "WhatsApp"],
      hours: "24/7",
      features: ["Immediate response", "On-site support", "Custom training", "Quarterly reviews", "Direct escalation"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Training Modules */}
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Comprehensive Training Program
          </h3>
          <p className="text-text-secondary">
            Role-based training with Hindi language support and cultural adaptation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trainingModules?.map((module, index) => (
            <div key={index} className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={module.icon} 
                    size={24} 
                    color="var(--color-primary)" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">
                      {module.title}
                    </h4>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {module.duration}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{module.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Globe" size={12} />
                      <span>{module.language}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
          <div className="flex items-center space-x-4">
            <Icon name="Award" size={32} color="var(--color-secondary)" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Certification Program
              </h4>
              <p className="text-text-secondary text-sm">
                All participants receive official certification upon completion. Continuing education credits available for medical professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Support Tiers */}
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            24/7 Support & Maintenance
          </h3>
          <p className="text-text-secondary">
            Multi-tiered support system with guaranteed response times
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportTiers?.map((support, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 transition-intelligence ${
              support?.tier === 'Professional' ?'border-primary bg-primary/5' :'border-border bg-muted/20'
            }`}>
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {support?.tier}
                </h4>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} color="var(--color-success)" />
                  <span className="text-success font-medium">
                    {support?.responseTime}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  {support?.hours}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2 text-sm">
                    Support Channels
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {support?.channels?.map((channel, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-2 text-sm">
                    Included Features
                  </h5>
                  <div className="space-y-2">
                    {support?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} color="var(--color-success)" />
                        <span className="text-xs text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Headphones" size={24} color="var(--color-primary)" />
              <h4 className="font-semibold text-foreground">
                Hindi Language Support
              </h4>
            </div>
            <p className="text-text-secondary text-sm">
              Dedicated Hindi-speaking support team available during Indian business hours. All documentation and training materials available in Hindi.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="MapPin" size={24} color="var(--color-secondary)" />
              <h4 className="font-semibold text-foreground">
                On-site Support
              </h4>
            </div>
            <p className="text-text-secondary text-sm">
              Local support engineers available in major Indian cities. Emergency on-site visits within 24 hours for Enterprise customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSupport;