import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Hero from "./uiuxDesign.jsx";
import Benifits from "./Benifits.jsx";
import Invest from "./Invest.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import What from "./What.jsx";
import OurCaseStudies from "../Portfolio/OurCaseStudies";
import HappyClients from "../Services/Mobile-App/HappyClients.jsx";
import Review from "../Home/Review.jsx";
import DropUs from "../Home/DropUs.jsx";
import Footer from "../Home/Footer.jsx";

function UIUXDesign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benifits />
      <Invest />
      <WhyChooseUs />
      <What />
      <OurCaseStudies />
      <HappyClients />
      <Review />
      <DropUs />
      <Footer />
    </>
  );
}

export default UIUXDesign;
