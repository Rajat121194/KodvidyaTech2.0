import React from "react";
import {
  FaBrain,
  FaPaintBrush,
  FaCubes,
  FaCode,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Business Analyst",
    description:
      "We carefully analyse all requirements and give our clients a thorough scope of Work (SOW) that outlines the whole project schedule and guarantees organised and transparent planning.",
    icon: <FaBrain className="text-4xl text-gold" />,
  },
  {
    title: "UI/UX Design",
    description:
      "After the SOW is approved, our team works quickly to efficiently produce designs that meet the needs of the client, and share each screen for review.",
    icon: <FaPaintBrush className="text-4xl text-gold" />,
  },
  {
    title: "Architecture",
    description:
      "To ensure that the business logic is implemented in a complete and feasible manner, our team of committed solution architects carefully plans the functional components and chooses the best technology.",
    icon: <FaCubes className="text-4xl text-gold" />,
  },
  {
    title: "Front End Development",
    description:
      "After finalising UI/UX design, our front-end team expertly translates Figma designs into development-ready assets using JavaScript frameworks like React.js, Next.js, Vue.js, and Angular.",
    icon: <FaCode className="text-4xl text-gold" />,
  },
  {
    title: "Back End Development",
    description:
      "Using strong frameworks for effective coding in.NET, Java, Python, Node.js, PHP, and Go, our back-end developers carefully build the business logic of your online platform.",
    icon: <FaServer className="text-4xl text-gold" />,
  },
  {
    title: "Testing & QA",
    description:
      "We make sure your web solution runs as swiftly, easily, and securely as possible. To provide a trustworthy and seamless user experience, our knowledgeable testing engineers carefully examine these element.",
    icon: <FaCheckCircle className="text-4xl text-gold" />,
  },
];

const WebDevProcess = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-30 py-12 mx-auto bg-gold/10">
      {/* Header Section */}
      <div className="text-center mb-10 px-3">
        <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
          Our Web Development Services Process
        </h2>
        <p className="mt-3 text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-3xl mx-auto">
          Once we engage in a conversation, we provide comprehensive solutions
          and a detailed roadmap with full dedication...
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-move">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out text-center border border-gold"
          >
            <div className=" flex justify-center">{service.icon}</div>
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-Bebas text-gold leading-tight md:leading-[70px]">
              {service.title}
            </h3>
            <p className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevProcess;
