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
    icon: <FaBrain className="text-4xl text-sky-600" />,
  },
  {
    title: "UI/UX Design",
    description:
      "After the SOW is approved, our team works quickly to efficiently produce designs that meet the needs of the client, and share each screen for review.",
    icon: <FaPaintBrush className="text-4xl text-sky-600" />,
  },
  {
    title: "Architecture",
    description:
      "To ensure that the business logic is implemented in a complete and feasible manner, our team of committed solution architects carefully plans the functional components and chooses the best technology.",
    icon: <FaCubes className="text-4xl text-sky-600" />,
  },
  {
    title: "Front End Development",
    description:
      "After finalising UI/UX design, our front-end team expertly translates Figma designs into development-ready assets using JavaScript frameworks like React.js, Next.js, Vue.js, and Angular.",
    icon: <FaCode className="text-4xl text-sky-600" />,
  },
  {
    title: "Back End Development",
    description:
      "Using strong frameworks for effective coding in.NET, Java, Python, Node.js, PHP, and Go, our back-end developers carefully build the business logic of your online platform.",
    icon: <FaServer className="text-4xl text-sky-600" />,
  },
  {
    title: "Testing & QA",
    description:
      "We make sure your web solution runs as swiftly, easily, and securely as possible. To provide a trustworthy and seamless user experience, our knowledgeable testing engineers carefully examine these element.",
    icon: <FaCheckCircle className="text-4xl text-sky-600" />,
  },
];

const WebDevProcess = () => {
  return (
    <div className="px-15 py-12 max-w-7xl mx-auto bg-gold/10">
      <div className="text-center mb-6">
        <h2 className="text-6xl font-Bebas text-gold">
          Our Web Development Services Process
        </h2>
        <p className="text-blue text-xl  max-w-3xl mx-auto">
          Once we engage in a conversation, we provide comprehensive solutions
          and a detailed roadmap with full dedication...
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-move">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out text-center border border-gold"
          >
            <div className="mb-2 flex justify-center">{service.icon}</div>
            <h3 className="text-3xl font-Bebas text-gold mb-2">
              {service.title}
            </h3>
            <p className="text-blue font-Sans text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevProcess;
