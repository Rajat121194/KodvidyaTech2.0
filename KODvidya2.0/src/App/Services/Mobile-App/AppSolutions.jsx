import { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiHealthPotion } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { TfiSettings } from "react-icons/tfi";

const AppSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const industries = [
    {
      title: "Construction",
      description:
        "Transform your vision into reality with our comprehensive software development services. We specialize in crafting custom solutions that optimize operational efficiency and drive digital transformation.",
      icon: <LiaLaptopCodeSolid className="text-blue w-10 h-10" />,
      iconBg: "bg-chitu",
      borderColor: "border-gold",
      textTint: "text-gold",
      bgTint: "bg-yellowLight",
    },
    {
      title: "Health",
      description:
        "Transform your healthcare vision into reality with our comprehensive software development services. We specialize in crafting custom solutions that enhance patient care, streamline administrative processes, and drive digital transformation in the health sector.",
      icon: <GiHealthPotion className="text-blue w-6 h-6" />,
      iconBg: "bg-chitu",
      borderColor: "border-gold",
      textTint: "text-gold",
      bgTint: "bg-yellowLight",
    },
    {
      title: "Retail & eCommerce",
      description:
        "Transform your retail vision into reality with our comprehensive software development services. We specialize in crafting custom solutions that optimize operational efficiency, elevate customer experiences, and drive digital transformation in the retail and eCommerce industry.",
      icon: <FaCartShopping className="text-blue w-6 h-6" />,
      iconBg: "bg-chitu",
      borderColor: "border-gold",
      textTint: "text-gold",
      bgTint: "bg-yellowLight",
    },
    {
      title: "Fintech",
      description:
        "Transform your financial retail vision into reality with our comprehensive software development services. We specialize in crafting custom solutions that enhance transaction security, streamline financial operations, and drive digital transformation in the retail and fintech sectors.",
      icon: <TfiSettings className="text-blue w-6 h-6" />,
      iconBg: "bg-chitu",
      borderColor: "border-gold",
      textTint: "text-gold",
      bgTint: "bg-yellowLight",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-30 py-10 sm:py-16 md:py-20 bg-chitu">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            Mobile Application Solutions for Specific Industries
          </h2>
          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-3xl">
            Our expertise is in delivering custom mobile application services to
            a range of categories. We are experienced at providing cutting-edge
            digital solutions to businesses of all sizes, quickly and skillfully
            fulfilling their unique needs.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-chitu shadow-md rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 border-l-4 ${industry.borderColor}`}
              onClick={() => toggleDropdown(index)}
            >
              {/* Title + Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${industry.iconBg}`}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-[32px] font-Bebas ${industry.textTint}`}
                  >
                    {industry.title}
                  </h3>
                </div>
                {openIndex === index ? (
                  <MdArrowDropUp className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <MdArrowDropDown className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </div>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-80 mt-4" : "max-h-0"
                }`}
              >
                <div
                  className={`rounded-md p-4 mt-2 ${industry.bgTint} text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]`}
                >
                  <p>{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSolutions;
