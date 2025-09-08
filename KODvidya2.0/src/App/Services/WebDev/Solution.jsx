import React from "react";
import { FaShoppingCart, FaLaptopCode } from "react-icons/fa";
import { RiWebhookLine } from "react-icons/ri";
import { LiaGlobeAsiaSolid } from "react-icons/lia";
import { IoIosTv } from "react-icons/io";
import { BsHeadsetVr } from "react-icons/bs";

const services = [
  {
    title: "Web Applications",
    description:
      "Since the beginning, we have focused on creating dynamic web applications for a range of industries. Our solutions integrate data from business systems to deliver current information and support, catering to a variety of consumers.",
    icon: <FaLaptopCode size={40} />,
    bgColor: "bg-yellowLight",
  },
  {
    title: "E-Commerce",
    description:
      "With a wealth of experience in e-commerce development, we offer customised solutions that range from complex, scalable e-commerce platforms to basic stores for newcomers. We focus to maximise corporate productivity by using scalable structures and automation.",
    icon: <FaShoppingCart size={40} />,
    bgColor: "bg-yellowLight",
  },
  {
    title: "Web Portals",
    description:
      "We create unique web portals with user-friendly interfaces and seamless data integration for corporations, governments, and charitable groups. Our portals facilitate real-time information access, improve communication, and expedite procedures.",
    icon: <RiWebhookLine size={40} />,
    bgColor: "bg-yellowLight",
  },
  {
    title: "Websites",
    description:
      "More than 250 companies depend on us for brand development and corporate events. Simple content management systems are a characteristic of our websites, allowing for quick updates and dynamic content.",
    icon: <LiaGlobeAsiaSolid size={40} />,
    bgColor: "bg-yellowLight",
  },
  {
    title: "OTT Web App",
    description:
      "Our area of expertise is creating OTT apps that offer smooth streaming. Our solutions meet the demands of a wide range of content types and audiences by providing real-time analytics, intuitive user interfaces, and high-quality video.",
    icon: <IoIosTv size={40} />,
    bgColor: "bg-yellowLight",
  },
  {
    title: "Web AR/VR",
    description:
      "We have carefully increased our focus to include the development of AR and VR, producing immersive experiences for a range of industries. We offer all roadmap once we enter into any project.",
    icon: <BsHeadsetVr size={40} />,
    bgColor: "bg-yellowLight",
  },
];

const WebServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-15 py-12 bg-chitu">
      <div className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-6xl font-Bebas mb-2 text-gold">
            What Web Development Services Solution We Offer?
          </h2>
        </div>
        <div className="md:w-1/2 text-blue text-xl font-Sans">
          <p>
            We understand the value of allowing many mindsets in the many
            nations of today. We use a range of technologies to provide complete
            web solutions that are designed to each client’s specific needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 cursor-crosshair">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group border-1 border-gold rounded-xl p-1 text-blue font-Sans transition-all duration-300 transform 
              ${service.bgColor} hover:scale-102 active:scale-100`}
          >
            <div className="mb-4 text-blue font-Sans">{service.icon}</div>
            <h3 className="text-3xl font-Bebas mb-2">{service.title}</h3>
            <p className="text-sm font-Sans">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebServices;
