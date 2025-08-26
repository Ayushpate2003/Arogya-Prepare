import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CaseStudySection = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const caseStudies = [
    {
      hospital: "Apollo Hospitals",
      location: "Delhi",
      event: "Diwali 2023",
      challenge: "Expected 40% surge in emergency admissions due to firecracker injuries and pollution-related respiratory issues",
      solution: "Implemented Arogya-Prepare\'s predictive analytics 2 weeks before Diwali",
      results: {
        surgeReduction: "40%",
        staffOptimization: "25%",
        patientSatisfaction: "92%",
        costSavings: "₹15 lakhs"
      },
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "Arogya-Prepare transformed our Diwali preparedness. We prevented overcrowding and maintained quality care throughout the festival period.",
      testimonialAuthor: "Dr. Rajesh Malhotra, Chief Medical Officer"
    },
    {
      hospital: "Fortis Healthcare",
      location: "Mumbai",
      event: "Monsoon Season 2023",
      challenge: "Dengue and waterborne disease outbreak prediction during heavy monsoon",
      solution: "Used environmental intelligence and historical pattern analysis",
      results: {
        surgeReduction: "35%",
        staffOptimization: "30%",
        patientSatisfaction: "89%",
        costSavings: "₹12 lakhs"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "The AI predictions helped us prepare for the dengue surge 10 days in advance. Our response was swift and effective.",
      testimonialAuthor: "Dr. Priya Nair, Emergency Department Head"
    },
    {
      hospital: "Max Healthcare",
      location: "Bangalore",
      event: "Air Pollution Crisis 2023",
      challenge: "Severe air quality deterioration leading to respiratory emergency surge",
      solution: "Real-time AQI monitoring integrated with patient flow predictions",
      results: {
        surgeReduction: "45%",
        staffOptimization: "35%",
        patientSatisfaction: "94%",
        costSavings: "₹18 lakhs"
      },
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "The correlation between AQI levels and patient admissions was incredibly accurate. We were prepared before the crisis hit.",
      testimonialAuthor: "Dr. Amit Kumar, Pulmonology Department"
    }
  ];

  const impactMetrics = [
    {
      metric: "Hospitals Served",
      value: "150+",
      icon: "Building2",
      color: "text-blue-600"
    },
    {
      metric: "Surge Events Predicted",
      value: "500+",
      icon: "TrendingUp",
      color: "text-emerald-600"
    },
    {
      metric: "Lives Impacted",
      value: "2M+",
      icon: "Heart",
      color: "text-red-600"
    },
    {
      metric: "Cost Savings",
      value: "₹50Cr+",
      icon: "IndianRupee",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Real-World Impact Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how leading Indian hospitals prevented overcrowding and saved lives using Arogya-Prepare's predictive intelligence
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {impactMetrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white mb-4 ${metric?.color}`}>
                  <Icon name={metric?.icon} size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{metric?.value}</div>
                <div className="text-sm text-slate-600">{metric?.metric}</div>
              </div>
            ))}
          </div>

          {/* Case Study Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-xl p-1 inline-flex">
              {caseStudies?.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCaseStudy === index
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {study?.hospital}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Icon name="Award" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{caseStudies?.[activeCaseStudy]?.hospital}</h3>
                    <p className="text-slate-600">{caseStudies?.[activeCaseStudy]?.location} • {caseStudies?.[activeCaseStudy]?.event}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={16} className="text-amber-600" />
                      Challenge
                    </h4>
                    <p className="text-slate-700">{caseStudies?.[activeCaseStudy]?.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Icon name="Lightbulb" size={16} className="text-blue-600" />
                      Solution
                    </h4>
                    <p className="text-slate-700">{caseStudies?.[activeCaseStudy]?.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Icon name="BarChart3" size={16} className="text-emerald-600" />
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-600">{caseStudies?.[activeCaseStudy]?.results?.surgeReduction}</div>
                        <div className="text-sm text-slate-600">Surge Reduction</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{caseStudies?.[activeCaseStudy]?.results?.staffOptimization}</div>
                        <div className="text-sm text-slate-600">Staff Optimization</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">{caseStudies?.[activeCaseStudy]?.results?.patientSatisfaction}</div>
                        <div className="text-sm text-slate-600">Patient Satisfaction</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-amber-600">{caseStudies?.[activeCaseStudy]?.results?.costSavings}</div>
                        <div className="text-sm text-slate-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mb-8">
                  <Image
                    src={caseStudies?.[activeCaseStudy]?.image}
                    alt={`${caseStudies?.[activeCaseStudy]?.hospital} case study`}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <div className="bg-white p-6 rounded-2xl border">
                  <div className="flex items-start gap-4">
                    <Icon name="Quote" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-4">"{caseStudies?.[activeCaseStudy]?.testimonial}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{caseStudies?.[activeCaseStudy]?.testimonialAuthor}</p>
                          <p className="text-sm text-slate-600">{caseStudies?.[activeCaseStudy]?.hospital}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Transform Your Hospital?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 150+ hospitals across India that trust Arogya-Prepare to predict, prepare, and protect their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;