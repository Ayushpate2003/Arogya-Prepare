import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const PlatformPreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    {
      id: 'dashboard',
      name: 'Intelligent Dashboard',
      icon: 'BarChart3',
      description: 'Real-time surge monitoring and predictive analytics'
    },
    {
      id: 'calendar',
      name: 'Festival Calendar',
      icon: 'Calendar',
      description: 'Cultural event integration with health predictions'
    },
    {
      id: 'pollution',
      name: 'Pollution Index',
      icon: 'Wind',
      description: 'Environmental health correlation analysis'
    },
    {
      id: 'resources',
      name: 'Resource Optimization',
      icon: 'Users',
      description: 'Staff and supply chain management'
    }
  ];

  const dashboardData = {
    dashboard: {
      title: 'Surge Risk Dashboard',
      metrics: [
        { label: 'Current Risk Level', value: '78%', status: 'high', icon: 'AlertTriangle' },
        { label: 'Predicted Peak', value: 'Oct 31', status: 'warning', icon: 'Calendar' },
        { label: 'Staff Readiness', value: '92%', status: 'good', icon: 'Users' },
        { label: 'Bed Availability', value: '156', status: 'good', icon: 'Bed' }
      ],
      alerts: [
        'Diwali surge expected in 3 days - Prepare respiratory specialists',
        'Pollution levels rising - Stock additional ventilators',
        'Staff overtime approaching limit - Schedule additional shifts'
      ]
    },
    calendar: {
      title: 'Festival Health Calendar',
      events: [
        { date: 'Oct 31', event: 'Diwali', risk: 'High', impact: 'Respiratory +78%' },
        { date: 'Nov 7', event: 'Chhath Puja', risk: 'Medium', impact: 'Gastro +45%' },
        { date: 'Nov 12', event: 'Bhai Dooj', risk: 'Low', impact: 'General +12%' },
        { date: 'Nov 27', event: 'Guru Nanak Jayanti', risk: 'Medium', impact: 'Cardiac +34%' }
      ]
    },
    pollution: {
      title: 'Environmental Health Index',
      data: [
        { location: 'Delhi NCR', aqi: 287, risk: 'Severe', prediction: '+89% respiratory cases' },
        { location: 'Mumbai', aqi: 156, risk: 'Moderate', prediction: '+34% asthma cases' },
        { location: 'Kolkata', aqi: 198, risk: 'Poor', prediction: '+56% COPD cases' },
        { location: 'Chennai', aqi: 89, risk: 'Satisfactory', prediction: '+12% allergies' }
      ]
    },
    resources: {
      title: 'Resource Optimization',
      departments: [
        { name: 'Emergency', current: 12, required: 18, status: 'shortage' },
        { name: 'Respiratory', current: 8, required: 8, status: 'optimal' },
        { name: 'Cardiology', current: 6, required: 5, status: 'surplus' },
        { name: 'General', current: 24, required: 28, status: 'shortage' }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'high': case 'shortage': return 'text-red-600 bg-red-50';
      case 'warning': case 'medium': return 'text-amber-600 bg-amber-50';
      case 'good': case 'optimal': case 'surplus': return 'text-green-600 bg-green-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const renderTabContent = () => {
    const data = dashboardData?.[activeTab];

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data?.metrics?.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name={metric?.icon} size={16} className="text-slate-500" />
                    <span className="text-xs text-slate-600">{metric?.label}</span>
                  </div>
                  <div className={`text-lg font-bold ${getStatusColor(metric?.status)?.split(' ')?.[0]}`}>
                    {metric?.value}
                  </div>
                </div>
              ))}
            </div>
            {/* Alerts */}
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <Icon name="Bell" size={16} className="mr-2" />
                Active Alerts
              </h4>
              <div className="space-y-2">
                {data?.alerts?.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{alert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4">Upcoming Festival Impact</h4>
            <div className="space-y-3">
              {data?.events?.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-slate-900">{event?.date}</div>
                    <div className="text-sm text-slate-700">{event?.event}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event?.risk?.toLowerCase())}`}>
                      {event?.risk}
                    </span>
                    <span className="text-xs text-slate-600">{event?.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pollution':
        return (
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4">Air Quality Impact</h4>
            <div className="space-y-3">
              {data?.data?.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-slate-900">{item?.location}</div>
                    <div className="text-sm text-slate-700">AQI: {item?.aqi}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item?.risk?.toLowerCase())}`}>
                      {item?.risk}
                    </span>
                    <span className="text-xs text-slate-600">{item?.prediction}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4">Department Staffing</h4>
            <div className="space-y-3">
              {data?.departments?.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-slate-900">{dept?.name}</div>
                    <div className="text-sm text-slate-700">{dept?.current}/{dept?.required}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dept?.status)}`}>
                      {dept?.status}
                    </span>
                    <div className="w-16 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          dept?.status === 'shortage' ? 'bg-red-500' :
                          dept?.status === 'optimal' ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${Math.min(100, (dept?.current / dept?.required) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Platform in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Experience how Arogya-Prepare transforms complex healthcare data into 
            actionable intelligence with real festival calendar and pollution index integration.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab?.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="hidden sm:inline">{tab?.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Description */}
          <div className="text-center mb-8">
            <p className="text-slate-600">
              {tabs?.find(tab => tab?.id === activeTab)?.description}
            </p>
          </div>

          {/* Platform Preview */}
          <div className="bg-white rounded-2xl shadow-clinical-lg overflow-hidden">
            {/* Mock Browser Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-slate-600 ml-4">
                  https://arogya-prepare.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 lg:p-8 bg-slate-50 min-h-96">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {dashboardData?.[activeTab]?.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live Data</span>
                </div>
              </div>

              {renderTabContent()}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-clinical">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">AI-Powered Predictions</h4>
              <p className="text-sm text-slate-600">
                Advanced machine learning algorithms analyze cultural patterns and environmental data
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-clinical">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Real-Time Updates</h4>
              <p className="text-sm text-slate-600">
                Live data integration with instant alerts and automated resource recommendations
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-clinical">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Cultural Intelligence</h4>
              <p className="text-sm text-slate-600">
                Deep understanding of Indian festivals, traditions, and their health implications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPreview;