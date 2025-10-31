import React from "react";
import caseImg from "../../assets/pictures/case-study.jpg";

const CaseStudies = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gold/10">
      {/* Background Tint */}
      <div className="absolute inset-0 bg-gold/10"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-30 py-16 md:py-24 gap-10 md:gap-16">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            Portfolio & Case Studies
          </h2>
          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
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
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[650px] h-auto rounded-2xl shadow-xl shadow-gold/40 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
