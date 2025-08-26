import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCard = ({ 
  tier, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  buttonText = "Get Started",
  buttonVariant = "default",
  onSelect 
}) => {
  return (
    <div className={`relative bg-card rounded-xl border-2 transition-intelligence hover:shadow-clinical-lg ${
      isPopular 
        ? 'border-primary shadow-clinical-lg scale-105' 
        : 'border-border hover:border-primary/30'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{tier}</h3>
          <div className="flex items-baseline justify-center mb-2">
            <span className="text-4xl font-bold text-foreground">₹{price}</span>
            <span className="text-text-secondary ml-2">/{period}</span>
          </div>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>

        <div className="space-y-4 mb-8">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <Icon 
                  name="Check" 
                  size={16} 
                  color="var(--color-success)" 
                  strokeWidth={2.5} 
                />
              </div>
              <span className="text-text-secondary text-sm leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant={buttonVariant}
          fullWidth
          onClick={onSelect}
          className={`transition-intelligence ${
            isPopular 
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
              : ''
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;