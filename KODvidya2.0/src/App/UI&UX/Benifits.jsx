import React from "react";
import {
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineStar,
} from "react-icons/hi";

const benefits = [
  {
    title: "Years Of Success In Design",
    description:
      "We design modern layouts that seamlessly integrate with functionality to realise your vision. Join forces with us to experience the ideal fusion of creativity, know-how, and technology that drives your projects toward unmatched success. Come join us and help your design to new heights.",
    icon: <HiOutlineLightBulb className="text-6xl text-chitu" />,
    hoverColor: "hover:shadow-blue",
  },
  {
    title: "Expertise From Multi-Industry",
    description:
      "We provide excellent UI/UX design solutions by combining knowledge from multiple industries. Our broad knowledge in a range of industries enables us to produce custom, cutting-edge designs that address particular industry requirements.",
    icon: <HiOutlineBriefcase className="text-6xl text-chitu" />,
    hoverColor: "hover:shadow-blue",
  },
  {
    title: "Set Up For Success",
    description:
      "Our team of professionals interacts closely with you to fully understand your goals and aspirations in order to build a smooth path to success. We make sure your projects have been optimised for success from the beginning.",
    icon: <HiOutlineStar className="text-6xl text-chitu" />,
    hoverColor: "hover:shadow-blue",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gold/10 px-6 sm:px-10 md:px-16 lg:px-30 py-10 sm:py-12 mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-4">
          Benefits Of Our UI/UX Services
        </h2>
        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-3xl mx-auto">
          Partnering with our UI/UX design services means leveraging years of
          expertise in creating seamless, user-centered experiences. We deliver
          intelligent, scalable, and beautiful designs backed by industry
          insights and measurable results.
        </p>
      </div>

      {/* Benefits Cards Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`bg-gold/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center cursor-crosshair shadow-md transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${benefit.hoverColor}`}
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="font-Bebas text-blue text-2xl sm:text-4xl mb-2">
              {benefit.title}
            </h3>
            <p className="text-blue font-Sans text-base sm:text-md md:text-lg lg:text-xl leading-relaxed md:leading-[32px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
