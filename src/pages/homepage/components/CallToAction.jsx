import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const benefits = [
    {
      icon: 'Clock',
      title: '14-Day Free Trial',
      description: 'Full access to all predictive features'
    },
    {
      icon: 'Users',
      title: 'Expert Onboarding',
      description: 'Dedicated support team for setup'
    },
    {
      icon: 'Shield',
      title: 'Risk-Free Setup',
      description: 'No long-term commitment required'
    },
    {
      icon: 'Zap',
      title: 'Instant Activation',
      description: 'Start predicting surges immediately'
    }
  ];

  const stats = [
    { value: '2.3M', label: 'Patients Protected' },
    { value: '89%', label: 'Prediction Accuracy' },
    { value: '156+', label: 'Hospitals Trust Us' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hospital's Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 156+ hospitals that prevented overcrowding and saved lives with 
              Arogya-Prepare's predictive intelligence. Start your journey today.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="secondary"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4 bg-white text-blue-700 hover:bg-blue-50"
              >
                Start Free 14-Day Trial
              </Button>
              <Link to="/contact-demo">
                <Button 
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-700"
                >
                  Schedule Live Demo
                </Button>
              </Link>
            </div>

            {/* Trust Message */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>DPDP Act Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Setup in 24 Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>AIIMS Validated</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits?.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit?.title}</h3>
                <p className="text-blue-100 text-sm">{benefit?.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">
              Trusted by Healthcare Leaders Across India
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat?.value}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-amber-500/20 border border-amber-400/30 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Icon name="AlertTriangle" size={20} className="text-amber-300" />
              <span className="font-semibold text-amber-100">Festival Season Approaching</span>
            </div>
            <p className="text-amber-100 text-sm">
              Diwali is just 3 days away. Hospitals using Arogya-Prepare are already 78% better prepared. 
              Don't wait until the surge hits - start protecting your patients today.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-blue-100 mb-4">
              Questions? Our healthcare experts are standing by.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="ghost"
                iconName="Phone"
                iconPosition="left"
                className="text-white hover:bg-white/10"
              >
                Call +91-9876543210
              </Button>
              <Button 
                variant="ghost"
                iconName="Mail"
                iconPosition="left"
                className="text-white hover:bg-white/10"
              >
                Email: hello@arogya-prepare.com
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-white/5 rounded-full animate-pulse hidden lg:block" />
    </div>
  );
};

export default CallToAction;