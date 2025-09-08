import React, { useState, useEffect } from "react";
import heroImg from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por.jpg";
import Career from "./Careers";

const Elevate = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12 bg-chitu text-gold">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-5 text-center md:text-left space-y-4">
        <h1 className="text-6xl md:text-6xl font-Bebas">
          Elevate your Career at CodeMechanism Infotech
        </h1>
        <p className="text-xl md:text-xl font-Sans text-blue">
          Using cutting-edge technological solutions and staying one step ahead
          of the competition are essential to advancing your career with
          CodeMechanism Infotech. Here’s how CodeMechanism Infotech can help you
          grow professionally:
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 font-Sans rounded-lg shadow-md bg-gold text-chitu hover:bg-chitu hover:text-gold border border-gold hover:font-bold transition"
        >
          View Job Openings
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImg}
          alt="Career Opportunities"
          className="rounded-3xl max-w-md w-full object-cover"
        />
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 py-12 flex items-center justify-center bg-kalu/80 z-50"
          onClick={() => setIsOpen(false)} // close on outside click
        >
          {/* Popup Box */}
          <div
            className="bg-yellowLight rounded-xl shadow-lg w-[90%] md:w-[65%] h-[80%] relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gold hover:text-red-500 text-3xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content area */}
            <div
              className="flex-1 overflow-y-auto px-4 pb-6"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <Career />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Elevate;
