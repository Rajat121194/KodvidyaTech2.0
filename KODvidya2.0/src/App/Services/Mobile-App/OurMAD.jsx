import { GiEyeShield, GiAlienBug, GiScrewdriver } from "react-icons/gi";
import { SiAffinitydesigner } from "react-icons/si";
import { TbDevicesCode } from "react-icons/tb";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const steps = [
  {
    icon: <GiEyeShield size={28} />,
    title: "Vision and Creation",
    description:
      "Describe the main features, target market, and objective of the app.",
    color: "bg-gold",
  },
  {
    icon: <SiAffinitydesigner size={28} />,
    title: "Design",
    description:
      "Produce UI/UX designs, wireframes, and prototypes for the application.",
    color: "bg-gold",
  },
  {
    icon: <TbDevicesCode size={28} />,
    title: "Development",
    description:
      "Using the design and specs as a guide, write the code and incorporate functionality.",
    color: "bg-gold",
  },
  {
    icon: <GiAlienBug size={28} />,
    title: "Testing",
    description:
      "Make sure the software works properly by carrying out thorough testing to find and repair errors.",
    color: "bg-gold",
  },
  {
    icon: <AiOutlineDeploymentUnit size={28} />,
    title: "Deployment",
    description:
      "Make the software accessible to users by launching it on app stores.",
    color: "bg-gold ",
  },
  {
    icon: <GiScrewdriver size={28} />,
    title: "Maintenance",
    description:
      "To keep the program current and useful, give constant support, enhancements, and updates.",
    color: "bg-gold",
  },
];

export default function DevelopmentSteps() {
  return (
    <section className="w-screen min-h-screen bg-chitu overflow-hidden">
      {/* Header */}
      <div className="text-center mb-4 px-4 sm:px-8 md:px-16 lg:px-30 py-15">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[88px] font-Bebas text-gold">
          Key Steps In Our Mobile App Development
        </h2>
        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-3xl font-Sans">
          Each company has its unique approach to executing the Mobile App
          Development Process. Here’s how we proceed:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-30">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`group border border-gold rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 text-white ${step.color} hover:scale-105`}
          >
            <div className="bg-blue p-3 sm:p-4 rounded-full inline-block text-gold transition-transform duration-500 group-hover:animate-spin-slow group-hover:scale-105">
              {step.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Bebas">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-Sans text-chitu group-hover:text-chitu">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}