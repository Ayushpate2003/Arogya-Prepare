import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProvenImpact = () => {
  const [animatedStats, setAnimatedStats] = useState({
    accuracy: 0,
    patients: 0,
    hospitals: 0
  });

  const finalStats = {
    accuracy: 89,
    patients: 2.3,
    hospitals: 156
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        accuracy: Math.round(finalStats?.accuracy * progress),
        patients: Math.round(finalStats?.patients * progress * 10) / 10,
        hospitals: Math.round(finalStats?.hospitals * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const impactMetrics = [
    {
      id: 1,
      value: `${animatedStats?.accuracy}%`,
      label: 'Surge Prediction Accuracy',
      description: 'Validated across 156 hospitals during festival seasons',
      icon: 'Target',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      value: `${animatedStats?.patients}M`,
      label: 'Patients Better Served',
      description: 'Through optimized resource allocation and reduced wait times',
      icon: 'Users',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 3,
      value: `${animatedStats?.hospitals}`,
      label: 'Hospitals Protected',
      description: 'From surge-related overcrowding and resource shortages',
      icon: 'Shield',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const achievements = [
    {
      title: 'Festival Season Success',
      description: 'Prevented overcrowding during Diwali 2023 across 89 hospitals',
      metric: '78% reduction in emergency wait times',
      icon: 'Calendar'
    },
    {
      title: 'Pollution Spike Management',
      description: 'Accurately predicted respiratory surge during Delhi pollution crisis',
      metric: '92% prediction accuracy',
      icon: 'Wind'
    },
    {
      title: 'Resource Optimization',
      description: 'Optimized staff allocation reducing burnout by 34%',
      metric: '₹2.3Cr cost savings',
      icon: 'TrendingUp'
    },
    {
      title: 'Patient Satisfaction',
      description: 'Improved patient experience through predictive scheduling',
      metric: '4.8/5 satisfaction score',
      icon: 'Heart'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Proven Impact Across India
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real results from hospitals that transformed their operations with Arogya-Prepare's 
            predictive intelligence during critical surge periods.
          </p>
        </div>

        {/* Main Impact Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactMetrics?.map((metric) => (
            <div key={metric?.id} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${metric?.bgColor} rounded-2xl mb-6`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              <div className="space-y-2">
                <div className={`text-4xl lg:text-5xl font-bold ${metric?.color} mb-2`}>
                  {metric?.value}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {metric?.label}
                </h3>
                <p className="text-slate-600 max-w-xs mx-auto">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Success Stories That Matter
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real-world impact during India's most challenging healthcare periods
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements?.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-clinical hover:shadow-clinical-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name={achievement?.icon} size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {achievement?.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-3">
                      {achievement?.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      {achievement?.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-50 rounded-2xl px-8 py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-700">AIIMS Validated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-green-600" />
              <span className="text-sm font-medium text-slate-700">DPDP Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-orange-600" />
              <span className="text-sm font-medium text-slate-700">Trusted by 156+ Hospitals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvenImpact;