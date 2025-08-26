import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSpecs = () => {
  const [activeSpec, setActiveSpec] = useState('compliance');

  const specifications = {
    compliance: {
      title: "Security & Compliance",
      icon: "Shield",
      items: [
        {
          feature: "HIPAA-Equivalent Compliance",
          description: "Full compliance with Indian healthcare data protection standards",
          status: "certified",
          details: "End-to-end encryption, audit trails, access controls"
        },
        {
          feature: "DPDP Act 2023 Ready",
          description: "Compliant with India\'s Digital Personal Data Protection Act",
          status: "certified",
          details: "Data localization, consent management, breach notification"
        },
        {
          feature: "ISO 27001 Certified",
          description: "International standard for information security management",
          status: "certified",
          details: "Risk assessment, security controls, continuous monitoring"
        },
        {
          feature: "SOC 2 Type II",
          description: "Security, availability, and confidentiality controls",
          status: "certified",
          details: "Third-party audited security and operational controls"
        }
      ]
    },
    performance: {
      title: "Performance & Reliability",
      icon: "Zap",
      items: [
        {
          feature: "99.9% Uptime SLA",
          description: "Guaranteed availability with redundant infrastructure",
          status: "guaranteed",
          details: "Multi-region deployment, automatic failover, 24/7 monitoring"
        },
        {
          feature: "Sub-3 Second Load Times",
          description: "Optimized for fast data visualization and real-time updates",
          status: "optimized",
          details: "CDN delivery, caching layers, optimized queries"
        },
        {
          feature: "Real-time Processing",
          description: "Live data ingestion and instant prediction updates",
          status: "real-time",
          details: "Stream processing, WebSocket connections, event-driven architecture"
        },
        {
          feature: "Auto-scaling Infrastructure",
          description: "Handles surge in usage during peak healthcare events",
          status: "scalable",
          details: "Kubernetes orchestration, horizontal scaling, load balancing"
        }
      ]
    },
    integration: {
      title: "Integration Capabilities",
      icon: "Plug",
      items: [
        {
          feature: "HIS System Integration",
          description: "Seamless connection with existing Hospital Information Systems",
          status: "compatible",
          details: "HL7 FHIR, REST APIs, custom connectors for major HIS vendors"
        },
        {
          feature: "EMR/EHR Compatibility",
          description: "Works with leading Electronic Medical Record systems",
          status: "compatible",
          details: "Epic, Cerner, Allscripts, and Indian EMR systems"
        },
        {
          feature: "Laboratory Integration",
          description: "Direct connection to lab systems for real-time results",
          status: "integrated",
          details: "LIS integration, automated result processing, alert generation"
        },
        {
          feature: "Pharmacy Systems",
          description: "Integration with hospital and external pharmacy networks",
          status: "integrated",
          details: "Inventory tracking, supply chain optimization, automated ordering"
        }
      ]
    },
    ai: {
      title: "AI & Analytics",
      icon: "Brain",
      items: [
        {
          feature: "Machine Learning Models",
          description: "Advanced algorithms trained on Indian healthcare data",
          status: "advanced",
          details: "Ensemble models, deep learning, continuous model improvement"
        },
        {
          feature: "Explainable AI",
          description: "Transparent predictions with clear reasoning and confidence scores",
          status: "transparent",
          details: "SHAP values, feature importance, decision trees, audit trails"
        },
        {
          feature: "Cultural Intelligence",
          description: "AI models that understand Indian festivals, customs, and patterns",
          status: "specialized",
          details: "Festival calendars, cultural health patterns, regional variations"
        },
        {
          feature: "Continuous Learning",
          description: "Models improve accuracy through ongoing data analysis",
          status: "adaptive",
          details: "Online learning, feedback loops, model versioning, A/B testing"
        }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'certified': return 'bg-emerald-100 text-emerald-700';
      case 'guaranteed': return 'bg-blue-100 text-blue-700';
      case 'optimized': return 'bg-purple-100 text-purple-700';
      case 'real-time': return 'bg-amber-100 text-amber-700';
      case 'scalable': return 'bg-indigo-100 text-indigo-700';
      case 'compatible': return 'bg-teal-100 text-teal-700';
      case 'integrated': return 'bg-cyan-100 text-cyan-700';
      case 'advanced': return 'bg-rose-100 text-rose-700';
      case 'transparent': return 'bg-orange-100 text-orange-700';
      case 'specialized': return 'bg-violet-100 text-violet-700';
      case 'adaptive': return 'bg-pink-100 text-pink-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'certified': return 'CheckCircle';
      case 'guaranteed': return 'Shield';
      case 'optimized': return 'Zap';
      case 'real-time': return 'Clock';
      case 'scalable': return 'TrendingUp';
      case 'compatible': return 'Link';
      case 'integrated': return 'Plug';
      case 'advanced': return 'Brain';
      case 'transparent': return 'Eye';
      case 'specialized': return 'Star';
      case 'adaptive': return 'RefreshCw';
      default: return 'Info';
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure built for Indian healthcare with world-class security and performance standards
            </p>
          </div>

          {/* Specification Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 inline-flex shadow-sm border">
              {Object.entries(specifications)?.map(([key, spec]) => (
                <button
                  key={key}
                  onClick={() => setActiveSpec(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeSpec === key
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon name={spec?.icon} size={20} />
                  <span className="hidden sm:inline">{spec?.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Specification Content */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Icon name={specifications?.[activeSpec]?.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{specifications?.[activeSpec]?.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specifications?.[activeSpec]?.items?.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getStatusColor(item?.status)}`}>
                        <Icon name={getStatusIcon(item?.status)} size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item?.feature}</h4>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(item?.status)}`}>
                          {item?.status?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">{item?.description}</p>
                  
                  <div className="bg-white p-4 rounded-xl border">
                    <p className="text-sm text-slate-600 font-medium mb-2">Technical Details:</p>
                    <p className="text-sm text-slate-700">{item?.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Technical Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
                <Icon name="Globe" size={32} className="text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Global Standards</h4>
              <p className="text-slate-600">
                Built with international healthcare standards while being optimized for Indian healthcare ecosystem
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">24/7 Support</h4>
              <p className="text-slate-600">
                Dedicated technical support team with healthcare domain expertise available round the clock
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                <Icon name="Rocket" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Rapid Deployment</h4>
              <p className="text-slate-600">
                Quick implementation with minimal disruption to existing hospital operations and workflows
              </p>
            </div>
          </div>

          {/* API Documentation CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready for Technical Integration?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Access comprehensive API documentation, integration guides, and technical specifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                View API Documentation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule Technical Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;