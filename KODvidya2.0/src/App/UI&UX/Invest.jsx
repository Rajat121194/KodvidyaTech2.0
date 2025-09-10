import React from "react";
import webDesignImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/ip.jpg";

const WebDesignSection = () => {
  return (
    <section className="bg-chitu px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-Bebas text-gold mb-2">
          Why You Should Invest IN Web Design?
        </h2>

        <p className="text-xl text-blue font-Sans mb-10 max-w-3xl">
          Making an honest investment in web design has a direct impact on the
          success of your company. A well-designed website improves user
          experience, makes a good first impression, and performs better in
          search engine optimization—all of which increase traffic and
          conversions. Additionally, it provides brand consistency, offers a
          competitive advantage, and increases client loyalty and trust.
        </p>
        <div>
          <img
            src={webDesignImage}
            alt="Web Design Illustration"
            className="relative z-8 w-full h-full mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
