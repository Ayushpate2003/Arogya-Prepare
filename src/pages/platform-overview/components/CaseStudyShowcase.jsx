import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      hospital: "Apollo Hospitals Delhi",
      location: "New Delhi, India",
      challenge: "Diwali 2023 Surge Management",
      solution: "Predictive analytics for festival surge preparation",
      results: {
        overcrowdingReduction: "40%",
        waitTimeReduction: "35%",
        staffOptimization: "25%",
        patientSatisfaction: "92%"
      },
      testimonial: `"Arogya-Prepare's predictive analytics transformed our Diwali preparedness. We were able to pre-position staff and resources based on their 14-day forecasts, resulting in smoother operations and significantly better patient care during the festival rush."`,
      spokesperson: "Dr. Rajesh Malhotra",
      position: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      hospitalImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop",
      metrics: [
        { label: "Patients Managed", value: "2,500+", icon: "Users" },
        { label: "Prediction Accuracy", value: "94%", icon: "Target" },
        { label: "Resource Efficiency", value: "25%", icon: "TrendingUp" },
        { label: "Cost Savings", value: "₹15L", icon: "DollarSign" }
      ]
    },
    {
      hospital: "Fortis Healthcare Mumbai",
      location: "Mumbai, Maharashtra",
      challenge: "Post-Monsoon Disease Outbreak",
      solution: "Early warning system for vector-borne diseases",
      results: {
        earlyDetection: "7 days",
        capacityOptimization: "30%",
        resourceAllocation: "45%",
        outbreakContainment: "85%"
      },
      testimonial: `"The AI-powered early warning system helped us detect the dengue outbreak pattern 7 days before it peaked. This early intervention capability saved countless lives and prevented our emergency department from being overwhelmed."`,
      spokesperson: "Dr. Priya Nair",
      position: "Head of Emergency Medicine",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db4394f50?w=400&h=400&fit=crop&crop=face",
      hospitalImage: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop",
      metrics: [
        { label: "Early Detection", value: "7 days", icon: "Clock" },
        { label: "Lives Protected", value: "1,200+", icon: "Heart" },
        { label: "Outbreak Control", value: "85%", icon: "Shield" },
        { label: "Response Time", value: "2 hours", icon: "Zap" }
      ]
    },
    {
      hospital: "AIIMS New Delhi",
      location: "New Delhi, India",
      challenge: "Air Pollution Surge Management",
      solution: "Environmental health correlation analytics",
      results: {
        respiratoryPrediction: "89%",
        staffPreparation: "48 hours",
        equipmentOptimization: "60%",
        patientFlow: "35%"
      },
      testimonial: `"During the severe air pollution episodes, Arogya-Prepare's environmental correlation models helped us predict respiratory patient influx with 89% accuracy. We could prepare our pulmonology department 48 hours in advance."`,
      spokesperson: "Dr. Amit Kumar Singh",
      position: "Director, Pulmonology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      hospitalImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop",
      metrics: [
        { label: "Prediction Accuracy", value: "89%", icon: "Target" },
        { label: "Advance Warning", value: "48 hrs", icon: "Clock" },
        { label: "Equipment Ready", value: "60%", icon: "Settings" },
        { label: "Patient Flow", value: "+35%", icon: "Activity" }
      ]
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-success/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Award" size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover how leading Indian hospitals are transforming patient care and operational 
            efficiency with Arogya-Prepare's predictive intelligence platform.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {caseStudies?.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-intelligence mb-2 ${
                activeCase === index
                  ? 'bg-success text-success-foreground shadow-clinical'
                  : 'bg-card text-text-secondary hover:bg-card/80 hover:text-foreground border border-border'
              }`}
            >
              <Icon name="Building2" size={16} />
              <span className="hidden sm:inline">{study?.hospital}</span>
              <span className="sm:hidden">{study?.hospital?.split(' ')?.[0]}</span>
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="bg-card rounded-2xl shadow-clinical-lg border border-border overflow-hidden mb-12">
          {/* Hospital Image Header */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={currentCase?.hospitalImage}
              alt={currentCase?.hospital}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentCase?.hospital}</h3>
              <div className="flex items-center space-x-2 text-white/90">
                <Icon name="MapPin" size={16} />
                <span>{currentCase?.location}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="AlertTriangle" size={20} className="text-warning" />
                  <h4 className="text-xl font-semibold text-foreground">Challenge</h4>
                </div>
                <p className="text-text-secondary leading-relaxed">{currentCase?.challenge}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Lightbulb" size={20} className="text-success" />
                  <h4 className="text-xl font-semibold text-foreground">Solution</h4>
                </div>
                <p className="text-text-secondary leading-relaxed">{currentCase?.solution}</p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">Key Results</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentCase?.metrics?.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-success/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name={metric?.icon} size={24} className="text-success" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1 font-mono">{metric?.value}</div>
                    <div className="text-sm text-text-secondary">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 border border-success/20">
              <div className="flex items-start space-x-4">
                <img
                  src={currentCase?.image}
                  alt={currentCase?.spokesperson}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <blockquote className="text-text-secondary italic text-lg leading-relaxed mb-4">
                    "{currentCase?.testimonial}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{currentCase?.spokesperson}</div>
                    <div className="text-text-secondary text-sm">{currentCase?.position}</div>
                    <div className="text-success text-sm font-medium">{currentCase?.hospital}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Collective Impact Across All Hospitals</h3>
            <p className="text-text-secondary">Measurable improvements in healthcare delivery and patient outcomes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 font-mono">156+</div>
              <div className="text-text-secondary">Hospitals Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2 font-mono">2.5M+</div>
              <div className="text-text-secondary">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 font-mono">89%</div>
              <div className="text-text-secondary">Avg. Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2 font-mono">₹50Cr+</div>
              <div className="text-text-secondary">Healthcare Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Hospital's Preparedness?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join 156+ hospitals across India that are already using Arogya-Prepare to predict, 
            prepare, and protect their communities from healthcare surges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="default" 
              size="lg"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 text-lg font-semibold transition-intelligence"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold transition-intelligence"
              iconName="FileText"
              iconPosition="left"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;