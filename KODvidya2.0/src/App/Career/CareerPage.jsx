import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Elevate from "./Elevate.jsx";
import Culture from "./Culture.jsx";
import Unity from "./Unity.jsx";
import Hiring from "./Hiring.jsx";
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
