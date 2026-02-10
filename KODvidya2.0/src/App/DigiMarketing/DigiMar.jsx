import React from "react";
import { Link } from "react-router-dom";
import marketingImg from "../../assets/pictures/marketing.png";

const DigitalMarketing = () => {
  return (
    <section className="w-full py-25 sm:py-40 md:py-52 px-6 sm:px-12 md:px-20 lg:px-30 bg-gold/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-4">
            Internet Marketing Services
          </h2>

          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] mb-6">
            We are one of India’s top providers of digital marketing services
            since we have the experience of our seasoned team. For each and
            every one of our clients, we assure success. Utilising our creative
            and unique strategies, you can turn your relatively small.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/contact">
              <button className="bg-gold hover:bg-white text-white hover:text-gold hover:font-bold border border-gold px-8 sm:px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
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
            className="w-full max-w-[700px] md:max-w-none h-auto rounded-lg shadow-gold shadow-2xl border-1 border-blue object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
