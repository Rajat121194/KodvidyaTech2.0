import React from "react";
import bgVideo from "/src/assets/videos/por.mp4"; // update the path to your video

const CaseStudies = () => {
  return (
    <div className="relative w-full min-h-screen flex items-stretch overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start px-25 py-30">
        {/* Left Heading */}
        <div className="md:w-1/3">
          <h2 className="text-5xl md:text-5xl ml-66 mt-9 rotate-10 font-Bebas text-gold">
            Portfolio & Case Studies
          </h2>
        </div>

        {/* Right Title / Paragraph */}
        <div className="md:w-1/2 md:mt-40">
          <p className="text-xl font-medium text-blue text-right">
            For a software company like CodeMechanism Infotech, displaying their
            experience, previous projects, and client accomplishments entails
            creating a portfolio and case studies. This is an organized method
            for creating a strong case study and portfolio:
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
