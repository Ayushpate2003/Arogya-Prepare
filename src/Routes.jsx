import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ContactDemo from './pages/contact-demo';
import AboutArogyaPrepare from './pages/about-arogya-prepare';
import PricingImplementation from './pages/pricing-implementation';
import PlatformOverview from './pages/platform-overview';
import HealthcareIntelligence from './pages/healthcare-intelligence';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutArogyaPrepare />} />
        <Route path="/contact-demo" element={<ContactDemo />} />
        <Route path="/about-arogya-prepare" element={<AboutArogyaPrepare />} />
        <Route path="/pricing-implementation" element={<PricingImplementation />} />
        <Route path="/platform-overview" element={<PlatformOverview />} />
        <Route path="/healthcare-intelligence" element={<HealthcareIntelligence />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
