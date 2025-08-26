import React from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceSection = () => {
  const complianceFeatures = [
    {
      title: "DPDP Act 2023 Compliance",
      description: "Full adherence to Digital Personal Data Protection Act with consent management and data minimization",
      icon: "Shield",
      status: "Certified"
    },
    {
      title: "Data Localization",
      description: "All patient data stored within Indian servers with geo-fencing and sovereignty compliance",
      icon: "MapPin",
      status: "Guaranteed"
    },
    {
      title: "Healthcare Standards",
      description: "ISO 27001, HIPAA-equivalent security standards with regular third-party audits",
      icon: "Award",
      status: "Verified"
    },
    {
      title: "Encryption & Security",
      description: "End-to-end encryption, multi-factor authentication, and role-based access controls",
      icon: "Lock",
      status: "Enterprise-grade"
    }
  ];

  const certifications = [
    {
      name: "ISO 27001:2013",
      description: "Information Security Management",
      icon: "Certificate",
      validUntil: "Dec 2025"
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability Controls",
      icon: "CheckCircle",
      validUntil: "Mar 2025"
    },
    {
      name: "DPDP Compliance",
      description: "Indian Data Protection Standards",
      icon: "Shield",
      validUntil: "Ongoing"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Security & Compliance
        </h3>
        <p className="text-text-secondary">
          Enterprise-grade security with Indian regulatory compliance
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Compliance Features
          </h4>
          <div className="space-y-4">
            {complianceFeatures?.map((feature, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Icon 
                      name={feature?.icon} 
                      size={20} 
                      color="var(--color-success)" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-medium text-foreground text-sm">
                        {feature?.title}
                      </h5>
                      <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                        {feature?.status}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Active Certifications
          </h4>
          <div className="space-y-4">
            {certifications?.map((cert, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Icon 
                      name={cert?.icon} 
                      size={24} 
                      color="var(--color-primary)" 
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-foreground text-sm">
                      {cert?.name}
                    </h5>
                    <p className="text-xs text-text-secondary mb-1">
                      {cert?.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={12} color="var(--color-text-secondary)" />
                      <span className="text-xs text-text-secondary">
                        Valid until: {cert?.validUntil}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-4">
          <Icon name="ShieldCheck" size={32} color="var(--color-primary)" />
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Data Sovereignty Guarantee
            </h4>
            <p className="text-text-secondary text-sm mb-3">
              Your hospital's data never leaves Indian borders. We maintain dedicated servers in Mumbai and Bangalore with real-time backup and disaster recovery protocols.
            </p>
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Server" size={14} />
                <span>Mumbai Primary</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="HardDrive" size={14} />
                <span>Bangalore Backup</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Zap" size={14} />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;