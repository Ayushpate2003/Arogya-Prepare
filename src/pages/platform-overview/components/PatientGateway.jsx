import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PatientGateway = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const languages = [
    { code: 'english', name: 'English', native: 'English' },
    { code: 'hindi', name: 'Hindi', native: 'हिंदी' },
    { code: 'tamil', name: 'Tamil', native: 'தமிழ்' },
    { code: 'bengali', name: 'Bengali', native: 'বাংলা' }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiology",
      experience: 15,
      rating: 4.8,
      availability: "Available Now",
      waitTime: "15 mins",
      languages: ["English", "Hindi"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hospital: "Apollo Hospital",
      consultationFee: 800,
      status: "online"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Respiratory Medicine",
      experience: 12,
      rating: 4.9,
      availability: "Available in 30 mins",
      waitTime: "30 mins",
      languages: ["English", "Hindi", "Tamil"],
      image: "https://images.unsplash.com/photo-1594824388853-d0c9d0b7b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hospital: "Fortis Healthcare",
      consultationFee: 1200,
      status: "busy"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "Emergency Medicine",
      experience: 8,
      rating: 4.7,
      availability: "Available Now",
      waitTime: "5 mins",
      languages: ["English", "Hindi", "Gujarati"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hospital: "Max Healthcare",
      consultationFee: 600,
      status: "online"
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      specialty: "Pediatrics",
      experience: 18,
      rating: 4.9,
      availability: "Available in 1 hour",
      waitTime: "60 mins",
      languages: ["English", "Telugu", "Hindi"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hospital: "AIIMS Delhi",
      consultationFee: 500,
      status: "scheduled"
    }
  ];

  const healthAdvisories = [
    {
      title: "Karva Chauth Health Tips",
      description: "Essential guidelines for safe fasting during Karva Chauth. Stay hydrated and monitor blood sugar levels.",
      urgency: "medium",
      icon: "Heart",
      readTime: "3 min read"
    },
    {
      title: "Diwali Air Quality Alert",
      description: "Air pollution levels expected to rise. Use masks and avoid outdoor activities during peak hours.",
      urgency: "high",
      icon: "AlertTriangle",
      readTime: "2 min read"
    },
    {
      title: "Festival Season Nutrition",
      description: "Maintain balanced nutrition during festival celebrations. Tips for healthy eating during festivities.",
      urgency: "low",
      icon: "Apple",
      readTime: "5 min read"
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'respiratory', label: 'Respiratory Medicine' },
    { value: 'emergency', label: 'Emergency Medicine' },
    { value: 'pediatrics', label: 'Pediatrics' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-emerald-500';
      case 'busy': return 'bg-amber-500';
      case 'scheduled': return 'bg-blue-500';
      default: return 'bg-slate-400';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-amber-200 bg-amber-50';
      case 'low': return 'border-emerald-200 bg-emerald-50';
      default: return 'border-slate-200 bg-slate-50';
    }
  };

  const filteredDoctors = doctors?.filter(doctor => {
    const matchesSearch = doctor?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         doctor?.specialty?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor?.specialty?.toLowerCase()?.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Patient Gateway
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Streamlined registration and doctor discovery with smart search and real-time availability indicators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Doctor Discovery */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search and Filters */}
              <div className="bg-white rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Find Your Doctor</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search doctors or specialties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e?.target?.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e?.target?.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {specialties?.map(specialty => (
                      <option key={specialty?.value} value={specialty?.value}>
                        {specialty?.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Globe" size={16} className="text-slate-600" />
                  <span className="text-sm text-slate-600 mr-2">Language:</span>
                  <div className="flex gap-2">
                    {languages?.map(lang => (
                      <button
                        key={lang?.code}
                        onClick={() => setSelectedLanguage(lang?.code)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedLanguage === lang?.code
                            ? 'bg-blue-100 text-blue-700' :'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {lang?.native}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Doctor Cards */}
              <div className="space-y-4">
                {filteredDoctors?.map(doctor => (
                  <div key={doctor?.id} className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Image
                          src={doctor?.image}
                          alt={doctor?.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(doctor?.status)} rounded-full border-2 border-white`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-slate-900">{doctor?.name}</h4>
                            <p className="text-blue-600 font-medium">{doctor?.specialty}</p>
                            <p className="text-sm text-slate-600">{doctor?.hospital}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Icon name="Star" size={16} className="text-amber-400 fill-current" />
                              <span className="font-medium text-slate-900">{doctor?.rating}</span>
                            </div>
                            <p className="text-sm text-slate-600">{doctor?.experience} years exp.</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-slate-500">Availability</p>
                            <p className="text-sm font-medium text-emerald-600">{doctor?.availability}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Wait Time</p>
                            <p className="text-sm font-medium text-slate-900">{doctor?.waitTime}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Consultation</p>
                            <p className="text-sm font-medium text-slate-900">₹{doctor?.consultationFee}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Languages</p>
                            <p className="text-sm font-medium text-slate-900">{doctor?.languages?.join(', ')}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Book Appointment
                          </button>
                          <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Advisories */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Health Advisories</h3>
                
                <div className="space-y-4">
                  {healthAdvisories?.map((advisory, index) => (
                    <div key={index} className={`p-4 rounded-xl border-2 ${getUrgencyColor(advisory?.urgency)}`}>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-white rounded-lg">
                          <Icon name={advisory?.icon} size={20} className="text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">{advisory?.title}</h4>
                          <p className="text-sm text-slate-600 mb-2">{advisory?.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500">{advisory?.readTime}</span>
                            <button className="text-xs text-blue-600 font-medium hover:text-blue-700">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Registration */}
              <div className="bg-white rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Quick Registration</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Emergency Contact</label>
                    <input
                      type="tel"
                      placeholder="Emergency contact number"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientGateway;