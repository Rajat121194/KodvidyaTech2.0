import { useEffect, useRef } from "react";
import TeamImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/teamwhy.webp";
import { FaUserSecret } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { GiBrainFreeze, GiRocketThruster } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyCodeMechanism = () => {
  const cardsRef = useRef([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const features = [
    {
      title: "High Quality Code",
      description:
        "Providing outstanding, higher code that is customized to your requirements, ensuring reliable performance and seamless integration each and every time.",
      icon: GiBrainFreeze,
    },
    {
      title: "Agile Approach",
      description:
        "Our full stack team is always prepared to tackle any challenging tasks, ensuring you are in capable and reliable hands.",
      icon: GiRocketThruster,
    },
    {
      title: "Full Stack Teams",
      description:
        "Our strong process for Agile ensures quick, scalable implementation while maintaining a high value on constant input and perfect project completion.",
      icon: FaUsersRays,
    },
    {
      title: "Data Security",
      description:
        "We maintain high importance on data security, making sure that your personal data is protected with maximum privacy and security.",
      icon: FaUserSecret,
    },
  ];

  useEffect(() => {
    // Pin left section until right side (features grid) finishes scrolling
    ScrollTrigger.create({
      trigger: leftRef.current,
      start: "top top",
      end: () => rightRef.current.scrollHeight, // matches height of right content
      pin: true,
      pinSpacing: true, // leaves spacing for smooth layout
    });

    // Animate cards one by one
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotation: 10 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-gold/10 px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Section */}
      <div ref={leftRef} className="flex flex-col items-start space-y-3">
        <h2 className="text-6xl text-gold font-Bebas">
          Why CodeMechanism Infotech...?
        </h2>
        <p className="text-blue font-Sans text-xl max-w-md">
          We have unparalleled expertise. Our team, with its deep knowledge,
          delivers tailored web and mobile app development, as well as digital
          marketing services. Connect us to get exceptional results that drive
          your business onward.
        </p>
        <img
          src={TeamImage}
          alt="Team"
          className="w-110 h-60 rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Section (Features) */}
      <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-2xl p-6 shadow-md bg-[#ffffff] text-blue 
                         transform transition duration-300 hover:scale-105 
                         hover:shadow-xl hover:bg-gold cursor-crosshair"
            >
              <div className="mb-3">
                <Icon className="text-blue text-4xl transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-md transition-colors duration-300 group-hover:text-white">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyCodeMechanism;
