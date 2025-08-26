import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CulturalHealthIntelligence = () => {
  const [activeTab, setActiveTab] = useState('calendar');

  const calendarIntegrations = [
    {
      id: 1,
      name: "Hindu Calendar",
      festivals: 156,
      accuracy: 96,
      icon: "Calendar",
      color: "text-orange-600"
    },
    {
      id: 2,
      name: "Islamic Calendar",
      festivals: 89,
      accuracy: 94,
      icon: "Moon",
      color: "text-green-600"
    },
    {
      id: 3,
      name: "Regional Festivals",
      festivals: 234,
      accuracy: 91,
      icon: "MapPin",
      color: "text-purple-600"
    },
    {
      id: 4,
      name: "Seasonal Events",
      festivals: 67,
      accuracy: 89,
      icon: "Sun",
      color: "text-yellow-600"
    }
  ];

  const pollutionPredictions = [
    {
      city: "Delhi",
      currentAQI: 287,
      predictedAQI: 425,
      respiratoryCases: "+156%",
      status: "severe",
      trend: "increasing"
    },
    {
      city: "Mumbai",
      currentAQI: 178,
      predictedAQI: 245,
      respiratoryCases: "+89%",
      status: "moderate",
      trend: "increasing"
    },
    {
      city: "Kolkata",
      currentAQI: 234,
      predictedAQI: 312,
      respiratoryCases: "+134%",
      status: "poor",
      trend: "increasing"
    },
    {
      city: "Chennai",
      currentAQI: 145,
      predictedAQI: 189,
      respiratoryCases: "+67%",
      status: "moderate",
      trend: "stable"
    }
  ];

  const getAQIColor = (aqi) => {
    if (aqi > 300) return "text-error";
    if (aqi > 200) return "text-warning";
    if (aqi > 100) return "text-yellow-600";
    return "text-success";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'severe': return "bg-error/10 text-error border-error/20";
      case 'poor': return "bg-warning/10 text-warning border-warning/20";
      case 'moderate': return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-success/10 text-success border-success/20";
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-clinical">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Cultural Health Intelligence
            </h3>
            <p className="text-text-secondary text-sm">
              Integrating traditional calendars with modern healthcare analytics
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-primary">
            <Icon name="Brain" size={16} />
            <span className="font-medium">AI-Powered Integration</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-muted/50 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-intelligence ${
              activeTab === 'calendar' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            Calendar Integration
          </button>
          <button
            onClick={() => setActiveTab('pollution')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-intelligence ${
              activeTab === 'pollution' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            Pollution Predictions
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            {/* Calendar Integration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {calendarIntegrations?.map((calendar) => (
                <div key={calendar?.id} className="bg-muted/30 rounded-lg p-4 border border-border hover:border-primary/30 transition-intelligence">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name={calendar?.icon} size={24} className={calendar?.color} />
                    <span className="text-xs text-success font-medium">{calendar?.accuracy}% accurate</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{calendar?.name}</h4>
                  <p className="text-sm text-text-secondary">{calendar?.festivals} festivals tracked</p>
                </div>
              ))}
            </div>

            {/* Integration Benefits */}
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={20} color="var(--color-primary)" className="mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Smart Calendar Integration</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Our AI system automatically correlates traditional festival dates with historical health data to predict surge patterns with 94% accuracy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                      <span className="text-sm text-foreground">Real-time sync</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                      <span className="text-sm text-foreground">Multi-cultural support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                      <span className="text-sm text-foreground">Regional customization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pollution' && (
          <div className="space-y-6">
            {/* Diwali Pollution Alert */}
            <div className="bg-warning/5 rounded-lg p-4 border border-warning/20">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} color="var(--color-warning)" className="mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-warning mb-2">Diwali Pollution Spike Prediction</h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Expected 3-5x increase in AQI levels during Diwali week (Oct 29 - Nov 5, 2024)
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-error font-medium">Peak AQI: 450-500</span>
                    <span className="text-warning">Respiratory cases: +200%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* City-wise Predictions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">City-wise Pollution & Health Impact</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {pollutionPredictions?.map((city, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold text-foreground">{city?.city}</h5>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(city?.status)}`}>
                        {city?.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary">Current AQI</span>
                        <span className={`font-semibold ${getAQIColor(city?.currentAQI)}`}>
                          {city?.currentAQI}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary">Predicted AQI</span>
                        <div className="flex items-center space-x-2">
                          <span className={`font-semibold ${getAQIColor(city?.predictedAQI)}`}>
                            {city?.predictedAQI}
                          </span>
                          <Icon 
                            name={city?.trend === 'increasing' ? 'TrendingUp' : 'Minus'} 
                            size={14} 
                            color={city?.trend === 'increasing' ? 'var(--color-error)' : 'var(--color-text-secondary)'} 
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary">Respiratory Cases</span>
                        <span className="font-semibold text-error">{city?.respiratoryCases}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CulturalHealthIntelligence;