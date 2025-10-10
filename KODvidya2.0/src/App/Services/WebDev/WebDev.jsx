import React from "react";
import Navbar from "../../Home/Navbar";
import WbDv from "./Wbdv";
import Solution from "./Solution";
import Process from "./Process";
import OurCaseStudies from "../../Portfolio/OurCaseStudies";
import Review from "../../Home/Review";
import Footer from "../../Home/Footer";

function WebDevelopment() {
  return (
    <>
      <Navbar />
      <WbDv />
      <Solution />
      <Process />
      <OurCaseStudies />
      <Review />
      <Footer />
    </>
  );
}

export default WebDevelopment;
