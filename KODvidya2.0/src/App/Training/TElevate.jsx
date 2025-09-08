import React from "react";
import heroImg from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/tp.jpg";

const TElevate = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-chitu py-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 p-5 text-center md:text-left">
        <h1 className="text-6xl font-Bebas text-gold">
          Elevate your Career with CodeMechanism Infotech
        </h1>
        <p className="text-xl font-Sans text-blue">
          Using cutting-edge technological solutions and remaining one step
          ahead of the competition are essential to advancing your career with
          CodeMechanism Infotech. Here’s how CodeMechanism Infotech can help you
          advance in your career:
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="Training Hero"
          className="rounded-xl max-w-md w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TElevate;
