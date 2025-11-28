import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = {
    product: {
      title: 'Product',
      links: [
        { name: 'Platform Overview', path: '/platform-overview' },
        { name: 'Predictive Analytics', path: '/platform-overview' },
        { name: 'Resource Management', path: '/platform-overview' },
        { name: 'Patient Portal', path: '/platform-overview' },
        { name: 'API Documentation', path: '/platform-overview' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Hospital Management', path: '/platform-overview' },
        { name: 'Surge Preparedness', path: '/platform-overview' },
        { name: 'Festival Planning', path: '/platform-overview' },
        { name: 'Epidemic Response', path: '/platform-overview' },
        { name: 'Quality Improvement', path: '/platform-overview' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact-demo' },
        { name: 'Help Center', path: '/contact-demo' },
        { name: 'Training Resources', path: '/contact-demo' },
        { name: 'System Status', path: '/contact-demo' },
        { name: 'Community Forum', path: '/contact-demo' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/homepage' },
        { name: 'Careers', path: '/homepage' },
        { name: 'Press & Media', path: '/homepage' },
        { name: 'Partners', path: '/contact-demo' },
        { name: 'Research', path: '/homepage' }
      ]
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'HIPAA Compliant',
    'NABH Accredited',
    'DPDP Act Compliant'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/images/no_image.jpg"
                alt="Arogya-Prepare Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Arogya-Prepare</h3>
                <p className="text-sm text-slate-400">Predictive Healthcare Intelligence</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Transforming reactive hospital management into proactive surge preparedness through AI-powered healthcare intelligence and predictive analytics.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={16} color="rgb(148, 163, 184)" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections)?.map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-white mb-4">{section?.title}</h4>
              <ul className="space-y-2">
                {section?.links?.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link?.path}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={20} color="rgb(59, 130, 246)" />
              <div>
                <p className="font-medium">24/7 Emergency Hotline</p>
                <p className="text-slate-400 text-sm">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} color="rgb(59, 130, 246)" />
              <div>
                <p className="font-medium">General Inquiries</p>
                <p className="text-slate-400 text-sm">contact@arogya-prepare.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={20} color="rgb(59, 130, 246)" />
              <div>
                <p className="font-medium">Headquarters</p>
                <p className="text-slate-400 text-sm">Gurgaon, Haryana, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-800 pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="rgb(34, 197, 94)" />
                <span className="text-slate-400 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <span>© {currentYear} Arogya-Prepare Technologies Pvt. Ltd.</span>
              <Link to="/homepage" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/homepage" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/homepage" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Icon name="Globe" size={16} />
              <span>Made in India for Global Healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;