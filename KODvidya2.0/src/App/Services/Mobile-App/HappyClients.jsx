import React from "react";
import { Link } from "react-router-dom";
import HappyClientsImg from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/hc.jpg";

const HappyClients = () => {
  return (
    <section className="bg-gold text-chitu py-4 px-4 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="max-w-xl">
        <h2 className="text-6xl font-Bebas">Happy Clients</h2>
        <p className="text-xl font-Sans mb-5">
          CodeMechanism Infotech may efficiently showcase their satisfied
          clients through case studies, testimonials, and visual aids, proving
          their knowledge, dependability, and the beneficial effects of their
          services on their clients company. Showcasing real-world triumphs and
          client pleasure not only increases credibility but also draws in new
          business.
        </p>
        <Link to="/contact">
          <button className="bg-gold hover:bg-chitu hover:text-gold text-blue border-1 hover:border-blue hover:font-bold py-2 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>

      <div className="relative w-full mb-12 lg:mb-0 lg:w-1/2 flex justify-center">
        <img
          src={HappyClientsImg}
          alt="Tablet View"
          className="w-150 drop-shadow-2xl z-10"
        />
      </div>
    </section>
  );
};

export default HappyClients;
