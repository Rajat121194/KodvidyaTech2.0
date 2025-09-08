import React from "react";
import Navbar from "../Home/Navbar.jsx";
import TElevate from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Training/TElevate.jsx";
import Intern from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/Training/Intern.jsx";
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
