import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <section className=" py-50 px-20 bg-sky-600/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-Bebas text-sky-600 mb-2">
            Internet Marketing Services
          </h2>
          <p className="text-black text-xl font-Sans mb-5">
            We are one of India’s top providers of digital marketing services
            since we have the experience of our seasoned team. For each and
            every one of our clients, we assure success. Utilising our creative
            and unique strategies, you can turn your relatively small.
          </p>
          <Link to="/contact">
            <button className="bg-sky-600 hover:bg-white text-white hover:text-sky-600 hover:font-bold border-1 hover:border-sky-600 px-12 py-2 rounded-lg transition">
              Get In touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
