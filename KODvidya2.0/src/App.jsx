import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Other/ScrollToTop.jsx";
import WelcomeOverlay from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/Other/ WelcomeOverlay.jsx";
import HomePage from "./App/Home/HomePage.jsx";
import AboutPage from "./App/AboutUs/AboutPage.jsx";
import PortfolioPage from "./App/Portfolio/PortfolioPage.jsx";
import CareerPage from "./App/Career/CareerPage.jsx";
import TrainingPage from "./App/Training/TrainingPage.jsx";
import ContactUsPage from "./App/ContactUs/ContactUsPage.jsx";
import WebDevelopment from "./App/Services/WebDev/WebDev.jsx";
import MobileApps from "./App/Services/Mobile-App/MobileApp.jsx";
import UIUXDesign from "./App/UI&UX/UIUX.jsx";
import InternetMarketing from "./App/DigiMarketing/DigiMarketing.jsx";

function App() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const pageTitles = {
      "/": "Home|CodeMechanism",
      "/about": "About|CodeMechanism",
      "/portfolio": "Portfolio|CodeMechanism",
      "/careers": "Careers|CodeMechanism",
      "/training": "Training|CodeMechanism",
      "/contact": "Contact|CodeMechanism",
      "/services/web-development": "Web Development|CodeMechanism",
      "/services/mobile-apps": "Mobile Apps|CodeMechanism",
      "/services/ui-ux-design": "Ui-Ux Design|CodeMechanism",
      "/services/internet-marketing": "Internet Marketing|CodeMechanism",
    };

    document.title = pageTitles[location.pathname] || "CodeMechanism";
  }, [location.pathname]);

  // Overlay handling
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeOverlay isVisible={showOverlay} />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
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
      </Routes>
    </>
  );
}

export default App;
