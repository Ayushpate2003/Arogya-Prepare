import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GetStartedSection = () => {
  const [selectedRole, setSelectedRole] = useState('administrator');

  const roleBasedContent = {
    administrator: {
      title: 'Hospital Administrators',
      description: 'Optimize operations, reduce costs, and improve patient outcomes with predictive intelligence.',
      features: [
        'ROI Calculator with real hospital data',
        'Surge prediction accuracy metrics',
        'Cost-benefit analysis tools',
        'Implementation timeline planner',
        'Staff optimization recommendations',
        'Resource allocation insights'
      ],
      tools: [
        {
          name: 'ROI Calculator',
          description: 'Calculate potential savings and revenue improvements',
          icon: 'Calculator',
          action: 'Calculate ROI'
        },
        {
          name: 'Demo Scheduler',
          description: 'Book personalized demonstration for your hospital',
          icon: 'Calendar',
          action: 'Schedule Demo'
        },
        {
          name: 'Case Studies',
          description: 'See how similar hospitals improved operations',
          icon: 'FileText',
          action: 'View Studies'
        }
      ],
      metrics: [
        { label: 'Average Cost Reduction', value: '23%', icon: 'TrendingDown' },
        { label: 'Patient Satisfaction Increase', value: '31%', icon: 'Heart' },
        { label: 'Staff Efficiency Improvement', value: '28%', icon: 'Users' }
      ]
    },
    itManager: {
      title: 'IT Managers',
      description: 'Seamless integration with existing systems and robust technical architecture.',
      features: [
        'API documentation and integration guides',
        'System requirements analysis',
        'Security and compliance overview',
        'Data migration planning',
        'Technical architecture review',
        'Integration timeline estimation'
      ],
      tools: [
        {
          name: 'Integration Guide',
          description: 'Technical documentation for system integration',
          icon: 'Code',
          action: 'View Docs'
        },
        {
          name: 'API Explorer',
          description: 'Test and explore our healthcare APIs',
          icon: 'Database',
          action: 'Explore APIs'
        },
        {
          name: 'Security Audit',
          description: 'Review security features and compliance',
          icon: 'Shield',
          action: 'View Security'
        }
      ],
      metrics: [
        { label: 'Integration Time', value: '2-4 weeks', icon: 'Clock' },
        { label: 'API Uptime', value: '99.9%', icon: 'Activity' },
        { label: 'Data Security Rating', value: 'A+', icon: 'Lock' }
      ]
    },
    clinical: {
      title: 'Clinical Directors',
      description: 'Evidence-based insights to improve patient care and clinical outcomes.',
      features: [
        'Clinical prediction accuracy reports',
        'Patient flow optimization studies',
        'Quality metrics improvement tracking',
        'Evidence-based decision support',
        'Clinical workflow integration',
        'Outcome measurement tools'
      ],
      tools: [
        {
          name: 'Accuracy Reports',
          description: 'Review prediction accuracy for clinical decisions',
          icon: 'BarChart3',
          action: 'View Reports'
        },
        {
          name: 'Clinical Trials',
          description: 'Participate in healthcare prediction research',
          icon: 'Microscope',
          action: 'Join Research'
        },
        {
          name: 'Best Practices',
          description: 'Access clinical implementation guidelines',
          icon: 'BookOpen',
          action: 'View Guidelines'
        }
      ],
      metrics: [
        { label: 'Prediction Accuracy', value: '94.2%', icon: 'Target' },
        { label: 'Clinical Outcomes Improved', value: '87%', icon: 'TrendingUp' },
        { label: 'Decision Support Accuracy', value: '91.5%', icon: 'Brain' }
      ]
    }
  };

  const partnershipTypes = [
    {
      title: 'Healthcare Technology Vendors',
      description: 'Integrate predictive analytics into your existing healthcare solutions',
      benefits: ['API access', 'White-label options', 'Revenue sharing', 'Technical support'],
      icon: 'Laptop',
      contact: 'partnerships@arogya-prepare.com'
    },
    {
      title: 'Government Health Departments',
      description: 'Regional health monitoring and epidemic preparedness collaboration',
      benefits: ['Public health insights', 'Regional data sharing', 'Policy support', 'Training programs'],
      icon: 'Building',
      contact: 'government@arogya-prepare.com'
    },
    {
      title: 'Medical Institutions',
      description: 'Research partnerships and academic collaboration opportunities',
      benefits: ['Research data access', 'Publication opportunities', 'Student programs', 'Grant support'],
      icon: 'GraduationCap',
      contact: 'research@arogya-prepare.com'
    },
    {
      title: 'Insurance Companies',
      description: 'Risk assessment and predictive modeling for healthcare insurance',
      benefits: ['Risk analytics', 'Claims prediction', 'Fraud detection', 'Custom models'],
      icon: 'Shield',
      contact: 'insurance@arogya-prepare.com'
    }
  ];

  const currentContent = roleBasedContent?.[selectedRole];

  return (
    <div className="space-y-8">
      {/* Role-Based Entry Points */}
      <div className="bg-white rounded-xl shadow-clinical-lg p-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get Started Based on Your Role</h3>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedRole('administrator')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedRole === 'administrator' ?'bg-blue-600 text-white' :'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Hospital Administrator
          </button>
          <button
            onClick={() => setSelectedRole('itManager')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedRole === 'itManager' ?'bg-blue-600 text-white' :'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            IT Manager
          </button>
          <button
            onClick={() => setSelectedRole('clinical')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedRole === 'clinical' ?'bg-blue-600 text-white' :'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Clinical Director
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">{currentContent?.title}</h4>
            <p className="text-slate-600 mb-6">{currentContent?.description}</p>

            <div className="mb-6">
              <h5 className="font-medium text-slate-900 mb-3">What you'll get:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} color="rgb(5, 150, 105)" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentContent?.tools?.map((tool, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-3">
                    <Icon name={tool?.icon} size={20} color="rgb(37, 99, 235)" />
                  </div>
                  <h6 className="font-medium text-slate-900 mb-2">{tool?.name}</h6>
                  <p className="text-xs text-slate-600 mb-3">{tool?.description}</p>
                  <Button variant="outline" size="sm" fullWidth>
                    {tool?.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h5 className="font-medium text-slate-900 mb-4">Key Metrics</h5>
            <div className="space-y-4">
              {currentContent?.metrics?.map((metric, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Icon name={metric?.icon} size={16} color="rgb(37, 99, 235)" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{metric?.label}</p>
                    <p className="text-lg font-bold text-blue-600">{metric?.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Partnership Opportunities */}
      <div className="bg-white rounded-xl shadow-clinical-lg p-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Partnership Opportunities</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipTypes?.map((partnership, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon name={partnership?.icon} size={24} color="rgb(37, 99, 235)" />
                </div>
                <h4 className="font-semibold text-slate-900">{partnership?.title}</h4>
              </div>
              
              <p className="text-slate-600 text-sm mb-4">{partnership?.description}</p>
              
              <div className="mb-4">
                <p className="font-medium text-slate-900 text-sm mb-2">Benefits:</p>
                <div className="grid grid-cols-2 gap-1">
                  {partnership?.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={12} color="rgb(5, 150, 105)" />
                      <span className="text-xs text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{partnership?.contact}</span>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-2">Ready to Transform Your Healthcare Operations?</h3>
          <p className="text-blue-100">Join hundreds of hospitals already using predictive intelligence</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" iconName="Play" iconPosition="left">
            Watch 2-Min Demo
          </Button>
          <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left" className="border-white text-white hover:bg-white hover:text-blue-600">
            Book Live Demo
          </Button>
          <Button variant="ghost" size="lg" iconName="Download" iconPosition="left" className="text-white hover:bg-blue-500">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;