import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedSection({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { rotateX: -90, opacity: 0, transformOrigin: "top" }, // folded
      {
        rotateX: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // start folding when section enters viewport
          end: "top 20%", // fully unfolded when it reaches this point
          scrub: true, // animation progress follows scroll
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} style={{ perspective: "1000px" }}>
      {children}
    </div>
  );
}

export default AnimatedSection;
