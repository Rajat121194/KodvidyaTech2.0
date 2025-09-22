import React from "react";

import Navbar from "./Navbar.jsx";

import Hero from "./Hero.jsx";
import Process from "./Process.jsx";
import Innovation from "./Innovation.jsx";
import Services from "./Services.jsx";
import WhyKodVidya from "./WhyKodVidya.jsx";
import SerWeUse from "./SerWeUse.jsx";
import Review from "./Review.jsx";
import DropUs from "./DropUs.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Process />
      <Innovation />
      <Services />
      <WhyKodVidya />
      <SerWeUse />
      <Review />
      <DropUs />
      <Footer />
    </>
  );
}

export default Home;
