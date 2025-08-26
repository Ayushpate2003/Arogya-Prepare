import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Platform Overview', path: '/platform-overview', icon: 'BarChart3' },
    { name: 'Contact & Demo', path: '/contact-demo', icon: 'Phone' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <nav className="bg-white shadow-clinical border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={24} color="white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Arogya-Prepare</h1>
              <p className="text-xs text-slate-500">Predictive Healthcare Intelligence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActivePath(item?.path)
                    ? 'bg-blue-100 text-blue-700' :'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" iconName="Play" iconPosition="left">
              Watch Demo
            </Button>
            <Button variant="default" size="sm" iconName="Calendar" iconPosition="left">
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActivePath(item?.path)
                      ? 'bg-blue-100 text-blue-700' :'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              <Button variant="outline" size="sm" fullWidth iconName="Play" iconPosition="left">
                Watch Demo
              </Button>
              <Button variant="default" size="sm" fullWidth iconName="Calendar" iconPosition="left">
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;