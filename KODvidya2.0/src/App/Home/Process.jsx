import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const SplitToWordSpans = ({ text }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
};

const SoftwareDevelopmentProcess = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const yellowLight = getCSSVar("--color-yellowLight");
    const blueLight = getCSSVar("--color-blueLight");
    const gold = getCSSVar("--color-gold");
    const blue = getCSSVar("--color-blue");

    const ctx = gsap.context(() => {
      const headingWords = headingRef.current.querySelectorAll("span");
      const paraWords = paraRef.current.querySelectorAll("span");

      gsap.set(headingWords, { color: yellowLight, opacity: 0.95, y: 0 });
      gsap.set(paraWords, { color: blueLight, opacity: 0.9, y: 6 });

      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=50",
          scrub: 0.2,
          pin: isMobile ? headingRef.current : false,
          pinSpacing: isMobile,
        },
      });

      tl.to(
        headingWords,
        {
          color: gold,
          opacity: 1,
          y: -2,
          duration: 2.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        paraWords,
        {
          color: blue,
          opacity: 1,
          y: 0,
          duration: 3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=2.2"
      );
    }, containerRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="py-10 px-4 sm:px-8 md:px-16 lg:px-20"
      ref={containerRef}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center md:items-stretch">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          
          {/* Heading */}
          <div className="flex justify-center md:justify-start">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-[45px] lg:text-[65px] font-Bebas text-blue leading-[1.2] sm:leading-[1.3] lg:leading-[70px] text-center md:text-left md:pt-[20px] lg:pt-[60px] px-2 sm:px-0"
              aria-label="Our Software Development Process"
            >
              <SplitToWordSpans text="Our Software Development Process" />
            </h2>
          </div>

          {/* Paragraph */}
          <div className="flex justify-center md:justify-end">
            <p
              ref={paraRef}
              className="text-blue text-base sm:text-lg md:text-xl lg:text-[22px] font-Sans max-w-[95%] sm:max-w-2xl mx-auto md:mx-0 leading-[28px] sm:leading-[32px] mt-2 sm:mt-1 md:mt-2 lg:mt-3 text-center md:text-left"
            >
              <SplitToWordSpans text="We proceed with few essential phases in our software development process. To deliver quality work and to gain your confidence, we guarantee a complete hold of your demands, careful planning, and exact implementation, which comes in detailed testing and a smooth deployment." />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentProcess;
