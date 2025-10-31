import { GiOrganigram } from "react-icons/gi";
import { TbDeviceMobileCode } from "react-icons/tb";
import { GiCursedStar } from "react-icons/gi";
import { FaGalacticSenate } from "react-icons/fa";

const services = [
  {
    icon: <TbDeviceMobileCode size={30} />,
    title: "Native Mobile App Development",
    description:
      "For both the iOS and Android operating systems, our skilled mobile app developers produce premium native applications that perfectly match your goals and strict security specifications.",
  },
  {
    icon: <GiOrganigram size={30} />,
    title: "Hybrid Mobile App Development",
    description:
      "Cross-platform applications that combine web and native app technologies in a special way to provide maximum performance and adaptability while working successfully in a range of choices.",
  },
  {
    icon: <GiCursedStar size={30} />,
    title: "Progressive Mobile App Development",
    description:
      "We combine the strengths of native and web technologies to create versatile solutions with our cross-platform apps that run smoothly in all devices.",
  },
  {
    icon: <FaGalacticSenate size={30} />,
    title: "Wearables and Embedded Software",
    description:
      "Our expertise focuses on creating partner applications for diverse wearable gadgets and incorporating them with either custom accessories or smart devices.",
  },
];

export default function MobileServices() {
  return (
    <section className="bg-gold/10 py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] text-gold font-Bebas mb-4">
          Mobile Application Development Services For Various Platforms
        </h2>
        <p className="sm:text-xl md:text-2xl lg:text-3xl text-blue font-Sans">
          We make sure every app contributes to your long-term success by
          concentrating on developing your brand identity and promoting
          business growth. With over a decade of experience, our mobile app
          developers have built solutions that satisfy customer needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue border border-gold rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="bg-gold text-chitu inline-block p-3 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-Bebas mb-3 text-gold leading-snug">
              {service.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gold font-Sans leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
