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
    icon: <HiOutlineLightBulb className="text-6xl text-sky-600" />,
    hoverColor: "hover:shadow-sky-600",
  },
  {
    title: "Expertise From Multi-Industry",
    description:
      "We provide excellent UI/UX design solutions by combining knowledge from multiple industries. Our broad knowledge in a range of industries enables us to produce custom, cutting-edge designs that address particular industry requirements.",
    icon: <HiOutlineBriefcase className="text-6xl text-sky-600" />,
    hoverColor: "hover:shadow-sky-600",
  },
  {
    title: "Set Up For Success",
    description:
      "Our team of professionals interacts closely with you to fully understand your goals and aspirations in order to build a smooth path to success. We make sure your projects have been optimised for success from the beginning.",
    icon: <HiOutlineStar className="text-6xl text-sky-600" />,
    hoverColor: "hover:shadow-sky-600",
  },
];

export default function Benefits() {
  return (
    <section className="bg-sky-600/10 px-20 py-18 max-w-full mx-auto">
      <h2 className="text-6xl font-Bebas text-sky-600">
        Benefits Of Our Ui/Ux Services
      </h2>
      <p className="text-black text-xl font-Sans mb-10 max-w-4xl">
        Using Intellectsoft s UI/UX design services involves using our fifteen
        years of experience working with large-scale clients. We offer expertise
        in low-code mobile technologies, implementation metrics, user path
        tracking, front-end design, and more.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 text-center cursor-crosshair shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl ${benefit.hoverColor}`}
          >
            <div className=" flex justify-center">{benefit.icon}</div>
            <h3 className="font-Bebas text-2xl mb-1">{benefit.title}</h3>
            <p className="text-black font-Sans text-md">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
