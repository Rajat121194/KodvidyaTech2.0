import React from "react";
import Navbar from "../../Home/Navbar";
import MobileAppDev from "./MobileAppDev";
import WhyChooseUs from "./WhyChooseUs";
import AppSolutions from "./AppSolutions";
import Offer from "./Offer";

import AppServices from "./AppServices";
import OurMobileAppDevelopment from "./OurMAD";
import OurCaseStudies from "../../Portfolio/OurCaseStudies";
import HappyClients from "./HappyClients";
import Review from "../../Home/Review";
import DropUs from "../../Home/DropUs";
import Footer from "../../Home/Footer";

function MobileApp() {
  return (
    <>
      <Navbar />
      <MobileAppDev />
      <WhyChooseUs />
      <AppSolutions />
      <Offer />
      <AppServices />
      <OurMobileAppDevelopment />
      <OurCaseStudies />
      <HappyClients />
      <Review />
      <DropUs />
      <Footer />
    </>
  );
}

export default MobileApp;
