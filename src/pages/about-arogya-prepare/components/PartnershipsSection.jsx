import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const keyPartners = [
    {
      id: 1,
      name: "All India Institute of Medical Sciences (AIIMS)",
      type: "Research Partnership",
      description: "Collaborative research on predictive healthcare models and validation of AI algorithms in real hospital environments.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      achievements: ["Joint Research Publications", "Clinical Trial Validation", "Algorithm Testing"]
    },
    {
      id: 2,
      name: "Indian Medical Association (IMA)",
      type: "Professional Network",
      description: "Partnership for healthcare professional training and best practice development across India\'s medical community.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop",
      achievements: ["Training Programs", "Best Practice Guidelines", "Professional Certification"]
    },
    {
      id: 3,
      name: "Apollo Hospitals Group",
      type: "Implementation Partner",
      description: "Large-scale deployment and testing of predictive analytics across multiple hospital locations and specialties.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=200&fit=crop",
      achievements: ["Multi-location Deployment", "Surge Management Success", "Resource Optimization"]
    },
    {
      id: 4,
      name: "Fortis Healthcare",
      type: "Technology Integration",
      description: "Integration with existing hospital management systems and development of custom predictive dashboards.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=200&fit=crop",
      achievements: ["System Integration", "Custom Dashboards", "Workflow Optimization"]
    }
  ];

  const governmentPartners = [
    {
      name: "Ministry of Health & Family Welfare",
      role: "Policy Development",
      icon: "Building2"
    },
    {
      name: "National Health Authority",
      role: "Digital Health Integration",
      icon: "Globe"
    },
    {
      name: "Indian Council of Medical Research",
      role: "Research Validation",
      icon: "BookOpen"
    },
    {
      name: "Central Pollution Control Board",
      role: "Environmental Data",
      icon: "Leaf"
    }
  ];

  const technologyPartners = [
    {
      name: "Microsoft Azure",
      role: "Cloud Infrastructure",
      icon: "Cloud"
    },
    {
      name: "NVIDIA",
      role: "AI Computing",
      icon: "Cpu"
    },
    {
      name: "Snowflake",
      role: "Data Platform",
      icon: "Database"
    },
    {
      name: "Tableau",
      role: "Analytics Visualization",
      icon: "BarChart3"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Handshake" size={16} />
            <span>Strategic Partnerships</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Building <span className="text-success">Healthcare Excellence</span> Together
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our partnerships with leading healthcare institutions, government bodies, and technology companies 
            ensure that Arogya-Prepare delivers clinically validated, scalable solutions across India's healthcare ecosystem.
          </p>
        </div>

        {/* Key Healthcare Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Healthcare Institution Partners</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {keyPartners?.map((partner) => (
              <div key={partner?.id} className="bg-card rounded-xl shadow-clinical border border-border hover:shadow-clinical-lg transition-intelligence overflow-hidden">
                <Image 
                  src={partner?.image} 
                  alt={partner?.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{partner?.name}</h4>
                      <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                        {partner?.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{partner?.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground">Key Achievements:</h5>
                    {partner?.achievements?.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle2" size={14} color="var(--color-success)" />
                        <span className="text-xs text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government & Technology Partners */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Government Partners */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center mb-8">
              <Icon name="Building2" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Government Partners</h3>
              <p className="text-text-secondary text-sm">
                Collaborating with government bodies for policy development and nationwide implementation.
              </p>
            </div>
            
            <div className="space-y-4">
              {governmentPartners?.map((partner, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name={partner?.icon} size={20} color="var(--color-primary)" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{partner?.name}</h4>
                      <p className="text-text-secondary text-xs">{partner?.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 border border-secondary/10">
            <div className="text-center mb-8">
              <Icon name="Zap" size={48} color="var(--color-secondary)" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Technology Partners</h3>
              <p className="text-text-secondary text-sm">
                Leveraging cutting-edge technology platforms for scalable and reliable healthcare intelligence.
              </p>
            </div>
            
            <div className="space-y-4">
              {technologyPartners?.map((partner, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name={partner?.icon} size={20} color="var(--color-secondary)" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{partner?.name}</h4>
                      <p className="text-text-secondary text-xs">{partner?.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Impact */}
        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 shadow-clinical border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Partnership Impact</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our collaborative approach has enabled us to validate our technology in real-world healthcare 
              environments and scale our impact across India's diverse healthcare landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156+</div>
              <div className="text-sm text-text-secondary">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">25</div>
              <div className="text-sm text-text-secondary">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50M+</div>
              <div className="text-sm text-text-secondary">Patients Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">89%</div>
              <div className="text-sm text-text-secondary">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;