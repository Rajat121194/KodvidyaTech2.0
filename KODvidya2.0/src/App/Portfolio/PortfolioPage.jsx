import React from "react";
import Navbar from "../Home/Navbar.jsx";
import CaseStudies from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Portfolio/CaseStudies.jsx";
import OurCaseStudies from "./OurCaseStudies.jsx";
import Review from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Review.jsx";
import DropUs from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/DropUs.jsx";
import Footer from "../Home/Footer.jsx";

function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <CaseStudies />
      <OurCaseStudies />
      <Review />
      <DropUs />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
