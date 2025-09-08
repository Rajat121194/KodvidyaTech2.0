import React from "react";
import digitalMarketingImg from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/gp.jpg";

const DigitalMarketing = () => {
  return (
    <section className="flex bg-sky-600/10 flex-col md:flex-row items-center justify-center gap-15 p-6 md:p-12">
      <div className="w-full md:w-1/2">
        <img
          src={digitalMarketingImg}
          alt="Digital Marketing"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-Bebas text-sky-600">
          Why You Should go with Digital Marketing Services
        </h2>
        <p className="text-black text-xl">
          If you’re a business owner unsure about promoting your business
          online, investing in expert digital marketing services is crucial.
          Beyond boosting sales and traffic, digital marketing can:
        </p>
      </div>
    </section>
  );
};

export default DigitalMarketing;
