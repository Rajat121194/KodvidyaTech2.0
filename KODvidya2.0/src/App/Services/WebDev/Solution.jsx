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
    <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 py-12 bg-chitu">
      {/* Header section */}
      <div className="mb-12 flex flex-col md:flex-row gap-2 md:gap-2">
        {/* Left heading */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] ">
            What Web Development Services Solution We Offer?
          </h2>
        </div>

        {/* Right paragraph */}
        <div className="w-full md:w-1/2 text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] text-center md:text-left">
          <p>
            We understand the value of allowing many mindsets in the many
            nations of today. We use a range of technologies to provide complete
            web solutions that are designed to each client’s specific needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group p-6 sm:p-8 rounded-2xl border border-gold text-blue font-Sans transition-all duration-300 transform ${service.bgColor} hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex justify-center md:justify-start text-blue">
              {service.icon}
            </div>
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-Bebas text-gold leading-tight md:leading-[70px] text-center md:text-left">
              {service.title}
            </h3>
            <p className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px] text-center md:text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebServices;
