import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SupportCenterAccess = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const supportResources = [
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Get help with system issues, integrations, and troubleshooting',
      icon: 'Settings',
      color: 'primary',
      features: [
        '24/7 technical helpdesk',
        'Remote system diagnostics',
        'Integration assistance',
        'Performance optimization'
      ],
      responseTime: 'Under 2 hours'
    },
    {
      id: 'training',
      title: 'Training Resources',
      description: 'Access comprehensive training materials and certification programs',
      icon: 'GraduationCap',
      color: 'secondary',
      features: [
        'Video training library',
        'Interactive tutorials',
        'Certification programs',
        'Best practices guides'
      ],
      responseTime: 'Self-paced learning'
    },
    {
      id: 'account',
      title: 'Account Management',
      description: 'Manage your subscription, billing, and account settings',
      icon: 'User',
      color: 'accent',
      features: [
        'Billing management',
        'User access control',
        'Subscription upgrades',
        'Usage analytics'
      ],
      responseTime: 'Same business day'
    },
    {
      id: 'updates',
      title: 'Product Updates',
      description: 'Stay informed about new features, improvements, and releases',
      icon: 'Zap',
      color: 'warning',
      features: [
        'Release notifications',
        'Feature announcements',
        'Maintenance schedules',
        'Beta program access'
      ],
      responseTime: 'Real-time updates'
    }
  ];

  const handleInputChange = (field, value) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    
    if (!loginData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(loginData?.email)) newErrors.email = 'Invalid email format';
    if (!loginData?.password?.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleLogin = async (e) => {
    e?.preventDefault();
    if (!validateLogin()) return;

    setIsLoggingIn(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock credentials validation
    const validCredentials = [
      { email: 'admin@aiimshospital.in', password: 'ArogyaAdmin2024' },
      { email: 'support@maxhealthcare.com', password: 'MaxSupport123' },
      { email: 'it@apollohospitals.com', password: 'ApolloIT2024' }
    ];

    const isValid = validCredentials?.some(
      cred => cred?.email === loginData?.email && cred?.password === loginData?.password
    );

    setIsLoggingIn(false);

    if (isValid) {
      alert('Login successful! Redirecting to Support Center...');
      setLoginData({ email: '', password: '' });
    } else {
      setErrors({ 
        password: 'Invalid credentials. Use: admin@aiimshospital.in / ArogyaAdmin2024' 
      });
    }
  };

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
    <div className="space-y-8">
      <div className="bg-card rounded-xl shadow-clinical-lg border border-border p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Customer Support Center</h3>
            <p className="text-text-secondary">Access dedicated support resources for existing customers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Login Form */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Customer Login</h4>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your registered email"
                value={loginData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={loginData?.password}
                onChange={(e) => handleInputChange('password', e?.target?.value)}
                error={errors?.password}
                required
              />

              <Button
                type="submit"
                variant="default"
                loading={isLoggingIn}
                iconName="LogIn"
                iconPosition="left"
                fullWidth
              >
                {isLoggingIn ? 'Logging in...' : 'Access Support Center'}
              </Button>
            </form>

            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-xs font-medium text-text-secondary mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-xs text-text-secondary">
                <p>Email: admin@aiimshospital.in</p>
                <p>Password: ArogyaAdmin2024</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Button variant="ghost" size="sm" fullWidth>
                Forgot Password?
              </Button>
              <Button variant="ghost" size="sm" fullWidth>
                Request Account Access
              </Button>
            </div>
          </div>

          {/* Quick Access Options */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Access</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                className="justify-start"
              >
                Start Live Chat Support
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="justify-start"
              >
                Call Technical Support
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="FileText"
                iconPosition="left"
                className="justify-start"
              >
                Submit Support Ticket
              </Button>
              <Button
                variant="outline"
                fullWidth
                iconName="Download"
                iconPosition="left"
                className="justify-start"
              >
                Download User Manuals
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Support Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportResources?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-card rounded-xl shadow-clinical border border-border p-6 transition-intelligence hover:shadow-clinical-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${getColorClasses(resource?.color)}`}>
                <Icon name={resource?.icon} size={20} color={getIconColor(resource?.color)} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{resource?.title}</h4>
                <p className="text-text-secondary text-sm">{resource?.description}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {resource?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg mb-4">
              <span className="text-sm font-medium text-foreground">Response Time:</span>
              <span className="text-sm text-text-secondary">{resource?.responseTime}</span>
            </div>

            <Button
              variant="outline"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
            >
              Access {resource?.title}
            </Button>
          </div>
        ))}
      </div>
      {/* Emergency Support */}
      <div className="bg-gradient-to-r from-error/5 to-warning/5 rounded-xl border border-error/20 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={24} color="var(--color-error)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Emergency Support</h3>
              <p className="text-text-secondary">Critical system issues requiring immediate attention</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="destructive"
              iconName="Phone"
              iconPosition="left"
            >
              Emergency Hotline
            </Button>
            <Button
              variant="outline"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Priority Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenterAccess;