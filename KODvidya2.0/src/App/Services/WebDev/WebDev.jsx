import React from "react";
import Navbar from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Navbar.jsx";
import WbDv from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Services/WebDev/Wbdv.jsx";
import Solution from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Services/WebDev/Solution.jsx";
import Process from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Services/WebDev/Process.jsx";
import OurPortfolio from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Services/WebDev/OurPortfolio.jsx";
import Review from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Review.jsx";
import Footer from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Home/Footer.jsx";

function WebDevelopment() {
  return (
    <>
      <Navbar />
      <WbDv />
      <Solution />
      <Process />
      <OurPortfolio />
      <Review />
      <Footer />
    </>
  );
}

export default WebDevelopment;
