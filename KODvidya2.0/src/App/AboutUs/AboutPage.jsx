import React from "react";
import Navbar from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Navbar.jsx";
import WhoWeAre from "./WhoWeAre";
import BrandThrive from "./BrandThrive.jsx";
import Footer from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Footer.jsx";

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
