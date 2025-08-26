import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const IntelligentDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [surgeLevel, setSurgeLevel] = useState(65);

  const metrics = [
    {
      title: "Karva Chauth Surge",
      date: "Nov 1, 2024",
      risk: 78,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      icon: "AlertTriangle",
      factors: ["Fasting complications", "Emergency visits", "Cardiac events"]
    },
    {
      title: "Diwali Prediction",
      date: "Nov 12, 2024", 
      risk: 92,
      color: "text-red-600",
      bgColor: "bg-red-100",
      icon: "AlertCircle",
      factors: ["Burn injuries", "Respiratory issues", "Firecracker accidents"]
    },
    {
      title: "Post-Diwali Recovery",
      date: "Nov 15, 2024",
      risk: 45,
      color: "text-emerald-600", 
      bgColor: "bg-emerald-100",
      icon: "TrendingDown",
      factors: ["Pollution recovery", "Normal operations", "Reduced admissions"]
    }
  ];

  const departments = [
    { name: "Emergency", current: 85, predicted: 120, change: +35 },
    { name: "Cardiology", current: 45, predicted: 78, change: +33 },
    { name: "Respiratory", current: 32, predicted: 65, change: +33 },
    { name: "Pediatrics", current: 28, predicted: 42, change: +14 },
    { name: "Orthopedics", current: 22, predicted: 35, change: +13 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics?.length);
      setSurgeLevel(prev => prev + (Math.random() - 0.5) * 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Intelligent Dashboard
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-time surge risk assessment with animated threat meters and actionable recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Live Demo Interface */}
            <div className="bg-slate-50 rounded-2xl p-8 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Live Surge Monitor</h3>
                <div className="flex items-center gap-2 text-emerald-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              {/* Surge Level Meter */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Overall Surge Risk</span>
                  <span className="text-2xl font-bold text-amber-600">{Math.round(surgeLevel)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${surgeLevel}%` }}
                  ></div>
                </div>
              </div>

              {/* Festival Predictions */}
              <div className="space-y-4">
                {metrics?.map((metric, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeMetric === index 
                        ? 'border-blue-300 bg-blue-50 shadow-lg scale-105' 
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                    onClick={() => setActiveMetric(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${metric?.bgColor}`}>
                          <Icon name={metric?.icon} size={20} className={metric?.color} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{metric?.title}</h4>
                          <p className="text-sm text-slate-600">{metric?.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${metric?.color}`}>{metric?.risk}%</div>
                        <div className="text-xs text-slate-500">Risk Level</div>
                      </div>
                    </div>
                    
                    {activeMetric === index && (
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-sm text-slate-600 mb-2">Key Risk Factors:</p>
                        <div className="flex flex-wrap gap-2">
                          {metric?.factors?.map((factor, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                              {factor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Department Forecasts */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Department-Specific Forecasts</h3>
              <div className="space-y-4">
                {departments?.map((dept, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-slate-900">{dept?.name}</h4>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        dept?.change > 30 ? 'bg-red-100 text-red-700' :
                        dept?.change > 15 ? 'bg-amber-100 text-amber-700': 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <Icon name={dept?.change > 0 ? "TrendingUp" : "TrendingDown"} size={12} />
                        +{dept?.change}%
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-600">Current Load</p>
                        <p className="text-2xl font-bold text-slate-900">{dept?.current}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Predicted Peak</p>
                        <p className="text-2xl font-bold text-blue-600">{dept?.predicted}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-slate-600 mb-1">
                        <span>Capacity Utilization</span>
                        <span>{Math.round((dept?.predicted / 150) * 100)}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            (dept?.predicted / 150) > 0.8 ? 'bg-red-500' :
                            (dept?.predicted / 150) > 0.6 ? 'bg-amber-500': 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min((dept?.predicted / 150) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentDashboard;