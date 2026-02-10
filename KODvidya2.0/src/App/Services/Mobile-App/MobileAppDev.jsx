import React from "react";
import { Link } from "react-router-dom";
import MobileAppImg from "../../../assets/pictures/mobapp.jpg";

const MobileAppSection = () => {
  return (
    <section className="w-full min-h-screen bg-chitu flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-30 py-20 sm:py-28 md:py-40 gap-10 md:gap-16">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center md:text-left px-2">
        <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
          High-End Mobile App Development Services
        </h2>
        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
          Get our all-inclusive design, integration, and management services for
          mobile app development. Our team manages every phase, from conception
          and ideation to delivery and continuous support, regardless of whether
          you require a feature-rich enterprise solution or a consumer-focused
          app. Join together with us to turn your concepts into popular mobile
          apps that stimulate creativity and interaction.
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
          <Link to="/contact">
            <button className="bg-gold hover:bg-white text-white hover:text-gold text-base sm:text-lg md:text-xl font-Sans border hover:border-gold hover:font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md transition duration-300">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={MobileAppImg}
          alt="Mobile App Illustration"
          className="w-[90%] sm:w-[280px] md:w-[400px] lg:w-[620px] rounded-3xl shadow-gold shadow-sm object-cover"
        />
      </div>
    </section>
  );
};

export default MobileAppSection;
