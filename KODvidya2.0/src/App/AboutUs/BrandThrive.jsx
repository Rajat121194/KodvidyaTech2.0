import React from "react";
import { Link } from "react-router-dom";
import monitorImage from "../../assets/pictures/bthr.jpg";

const HeroSection = () => {
  return (
    <div className="w-full bg-chitu overflow-hidden">
      {/* HERO MAIN SECTION */}
      <section className="relative flex items-center justify-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-6 sm:px-10 md:px-16 lg:px-30 py-10 md:py-15 gap-10 md:gap-16 bg-gold/10 rounded-lg">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-4">
              CodeMechanism Infotech Where Brands Thrive in the Digital World.
            </h1>

            <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
             We specialise in creating effective solutions in the areas of graphic design, branding, digital marketing, mobile app development, and website design and development. We're committed to fulfilling your needs, whether they include specific project assistance, a committed team, or specialised talent. With key locations in the US, Canada, and India, we look forward to working with companies that are as committed as we are to advancing digital innovation.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={monitorImage}
              alt="Monitor"
              className="w-full sm:w-[450px] md:w-[550px] lg:w-[650px] rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-chitu">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-30 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-4">
              Let's Work Together.
            </h2>

            <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
              Let’s find out how to work together and create something meaningful or valuable.
            </p>
          </div>

          <Link
  to="/contact"
  className="
    bg-gold text-chitu font-semibold
    text-lg sm:text-xl md:text-2xl
    px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5
    rounded-md shadow-md transition-all duration-300 ease-in-out
    hover:bg-chitu hover:text-gold hover:border-2 hover:border-gold
    w-full sm:w-auto inline-block text-center
  "
>
  Time to Shine – Request a Quote
</Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
