import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoleBasedEntryPoints = () => {
  const entryPoints = [
    {
      id: 'admin',
      role: 'Hospital Administrators',
      title: 'ROI Calculator & Business Case',
      description: 'Calculate potential savings and build business case for predictive healthcare',
      icon: 'TrendingUp',
      color: 'primary',
      features: [
        'Cost-benefit analysis tool',
        'Surge prevention ROI calculator',
        'Implementation timeline planner',
        'Budget allocation optimizer'
      ],
      cta: 'Access ROI Calculator',
      metrics: {
        label: 'Average ROI',
        value: '340%',
        period: 'within 12 months'
      }
    },
    {
      id: 'it',
      role: 'IT Managers',
      title: 'Integration Requirements & Technical Specs',
      description: 'Review technical requirements, API documentation, and integration roadmap',
      icon: 'Settings',
      color: 'secondary',
      features: [
        'API documentation access',
        'System compatibility checker',
        'Security compliance review',
        'Integration timeline estimator'
      ],
      cta: 'View Technical Docs',
      metrics: {
        label: 'Integration Time',
        value: '2-4 weeks',
        period: 'typical deployment'
      }
    },
    {
      id: 'clinical',
      role: 'Clinical Staff',
      title: 'Prediction Accuracy & Clinical Validation',
      description: 'Explore prediction accuracy metrics and clinical validation studies',
      icon: 'Activity',
      color: 'accent',
      features: [
        'Live accuracy dashboard',
        'Clinical validation reports',
        'Peer hospital case studies',
        'Training resource library'
      ],
      cta: 'View Accuracy Metrics',
      metrics: {
        label: 'Prediction Accuracy',
        value: '89.3%',
        period: 'validated across 156 hospitals'
      }
    },
    {
      id: 'finance',
      role: 'Finance Directors',
      title: 'Cost Analysis & Budget Planning',
      description: 'Detailed cost breakdown, pricing models, and financial planning tools',
      icon: 'DollarSign',
      color: 'warning',
      features: [
        'Transparent pricing calculator',
        'Cost per bed analysis',
        'Payment plan options',
        'Financial impact projections'
      ],
      cta: 'Get Pricing Details',
      metrics: {
        label: 'Cost Reduction',
        value: '₹2.4L',
        period: 'average monthly savings'
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/5 border-primary/20',
      secondary: 'bg-secondary/5 border-secondary/20',
      accent: 'bg-accent/5 border-accent/20',
      warning: 'bg-warning/5 border-warning/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconColor = (color) => {
    const colorMap = {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      warning: 'var(--color-warning)'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getButtonVariant = (color) => {
    const variantMap = {
      primary: 'default',
      secondary: 'secondary',
      accent: 'outline',
      warning: 'warning'
    };
    return variantMap?.[color] || 'default';
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Get Started by Role</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Access role-specific resources and tools designed for your unique needs and responsibilities
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {entryPoints?.map((entry) => (
          <div
            key={entry?.id}
            className={`bg-card rounded-xl shadow-clinical border p-6 transition-intelligence hover:shadow-clinical-lg ${getColorClasses(entry?.color)}`}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(entry?.color)}`}>
                <Icon name={entry?.icon} size={24} color={getIconColor(entry?.color)} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{entry?.role}</h3>
                  <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    Specialized
                  </span>
                </div>
                <h4 className="text-base font-medium text-foreground mb-2">{entry?.title}</h4>
                <p className="text-text-secondary text-sm">{entry?.description}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {entry?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                    {entry?.metrics?.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground">{entry?.metrics?.value}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-secondary">{entry?.metrics?.period}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant={getButtonVariant(entry?.color)}
                iconName="ArrowRight"
                iconPosition="right"
                className="flex-1"
              >
                {entry?.cta}
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                size="default"
              >
                Book Demo
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Multi-Role Access</h3>
              <p className="text-text-secondary">Need access for multiple roles? Get comprehensive platform access</p>
            </div>
          </div>
          <Button
            variant="default"
            iconName="Crown"
            iconPosition="left"
          >
            Get Full Platform Access
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleBasedEntryPoints;