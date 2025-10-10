import React from "react";
import Navbar from "../Home/Navbar.jsx";
import TElevate from "./TElevate.jsx";
import Intern from "./Intern.jsx";
import Footer from "../Home/Footer.jsx";

function TrainingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <TElevate />
      <Intern />
      <Footer />
    </div>
  );
}

export default TrainingPage;
