import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import FloatingAppLinks from './Component/FloatingAppLinks';
import GoToTopButton from './Component/GoToTopButton';
import ContactUs from './Component/ContactUs';
import InstallSteps from './Component/InstallSteps';
import TradingGuidelines from './Component/TradingGuidelines';
import PrivacyPolicyPage from './Component/PrivacyPolicyPage';
import TermsAndConditionsPage from './Component/TermsAndConditionsPage';
import DisclaimerPage from './Component/DisclaimerPage';

// ✅ Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Scroll to section logic
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when navigating to a new page without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

// Main app content (with AOS initialization)
const AppContent = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';

  // Pages where Navbar & FloatingAppLinks should NOT appear
  const hiddenLayoutRoutes = [
    "/contact-us",
    "/trading-guidelines",
    "/privacy-policy",
    "/terms",
    "/disclaimer"
  ];

  const isFooterPage = hiddenLayoutRoutes.includes(location.pathname);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Hero intersection logic
  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsHeroInView(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollToSection />

      {/* ✅ Only render Navbar if NOT a footer page */}
      {!isFooterPage && <Navbar />}

      {/* ✅ Floating links: hide on hero for normal pages */}
      {!isFooterPage && !isContactPage && (
        <FloatingAppLinks hideOnHeroMobile={isHeroInView} />
      )}

      <GoToTopButton />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/install-steps' element={<InstallSteps />} />
        <Route path='/trading-guidelines' element={<TradingGuidelines />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms' element={<TermsAndConditionsPage />} />
        <Route path='/disclaimer' element={<DisclaimerPage />} />
      </Routes>

      <Footer />
    </>
  );
};

// Router wrapper
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
