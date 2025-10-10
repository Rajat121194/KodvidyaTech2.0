import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Utilities
import ScrollToTop from "./Other/ScrollToTop.jsx";
import WelcomeOverlay from "./Other/WelcomeOverlay.jsx";

// Pages
import HomePage from "./App/Home/HomePage.jsx";
import AboutPage from "./App/AboutUs/AboutPage.jsx";
import PortfolioPage from "./App/Portfolio/PortfolioPage.jsx";
import CareerPage from "./App/Career/CareerPage.jsx";
import TrainingPage from "./App/Training/TrainingPage.jsx";
import ContactUsPage from "./App/ContactUs/ContactUsPage.jsx";

// Services
import WebDevelopment from "./App/Services/WebDev/WebDev.jsx";
import MobileApps from "./App/Services/Mobile-App/MobileApp.jsx";
import UIUXDesign from "./App/UI&UX/UIUX.jsx";
import InternetMarketing from "./App/DigiMarketing/DigiMarketing.jsx";

// Admin
import AdminDashboard from "./App/Home/AdminDashboard.jsx";

function App() {
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);

  // Load token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  // Dynamic Page Titles
  useEffect(() => {
    const pageTitles = {
      "/": "Home | CodeMechanism",
      "/about": "About | CodeMechanism",
      "/portfolio": "Portfolio | CodeMechanism",
      "/careers": "Careers | CodeMechanism",
      "/training": "Training | CodeMechanism",
      "/contact": "Contact | CodeMechanism",
      "/services/web-development": "Web Development | CodeMechanism",
      "/services/mobile-apps": "Mobile Apps | CodeMechanism",
      "/services/ui-ux-design": "UI-UX Design | CodeMechanism",
      "/services/internet-marketing": "Internet Marketing | CodeMechanism",
      "/admin": "Admin Dashboard | CodeMechanism",
    };
    document.title = pageTitles[location.pathname] || "CodeMechanism";
  }, [location.pathname]);

  // Overlay hide timer
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Logout handler
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <>
      <WelcomeOverlay isVisible={showOverlay} />
      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage setToken={setToken} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route
          path="/services/internet-marketing"
          element={<InternetMarketing />}
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            token ? (
              <AdminDashboard token={token} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
