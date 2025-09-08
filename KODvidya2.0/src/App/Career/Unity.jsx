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
    <section className="bg-chitu px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between mb-12">
          <h2 className="text-6xl sm:text-4xl md:text-6xl text-gold font-Bebas max-w-lg mb-6 md:mb-0">
            Unity in Purpose, Strength in Teamwork
          </h2>
          <p className="max-w-2xl text-blue font-Sans text-2xl mb-5">
            Unity in Purpose, Strength in Teamwork sums up a potent philosophy
            that directs companies such as CodeMachanism Infotech. This idea
            manifests itself in the following ways to promote a harmonious and
            productive work environment:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="text-blue p-6 rounded-xl shadow-md  cursor-crosshair hover:shadow-lg transition-all duration-300 ease-in-out sm:bg-yellowLight sm:backdrop-blur-sm sm:hover:backdrop-blur-none sm:hover:bg-gold"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-3xl font-Bebas mb-2">{card.title}</h3>
              <p className="text-blue font-Sans text-xl">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
