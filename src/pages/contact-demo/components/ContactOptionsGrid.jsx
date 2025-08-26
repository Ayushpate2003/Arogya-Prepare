import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptionsGrid = () => {
  const contactOptions = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our healthcare specialists',
      icon: 'Phone',
      color: 'primary',
      details: [
        { label: 'North India', value: '+91 11 4567 8900', hours: '9 AM - 7 PM IST' },
        { label: 'South India', value: '+91 80 4567 8901', hours: '9 AM - 7 PM IST' },
        { label: 'West India', value: '+91 22 4567 8902', hours: '9 AM - 7 PM IST' },
        { label: 'East India', value: '+91 33 4567 8903', hours: '9 AM - 7 PM IST' }
      ]
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Get detailed responses within 4 hours',
      icon: 'Mail',
      color: 'secondary',
      details: [
        { label: 'General Inquiries', value: 'hello@arogya-prepare.com' },
        { label: 'Technical Support', value: 'support@arogya-prepare.com' },
        { label: 'Sales & Demos', value: 'sales@arogya-prepare.com' },
        { label: 'Partnerships', value: 'partners@arogya-prepare.com' }
      ]
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Instant assistance during business hours',
      icon: 'MessageCircle',
      color: 'accent',
      details: [
        { label: 'Availability', value: 'Monday - Saturday', hours: '9 AM - 7 PM IST' },
        { label: 'Response Time', value: 'Under 2 minutes' },
        { label: 'Languages', value: 'English, Hindi, Tamil, Telugu' },
        { label: 'Escalation', value: 'Healthcare specialists available' }
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Implementation',
      description: 'Fast-track deployment for urgent needs',
      icon: 'Zap',
      color: 'warning',
      details: [
        { label: 'Response Time', value: '24 hours' },
        { label: 'Deployment', value: '3-5 business days' },
        { label: 'Support', value: '24/7 during implementation' },
        { label: 'Hotline', value: '+91 98765 43210' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      warning: 'bg-warning/10 text-warning border-warning/20'
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {contactOptions?.map((option) => (
        <div key={option?.id} className="bg-card rounded-xl shadow-clinical border border-border p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getColorClasses(option?.color)}`}>
              <Icon name={option?.icon} size={24} color={getIconColor(option?.color)} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{option?.title}</h3>
              <p className="text-text-secondary text-sm">{option?.description}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {option?.details?.map((detail, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                <span className="text-sm font-medium text-text-secondary">{detail?.label}:</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-foreground">{detail?.value}</span>
                  {detail?.hours && (
                    <div className="text-xs text-text-secondary">{detail?.hours}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant={option?.id === 'emergency' ? 'warning' : 'outline'}
            fullWidth
            iconName={option?.icon}
            iconPosition="left"
          >
            {option?.id === 'phone' && 'Call Now'}
            {option?.id === 'email' && 'Send Email'}
            {option?.id === 'chat' && 'Start Chat'}
            {option?.id === 'emergency' && 'Request Emergency Setup'}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ContactOptionsGrid;