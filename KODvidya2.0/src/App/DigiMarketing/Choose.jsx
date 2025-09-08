import React from "react";
import marketingImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/chpp.jpg";
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
    <div className="bg-white px-6 py-3 md:py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-6xl font-Bebas text-sky-600 mb-1">
            Why choose us for You Online Marketing?
          </h2>
          <p className="text-black text-xl font-Sans mb-3">
            We at KodVidya Technologies offer complete end-to-end solutions. Our
            team of professionals specializes in providing businesses with
            targeted advertising solutions that increase customer retention
            rates and optimize conversion rates.
          </p>

          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <GiBarbedSun className="text-sky-600 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={marketingImage}
            alt="Digital Marketing"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
