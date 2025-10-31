import React from "react";
import { GiVintageRobot } from "react-icons/gi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { BsBoxes } from "react-icons/bs";
import { GrCloudComputer } from "react-icons/gr";
import { LiaChartBar } from "react-icons/lia";
import { GiAnimalSkull } from "react-icons/gi";

const cards = [
  {
    title: "Artificial Intelligence",
    icon: <GiVintageRobot />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "A project involving CodeMechanism Infotech and artificial intelligence (AI) must take into account a number of important factors. I'll go over a general process for creating an AI project below, along with some key considerations:",
  },
  {
    title: "Internet Of Things",
    icon: <HiOutlineCpuChip />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "Using CodeMechanism Infotech to implement Internet of Things (IoT) projects entails combining hardware, software, and sensors to produce intelligent solutions that improve connectivity, automation, and data collection. This is an organized method for creating Internet of Things projects:",
  },
  {
    title: "Blockchain",
    icon: <BsBoxes />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "Creative solutions for a range of sectors can be developed by utilizing its decentralized, secure, and transparent features. This is a methodical way to comprehending and carrying out Blockchain projects:",
  },
  {
    title: "Cloud Computing",
    icon: <GrCloudComputer />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "Cloud resources to provide IT services and applications that are scalable, adaptable, and reasonably priced. An organized method for comprehending and carrying out cloud computing initiatives is as follows:",
  },
  {
    title: "Big Data",
    icon: <LiaChartBar />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "CodeMechanism Infotech works with massive amounts of data to improve decision-making and extract insightful information. An organized method for comprehending and carrying out Big Data initiatives is as follows:",
  },
  {
    title: "Augmented Reality",
    icon: <GiAnimalSkull />,
    color: "border-gold hover:bg-blue bg-white",
    description:
      "Incorporating digital components into the physical world to improve user experiences and offer creative fixes. This is a methodical way to comprehending and carrying out augmented reality projects:",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-30 py-16 sm:py-6 lg:py-10 bg-gold/10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold">
          Why Choose Us?
        </h2>
        <p className="sm:text-lg md:text-xl lg:text-2xl font-Sans text-blue max-w-2xl">
          Latest Technology: In order to stay ahead of the competition, we constantly implement new technologies. This guarantees advanced solutions and creative improvements.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group border-2 border-gold rounded-2xl p-6 sm:p-8 bg-white shadow-md transition-all duration-300 hover:scale-[0.99] hover:shadow-xl hover:bg-gold/5"
          >
            <div className="text-5xl sm:text-6xl text-gold mb-4 transition-transform duration-300 group-hover:scale-102">
              {card.icon}
            </div>
            <h3 className="font-Bebas text-3xl sm:text-4xl text-gold mb-2">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue transition-colors duration-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}