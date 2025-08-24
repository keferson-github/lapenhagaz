import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load das páginas de política
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('../pages/CookiePolicy'));
const TermsOfUse = React.lazy(() => import('../pages/TermsOfUse'));

const LegalPages: React.FC = () => {
  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
    </Routes>
  );
};

export default LegalPages;