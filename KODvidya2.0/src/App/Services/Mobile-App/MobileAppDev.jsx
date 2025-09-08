import React from "react";
import { Link } from "react-router-dom";
import MobileAppImg from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/mobapp.jpg";

const MobileAppSection = () => {
  return (
    <section className="w-full min-h-screen bg-chitu flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-35 gap-12 md:gap-10">
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h2 className="text-6xl sm:text-4xl md:text-6xl font-Bebas text-gold">
          High-End Mobile App Development Services
        </h2>
        <p className="text-xl sm:text-base md:text-xl mb-4 sm:mb-6 text-blue font-Sans">
          Get our all-inclusive design, integration, and management services for
          mobile app development. Our team manages every phase, from conception
          and ideation to delivery and continuous support, regardless of whether
          you require a feature-rich enterprise solution or a consumer-focused
          app. Join together with us to turn your concepts into popular mobile
          apps that stimulate creativity and interaction. Get In touch
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to="/contact">
            <button className="bg-gold hover:bg-white text-white hover:text-gold border-1 hover:border-gold hover:font-bold px-6 py-3 rounded-xl shadow-md transition">
              Get In touch
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={MobileAppImg}
          alt="Mobile App Illustration"
          className="w-[80%] sm:w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default MobileAppSection;
