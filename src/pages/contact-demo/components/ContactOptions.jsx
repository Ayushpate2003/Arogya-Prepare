import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const [selectedRegion, setSelectedRegion] = useState('north');

  const regionalContacts = {
    north: {
      region: 'North India',
      phone: '+91 11 4567 8900',
      email: 'north@arogya-prepare.com',
      languages: ['Hindi', 'English', 'Punjabi'],
      cities: ['Delhi', 'Chandigarh', 'Jaipur', 'Lucknow'],
      hours: '9:00 AM - 7:00 PM IST'
    },
    south: {
      region: 'South India',
      phone: '+91 80 4567 8901',
      email: 'south@arogya-prepare.com',
      languages: ['English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'],
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi'],
      hours: '9:00 AM - 7:00 PM IST'
    },
    east: {
      region: 'East India',
      phone: '+91 33 4567 8902',
      email: 'east@arogya-prepare.com',
      languages: ['Bengali', 'English', 'Hindi'],
      cities: ['Kolkata', 'Bhubaneswar', 'Guwahati'],
      hours: '9:00 AM - 7:00 PM IST'
    },
    west: {
      region: 'West India',
      phone: '+91 22 4567 8903',
      email: 'west@arogya-prepare.com',
      languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat'],
      hours: '9:00 AM - 7:00 PM IST'
    }
  };

  const emergencyOptions = [
    {
      title: 'Festival Season Preparation',
      description: 'Rapid deployment before Diwali, Holi, Durga Puja, and other major festivals',
      timeline: '48-72 hours',
      icon: 'Zap'
    },
    {
      title: 'Epidemic Response Setup',
      description: 'Emergency implementation during disease outbreaks or health emergencies',
      timeline: '24-48 hours',
      icon: 'Shield'
    },
    {
      title: 'Pollution Surge Readiness',
      description: 'Quick setup before predicted air quality deterioration periods',
      timeline: '48 hours',
      icon: 'Wind'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Immediate assistance during Indian business hours',
      availability: 'Mon-Sat, 9 AM - 9 PM IST',
      icon: 'MessageCircle',
      action: 'Start Chat'
    },
    {
      title: 'Technical Support',
      description: 'For existing customers with technical queries',
      availability: '24/7 for critical issues',
      icon: 'Settings',
      action: 'Contact Support'
    },
    {
      title: 'Training Resources',
      description: 'Access training materials and documentation',
      availability: 'Always available',
      icon: 'BookOpen',
      action: 'Access Resources'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Regional Contact Options */}
      <div className="bg-white rounded-xl shadow-clinical-lg p-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Regional Contact Centers</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(regionalContacts)?.map(([key, contact]) => (
            <button
              key={key}
              onClick={() => setSelectedRegion(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedRegion === key
                  ? 'bg-blue-600 text-white' :'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {contact?.region}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} color="rgb(37, 99, 235)" />
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p className="text-slate-600">{regionalContacts?.[selectedRegion]?.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} color="rgb(37, 99, 235)" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">{regionalContacts?.[selectedRegion]?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} color="rgb(37, 99, 235)" />
                <div>
                  <p className="font-medium text-slate-900">Business Hours</p>
                  <p className="text-slate-600">{regionalContacts?.[selectedRegion]?.hours}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-slate-900 mb-2">Language Support</p>
                <div className="flex flex-wrap gap-2">
                  {regionalContacts?.[selectedRegion]?.languages?.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium text-slate-900 mb-2">Coverage Cities</p>
                <p className="text-slate-600">{regionalContacts?.[selectedRegion]?.cities?.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Implementation */}
      <div className="bg-white rounded-xl shadow-clinical-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="AlertTriangle" size={24} color="rgb(217, 119, 6)" />
          <h3 className="text-2xl font-semibold text-slate-900">Emergency Implementation</h3>
        </div>

        <p className="text-slate-600 mb-6">
          Need rapid deployment before a health crisis? Our emergency implementation team can get you operational quickly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyOptions?.map((option, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Icon name={option?.icon} size={20} color="rgb(217, 119, 6)" />
                </div>
                <h4 className="font-semibold text-slate-900">{option?.title}</h4>
              </div>
              
              <p className="text-slate-600 text-sm mb-4">{option?.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-600">
                  Setup: {option?.timeline}
                </span>
                <Button variant="outline" size="sm">
                  Request
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-orange-800">
            <strong>Emergency Hotline:</strong> +91 98765 43210 (Available 24/7 for critical healthcare situations)
          </p>
        </div>
      </div>
      {/* Support Channels */}
      <div className="bg-white rounded-xl shadow-clinical-lg p-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Support Channels</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels?.map((channel, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Icon name={channel?.icon} size={24} color="rgb(37, 99, 235)" />
              </div>
              
              <h4 className="font-semibold text-slate-900 mb-2">{channel?.title}</h4>
              <p className="text-slate-600 text-sm mb-3">{channel?.description}</p>
              <p className="text-xs text-slate-500 mb-4">{channel?.availability}</p>
              
              <Button variant="outline" size="sm" fullWidth>
                {channel?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;