import React from "react";
import caseImg from "../../assets/pictures/case-study.jpg";

const CaseStudies = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gold/10">
      {/* Background tint */}
      <div className="absolute inset-0 bg-gold/10"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-20 gap-10">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-Bebas text-gold">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg md:text-xl font-Sans text-blue leading-relaxed">
            For a software company like CodeMechanism Infotech, displaying their
            experience, previous projects, and client accomplishments entails
            creating a portfolio and case studies. This is an organized method
            for creating a strong case study and portfolio:
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={caseImg}
            alt="Case Studies"
            className="w-full max-w-md rounded-2xl shadow-md shadow-gold object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
