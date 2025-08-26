import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState('delhi');

  const offices = {
    delhi: {
      city: 'New Delhi',
      address: 'Arogya-Prepare Technologies Pvt. Ltd.\nPlot No. 45, Sector 44\nGurgaon, Haryana 122003',
      phone: '+91 11 4567 8900',
      email: 'delhi@arogya-prepare.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      coordinates: '28.4595,77.0266',
      manager: 'Dr. Rajesh Kumar',
      specialization: 'North India Healthcare Systems',
      languages: ['Hindi', 'English', 'Punjabi'],
      nearbyHospitals: ['AIIMS Delhi', 'Fortis Healthcare', 'Max Healthcare', 'Apollo Hospitals']
    },
    mumbai: {
      city: 'Mumbai',
      address: 'Arogya-Prepare Technologies Pvt. Ltd.\nOffice No. 1204, 12th Floor\nBandra Kurla Complex\nMumbai, Maharashtra 400051',
      phone: '+91 22 4567 8903',
      email: 'mumbai@arogya-prepare.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      coordinates: '19.0760,72.8777',
      manager: 'Ms. Priya Sharma',
      specialization: 'West India Healthcare Networks',
      languages: ['English', 'Hindi', 'Marathi'],
      nearbyHospitals: ['Tata Memorial Hospital', 'Kokilaben Hospital', 'Lilavati Hospital', 'Hinduja Hospital']
    },
    bangalore: {
      city: 'Bangalore',
      address: 'Arogya-Prepare Technologies Pvt. Ltd.\nPrestige Tech Park, Tower 4\nKadubeesanahalli, Outer Ring Road\nBangalore, Karnataka 560103',
      phone: '+91 80 4567 8901',
      email: 'bangalore@arogya-prepare.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      coordinates: '12.9716,77.5946',
      manager: 'Dr. Suresh Reddy',
      specialization: 'South India Medical Technology',
      languages: ['English', 'Kannada', 'Tamil', 'Telugu'],
      nearbyHospitals: ['Manipal Hospital', 'Narayana Health', 'Fortis Bangalore', 'Apollo Hospitals']
    },
    chennai: {
      city: 'Chennai',
      address: 'Arogya-Prepare Technologies Pvt. Ltd.\nTidel Park, 4th Floor\nTaramani, Chennai\nTamil Nadu 600113',
      phone: '+91 44 4567 8902',
      email: 'chennai@arogya-prepare.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      coordinates: '12.9941,80.2467',
      manager: 'Dr. Lakshmi Narayanan',
      specialization: 'Tamil Nadu Healthcare Innovation',
      languages: ['Tamil', 'English', 'Telugu'],
      nearbyHospitals: ['Apollo Chennai', 'Fortis Malar', 'MIOT Hospital', 'Gleneagles Global Health']
    }
  };

  const currentOffice = offices?.[selectedOffice];

  return (
    <div className="bg-white rounded-xl shadow-clinical-lg p-8">
      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Office Locations</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(offices)?.map(([key, office]) => (
          <button
            key={key}
            onClick={() => setSelectedOffice(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedOffice === key
                ? 'bg-blue-600 text-white' :'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {office?.city}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Office Details */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-900 mb-4">{currentOffice?.city} Office</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} color="rgb(37, 99, 235)" className="mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Address</p>
                  <p className="text-slate-600 whitespace-pre-line">{currentOffice?.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} color="rgb(37, 99, 235)" />
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p className="text-slate-600">{currentOffice?.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} color="rgb(37, 99, 235)" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">{currentOffice?.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} color="rgb(37, 99, 235)" className="mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Office Hours</p>
                  <p className="text-slate-600 whitespace-pre-line">{currentOffice?.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="User" size={20} color="rgb(37, 99, 235)" />
              <div>
                <p className="font-medium text-slate-900">Regional Manager</p>
                <p className="text-slate-600">{currentOffice?.manager}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Target" size={20} color="rgb(37, 99, 235)" />
              <div>
                <p className="font-medium text-slate-900">Specialization</p>
                <p className="text-slate-600">{currentOffice?.specialization}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium text-slate-900 mb-2">Language Support</p>
              <div className="flex flex-wrap gap-2">
                {currentOffice?.languages?.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-slate-900 mb-2">Partner Hospitals Nearby</p>
              <div className="grid grid-cols-2 gap-2">
                {currentOffice?.nearbyHospitals?.map((hospital, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Building2" size={16} color="rgb(5, 150, 105)" />
                    <span className="text-sm text-slate-600">{hospital}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button variant="default" iconName="Navigation" iconPosition="left">
              Get Directions
            </Button>
            <Button variant="outline" iconName="Calendar" iconPosition="left">
              Schedule Visit
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="bg-slate-100 rounded-lg overflow-hidden h-96">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={`${currentOffice?.city} Office Location`}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${currentOffice?.coordinates}&z=15&output=embed`}
            className="border-0"
          />
        </div>
      </div>
      {/* Additional Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Car" size={20} color="rgb(5, 150, 105)" />
            <h5 className="font-medium text-green-900">Parking Available</h5>
          </div>
          <p className="text-sm text-green-800">Free parking for visitors and demo attendees</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Wifi" size={20} color="rgb(37, 99, 235)" />
            <h5 className="font-medium text-blue-900">High-Speed Internet</h5>
          </div>
          <p className="text-sm text-blue-800">Dedicated connection for live system demonstrations</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Coffee" size={20} color="rgb(147, 51, 234)" />
            <h5 className="font-medium text-purple-900">Refreshments</h5>
          </div>
          <p className="text-sm text-purple-800">Complimentary tea, coffee, and snacks during visits</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;