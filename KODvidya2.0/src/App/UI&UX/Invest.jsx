import React from "react";
import webDesignImage from "../../assets/pictures/ip.jpg";

const WebDesignSection = () => {
  return (
    <section className="bg-chitu px-6 sm:px-10 md:px-16 lg:px-30 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto">
         <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20 mb-6">
          
          <div className="flex-1 text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold">
              Why You Should Invest In Web Design?
            </h2>
          </div>


          <div className="flex-1">
            <p className="text-blue sm:text-xl md:text-2xl lg:text-3xl font-Sans">
              Making an honest investment in web design has a direct impact on
              the success of your company. A well-designed website improves user
              experience, makes a good first impression, and performs better in
              search engine optimization—all of which increase traffic and
              conversions. Additionally, it provides brand consistency, offers a
              competitive advantage, and increases client loyalty and trust.
            </p>
          </div>
        </div>

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
