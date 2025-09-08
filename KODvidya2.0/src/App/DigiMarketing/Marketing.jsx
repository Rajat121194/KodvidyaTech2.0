import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMusicSpell, GiFilmSpool, GiGraduateCap } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
const services = [
  {
    title: "Healthcare",
    icon: <FaUserDoctor />,
    description:
      "SBy tackling particular issues and seizing opportunities, CodeMechanism Infotech's digital solutions for the healthcare industry can enhance patient care, operational effectiveness, and healthcare results. An organized method for comprehending and carrying out healthcare technology projects is as follows:",
  },
  {
    title: "Music Tech",
    icon: <GiMusicSpell />,
    description:
      "The music industry may improve a number of aspects of music development, distribution, consumption, and management. An organized method for comprehending and carrying out music technology initiatives is as follows:",
  },
  {
    title: "Construction",
    icon: <BsBuildings />,
    description:
      "Using CodeMechanism Infotech to implement technological solutions in the construction sector means enhancing project management, efficiency, and safety across the whole construction lifecycle. This is a methodical way to comprehending and executing technological projects in the construction industry:",
  },
  {
    title: "Entertainment",
    icon: <GiFilmSpool />,
    description:
      "The entertainment business can improve a number of areas, including audience engagement, content production, distribution, and monetization. This is a methodical approach to comprehending and executing technology initiatives in the entertainment industry:",
  },
  {
    title: "Education",
    icon: <GiGraduateCap />,
    description:
      "Education, instructors, parents, and students may work together more effectively, improve administrative procedures, and provide better learning experiences. This is an organized method for comprehending and carrying out technological initiatives in the classroom:",
  },
  {
    title: "Retail",
    icon: <FaOpencart />,
    description:
      "Retail entails improving a number of areas, including customer experiences, inventory control, sales analytics, and retail operations. This is a methodical approach to comprehending and executing technology initiatives in the retail industry:",
  },
];

const OnlineMarketing = () => {
  return (
    <div className="py-15 px-20 bg-sky-600/10 min-h-screen">
      <style>{`
        @keyframes vibrate {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
        .hover\\:vibrate:hover {
          animation: vibrate 0.5s linear;
          box-shadow: 0 4px 20px rgba(2, 132, 199, 1); 
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-Bebas text-black">
          Why choose us for{" "}
          <span className="text-sky-600">Your Internet Marketing?</span>
        </h2>
        <p className="text-black font-Sans text-xl mb-10 max-w-3xl">
          We at CodeMechanism Infotech offer complete end-to-end solutions. Our
          team of professionals specializes in providing businesses with
          targeted advertising solutions that increase customer retention rates
          and optimize conversion rates..
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-crosshair">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl shadow-md border transition-all duration-200 hover:vibrate"
            >
              <div className="flex justify-center items-center text-sky-600 text-6xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-Bebas text-sky-600 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-black text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineMarketing;
