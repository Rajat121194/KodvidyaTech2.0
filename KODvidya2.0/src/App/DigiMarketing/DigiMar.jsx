import React from "react";
import { Link } from "react-router-dom";
import marketingImg from "../../assets/pictures/marketing.png";

const DigitalMarketing = () => {
  return (
    <section className="w-full py-25 sm:py-40 md:py-52 px-6 sm:px-12 md:px-20 lg:px-30 bg-gold/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold mb-4 text-center md:text-left">
            Internet Marketing Services
          </h2>

          <p className="text-blue text-base sm:text-lg md:text-2xl lg:text-3xl font-Sans mb-6 text-center md:text-left">
           We are one of India’s top providers of digital marketing services since we have the experience of our seasoned team. For each and every one of our clients, we assure success. Utilising our creative and unique strategies, you can turn your relatively small.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/contact">
              <button className="bg-gold hover:bg-white text-white hover:text-gold hover:font-bold border border-gold px-12 sm:px-10 py-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={marketingImg}
            alt="Digital Marketing Services"
            className="w-full max-w-[700px] md:max-w-none h-auto rounded-lg shadow-gold shadow-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
