import React from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiRocketFlight, GiBulb, GiAchievement } from "react-icons/gi";
import { FaSlideshare } from "react-icons/fa6";

const cards = [
  {
    icon: <GiRocketFlight className="text-black text-5xl" />,
    title: "Accelerated Growth",
    description:
      "CodeMechanism Infotech can use the strategy initiative to grow quickly and succeed in its sector. This is a methodical strategy to comprehending and attaining faster growth.",
  },
  {
    icon: <GiBulb className="text-black text-5xl" />,
    title: "Versatile Experience",
    description:
      "Describes the wide range of abilities, know-how, and proficiency that people or organizations such as CodeMechanism Infotech have, which allows them to thrive in a variety of contexts, situations, and chances.",
  },
  {
    icon: <FaUsersViewfinder className="text-black text-5xl" />,
    title: "Supportive Community",
    description:
      "One of the most important things CodeMechanism Infotech can do is build a Supportive Community in order to improve overall company success and create a happy workplace.",
  },
  {
    icon: <GiAchievement className="text-black text-5xl" />,
    title: "Contributions and Achievements",
    description:
      "Key elements that highlight the value and influence CodeMechanism Infotech provides to its stakeholders—clients, staff, and the larger community—are Contributions and Achievements.",
  },
  {
    icon: <FaSlideshare className="text-black text-5xl" />,
    title: "Shared Success",
    description:
      "Captures the cooperative mindset and reciprocal successes that CodeMechanism Infotech aims to promote among its partners, clients, staff, and the community.",
  },
];

export default function PurposeSection() {
  return (
    <section className="bg-chitu px-4 sm:px-6 md:px-20 lg:px-30 py-12 sm:py-16 md:py-20">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-4 md:mb-0 md:max-w-2xl">
            Unity in Purpose, Strength in Teamwork
          </h2>
          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl mx-auto md:mx-0">
            Unity in Purpose, Strength in Teamwork sums up a potent philosophy
            that directs companies such as CodeMachanism Infotech. This idea
            manifests itself in the following ways to promote a harmonious and
            productive work environment:
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="text-blue p-5 sm:p-6 rounded-xl shadow-md cursor-crosshair hover:shadow-lg transition-all duration-300 ease-in-out bg-yellowLight/80 hover:bg-gold sm:bg-yellowLight sm:hover:bg-gold sm:backdrop-blur-sm sm:hover:backdrop-blur-none"
            >
              <div className="mb-3 sm:mb-4">{card.icon}</div>
              <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-Bebas text-blue leading-tight md:leading-[70px]">
                {card.title}
              </h3>
              <p className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
