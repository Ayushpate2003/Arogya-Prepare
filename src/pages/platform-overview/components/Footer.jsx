import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Intelligent Dashboard', href: '#dashboard' },
        { name: 'Predictive Analytics', href: '#analytics' },
        { name: 'Resource Optimization', href: '#resources' },
        { name: 'Patient Gateway', href: '#patient-gateway' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Hospital Management', href: '#' },
        { name: 'Surge Prediction', href: '#' },
        { name: 'Staff Optimization', href: '#' },
        { name: 'Supply Chain', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'API Documentation', href: '#' },
        { name: 'Integration Guide', href: '#' },
        { name: 'Best Practices', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '/contact-demo' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' },
    { name: 'GitHub', icon: 'Github', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Icon name="Activity" size={28} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Arogya-Prepare</div>
                <div className="text-sm text-slate-400">Healthcare Intelligence Platform</div>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 max-w-md">
              Transforming Indian healthcare from reactive to proactive through AI-powered surge prediction, 
              cultural intelligence, and environmental awareness.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-semibold text-white mb-4">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    {link?.href?.startsWith('/') ? (
                      <Link
                        to={link?.href}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link?.name}
                      </Link>
                    ) : (
                      <a
                        href={link?.href}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link?.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>© {currentYear} Arogya-Prepare. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-emerald-500" />
                <span>HIPAA-Equivalent Compliant</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Made in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;