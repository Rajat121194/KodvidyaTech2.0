import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { getColor } from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/utils/getColor.js";

// Example highlights
const highlights = [
  { title: "Mobile-Apps Development", color: "text-gold" },
  { title: "Web Development", color: "text-gold" },
  { title: "Internet Marketing", color: "text-gold" },
];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false); // 🔹 Popup toggle

  // GSAP Refs
  const glowRef = useRef(null);
  const containerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % highlights.length),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  const { title, color } = highlights[index];

  // GSAP Glow Effects
  useEffect(() => {
    const glow = glowRef.current;
    const container = containerRef.current;
    if (!glow || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const centerX = rect.width / 2;

      const leftIntensity = Math.max(0, 1 - offsetX / centerX);
      const rightIntensity = Math.max(0, offsetX / centerX - 1);

      gsap.to(glow, {
        x: offsetX - centerX,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      if (leftIntensity > 0) {
        gsap.to(container, {
          boxShadow: `${-leftIntensity * 40}px 0px ${
            40 + leftIntensity * 40
          }px ${getColor("gold")}`,
          duration: 0.3,
          ease: "power3.out",
        });
      } else if (rightIntensity > 0) {
        gsap.to(container, {
          boxShadow: `${rightIntensity * 40}px 0px ${
            40 + rightIntensity * 40
          }px ${getColor("gold")}`,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(container, {
        boxShadow: `0px 0px 20px ${getColor("gold")}`,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // GSAP Popup Animation
  useEffect(() => {
    if (popupRef.current) {
      if (showLogin) {
        // Opening animation
        gsap.fromTo(
          popupRef.current,
          { scale: 0, opacity: 0, y: 50, x: 50 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      } else {
        // Closing animation
        gsap.to(popupRef.current, {
          scale: 0,
          opacity: 0,
          y: 50,
          x: 50,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [showLogin]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] overflow-hidden px-5 py-8">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/src/assets/videos/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-xl space-y-2 md:px-16 py-20">
        <h1 className="text-5xl leading-snug font-Bebas text-blue">
          A Leading <span className={`${color} text-6xl`}>{title}</span>{" "}
          Company.
        </h1>
        <p className="text-blue text-xl font-Sans mb-6">
          Welcome to CodeMechanism Infotech, We provide proficient web
          development, mobile app development, and digital marketing services,
          with a focus on complete digital solutions. Our team of professionals
          creates advanced mobile apps and user-friendly, responsive websites to
          meet your business's demands.
        </p>

        {/* GSAP Glowing Button */}
        <div className="relative inline-flex items-center">
          <Link
            to="/contact"
            ref={containerRef}
            className="relative flex items-center justify-center px-10 py-2 rounded-full border border-chitu bg-chitu/10 backdrop-blur-md overflow-hidden font-Sans text-lg font-semibold tracking-wide transition-all duration-300 group"
            style={{
              boxShadow: `0px 0px 80px ${getColor("gold")}`,
            }}
          >
            {/* Glow Effect Layer */}
            <div
              ref={glowRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
            >
              {/* Core Glow */}
              <div
                className="absolute h-[1000px] w-[100px] rounded-full blur-xl mix-blend-screen"
                style={{
                  background: `radial-gradient(circle, ${getColor(
                    "gold"
                  )} 0%, ${getColor("gold")} 40%, transparent 80%)`,
                }}
              ></div>

              {/* Soft Diffused Glow */}
              <div
                className="absolute h-[240px] w-[100px] rounded-full blur-3xl mix-blend-screen"
                style={{
                  background: `radial-gradient(circle, ${getColor(
                    "gold"
                  )} 20%, ${getColor("gold")} 60%, transparent 100%)`,
                }}
              ></div>
            </div>

            {/* Button Text */}
            <span className="relative z-10 flex items-center justify-center text-blue">
              Schedule a Free Consultancy Meeting
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Transparent Button - Bottom Right */}
      {!showLogin && (
        <div className="fixed bottom-5 right-10 z-50">
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-3 rounded-full border border-blue bg-transparent
                       text-gold font-semibold tracking-wide backdrop-blur-md
                       hover:bg-gold/10 hover:border-gold hover:text-blue
                       transition-all duration-300 shadow-lg"
          >
            Workplace Login
          </button>
        </div>
      )}

      {/* 🔹 Popup Modal */}
      {showLogin && (
        <div className="fixed bottom-15 right-10 z-[100]">
          <div
            ref={popupRef}
            className="bg-kalu/80 rounded-2xl shadow-2xl p-6 w-[350px] relative origin-bottom-right"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gold hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center text-gold mb-4">
              Workplace Login
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gold">
                  ID
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-chitu rounded-lg focus:ring-2 focus:ring-gold focus:outline-none placeholder:text-chitu"
                  placeholder="Enter your ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gold">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 px-3 py-2 border border-chitu rounded-lg focus:ring-2 focus:ring-gold focus:outline-none placeholder:text-chitu"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-gold text-white rounded-lg font-semibold hover:bg-blue transition-all duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
