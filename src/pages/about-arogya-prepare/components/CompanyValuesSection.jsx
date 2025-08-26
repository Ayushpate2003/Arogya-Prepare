import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyValuesSection = () => {
  const coreValues = [
    {
      icon: "Eye",
      title: "Vigilant Guardianship",
      description: "We act as the intelligent sentinel that never sleeps, continuously monitoring health patterns to protect communities before emergencies arise.",
      principles: [
        "24/7 proactive monitoring",
        "Early warning systems",
        "Preventive healthcare focus",
        "Community protection priority"
      ],
      color: "primary"
    },
    {
      icon: "Heart",
      title: "Cultural Awareness",
      description: "We deeply respect and integrate India's diverse cultural, religious, and traditional health practices into our AI-powered solutions.",
      principles: [
        "Cultural sensitivity in design",
        "Traditional wisdom integration",
        "Regional customization",
        "Community-centric approach"
      ],
      color: "secondary"
    },
    {
      icon: "Users",
      title: "Healthcare Democratization",
      description: "We believe predictive healthcare intelligence should be accessible to all, from premier urban hospitals to rural healthcare centers.",
      principles: [
        "Affordable technology solutions",
        "Scalable platform design",
        "Rural healthcare focus",
        "Inclusive accessibility"
      ],
      color: "success"
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "We build trust through explainable AI, transparent algorithms, and unwavering commitment to patient privacy and data security.",
      principles: [
        "Explainable AI decisions",
        "Data privacy protection",
        "Transparent operations",
        "Ethical AI practices"
      ],
      color: "accent"
    },
    {
      icon: "Zap",
      title: "Innovation Excellence",
      description: "We continuously push the boundaries of healthcare technology while maintaining the highest standards of clinical validation and safety.",
      principles: [
        "Continuous R&D investment",
        "Clinical validation focus",
        "Safety-first approach",
        "Evidence-based innovation"
      ],
      color: "warning"
    },
    {
      icon: "Compass",
      title: "Purposeful Impact",
      description: "Every feature we build, every algorithm we train, and every partnership we form is guided by our mission to save lives and improve healthcare outcomes.",
      principles: [
        "Mission-driven development",
        "Measurable health outcomes",
        "Social impact focus",
        "Sustainable healthcare solutions"
      ],
      color: "primary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "from-primary/10 to-primary/5 border-primary/20",
      secondary: "from-secondary/10 to-secondary/5 border-secondary/20",
      success: "from-success/10 to-success/5 border-success/20",
      accent: "from-accent/10 to-accent/5 border-accent/20",
      warning: "from-warning/10 to-warning/5 border-warning/20"
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
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Our Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Principles That <span className="text-primary">Guide Our Mission</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our values are not just words on a wall—they are the foundation of every decision we make, 
            every algorithm we develop, and every partnership we build in our mission to transform healthcare.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues?.map((value, index) => (
            <div key={index} className={`bg-gradient-to-br ${getColorClasses(value?.color)} rounded-xl p-8 border hover:shadow-clinical-lg transition-intelligence`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4 shadow-clinical">
                  <Icon name={value?.icon} size={28} color={getIconColor(value?.color)} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value?.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value?.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Core Principles:</h4>
                {value?.principles?.map((principle, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="CheckCircle2" size={14} color={getIconColor(value?.color)} />
                    <span className="text-sm text-text-secondary">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-clinical border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Values in Action</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our values translate into tangible actions and measurable outcomes that benefit 
              healthcare providers, patients, and communities across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">50M+</div>
              <div className="text-sm text-text-secondary">Patients Protected</div>
              <div className="text-xs text-text-secondary mt-1">Through Vigilant Guardianship</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} color="var(--color-secondary)" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-1">25</div>
              <div className="text-sm text-text-secondary">States Covered</div>
              <div className="text-xs text-text-secondary mt-1">With Cultural Awareness</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={24} color="var(--color-success)" />
              </div>
              <div className="text-2xl font-bold text-success mb-1">156+</div>
              <div className="text-sm text-text-secondary">Hospitals Served</div>
              <div className="text-xs text-text-secondary mt-1">Healthcare Democratization</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} color="var(--color-accent)" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-text-secondary">Prediction Accuracy</div>
              <div className="text-xs text-text-secondary mt-1">Innovation Excellence</div>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Company Culture</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We foster a culture of continuous learning, ethical innovation, and collaborative excellence. 
              Our team is united by the shared belief that technology should serve humanity with compassion and wisdom.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" size={20} color="var(--color-primary)" />
                <span className="text-text-secondary">Continuous learning and professional development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={20} color="var(--color-secondary)" />
                <span className="text-text-secondary">Collaborative and inclusive work environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={20} color="var(--color-success)" />
                <span className="text-text-secondary">Mission-driven and purpose-focused approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" size={20} color="var(--color-accent)" />
                <span className="text-text-secondary">Empathy and compassion in everything we do</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center">
              <Icon name="Quote" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
              <blockquote className="text-lg font-medium text-foreground mb-4 leading-relaxed">
                "We don't just build technology; we craft intelligent solutions that honor the wisdom of 
                the past while embracing the possibilities of the future."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-sm text-text-secondary font-medium">Arogya-Prepare Team</span>
                <div className="w-12 h-0.5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValuesSection;