import React from "react";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Process from "./Process.jsx";
import Innovation from "./Innovation.jsx";
import AnimatedSection from "./AnimatedSection.jsx";
import Services from "./Services.jsx";
import WhyKodVidya from "./WhyKodVidya.jsx";
import SerWeUse from "./SerWeUse.jsx";
import Review from "./Review.jsx";
import DropUs from "./DropUs.jsx";
import Footer from "./Footer.jsx";

function HomePage({ setToken }) {
  return (
    <>
      <Hero setToken={setToken} /> {/* Pass setToken */}
      <Navbar />
      <Process />
      <Innovation />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <WhyKodVidya />
      </AnimatedSection>
      <SerWeUse />
      <AnimatedSection>
        <Review />
      </AnimatedSection>
      <AnimatedSection>
        <DropUs />
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default HomePage;
