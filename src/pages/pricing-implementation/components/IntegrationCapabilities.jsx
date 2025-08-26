import React from 'react';
import Icon from '../../../components/AppIcon';

const IntegrationCapabilities = () => {
  const popularSystems = [
    {
      name: "Medeil",
      category: "Pharmacy Management",
      description: "Complete integration with inventory, billing, and patient records",
      logo: "Pill",
      status: "Native Integration",
      setupTime: "2-3 days"
    },
    {
      name: "eHospital (NIC)",
      category: "Government HIS",
      description: "Seamless connection with government hospital management systems",
      logo: "Building2",
      status: "Certified Partner",
      setupTime: "3-5 days"
    },
    {
      name: "Birlamedisoft",
      category: "Hospital Management",
      description: "Full EHR integration with patient flow and resource management",
      logo: "FileText",
      status: "API Integration",
      setupTime: "1-2 days"
    },
    {
      name: "Insta HMS",
      category: "Multi-specialty HIS",
      description: "Complete workflow integration with appointment and billing systems",
      logo: "Calendar",
      status: "Direct Connect",
      setupTime: "2-4 days"
    },
    {
      name: "Practo Ray",
      category: "Practice Management",
      description: "Patient scheduling and clinical workflow optimization",
      logo: "Users",
      status: "API Integration",
      setupTime: "1-3 days"
    },
    {
      name: "HealthPlix",
      category: "EMR System",
      description: "Electronic medical records and clinical decision support",
      logo: "Heart",
      status: "Native Integration",
      setupTime: "2-3 days"
    }
  ];

  const integrationTypes = [
    {
      type: "Real-time API",
      description: "Live data synchronization with instant updates",
      icon: "Zap",
      features: ["Instant sync", "Bi-directional", "Real-time alerts"]
    },
    {
      type: "Scheduled Sync",
      description: "Automated data transfer at regular intervals",
      icon: "Clock",
      features: ["Hourly/Daily sync", "Batch processing", "Error handling"]
    },
    {
      type: "File-based Import",
      description: "CSV/Excel file imports for legacy systems",
      icon: "Upload",
      features: ["Manual uploads", "Validation checks", "Format conversion"]
    },
    {
      type: "Database Direct",
      description: "Direct database connections for custom systems",
      icon: "Database",
      features: ["SQL queries", "Secure tunneling", "Custom mapping"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Popular Systems */}
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Popular HIS Integrations
          </h3>
          <p className="text-text-secondary">
            Pre-built connectors for leading Indian healthcare systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularSystems?.map((system, index) => (
            <div key={index} className="p-6 bg-muted/30 rounded-lg border border-border hover:border-primary/30 transition-intelligence">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={system?.logo} 
                    size={24} 
                    color="var(--color-primary)" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      {system?.name}
                    </h4>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                      {system?.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mb-2">
                    {system?.category}
                  </p>
                  <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                    {system?.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={12} color="var(--color-text-secondary)" />
                    <span className="text-xs text-text-secondary">
                      Setup: {system?.setupTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-4">
            <Icon name="Puzzle" size={32} color="var(--color-primary)" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Custom Integration Support
              </h4>
              <p className="text-text-secondary text-sm">
                Don't see your system? Our integration team can build custom connectors for any healthcare system within 2-4 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Integration Types */}
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Integration Methods
          </h3>
          <p className="text-text-secondary">
            Flexible connection options for any technical environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {integrationTypes?.map((integration, index) => (
            <div key={index} className="p-6 bg-muted/20 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={integration?.icon} 
                    size={24} 
                    color="var(--color-secondary)" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    {integration?.type}
                  </h4>
                  <p className="text-text-secondary text-sm mb-4">
                    {integration?.description}
                  </p>
                  <div className="space-y-2">
                    {integration?.features?.map((feature, idx) => (
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

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Icon name="Shield" size={32} color="var(--color-success)" className="mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">
              Secure Connections
            </h4>
            <p className="text-xs text-text-secondary">
              All integrations use encrypted tunnels and OAuth 2.0 authentication
            </p>
          </div>
          
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Icon name="Gauge" size={32} color="var(--color-primary)" className="mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">
              High Performance
            </h4>
            <p className="text-xs text-text-secondary">
              Optimized for healthcare workloads with sub-second response times
            </p>
          </div>
          
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Icon name="RefreshCw" size={32} color="var(--color-secondary)" className="mx-auto mb-2" />
            <h4 className="font-semibold text-foreground mb-1">
              Auto-Recovery
            </h4>
            <p className="text-xs text-text-secondary">
              Automatic retry mechanisms and failover for uninterrupted service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCapabilities;