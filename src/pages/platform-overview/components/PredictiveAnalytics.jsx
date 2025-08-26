import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const PredictiveAnalytics = () => {
  const [selectedFactor, setSelectedFactor] = useState('aqi');

  const forecastData = [
    { date: 'Oct 28', patients: 120, predicted: 125, confidence: 95 },
    { date: 'Oct 29', patients: 135, predicted: 140, confidence: 92 },
    { date: 'Oct 30', patients: 145, predicted: 150, confidence: 89 },
    { date: 'Nov 1', patients: null, predicted: 180, confidence: 87 },
    { date: 'Nov 2', patients: null, predicted: 165, confidence: 85 },
    { date: 'Nov 3', patients: null, predicted: 155, confidence: 83 },
    { date: 'Nov 4', patients: null, predicted: 140, confidence: 81 }
  ];

  const correlationFactors = {
    aqi: {
      name: "Air Quality Index",
      data: [
        { factor: 'Oct 28', value: 85, impact: 'Moderate' },
        { factor: 'Oct 29', value: 120, impact: 'Unhealthy' },
        { factor: 'Oct 30', value: 165, impact: 'Very Unhealthy' },
        { factor: 'Nov 1', value: 220, impact: 'Hazardous' },
        { factor: 'Nov 2', value: 195, impact: 'Very Unhealthy' },
        { factor: 'Nov 3', value: 145, impact: 'Unhealthy' },
        { factor: 'Nov 4', value: 110, impact: 'Moderate' }
      ],
      correlation: 0.89,
      color: '#DC2626'
    },
    festivals: {
      name: "Festival Calendar",
      data: [
        { factor: 'Oct 28', value: 20, impact: 'Low' },
        { factor: 'Oct 29', value: 35, impact: 'Medium' },
        { factor: 'Oct 30', value: 60, impact: 'High' },
        { factor: 'Nov 1', value: 95, impact: 'Peak' },
        { factor: 'Nov 2', value: 75, impact: 'High' },
        { factor: 'Nov 3', value: 45, impact: 'Medium' },
        { factor: 'Nov 4', value: 25, impact: 'Low' }
      ],
      correlation: 0.94,
      color: '#D97706'
    },
    historical: {
      name: "Historical Patterns",
      data: [
        { factor: 'Oct 28', value: 110, impact: 'Normal' },
        { factor: 'Oct 29', value: 125, impact: 'Elevated' },
        { factor: 'Oct 30', value: 140, impact: 'High' },
        { factor: 'Nov 1', value: 175, impact: 'Peak' },
        { factor: 'Nov 2', value: 160, impact: 'High' },
        { factor: 'Nov 3', value: 145, impact: 'Elevated' },
        { factor: 'Nov 4', value: 130, impact: 'Normal' }
      ],
      correlation: 0.96,
      color: '#059669'
    }
  };

  const aiInsights = [
    {
      icon: "Brain",
      title: "Pattern Recognition",
      description: "AI identified 15% higher cardiac admissions during Karva Chauth based on 5-year historical data",
      confidence: 94
    },
    {
      icon: "TrendingUp",
      title: "Surge Prediction",
      description: "Emergency department expected to reach 120% capacity on Diwali night (Nov 12, 11 PM - 3 AM)",
      confidence: 91
    },
    {
      icon: "AlertTriangle",
      title: "Risk Correlation",
      description: "AQI levels above 200 correlate with 40% increase in respiratory admissions within 24-48 hours",
      confidence: 89
    },
    {
      icon: "Clock",
      title: "Timing Analysis",
      description: "Peak admission times: Karva Chauth (8-11 PM), Diwali (10 PM - 2 AM), Post-Diwali (6-10 AM)",
      confidence: 96
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Predictive Analytics Center
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              7-14 day forecasting with explainable AI visualizations showing correlation factors
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Forecast Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Patient Load Forecast</h3>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Calendar" size={16} />
                  Next 7 Days
                </div>
              </div>

              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#64748B"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#64748B"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="patients" 
                      stroke="#059669" 
                      strokeWidth={3}
                      dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
                      name="Actual Patients"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#2563EB" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
                      name="Predicted Patients"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">Actual Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">AI Predictions</span>
                  </div>
                </div>
                <div className="text-slate-500">
                  Confidence: 85-95%
                </div>
              </div>
            </div>

            {/* Correlation Factors */}
            <div className="bg-white rounded-2xl p-8 border">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Correlation Factors</h3>
              
              <div className="space-y-3 mb-6">
                {Object.entries(correlationFactors)?.map(([key, factor]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedFactor(key)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedFactor === key 
                        ? 'bg-blue-50 border-2 border-blue-200' :'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">{factor?.name}</span>
                      <span className="text-sm font-semibold" style={{ color: factor?.color }}>
                        {(factor?.correlation * 100)?.toFixed(0)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={correlationFactors?.[selectedFactor]?.data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="factor" 
                      stroke="#64748B"
                      fontSize={10}
                    />
                    <YAxis 
                      stroke="#64748B"
                      fontSize={10}
                    />
                    <Tooltip />
                    <Bar 
                      dataKey="value" 
                      fill={correlationFactors?.[selectedFactor]?.color}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Explainable AI Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {aiInsights?.map((insight, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon name={insight?.icon} size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">{insight?.title}</h4>
                      <p className="text-slate-600 text-sm mb-3">{insight?.description}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${insight?.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">{insight?.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveAnalytics;