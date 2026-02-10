import React from "react";
import digitalMarketingImg from "../../assets/pictures/gp.jpg";

const DigitalMarketing = () => {
  return (
    <section className="flex bg-gold/10 flex-col md:flex-row items-center justify-center gap-15 px-30">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={digitalMarketingImg}
          alt="Digital Marketing"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
          Why You Should Go With Digital Marketing Services
        </h2>

        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
          If you’re a business owner unsure about promoting your business
          online, investing in expert digital marketing services is crucial.
          Beyond boosting sales and traffic, digital marketing can:
        </p>
      </div>
    </section>
  );
};

export default DigitalMarketing;
