import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [surgeRisk, setSurgeRisk] = useState(78);
  const [currentCity, setCurrentCity] = useState('Delhi NCR');
  const [pollutionDays, setPollutionDays] = useState(3);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSurgeRisk(prev => {
        const change = Math.random() * 6 - 3; // -3 to +3
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (risk) => {
    if (risk >= 80) return 'text-red-600';
    if (risk >= 60) return 'text-amber-600';
    if (risk >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getRiskBgColor = (risk) => {
    if (risk >= 80) return 'bg-red-100';
    if (risk >= 60) return 'bg-amber-100';
    if (risk >= 40) return 'bg-yellow-100';
    return 'bg-green-100';
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Live Data Ticker */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100 shadow-sm">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-slate-600 font-medium">LIVE:</span>
                <span className="text-slate-800">Diwali surge risk: {Math.round(surgeRisk)}% in {currentCity}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-800">Pollution spike expected: {pollutionDays} days</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="text-blue-700">Predict.</span>{' '}
                <span className="text-emerald-700">Prepare.</span>{' '}
                <span className="text-orange-600">Protect.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-medium">
                Intelligence that saves lives before emergencies happen
              </p>
              <p className="text-lg text-slate-500 max-w-2xl">
                Transform your hospital from reactive to proactive with AI-powered surge prediction, 
                resource optimization, and cultural health intelligence designed for Indian healthcare.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                Start 14-Day Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                View Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-green-600" />
                <span className="text-sm text-slate-600">DPDP Act Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-blue-600" />
                <span className="text-sm text-slate-600">AIIMS Partnership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-emerald-600" />
                <span className="text-sm text-slate-600">156+ Hospitals</span>
              </div>
            </div>
          </div>

          {/* Right Content - Surge Risk Meter */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Risk Meter */}
              <div className={`w-80 h-80 rounded-full ${getRiskBgColor(surgeRisk)} p-8 shadow-clinical-lg`}>
                <div className="w-full h-full rounded-full bg-white shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Animated Background */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, var(--color-primary) ${surgeRisk}%, transparent ${surgeRisk}%)`
                    }}
                  />
                  
                  {/* Risk Percentage */}
                  <div className="text-center z-10">
                    <div className={`text-5xl font-bold ${getRiskColor(surgeRisk)} mb-2`}>
                      {Math.round(surgeRisk)}%
                    </div>
                    <div className="text-slate-600 font-medium text-lg">
                      Surge Risk
                    </div>
                    <div className="text-slate-500 text-sm mt-1">
                      {currentCity}
                    </div>
                  </div>

                  {/* Risk Level Indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      surgeRisk >= 80 ? 'bg-red-100 text-red-700' :
                      surgeRisk >= 60 ? 'bg-amber-100 text-amber-700' :
                      surgeRisk >= 40 ? 'bg-yellow-100 text-yellow-700': 'bg-green-100 text-green-700'
                    }`}>
                      {surgeRisk >= 80 ? 'Critical' :
                       surgeRisk >= 60 ? 'High' :
                       surgeRisk >= 40 ? 'Moderate' : 'Low'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-clinical border border-blue-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-orange-600" />
                  <div className="text-xs">
                    <div className="font-medium text-slate-800">Diwali</div>
                    <div className="text-slate-500">Oct 31</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-clinical border border-emerald-100">
                <div className="flex items-center space-x-2">
                  <Icon name="Wind" size={16} className="text-emerald-600" />
                  <div className="text-xs">
                    <div className="font-medium text-slate-800">AQI</div>
                    <div className="text-slate-500">287</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;