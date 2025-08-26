import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            AI-Powered Healthcare Intelligence
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Healthcare from
            <span className="text-blue-600 block">Reactive to Proactive</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Arogya-Prepare combines advanced analytics, cultural awareness, and environmental intelligence to revolutionize how Indian hospitals anticipate and respond to patient surges during festivals, pollution spikes, and epidemic outbreaks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-emerald-600">
              <Icon name="CheckCircle" size={20} />
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600">
              <Icon name="Shield" size={20} />
              <span className="font-medium">HIPAA-Equivalent Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600">
              <Icon name="Zap" size={20} />
              <span className="font-medium">Real-time Predictions</span>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Modern hospital dashboard interface"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;