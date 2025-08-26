import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const partnerships = [
    {
      id: 1,
      name: "AIIMS Delhi",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop",
      type: "Strategic Partner",
      description: "Leading medical research and implementation"
    },
    {
      id: 2,
      name: "Ministry of Health",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "Government Partner",
      description: "National healthcare policy integration"
    },
    {
      id: 3,
      name: "Indian Medical Association",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop",
      type: "Professional Body",
      description: "Medical standards and best practices"
    },
    {
      id: 4,
      name: "NITI Aayog",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=120&h=60&fit=crop",
      type: "Policy Partner",
      description: "Digital health transformation"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "DPDP Act Compliant",
      icon: "Shield",
      description: "Full compliance with Digital Personal Data Protection Act 2023",
      status: "Certified",
      color: "success"
    },
    {
      id: 2,
      name: "ISO 27001",
      icon: "Lock",
      description: "Information security management system certification",
      status: "Certified",
      color: "primary"
    },
    {
      id: 3,
      name: "HIPAA Aligned",
      icon: "FileCheck",
      description: "Healthcare data privacy and security standards",
      status: "Compliant",
      color: "secondary"
    },
    {
      id: 4,
      name: "SOC 2 Type II",
      icon: "Award",
      description: "Security, availability, and confidentiality controls",
      status: "Audited",
      color: "accent"
    }
  ];

  const mediaRecognition = [
    {
      id: 1,
      publication: "Healthcare IT News",
      headline: "AI-Powered Surge Prediction Transforms Indian Hospitals",
      date: "October 2024",
      type: "Feature Article"
    },
    {
      id: 2,
      publication: "The Economic Times",
      headline: "Arogya-Prepare Prevents Hospital Overcrowding During Festivals",
      date: "September 2024",
      type: "News Coverage"
    },
    {
      id: 3,
      publication: "Medical Journal of India",
      headline: "Predictive Analytics in Healthcare: A Case Study",
      date: "August 2024",
      type: "Research Paper"
    },
    {
      id: 4,
      publication: "Digital Health Today",
      headline: "89% Accuracy in Healthcare Surge Prediction",
      date: "July 2024",
      type: "Industry Report"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      success: {
        bg: 'bg-success/10',
        border: 'border-success/20',
        text: 'text-success',
        icon: 'var(--color-success)'
      },
      primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/20',
        text: 'text-primary',
        icon: 'var(--color-primary)'
      },
      secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/20',
        text: 'text-secondary',
        icon: 'var(--color-secondary)'
      },
      accent: {
        bg: 'bg-accent/10',
        border: 'border-accent/20',
        text: 'text-accent',
        icon: 'var(--color-accent)'
      }
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Award" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Trusted & Certified</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built on Trust, Backed by Excellence
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Partnering with leading healthcare institutions and maintaining the highest 
            standards of security, compliance, and clinical excellence.
          </p>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Strategic Partnerships
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partner) => (
              <div
                key={partner?.id}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-clinical-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-12 mx-auto mb-4 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={partner?.logo} 
                    alt={partner?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {partner?.name}
                </h4>
                
                <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {partner?.type}
                </div>
                
                <p className="text-sm text-text-secondary">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications & Compliance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => {
              const colorClasses = getColorClasses(cert?.color);
              
              return (
                <div
                  key={cert?.id}
                  className={`${colorClasses?.bg} ${colorClasses?.border} border rounded-xl p-6 transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${colorClasses?.bg} rounded-lg flex items-center justify-center`}>
                      <Icon 
                        name={cert?.icon} 
                        size={24} 
                        color={colorClasses?.icon}
                      />
                    </div>
                    <div className={`text-xs font-medium ${colorClasses?.text} bg-card/50 px-2 py-1 rounded-full`}>
                      {cert?.status}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {cert?.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {cert?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Media Recognition
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mediaRecognition?.map((article) => (
              <div
                key={article?.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-clinical-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Newspaper" size={20} color="var(--color-primary)" />
                    <span className="text-sm font-medium text-primary">
                      {article?.publication}
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                    {article?.type}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                  {article?.headline}
                </h4>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{article?.date}</span>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Trust by the Numbers
            </h3>
            <p className="text-text-secondary">
              Measurable trust indicators that demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2 font-mono">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime SLA</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-mono">156+</div>
              <div className="text-sm text-text-secondary">Partner Hospitals</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2 font-mono">2.3M</div>
              <div className="text-sm text-text-secondary">Patients Protected</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 font-mono">89%</div>
              <div className="text-sm text-text-secondary">Prediction Accuracy</div>
            </div>
          </div>
        </div>

        {/* Security Statement */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" size={24} color="var(--color-success)" />
              <h3 className="text-xl font-semibold text-foreground">
                Your Data, Our Responsibility
              </h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed">
              We understand that healthcare data is among the most sensitive information. 
              That's why we've built Arogya-Prepare with security-first architecture, 
              end-to-end encryption, and strict compliance with Indian and international 
              data protection standards. Your patients' privacy and your hospital's data 
              security are our top priorities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="Check" size={16} />
                <span>End-to-end Encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="Check" size={16} />
                <span>Zero Data Retention</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="Check" size={16} />
                <span>Regular Security Audits</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="Check" size={16} />
                <span>24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;