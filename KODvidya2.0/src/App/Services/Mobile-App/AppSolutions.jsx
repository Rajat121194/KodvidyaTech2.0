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
    <section className="px-20 py-15 bg-chitu">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between">
          <h2 className="text-6xl text-gold font-Bebas">
            Mobile Application Solutions for Specific Industries
          </h2>
          <p className="text-blue text-xl max-w-xl mt-6 md:mt-0">
            Our expertise is in delivering custom mobile application services to
            a range of categories. We are experienced at providing cutting-edge
            digital solutions to businesses of all sizes, quickly and skillfully
            fulfilling their unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-chitu shadow-md rounded-lg p-6 cursor-pointer transition-all duration-300 border-l-4 ${industry.borderColor}`}
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${industry.iconBg}`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${industry.textTint}`}>
                    {industry.title}
                  </h3>
                </div>
                {openIndex === index ? (
                  <MdArrowDropUp className="w-5 h-5" />
                ) : (
                  <MdArrowDropDown className="w-5 h-5" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <div
                  className={`rounded-md p-4 mt-2 ${industry.bgTint} text-blue overflow-y-auto max-h-40 md:max-h-fit`}
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
