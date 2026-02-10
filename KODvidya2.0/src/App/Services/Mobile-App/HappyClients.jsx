import React from "react";
import { Link } from "react-router-dom";
import HappyClientsImg from "../../../assets/pictures/hc.jpg";

const HappyClients = () => {
  return (
    <section className="bg-gold text-chitu py-10 px-4 sm:px-8 md:px-12 lg:px-30 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-blue leading-tight md:leading-[70px] text-center lg:text-left">
          Happy Clients
        </h2>

        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] text-center lg:text-left mb-6">
          CodeMechanism Infotech efficiently showcases their satisfied clients
          through case studies, testimonials, and visuals — proving their
          expertise, reliability, and the positive impact of their services on
          their clients’ businesses. Highlighting real-world successes not only
          boosts credibility but also attracts new opportunities.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link to="/contact">
            <button className="bg-chitu text-gold font-semibold hover:bg-blue hover:text-chitu hover:border-chitu border border-transparent py-3 px-8 sm:py-4 sm:px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={HappyClientsImg}
          alt="Happy Clients"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default HappyClients;
