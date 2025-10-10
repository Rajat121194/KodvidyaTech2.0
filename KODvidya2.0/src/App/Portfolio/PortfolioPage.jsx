import React from "react";
import Navbar from "../Home/Navbar";
import CaseStudies from "./CaseStudies";
import OurCaseStudies from "./OurCaseStudies";
import Review from "../Home/Review";
import DropUs from "../Home/DropUs";
import Footer from "../Home/Footer";

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
