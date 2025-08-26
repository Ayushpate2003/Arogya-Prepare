import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExplainableAI = () => {
  const [selectedFactor, setSelectedFactor] = useState(null);

  const aiFactors = [
    {
      id: 1,
      name: "Weather Patterns",
      weight: 35,
      impact: "High",
      description: "Temperature, humidity, and seasonal changes affecting health conditions",
      details: "Monsoon patterns correlate with 67% increase in vector-borne diseases. Temperature drops below 15°C trigger 45% more respiratory admissions.",
      icon: "Cloud",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Air Quality Index",
      weight: 28,
      impact: "High",
      description: "PM2.5, PM10, and pollutant levels impacting respiratory health",
      details: "AQI above 200 correlates with 89% increase in asthma cases. Diwali period shows 3x spike in respiratory emergencies.",
      icon: "Wind",
      color: "bg-gray-500"
    },
    {
      id: 3,
      name: "Social Gatherings",
      weight: 22,
      impact: "Medium",
      description: "Festival crowds and public events affecting disease transmission",
      details: "Large gatherings (>10,000 people) increase infectious disease cases by 156% within 5-7 days post-event.",
      icon: "Users",
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "Historical Trends",
      weight: 15,
      impact: "Medium",
      description: "5-year historical data patterns and seasonal variations",
      details: "Historical analysis shows 94% accuracy in predicting surge patterns based on previous year\'s data with seasonal adjustments.",
      icon: "TrendingUp",
      color: "bg-green-500"
    }
  ];

  const algorithmSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Gathering multi-source healthcare and environmental data",
      icon: "Database",
      status: "active"
    },
    {
      step: 2,
      title: "Pattern Recognition",
      description: "AI identifies correlations between cultural events and health impacts",
      icon: "Brain",
      status: "active"
    },
    {
      step: 3,
      title: "Predictive Modeling",
      description: "Machine learning algorithms generate surge forecasts",
      icon: "Zap",
      status: "active"
    },
    {
      step: 4,
      title: "Validation & Refinement",
      description: "Continuous learning from real outcomes to improve accuracy",
      icon: "CheckCircle",
      status: "active"
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-error';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-success';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-clinical">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Explainable AI Visualizations
            </h3>
            <p className="text-text-secondary text-sm">
              Understanding how our AI makes healthcare predictions
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-primary">
            <Icon name="Eye" size={16} />
            <span className="font-medium">Transparent Intelligence</span>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-8">
        {/* AI Decision Factors */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">AI Decision Factors</h4>
          <div className="space-y-4">
            {aiFactors?.map((factor) => (
              <div key={factor?.id} className="border border-border rounded-lg overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-muted/30 transition-intelligence"
                  onClick={() => setSelectedFactor(selectedFactor === factor?.id ? null : factor?.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${factor?.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={factor?.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">{factor?.name}</h5>
                        <p className="text-sm text-text-secondary">{factor?.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">{factor?.weight}%</div>
                        <div className={`text-sm font-medium ${getImpactColor(factor?.impact)}`}>
                          {factor?.impact} Impact
                        </div>
                      </div>
                      <Icon 
                        name={selectedFactor === factor?.id ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        color="var(--color-text-secondary)" 
                      />
                    </div>
                  </div>

                  {/* Weight Bar */}
                  <div className="mt-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${factor?.color}`}
                        style={{ width: `${factor?.weight}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedFactor === factor?.id && (
                  <div className="px-4 pb-4 border-t border-border bg-muted/20">
                    <div className="pt-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5" />
                        <div>
                          <h6 className="font-medium text-primary mb-2">Detailed Analysis</h6>
                          <p className="text-sm text-text-secondary">{factor?.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Algorithm Process */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">AI Algorithm Process</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {algorithmSteps?.map((step, index) => (
              <div key={step?.step} className="relative">
                <div className="bg-muted/30 rounded-lg p-4 border border-border hover:border-primary/30 transition-intelligence">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={step?.icon} size={20} color="white" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Step {step?.step}
                    </span>
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">{step?.title}</h5>
                  <p className="text-sm text-text-secondary">{step?.description}</p>
                </div>
                
                {/* Connection Arrow */}
                {index < algorithmSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" size={16} color="var(--color-primary)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Metrics */}
        <div className="bg-success/5 rounded-lg p-6 border border-success/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
              <Icon name="Target" size={24} color="white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-success mb-2">Model Performance Metrics</h4>
              <p className="text-sm text-text-secondary mb-4">
                Our AI models are continuously validated against real-world outcomes to ensure reliability and accuracy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">94%</div>
                  <div className="text-sm text-text-secondary">Festival Surge Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">87%</div>
                  <div className="text-sm text-text-secondary">Pollution-Related Predictions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">91%</div>
                  <div className="text-sm text-text-secondary">Overall Model Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainableAI;