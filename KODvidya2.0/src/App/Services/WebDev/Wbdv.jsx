import React from "react";
import { Link } from "react-router-dom";
import webImage from "../../../assets/pictures/web-dev.png";

const WebDevSection = () => {
  return (
    <div className="relative w-full bg-gold/10 py-16 sm:py-35 md:py-50 px-5 sm:px-10 md:px-20 lg:px-30 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold mt-20">
            Web Development Services
          </h2>

          <p className=" text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 text-blue font-Sans mb-5 ">
            With our unlimited web development services, take your business to
            the next level. Our created and developed websites are not only
            eye-catching but also optimised for performance and user experience.
            You can depend on us to build a Professional web app & website.
          </p>

          <Link to="/contact">
            <button className="mt-6 bg-gold hover:bg-white text-xl text-white hover:text-gold hover:font-bold border border-transparent hover:border-gold py-4 px-8 rounded-lg shadow-lg transition duration-300">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={webImage}
            alt="Web Development Services"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevSection;
