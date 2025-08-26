import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EnvironmentalHealthMonitoring = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const monitoringStations = [
    {
      city: "Delhi",
      stations: 45,
      currentAQI: 287,
      status: "severe",
      predictedCases: 156,
      coordinates: { lat: 28.6139, lng: 77.2090 },
      pollutants: {
        pm25: 145,
        pm10: 234,
        no2: 67,
        so2: 23,
        co: 1.2,
        o3: 89
      }
    },
    {
      city: "Mumbai",
      stations: 38,
      currentAQI: 178,
      status: "moderate",
      predictedCases: 89,
      coordinates: { lat: 19.0760, lng: 72.8777 },
      pollutants: {
        pm25: 89,
        pm10: 156,
        no2: 45,
        so2: 18,
        co: 0.8,
        o3: 67
      }
    },
    {
      city: "Kolkata",
      stations: 32,
      currentAQI: 234,
      status: "poor",
      predictedCases: 134,
      coordinates: { lat: 22.5726, lng: 88.3639 },
      pollutants: {
        pm25: 123,
        pm10: 189,
        no2: 56,
        so2: 21,
        co: 1.0,
        o3: 78
      }
    },
    {
      city: "Chennai",
      stations: 28,
      currentAQI: 145,
      status: "moderate",
      predictedCases: 67,
      coordinates: { lat: 13.0827, lng: 80.2707 },
      pollutants: {
        pm25: 67,
        pm10: 123,
        no2: 34,
        so2: 15,
        co: 0.6,
        o3: 56
      }
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

  const getPollutantLevel = (value, type) => {
    const thresholds = {
      pm25: { good: 30, moderate: 60, poor: 90 },
      pm10: { good: 50, moderate: 100, poor: 150 },
      no2: { good: 40, moderate: 80, poor: 120 },
      so2: { good: 40, moderate: 80, poor: 120 },
      co: { good: 1, moderate: 2, poor: 3 },
      o3: { good: 50, moderate: 100, poor: 150 }
    };

    const threshold = thresholds?.[type];
    if (value <= threshold?.good) return "text-success";
    if (value <= threshold?.moderate) return "text-warning";
    return "text-error";
  };

  const selectedCityData = monitoringStations?.find(station => station?.city === selectedCity);

  return (
    <div className="bg-card rounded-lg border border-border shadow-clinical">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Environmental Health Monitoring
            </h3>
            <p className="text-text-secondary text-sm">
              Real-time integration with pollution monitoring stations across India
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-success">
            <Icon name="Satellite" size={16} />
            <span className="font-medium">Live Data Integration</span>
          </div>
        </div>

        {/* City Selector */}
        <div className="flex flex-wrap gap-2">
          {monitoringStations?.map((station) => (
            <button
              key={station?.city}
              onClick={() => setSelectedCity(station?.city)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-intelligence ${
                selectedCity === station?.city
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/50 text-text-secondary hover:text-foreground hover:bg-muted'
              }`}
            >
              {station?.city}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 space-y-6">
        {/* Selected City Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* City Stats */}
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">{selectedCityData?.city} Overview</h4>
                <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(selectedCityData?.status)}`}>
                  {selectedCityData?.status?.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Monitoring Stations</div>
                  <div className="text-2xl font-bold text-foreground">{selectedCityData?.stations}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Current AQI</div>
                  <div className={`text-2xl font-bold ${getAQIColor(selectedCityData?.currentAQI)}`}>
                    {selectedCityData?.currentAQI}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-text-secondary mb-1">Predicted Respiratory Cases</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-error">+{selectedCityData?.predictedCases}%</span>
                    <Icon name="TrendingUp" size={16} color="var(--color-error)" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pollutant Breakdown */}
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h5 className="font-semibold text-foreground mb-4">Pollutant Levels</h5>
              <div className="space-y-3">
                {Object.entries(selectedCityData?.pollutants)?.map(([pollutant, value]) => (
                  <div key={pollutant} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-foreground uppercase">{pollutant}</span>
                      <span className="text-xs text-text-secondary">
                        {pollutant?.includes('co') ? 'mg/m³' : 'μg/m³'}
                      </span>
                    </div>
                    <span className={`font-semibold ${getPollutantLevel(value, pollutant)}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="bg-muted/30 rounded-lg p-4 border border-border">
            <h5 className="font-semibold text-foreground mb-4">Station Locations</h5>
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={`${selectedCityData?.city} Monitoring Stations`}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${selectedCityData?.coordinates?.lat},${selectedCityData?.coordinates?.lng}&z=11&output=embed`}
              />
            </div>
            <div className="mt-3 text-sm text-text-secondary">
              Real-time data from {selectedCityData?.stations} monitoring stations
            </div>
          </div>
        </div>

        {/* All Cities Comparison */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Multi-City Comparison</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monitoringStations?.map((station) => (
              <div 
                key={station?.city} 
                className={`bg-muted/30 rounded-lg p-4 border transition-intelligence cursor-pointer ${
                  selectedCity === station?.city 
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                }`}
                onClick={() => setSelectedCity(station?.city)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-foreground">{station?.city}</h5>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(station?.status)}`}>
                    {station?.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">AQI</span>
                    <span className={`font-semibold ${getAQIColor(station?.currentAQI)}`}>
                      {station?.currentAQI}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Stations</span>
                    <span className="font-semibold text-foreground">{station?.stations}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Cases ↑</span>
                    <span className="font-semibold text-error">+{station?.predictedCases}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={24} color="white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-primary mb-2">Real-time Health Correlation</h4>
              <p className="text-sm text-text-secondary mb-4">
                Our system continuously correlates environmental data with hospital admissions to provide accurate health impact predictions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">24/7 monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Multi-pollutant tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-sm text-foreground">Predictive analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalHealthMonitoring;