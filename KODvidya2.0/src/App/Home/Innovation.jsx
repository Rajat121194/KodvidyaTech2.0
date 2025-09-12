import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/team.jpg";

gsap.registerPlugin(ScrollTrigger);

// ✅ Helper to read CSS variables
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
      // Timeline for section reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Step 1: section fade
      tl.fromTo(
        sectionRef.current,
        { backgroundColor: gold },
        {
          backgroundColor: `${gold}1A`, // transparent variation
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Step 2: children animation
      tl.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      })
        .from(
          paraRef.current,
          { y: 50, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          buttonRef.current,
          { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        )
        .from(
          imgRef.current,
          {
            x: 100,
            opacity: 0,
            filter: "blur(20px)",
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-center px-8 md:p-16 gap-20 overflow-x-hidden"
      >
        <div className="flex-2">
          <h2 ref={titleRef} className="text-6xl font-Bebas text-gold mb-2">
            Increase your Business Success with Latest Technologies.
          </h2>
          <p ref={paraRef} className="text-blue text-xl mb-6 font-Sans">
            You are just a conversation away from getting the right approach to
            convert your dream project into reality. At CodeMechanism Infotech,
            We focus to work on the best possible solution to speed up your
            solution without doing any compromise to deliver quality work. With
            the help of our experienced software developers we are always ready
            to kickstart any kind of requirements and deliver the work as per
            timeline.
          </p>

          <Link to="/contact">
            <button
              ref={buttonRef}
              className="px-18 py-3 bg-gold text-blue rounded-lg hover:bg-blue hover:text-gold hover:font-bold hover:border-gold border transition duration-300 relative z-10 cursor-pointer"
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1">
          <img
            ref={imgRef}
            src={TeamImage}
            alt="Business Team"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default BusinessSuccess;
