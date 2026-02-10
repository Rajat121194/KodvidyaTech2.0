import React from "react";
import marketingImage from "../../assets/pictures/chpp.jpg";
import { GiBarbedSun } from "react-icons/gi";

const benefits = [
  "Data-driven Digital Marketing Services",
  "Industry Experts",
  "Custom Digital Marketing Framework",
  "Omnichannel Personalization",
  "Campaign Monitoring and Evaluation",
  "Competitive Pricing",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-6 py-8 sm:py-12 md:px-16 lg:px-30">
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="order-2 md:order-1 space-y-5">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            Why Choose Us For Your Online Marketing?
          </h2>

          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
            We at CodeMechanism Infotech offer complete end-to-end solutions.
            Our team of professionals specializes in providing businesses with
            targeted advertising solutions that increase customer retention
            rates and optimize conversion rates.
          </p>

          <ul className="space-y-1">
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-start text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] space-x-3"
              >
                <GiBarbedSun className="text-gold mt-1 text-xl" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2">
          <img
            src={marketingImage}
            alt="Digital Marketing"
            className="rounded-lg shadow-sm shadow-blue w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
