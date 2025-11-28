import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const hospitals = [
    {
      id: 1,
      city: 'Delhi',
      name: 'AIIMS Delhi',
      preparedness: 'high',
      surgeRisk: 78,
      position: { top: '25%', left: '35%' }
    },
    {
      id: 2,
      city: 'Mumbai',
      name: 'Tata Memorial Hospital',
      preparedness: 'medium',
      surgeRisk: 65,
      position: { top: '55%', left: '20%' }
    },
    {
      id: 3,
      city: 'Bangalore',
      name: 'Manipal Hospital',
      preparedness: 'high',
      surgeRisk: 42,
      position: { top: '70%', left: '30%' }
    },
    {
      id: 4,
      city: 'Chennai',
      name: 'Apollo Hospital',
      preparedness: 'high',
      surgeRisk: 38,
      position: { top: '75%', left: '35%' }
    },
    {
      id: 5,
      city: 'Kolkata',
      name: 'SSKM Hospital',
      preparedness: 'medium',
      surgeRisk: 72,
      position: { top: '45%', left: '45%' }
    },
    {
      id: 6,
      city: 'Hyderabad',
      name: 'Nims Hospital',
      preparedness: 'high',
      surgeRisk: 45,
      position: { top: '65%', left: '35%' }
    }
  ];

  const getPreparednessColor = (level) => {
    switch (level) {
      case 'high': return 'bg-green-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPreparednessText = (level) => {
    switch (level) {
      case 'high': return 'Well Prepared';
      case 'medium': return 'Moderately Prepared';
      case 'low': return 'Needs Attention';
      default: return 'Unknown';
    }
  };

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Real-Time Hospital Network
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Monitor preparedness levels across India's leading hospitals. 
            Each facility shows live surge risk assessment and readiness status.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl p-8 shadow-clinical-lg">
              {/* India Map Outline */}
              <div className="relative w-full h-96 lg:h-[500px]">
                <svg 
                  viewBox="0 0 400 500" 
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Simplified India outline */}
                  <path
                    d="M100 50 L300 50 L350 100 L380 200 L350 300 L320 400 L280 450 L200 480 L120 450 L80 400 L60 350 L50 300 L40 200 L60 150 L80 100 Z"
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  
                  {/* State boundaries (simplified) */}
                  <path d="M100 150 L200 140 L250 180 L200 220 L150 200 Z" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M200 220 L280 200 L320 250 L280 300 L220 280 Z" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M150 300 L250 290 L280 350 L200 380 L120 360 Z" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </svg>

                {/* Hospital Markers */}
                {hospitals?.map((hospital) => (
                  <div
                    key={hospital?.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={hospital?.position}
                    onClick={() => setSelectedCity(selectedCity === hospital?.id ? null : hospital?.id)}
                  >
                    {/* Pulse Animation */}
                    <div className={`absolute inset-0 ${getPreparednessColor(hospital?.preparedness)} rounded-full animate-ping opacity-30`} />
                    
                    {/* Main Marker */}
                    <div className={`relative w-4 h-4 ${getPreparednessColor(hospital?.preparedness)} rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform`} />
                    
                    {/* City Label */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium text-slate-700 shadow-sm whitespace-nowrap">
                      {hospital?.city}
                    </div>

                    {/* Detailed Info Popup */}
                    {selectedCity === hospital?.id && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 sm:p-4 shadow-xl border border-slate-200 w-48 sm:w-56 md:w-64 z-10">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-slate-900">{hospital?.name}</h4>
                            <p className="text-sm text-slate-600">{hospital?.city}</p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Preparedness:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              hospital?.preparedness === 'high' ? 'bg-green-100 text-green-700' :
                              hospital?.preparedness === 'medium'? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {getPreparednessText(hospital?.preparedness)}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Surge Risk:</span>
                            <span className="font-semibold text-slate-900">{hospital?.surgeRisk}%</span>
                          </div>
                          
                          <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-center space-x-2 text-xs text-slate-500">
                              <Icon name="Clock" size={12} />
                              <span>Updated 2 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend and Stats */}
          <div className="space-y-6">
            {/* Legend */}
            <div className="bg-white rounded-xl p-6 shadow-clinical">
              <h3 className="font-semibold text-slate-900 mb-4">Preparedness Levels</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Well Prepared</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Moderately Prepared</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Needs Attention</span>
                </div>
              </div>
            </div>

            {/* Network Stats */}
            <div className="bg-white rounded-xl p-6 shadow-clinical">
              <h3 className="font-semibold text-slate-900 mb-4">Network Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Total Hospitals</span>
                  <span className="font-semibold text-slate-900">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Well Prepared</span>
                  <span className="font-semibold text-green-600">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Moderate Risk</span>
                  <span className="font-semibold text-amber-600">52</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">High Risk</span>
                  <span className="font-semibold text-red-600">15</span>
                </div>
              </div>
            </div>

            {/* Live Updates */}
            <div className="bg-white rounded-xl p-6 shadow-clinical">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-slate-900">Live Updates</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-slate-600">
                  <span className="font-medium">AIIMS Delhi</span> updated surge capacity
                </div>
                <div className="text-slate-600">
                  <span className="font-medium">Apollo Chennai</span> reduced risk level
                </div>
                <div className="text-slate-600">
                  <span className="font-medium">Manipal Bangalore</span> increased preparedness
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;