import React from "react";
import { Link } from "react-router-dom";
import monitorImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/bthr.jpg";

const HeroSection = () => {
  return (
    <div className="w-full">
      <section className="relative flex items-center min-h-screen bg-chitu">
        <div className="relative z-10 flex flex-col md:flex-row w-full p-8 md:p-20 bg-gold/10">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-6xl text-gold font-Bebas md:text-6xl mb-4">
              CodeMechanism Infotech Where Brands Thrive in the Digital World.
            </h1>
            <p className="text-xl md:text-xl text-blue font-Sans">
              We specialise in creating effective solutions in the areas of
              graphic design, branding, digital marketing, mobile app
              development, and website design and development. We're committed
              to fulfilling your needs, whether they include specific project
              assistance, a committed team, or specialised talent. With key
              locations in the US, Canada, and India, we look forward to working
              with companies that are as committed as we are to advancing
              digital innovation.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <img
              src={monitorImage}
              alt="Monitor"
              className="w-[100%] md:w-[600px] h-100 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-chitu py-12">
        <div className="container mx-auto px-8 md:px-40 font-semibold flex flex-col md:flex-row items-center justify-between text-left">
          <div className="mb-6 md:mb-0 md:max-w-xl">
            <h2 className="text-6xl md:text-6xl mb-3 font-Bebas text-gold">
              Let's Work Together.
            </h2>
            <p className="text-black text-xl">
              Let’s find out how to work together and create something
              meaningful or valuable.
            </p>
          </div>
          <Link to="/contact">
            <button className="bg-gold text-chitu px-8 py-4 rounded-md hover:bg-chitu hover:text-gold hover:border-2 hover:font-bold transition">
              Time to Shine – Request a Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
