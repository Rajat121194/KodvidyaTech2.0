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
    <section className="bg-gold/10 py-25 px-15">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-gold font-Bebas mb-1">
          Mobile Application Development
          <br /> Services For Various Platforms
        </h2>
        <p className="text-xl md:text-xl text-blue">
          We make sure every app contributes to your long-term success by
          concentrating on developing your brand identification and promoting
          business growth. With more than ten years of experience, our mobile
          app developers have developed solutions that satisfy customer
          requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue border border-gold rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:shadow-gold transition"
          >
            <div className="bg-gold text-chitu inline-block p-3 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-Bebas mb-2 text-gold">
              {service.title}
            </h3>
            <p className="text-sm font-Sans text-gold">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
