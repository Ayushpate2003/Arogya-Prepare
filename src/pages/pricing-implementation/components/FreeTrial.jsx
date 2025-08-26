import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    email: '',
    phone: '',
    bedCount: '',
    currentSystem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    console.log('Trial request submitted:', formData);
  };

  const trialFeatures = [
    {
      feature: "14-Day Full Access",
      description: "Complete platform access with all predictive features enabled",
      icon: "Calendar"
    },
    {
      feature: "Sample Data Included",
      description: "Pre-loaded with anonymized data from similar hospital types",
      icon: "Database"
    },
    {
      feature: "Live Training Sessions",
      description: "Personalized onboarding with our healthcare experts",
      icon: "Video"
    },
    {
      feature: "Dedicated Support",
      description: "Direct access to our implementation team via phone and chat",
      icon: "Headphones"
    },
    {
      feature: "Custom Dashboard Setup",
      description: "Tailored dashboard configuration based on your hospital\'s needs",
      icon: "Settings"
    },
    {
      feature: "Integration Testing",
      description: "Test connections with your existing HIS systems",
      icon: "Link"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Medical Director",
      hospital: "Apollo Hospitals, Chennai",
      quote: `The 14-day trial convinced us immediately. We saw 23% reduction in patient wait times during Diwali season.`,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Hospital Administrator",
      hospital: "Fortis Healthcare, Mumbai",
      quote: `The ROI was clear within the first week. Our overtime costs dropped by ₹2.5 lakhs in the trial period alone.`,
      avatar: "https://images.unsplash.com/photo-1594824388853-d0c2d8b0e3b8?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Start Your 14-Day Free Trial
        </h3>
        <p className="text-text-secondary">
          Experience the full power of predictive healthcare intelligence
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Trial Form */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-6">
            Get Started Today
          </h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Hospital Name"
              name="hospitalName"
              type="text"
              placeholder="Enter hospital name"
              value={formData?.hospitalName}
              onChange={handleInputChange}
              required
            />
            
            <Input
              label="Contact Person"
              name="contactPerson"
              type="text"
              placeholder="Your full name"
              value={formData?.contactPerson}
              onChange={handleInputChange}
              required
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData?.email}
                onChange={handleInputChange}
                required
              />
              
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Number of Beds"
                name="bedCount"
                type="number"
                placeholder="e.g., 200"
                value={formData?.bedCount}
                onChange={handleInputChange}
                required
              />
              
              <Input
                label="Current HIS System"
                name="currentSystem"
                type="text"
                placeholder="e.g., Medeil, eHospital"
                value={formData?.currentSystem}
                onChange={handleInputChange}
              />
            </div>
            
            <Button 
              type="submit" 
              variant="default" 
              fullWidth 
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground mt-6"
            >
              Start Free Trial
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} color="var(--color-success)" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  No Credit Card Required
                </p>
                <p className="text-xs text-text-secondary">
                  Full access for 14 days. Cancel anytime with no obligations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trial Features */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-6">
            What's Included in Your Trial
          </h4>
          
          <div className="space-y-4 mb-8">
            {trialFeatures?.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    color="var(--color-primary)" 
                  />
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm">
                    {item?.feature}
                  </h5>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            <h5 className="font-semibold text-foreground">
              What Hospital Leaders Say
            </h5>
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border">
                <div className="flex items-start space-x-3">
                  <img 
                    src={testimonial?.avatar} 
                    alt={testimonial?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-text-secondary italic mb-2">
                      "{testimonial?.quote}"
                    </p>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonial?.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {testimonial?.position}, {testimonial?.hospital}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg border border-success/20">
        <div className="text-center">
          <Icon name="Clock" size={32} color="var(--color-success)" className="mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Trial Activation Timeline
          </h4>
          <p className="text-text-secondary text-sm mb-4">
            Your trial environment will be ready within 2 hours of signup. Our team will contact you within 30 minutes to schedule your personalized onboarding session.
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="UserCheck" size={14} />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Phone" size={14} />
              <span>30min Response</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Rocket" size={14} />
              <span>2hr Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;