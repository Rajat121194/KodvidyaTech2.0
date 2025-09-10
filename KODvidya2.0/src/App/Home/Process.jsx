import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Helper to read CSS variables
const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// Helper: split text into word spans while preserving spaces
const SplitToWordSpans = ({ text, wordClass = "" }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => {
        const isLast = i === words.length - 1;
        return (
          <span
            key={i}
            className={wordClass}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {w}
            {isLast ? "" : " "}
          </span>
        );
      })}
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

      // initial styles
      gsap.set(headingWords, {
        color: yellowLight,
        opacity: 0.95,
        y: 0,
        willChange: "color, opacity, transform",
      });

      gsap.set(paraWords, {
        color: blueLight,
        opacity: 0.9,
        y: 8,
      });

      // scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=100",
          scrub: 0.1,
          pin: headingRef.current,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to(
        headingWords,
        {
          color: gold,
          opacity: 1,
          y: -2,
          duration: 3.45,
          stagger: 0.9,
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
          duration: 4.2,
          stagger: 0.9,
          ease: "power2.out",
        },
        "+=0.2"
      );
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-10 px-6 md:px-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="flex justify-start items-start">
            <h2
              ref={headingRef}
              className="text-6xl md:text-6xl mb-1 font-Bebas leading-tight"
              aria-label="Our Software Development Process"
              style={{ lineHeight: 1 }}
            >
              <SplitToWordSpans text="Our Software Development Process" />
            </h2>
          </div>

          <div className="flex justify-center md:justify-end mt-4 items-center">
            <p
              ref={paraRef}
              className="text-2xl font-Sans"
              style={{ maxWidth: 520 }}
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
