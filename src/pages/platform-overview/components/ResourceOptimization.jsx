import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResourceOptimization = () => {
  const [activeTab, setActiveTab] = useState('staffing');

  const staffingData = {
    current: [
      { department: 'Emergency', current: 12, recommended: 18, shift: 'Night', efficiency: 85 },
      { department: 'Cardiology', current: 8, recommended: 12, shift: 'Day', efficiency: 78 },
      { department: 'Respiratory', current: 6, recommended: 10, shift: 'Evening', efficiency: 72 },
      { department: 'Pediatrics', current: 5, recommended: 7, shift: 'Day', efficiency: 88 },
      { department: 'ICU', current: 15, recommended: 20, shift: 'All', efficiency: 92 }
    ],
    patterns: [
      { pattern: 'Festival Overtime', impact: '+25% staff needed', color: 'text-amber-600' },
      { pattern: 'Cultural Preferences', impact: 'Avoid night shifts during fasting', color: 'text-blue-600' },
      { pattern: 'Regional Holidays', impact: 'Account for local celebrations', color: 'text-emerald-600' }
    ]
  };

  const supplyChainData = [
    {
      category: 'Emergency Supplies',
      items: [
        { name: 'Burn Dressings', current: 150, required: 300, supplier: 'MedSupply India', status: 'critical' },
        { name: 'Cardiac Monitors', current: 8, required: 12, supplier: 'HealthTech Solutions', status: 'warning' },
        { name: 'Oxygen Cylinders', current: 45, required: 60, supplier: 'OxyGen Plus', status: 'good' }
      ]
    },
    {
      category: 'Medications',
      items: [
        { name: 'Respiratory Inhalers', current: 80, required: 150, supplier: 'Pharma Direct', status: 'critical' },
        { name: 'Cardiac Medications', current: 200, required: 280, supplier: 'CardioMeds Ltd', status: 'warning' },
        { name: 'Pain Management', current: 120, required: 140, supplier: 'PainCare India', status: 'good' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-amber-600 bg-amber-100';
      case 'good': return 'text-emerald-600 bg-emerald-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical': return 'AlertCircle';
      case 'warning': return 'AlertTriangle';
      case 'good': return 'CheckCircle';
      default: return 'Info';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Resource Optimization Suite
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Staffing algorithms that account for Indian work patterns and supply chain tools integrated with local distributors
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-xl p-1 inline-flex">
              <button
                onClick={() => setActiveTab('staffing')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'staffing' ?'bg-white text-blue-600 shadow-sm' :'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon name="Users" size={20} className="inline mr-2" />
                Smart Staffing
              </button>
              <button
                onClick={() => setActiveTab('supply')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'supply' ?'bg-white text-blue-600 shadow-sm' :'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon name="Package" size={20} className="inline mr-2" />
                Supply Chain
              </button>
            </div>
          </div>

          {/* Staffing Tab */}
          {activeTab === 'staffing' && (
            <div className="space-y-8">
              {/* Staffing Recommendations */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">AI-Powered Staffing Recommendations</h3>
                
                <div className="grid gap-4">
                  {staffingData?.current?.map((dept, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-slate-900">{dept?.department}</h4>
                          <p className="text-sm text-slate-600">{dept?.shift} Shift Priority</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            +{dept?.recommended - dept?.current}
                          </div>
                          <div className="text-xs text-slate-500">Additional Staff</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-slate-600">Current</p>
                          <p className="text-xl font-bold text-slate-900">{dept?.current}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Recommended</p>
                          <p className="text-xl font-bold text-emerald-600">{dept?.recommended}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Efficiency</p>
                          <p className="text-xl font-bold text-blue-600">{dept?.efficiency}%</p>
                        </div>
                      </div>
                      
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(dept?.current / dept?.recommended) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Patterns */}
              <div className="bg-white rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Indian Work Pattern Intelligence</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {staffingData?.patterns?.map((pattern, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Brain" size={20} className="text-blue-600" />
                        <h4 className="font-medium text-slate-900">{pattern?.pattern}</h4>
                      </div>
                      <p className={`text-sm font-medium ${pattern?.color}`}>{pattern?.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Supply Chain Tab */}
          {activeTab === 'supply' && (
            <div className="space-y-8">
              {supplyChainData?.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">{category?.category}</h3>
                  
                  <div className="grid gap-4">
                    {category?.items?.map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 border">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${getStatusColor(item?.status)}`}>
                              <Icon name={getStatusIcon(item?.status)} size={20} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">{item?.name}</h4>
                              <p className="text-sm text-slate-600">{item?.supplier}</p>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item?.status)}`}>
                            {item?.status?.toUpperCase()}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-slate-600">Current Stock</p>
                            <p className="text-xl font-bold text-slate-900">{item?.current}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600">Required</p>
                            <p className="text-xl font-bold text-blue-600">{item?.required}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-600">Shortage</p>
                            <p className="text-xl font-bold text-red-600">{item?.required - item?.current}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span className="text-slate-600">Stock Level</span>
                          <span className="font-medium">{Math.round((item?.current / item?.required) * 100)}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              (item?.current / item?.required) < 0.5 ? 'bg-red-500' :
                              (item?.current / item?.required) < 0.8 ? 'bg-amber-500': 'bg-emerald-500'
                            }`}
                            style={{ width: `${Math.min((item?.current / item?.required) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Supplier Network */}
              <div className="bg-white rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Local Distributor Network</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'MedSupply India', reliability: 98, deliveryTime: '2-4 hours' },
                    { name: 'Pharma Direct', reliability: 95, deliveryTime: '1-3 hours' },
                    { name: 'HealthTech Solutions', reliability: 92, deliveryTime: '4-6 hours' },
                    { name: 'OxyGen Plus', reliability: 99, deliveryTime: '1-2 hours' }
                  ]?.map((supplier, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-xl">
                      <h4 className="font-medium text-slate-900 mb-2">{supplier?.name}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Reliability</span>
                          <span className="font-medium text-emerald-600">{supplier?.reliability}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Delivery</span>
                          <span className="font-medium text-blue-600">{supplier?.deliveryTime}</span>
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
    </section>
  );
};

export default ResourceOptimization;