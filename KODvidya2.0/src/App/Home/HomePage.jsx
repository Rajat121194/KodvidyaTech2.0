import React from "react";

import Navbar from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Navbar.jsx";

import Hero from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Hero.jsx";
import Process from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Process.jsx";
import Innovation from "./Innovation.jsx";
import Services from "./Services.jsx";
import WhyKodVidya from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/WhyKodVidya.jsx";
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
