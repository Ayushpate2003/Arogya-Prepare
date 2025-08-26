import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Dashboard Overview', href: '/platform-overview' },
        { name: 'Predictive Analytics', href: '/platform-overview' },
        { name: 'Resource Management', href: '/platform-overview' },
        { name: 'API Documentation', href: '/platform-overview' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Hospital Management', href: '/platform-overview' },
        { name: 'Surge Prediction', href: '/platform-overview' },
        { name: 'Staff Optimization', href: '/platform-overview' },
        { name: 'Patient Flow', href: '/platform-overview' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/platform-overview' },
        { name: 'Best Practices', href: '/platform-overview' },
        { name: 'Training Center', href: '/platform-overview' },
        { name: 'Support Portal', href: '/contact-demo' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/platform-overview' },
        { name: 'Contact', href: '/contact-demo' },
        { name: 'Careers', href: '/contact-demo' },
        { name: 'Press Kit', href: '/contact-demo' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' }
  ];

  const certifications = [
    { name: 'DPDP Act Compliant', icon: 'Shield' },
    { name: 'ISO 27001 Certified', icon: 'Award' },
    { name: 'AIIMS Partnership', icon: 'Users' },
    { name: 'Healthcare Grade Security', icon: 'Lock' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Arogya-Prepare</span>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              AI-powered healthcare intelligence platform transforming reactive hospital 
              management into proactive surge preparedness across India.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-semibold text-white mb-4">{section?.title}</h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <h3 className="font-semibold text-white mb-6 text-center">
            Trusted & Certified
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert) => (
              <div
                key={cert?.name}
                className="flex items-center space-x-2 bg-slate-800 rounded-lg p-3"
              >
                <Icon name={cert?.icon} size={16} className="text-green-400" />
                <span className="text-slate-300 text-xs">{cert?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">Emergency Support</h4>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-400">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+91-9876543210</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-400">
                <Icon name="Mail" size={16} />
                <span className="text-sm">hello@arogya-prepare.com</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Headquarters</h4>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-400">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Arogya-Prepare. All rights reserved. Built for Indian Healthcare.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/platform-overview" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/platform-overview" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/platform-overview" className="text-slate-400 hover:text-white transition-colors">
                DPDP Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Live Status Indicator */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg flex items-center space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span>System Operational</span>
      </div>
    </footer>
  );
};

export default Footer;