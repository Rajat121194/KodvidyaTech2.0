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
    <div className="px-10 py-20 max-w-7xl mx-auto bg-gold/10">
      <div className="mb-4 flex flex-col md:flex-row items-start gap-4">
        <h2 className="text-6xl font-Bebas text-gold">Why Choose Us?</h2>
        <p className="text-xl font-Sans text-blue max-w-3xl">
          Latest Technology: In order to stay ahead of the competition, we
          constantly implement new technologies. This guarantees advanced
          solutions and creative improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 cursor-crosshair">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group border rounded-xl p-1 shadow-sm transition-all duration-300 transform hover:scale-[0.97] ${card.color}`}
          >
            <div className="text-5xl p-1 text-gold rounded-full inline-block group-hover:scale-110 transition">
              {card.icon}
            </div>
            <h3 className="font-Bebas text-2xl text-gold">{card.title}</h3>
            <p className="text-md text-Sans text-gold">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
