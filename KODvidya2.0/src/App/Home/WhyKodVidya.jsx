import { useEffect, useRef } from "react";
import TeamImage from "../../assets/pictures/teamwhy.webp";
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin left section only on desktop
      ScrollTrigger.create({
        trigger: leftRef.current,
        start: "top top",
        end: () => rightRef.current.scrollHeight,
        pin: true,
        pinSpacing: true,
      });
    });

    // Animate feature cards
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

      return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-gold/10 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-30 py-10 md:py-16 overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* LEFT SECTION */}
        <div
          ref={leftRef}
          className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left w-full"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[45px] lg:text-[65px] mt-10 font-Bebas text-gold leading-[55px] md:leading-[65px]">
            Why CodeMechanism Infotech...?
          </h2>

          <p className="text-blue sm:text-lg md:text-xl lg:text-[22px] font-Sans leading-[30px] md:leading-[32px] max-w-[90%] sm:max-w-2xl mx-auto md:mx-0 mb-6">
            We have unparalleled expertise. Our team, with its deep knowledge,
            delivers tailored web and mobile app development, as well as digital
            marketing services. Connect with us to get exceptional results that
            drive your business forward.
          </p>

          <img
            src={TeamImage}
            alt="Our Team"
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-xl object-cover rounded-2xl border border-gold shadow-blue shadow-2xl"
          />
        </div>

        {/* RIGHT SECTION (cards) */}
        <div
          ref={rightRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 lg:mt-0"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group rounded-2xl p-5 sm:p-6 md:p-6 lg:p-8 bg-white border border-blue shadow-md
                           transition duration-300 hover:scale-[1.03] hover:shadow-xl 
                           hover:bg-gold cursor-crosshair"
              >
                <div className="mb-2">
                  <Icon className="text-blue text-2xl sm:text-3xl md:text-3xl lg:text-4xl transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[35px] font-Bebas text-blue leading-[45px] md:leading-[55px] transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-Sans text-blue leading-[28px] md:leading-[32px] transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCodeMechanism;