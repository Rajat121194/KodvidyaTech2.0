import React from "react";
import webDesignImage from "../../assets/pictures/ip.jpg";

const WebDesignSection = () => {
  return (
    <section className="bg-chitu px-6 sm:px-10 md:px-16 lg:px-30 py-6 sm:py-8 lg:py-10">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-6">
          {/* Heading Section */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
              Why You Should Invest In Web Design?
            </h2>
          </div>

          {/* Paragraph Section */}
          <div className="flex-1">
            <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
              Making an honest investment in web design has a direct impact on
              the success of your company. A well-designed website improves user
              experience, makes a good first impression, and performs better in
              search engine optimization—all of which increase traffic and
              conversions. Additionally, it provides brand consistency, offers a
              competitive advantage, and increases client loyalty and trust.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={webDesignImage}
            alt="Web Design Illustration"
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
