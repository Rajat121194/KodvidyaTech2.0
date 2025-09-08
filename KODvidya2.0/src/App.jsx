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
import DigitalMarketing from "./App/DigiMarketing/DigiMarketing.jsx";

function App() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false); // triggers slide-up animation
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
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
      </Routes>
    </>
  );
}

export default App;
