import React, { useState, useEffect } from "react";
import FLogo from "../assets/pictures/logo.png";

export default function WelcomeOverlay({ isVisible }) {
  const [displayText, setDisplayText] = useState("");
  const targetText =
    "CodeMechanism v1.0 — Your Vision, Our Digital Blueprint...";
  const chars = "~!@#$%^&*()_-+={[}]|:;<>,.?/"; //

  useEffect(() => {
    let frame = 0;
    const totalFrames = 40; // ~1 second if 50ms each
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < (frame / totalFrames) * targetText.length) {
              return targetText[i];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      frame++;
      if (frame > totalFrames) {
        setDisplayText(targetText);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center 
                  bg-kalu/30 backdrop-blur-md z-[9999] 
                  transition-transform duration-5000 ease-in-out
                  ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Centered Image */}
      <img
        src={FLogo}
        alt="Loading Logo"
        className="w-150 h-150 object-contain"
      />

      {/* Bottom Left Loading Text with scramble animation */}
      <p className="absolute bottom-4 left-20 text-gold text-xl text-md tracking-widest font-Sans">
        {displayText}
      </p>
    </div>
  );
}
