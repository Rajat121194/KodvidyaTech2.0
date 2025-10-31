import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamImage from "../../assets/pictures/team.jpg";

gsap.registerPlugin(ScrollTrigger);

// Helper to read CSS variables
const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const BusinessSuccess = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const gold = getCSSVar("--color-gold");
    const blue = getCSSVar("--color-blue");

    const ctx = gsap.context(() => {
      gsap.set(buttonRef.current, { scale: 0.8, autoAlpha: 0 });
      gsap.set(titleRef.current, { autoAlpha: 0, y: -50 });
      gsap.set(paraRef.current, { autoAlpha: 0, y: 50 });
      gsap.set(imgRef.current, { autoAlpha: 0, x: 100, filter: "blur(20px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      tl.fromTo(
        sectionRef.current,
        { backgroundColor: gold },
        { backgroundColor: `${gold}1A`, duration: 0.6, ease: "power2.out" }
      )
        .to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          paraRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          buttonRef.current,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .to(
          imgRef.current,
          {
            x: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 xl:px-32 py-10 sm:py-14 md:py-20 overflow-x-hidden"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[65px] font-Bebas text-gold leading-[1.2] sm:leading-[1.3] lg:leading-[70px] md:pt-[20px] lg:pt-[60px] max-w-[95%] sm:max-w-none"
        >
          Increase your Business Success with Latest Technologies.
        </h2>

        <p
          ref={paraRef}
          className="text-blue text-base sm:text-lg md:text-xl lg:text-[22px] font-Sans max-w-[95%] sm:max-w-2xl leading-[28px] sm:leading-[32px] mt-2 sm:mt-4 md:mt-6"
        >
         You are just a conversation away from getting the right approach to convert your dream project into reality. At CodeMechanism Infotech, we focus to work on the best possible solution to speed up your solution without doing any compromise to deliver quality work. With the help of our experienced software developers we are always ready to kickstart any kind of requirements and deliver the work as per timeline.
        </p>

        <Link to="/contact" className="mt-3 sm:mt-5 md:mt-6">
          <button
            ref={buttonRef}
            className="px-6 sm:px-10 py-2.5 sm:py-3 bg-gold text-blue rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue hover:text-gold hover:font-bold hover:border-gold border transition duration-300 relative z-10 cursor-pointer"
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 flex justify-center md:justify-end mt-8 sm:mt-10 md:mt-0 w-full">
        <img
          ref={imgRef}
          src={TeamImage}
          alt="Business Team"
          className="rounded-2xl shadow-2xl shadow-gold w-[90%] sm:w-[80%] md:w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
        />
      </div>
    </section>
  );
};

export default BusinessSuccess;
