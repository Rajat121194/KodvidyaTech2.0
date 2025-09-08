import React from "react";
import portfolioImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/led.webp";

const CaseStudies = () => {
  return (
    <div className="relative w-full min-h-screen bg-gold/10 flex items-stretch px-10">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-10 w-full">
        <div className=" md:w-1/2 px-10 py-24 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-Bebas leading-tight mb-2 text-gold">
            Portfolio & case Studies
          </h2>
          <p className="text-xl leading-relaxed font-medium text-blue">
            For a software company like CodeMechanism Infotech, displaying their
            experience, previous projects, and client accomplishments entails
            creating a portfolio and case studies. This is an organized method
            for creating a strong case study and portfolio:
          </p>
        </div>

        <div className="md:w-1/2 flex items-end justify-center">
          <img
            src={portfolioImage}
            alt="Portfolio devices"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
