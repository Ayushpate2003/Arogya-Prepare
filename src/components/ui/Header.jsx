import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Platform Overview', path: '/platform-overview' },
    { name: 'Healthcare Intelligence', path: '/healthcare-intelligence' },
    { name: 'Pricing', path: '/pricing-implementation' },
    { name: 'About', path: '/about-arogya-prepare' },
  ];

  const secondaryItems = [
    { name: 'Contact & Demo', path: '/contact-demo' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-90 bg-card/95 backdrop-blur-sm border-b border-border shadow-clinical ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 transition-intelligence hover:opacity-80"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-clinical">
                <Icon name="Activity" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full pulse-intelligence"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Arogya-Prepare
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Intelligent Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-intelligence ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-foreground hover:bg-muted'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/contact-demo">
              <Button variant="outline" size="sm" className="transition-intelligence">
                View Demo
              </Button>
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground transition-intelligence"
            >
              Start 14-Day Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-foreground hover:bg-muted transition-micro"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              strokeWidth={2} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/98 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-intelligence ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item?.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button 
                      variant="outline" 
                      fullWidth 
                      className="justify-center transition-intelligence"
                    >
                      {item?.name}
                    </Button>
                  </Link>
                ))}
                <Button 
                  variant="default" 
                  fullWidth 
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground justify-center transition-intelligence"
                >
                  Start 14-Day Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Trust Signal Bar */}
      <div className="hidden md:block bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2 space-x-8 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span>AIIMS Partnership</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} color="var(--color-success)" />
              <span className="breathing-text font-mono">89% Prediction Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={16} color="var(--color-success)" />
              <span>156+ Hospitals Protected</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;