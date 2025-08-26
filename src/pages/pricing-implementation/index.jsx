import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PricingCard from './components/PricingCard';
import ImplementationTimeline from './components/ImplementationTimeline';
import ROICalculator from './components/ROICalculator';
import ComplianceSection from './components/ComplianceSection';
import TrainingSupport from './components/TrainingSupport';
import IntegrationCapabilities from './components/IntegrationCapabilities';
import FreeTrial from './components/FreeTrial';

const PricingImplementation = () => {
  const [activeTab, setActiveTab] = useState('pricing');

  const pricingTiers = [
    {
      tier: "Essential",
      price: "2,50,000",
      period: "year",
      description: "Perfect for 100-bed hospitals and nursing homes",
      features: [
        "85% surge prediction accuracy",
        "3 integrated departments (Emergency, Medicine, Surgery)",
        "Basic resource optimization",
        "Email support (48-hour response)",
        "Monthly performance reports",
        "Standard training (2 sessions)",
        "Data retention: 1 year",
        "Up to 5 user accounts"
      ],
      buttonText: "Start Essential Plan",
      buttonVariant: "outline"
    },
    {
      tier: "Professional",
      price: "5,00,000",
      period: "year",
      description: "Ideal for 300-bed multi-specialty hospitals",
      features: [
        "92% surge prediction accuracy",
        "8 integrated departments (All major specialties)",
        "Advanced resource optimization with AI recommendations",
        "24/7 phone, email & chat support",
        "Weekly analytics reports + real-time dashboards",
        "Comprehensive training (6 sessions + ongoing)",
        "Data retention: 3 years",
        "Up to 25 user accounts",
        "Custom alert configurations",
        "Integration with 2 HIS systems"
      ],
      isPopular: true,
      buttonText: "Choose Professional",
      buttonVariant: "default"
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For hospital chains and large healthcare networks",
      features: [
        "95% surge prediction accuracy",
        "Unlimited departments and specialties",
        "Enterprise-grade AI with custom models",
        "Dedicated account manager + 4-hour response SLA",
        "Real-time analytics + custom reporting",
        "White-label training programs",
        "Unlimited data retention",
        "Unlimited user accounts",
        "Multi-location management",
        "Custom integrations and APIs",
        "On-premise deployment options",
        "Regulatory compliance consulting"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  const paymentOptions = [
    {
      title: "Annual Payment",
      discount: "Save 15%",
      description: "Pay yearly and get 2 months free",
      icon: "Calendar",
      popular: true
    },
    {
      title: "Quarterly Payment",
      discount: "Save 8%",
      description: "Flexible quarterly billing",
      icon: "CreditCard",
      popular: false
    },
    {
      title: "Government Procurement",
      discount: "Special Rates",
      description: "Tender-based pricing for government hospitals",
      icon: "Building2",
      popular: false
    }
  ];

  const tabNavigation = [
    { id: 'pricing', label: 'Pricing Plans', icon: 'DollarSign' },
    { id: 'implementation', label: 'Implementation', icon: 'Rocket' },
    { id: 'roi', label: 'ROI Calculator', icon: 'TrendingUp' },
    { id: 'training', label: 'Training & Support', icon: 'GraduationCap' },
    { id: 'integration', label: 'Integrations', icon: 'Link' },
    { id: 'compliance', label: 'Compliance', icon: 'Shield' },
    { id: 'trial', label: 'Free Trial', icon: 'Play' }
  ];

  const handlePlanSelect = (tier) => {
    console.log(`Selected plan: ${tier}`);
    // Mock plan selection
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing & Implementation - Arogya-Prepare | Intelligent Healthcare Solutions</title>
        <meta name="description" content="Transparent pricing for AI-powered healthcare intelligence. Choose from Essential (₹2.5L), Professional (₹5L), or Enterprise plans. 14-day free trial with full support." />
        <meta name="keywords" content="healthcare pricing, hospital management cost, medical software pricing, healthcare ROI, hospital system implementation" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Transparent Pricing • No Hidden Costs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 breathing-text">
              Pricing & Implementation
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your hospital's predictive intelligence needs. 
              All plans include comprehensive training, support, and guaranteed ROI within 6 months.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/50 rounded-xl">
              {tabNavigation?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-intelligence ${
                    activeTab === tab?.id
                      ? 'bg-card text-foreground shadow-clinical border border-border'
                      : 'text-text-secondary hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-16">
            {activeTab === 'pricing' && (
              <div className="space-y-16">
                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {pricingTiers?.map((tier, index) => (
                    <PricingCard
                      key={index}
                      {...tier}
                      onSelect={() => handlePlanSelect(tier?.tier)}
                    />
                  ))}
                </div>

                {/* Payment Options */}
                <div className="bg-card rounded-xl border border-border p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Flexible Payment Options
                    </h3>
                    <p className="text-text-secondary">
                      Choose the payment schedule that works best for your hospital's budget
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {paymentOptions?.map((option, index) => (
                      <div key={index} className={`p-6 rounded-lg border-2 transition-intelligence ${
                        option?.popular 
                          ? 'border-primary bg-primary/5' :'border-border bg-muted/20'
                      }`}>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon name={option?.icon} size={24} color="var(--color-primary)" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {option?.title}
                          </h4>
                          {option?.popular && (
                            <div className="inline-block bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium mb-2">
                              {option?.discount}
                            </div>
                          )}
                          <p className="text-text-secondary text-sm">
                            {option?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Trusted by Leading Hospitals
                    </h3>
                    <p className="text-text-secondary">
                      Join 156+ hospitals already using Arogya-Prepare for predictive healthcare
                    </p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div className="p-4">
                      <div className="text-3xl font-bold text-primary mb-2">156+</div>
                      <p className="text-text-secondary text-sm">Hospitals Protected</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-success mb-2">89%</div>
                      <p className="text-text-secondary text-sm">Prediction Accuracy</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-secondary mb-2">₹18L</div>
                      <p className="text-text-secondary text-sm">Average Annual Savings</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                      <p className="text-text-secondary text-sm">Expert Support</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'implementation' && <ImplementationTimeline />}
            {activeTab === 'roi' && <ROICalculator />}
            {activeTab === 'training' && <TrainingSupport />}
            {activeTab === 'integration' && <IntegrationCapabilities />}
            {activeTab === 'compliance' && <ComplianceSection />}
            {activeTab === 'trial' && <FreeTrial />}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Hospital's Future?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join the healthcare revolution with AI-powered surge prediction. 
                Start your free trial today and see the difference intelligent preparation makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Start 14-Day Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Schedule Demo Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-text-secondary">
            <p className="text-sm">
              © {new Date()?.getFullYear()} Arogya-Prepare. All rights reserved. 
              Intelligent Healthcare Solutions for Modern Hospitals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingImplementation;