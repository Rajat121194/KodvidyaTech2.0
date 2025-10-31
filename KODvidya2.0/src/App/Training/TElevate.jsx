import React from "react";
import heroImg from "../../assets/pictures/tp.jpg";

const TElevate = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between  px-6 md:px-16 bg-chitu py-62">
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 p-5 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold">
          Elevate your Career with CodeMechanism Infotech
        </h1>
        <p className="sm:text-xl md:text-2xl lg:text-3xl font-Sans text-blue">
          Using cutting-edge technological solutions and remaining one step
          ahead of the competition are essential to advancing your career with
          CodeMechanism Infotech. Here’s how CodeMechanism Infotech can help you
          advance in your career:
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={heroImg}
          alt="Training Hero"
          className="rounded-2xl w-[90%] sm:w-[80%] md:w-[85%] lg:w-[90%] max-w-xl object-cover"
        />
      </div>
    </div>
  );
};

export default TElevate;
