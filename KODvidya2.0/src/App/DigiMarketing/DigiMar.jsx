import React from "react";
import { Link } from "react-router-dom";
import marketingImg from "../../assets/pictures/marketing.png";

const DigitalMarketing = () => {
  return (
    <section className="py-34 px-10 md:px-20 bg-gold/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 max-w-xl">
          <h2 className="text-5xl md:text-6xl font-Bebas text-gold mb-4">
            Internet Marketing Services
          </h2>
          <p className="text-blue text-xl font-Sans mb-6">
            We are one of India’s top providers of digital marketing services
            since we have the experience of our seasoned team. For each and
            every one of our clients, we assure success. Utilising our creative
            and unique strategies, you can turn your relatively small.
          </p>
          <Link to="/contact">
            <button className="bg-gold hover:bg-white text-white hover:text-gold hover:font-bold border-1 hover:border-gold px-12 py-3 rounded-lg shadow-lg transition">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={marketingImg}
            alt="Digital Marketing Services"
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
