import React from "react";
import { Link } from "react-router-dom";
import webImage from "../../../assets/pictures/web-dev.png";

const WebDevSection = () => {
  return (
    <div className="relative w-full bg-gold/10 py-34 px-10 md:px-20 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="md:w-1/2">
          <h2 className="text-6xl md:text-6xl font-Bebas text-gold">
            Web Development <br /> Services
          </h2>
          <p className="mt-5 text-xl max-w-lg text-blue font-Sans">
            With our unlimited web development services, take your business to
            the next level. Our created and developed websites are not only
            eye-catching but also optimised for performance and user experience.
            You can depend on us to build a Professional web app & website.
          </p>
          <Link to="/contact">
            <button className="mt-5 bg-gold hover:bg-white text-white hover:text-gold hover:font-bold border-1 hover:border-gold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Get In touch
            </button>
          </Link>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={webImage}
            alt="Web Development Services"
            className="max-w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevSection;
