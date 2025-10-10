import React from "react";
import Navbar from "../Home/Navbar.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import BrandThrive from "./BrandThrive.jsx";
import Footer from "../Home/Footer.jsx";

function About() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <WhoWeAre />
      <BrandThrive />
      <Footer />
    </div>
  );
}

export default About;
