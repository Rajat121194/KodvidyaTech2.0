import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Elevate from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Career/Elevate.jsx";
import Culture from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Career/Culture.jsx";
import Unity from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Career/Unity.jsx";
import Hiring from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Career/Hiring.jsx";
import DropUs from "../Home/DropUs.jsx";
import Footer from "../Home/Footer.jsx";

function CareerPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <Elevate />
      <Culture />
      <Unity />
      <Hiring />
      <DropUs />
      <Footer />
    </div>
  );
}

export default CareerPage;
