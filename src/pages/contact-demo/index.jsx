import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from './components/Footer';
import DemoBookingForm from './components/DemoBookingForm';
import ContactOptions from './components/ContactOptions';
import OfficeLocationsMap from './components/OfficeLocationsMap';
import GetStartedSection from './components/GetStartedSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ContactDemo = () => {
  const [activeTab, setActiveTab] = useState('demo');

  const tabs = [
    { id: 'demo', label: 'Book Demo', icon: 'Calendar' },
    { id: 'contact', label: 'Contact Options', icon: 'Phone' },
    { id: 'locations', label: 'Office Locations', icon: 'MapPin' },
    { id: 'get-started', label: 'Get Started', icon: 'Rocket' }
  ];

  const heroStats = [
    { label: 'Hospitals Served', value: '500+', icon: 'Building2' },
    { label: 'Predictions Made', value: '2M+', icon: 'BarChart3' },
    { label: 'Lives Impacted', value: '10M+', icon: 'Heart' },
    { label: 'Accuracy Rate', value: '94.2%', icon: 'Target' }
  ];

  const testimonials = [
    {
      quote: "Arogya-Prepare helped us reduce patient wait times by 40% during Diwali season. The predictive insights were incredibly accurate.",
      author: "Dr. Rajesh Kumar",
      position: "Chief Medical Officer",
      hospital: "Apollo Hospitals, Delhi",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The emergency implementation during COVID-19 surge was seamless. We were prepared before the crisis hit our region.",
      author: "Ms. Priya Sharma",
      position: "Hospital Administrator",
      hospital: "Fortis Healthcare, Mumbai",
      avatar: "https://images.unsplash.com/photo-1594824475317-d0d4e8b4e3e5?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "ROI was evident within 3 months. Staff optimization alone saved us ₹2.5 crores annually while improving patient satisfaction.",
      author: "Dr. Suresh Reddy",
      position: "CEO",
      hospital: "Narayana Health, Bangalore",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'demo':
        return <DemoBookingForm />;
      case 'contact':
        return <ContactOptions />;
      case 'locations':
        return <OfficeLocationsMap />;
      case 'get-started':
        return <GetStartedSection />;
      default:
        return <DemoBookingForm />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Contact & Demo - Arogya-Prepare | Predictive Healthcare Intelligence</title>
        <meta name="description" content="Book a personalized demo of Arogya-Prepare's predictive healthcare platform. Contact our regional offices across India for emergency implementation and partnership opportunities." />
        <meta name="keywords" content="healthcare demo, hospital management contact, predictive analytics demo, healthcare technology support, medical software consultation" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section
        className="relative text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/contectandinfobackgroung.jpg')" }}
      >
        {/* Blur + tint overlays */}
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block text-blue-200">Healthcare Operations?</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with our healthcare technology specialists for personalized demonstrations, 
              emergency implementations, and partnership opportunities across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="secondary" 
                size="lg" 
                iconName="Play" 
                iconPosition="left"
                onClick={() => setActiveTab('demo')}
              >
                Book Live Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                iconName="Phone" 
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => setActiveTab('contact')}
              >
                Contact Sales
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                iconName="Zap" 
                iconPosition="left"
                className="text-white hover:bg-blue-500"
                onClick={() => setActiveTab('contact')}
              >
                Emergency Setup
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-3">
                    <Icon name={stat?.icon} size={24} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat?.value}</div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "rgb(59 130 246 / var(--tw-bg-opacity))", "--tw-bg-opacity": "1" }}
                  >
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab?.id
                    ? 'border-blue-600 text-blue-600' :'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderTabContent()}
      </main>
      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Leading Healthcare Institutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See how hospitals across India are transforming their operations with Arogya-Prepare's predictive intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} color="rgb(251, 191, 36)" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6">
                  "{testimonial?.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-slate-900">{testimonial?.author}</p>
                    <p className="text-sm text-slate-600">{testimonial?.position}</p>
                    <p className="text-sm text-slate-500">{testimonial?.hospital}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Emergency Contact Banner */}
      <section className="bg-orange-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-orange-500 rounded-lg">
                <Icon name="AlertTriangle" size={24} color="white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Healthcare Emergency?</h3>
                <p className="text-orange-100">Need immediate system deployment for crisis management?</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" iconName="Phone" iconPosition="left">
                Call: +91 98765 43210
              </Button>
              <Button variant="outline" iconName="Mail" iconPosition="left" className="border-white text-white hover:bg-white hover:text-orange-600">
                emergency@arogya-prepare.com
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactDemo;