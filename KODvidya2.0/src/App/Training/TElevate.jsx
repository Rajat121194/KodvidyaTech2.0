import React from "react";
import heroImg from "../../assets/pictures/tp.jpg";

const TElevate = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-30 bg-chitu py-16 sm:py-20 md:py-24 lg:py-58 overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-Bebas text-gold leading-tight md:leading-[68px] mb-4 md:max-w-xl mx-auto md:mx-0">
          Elevate your Career with CodeMechanism Infotech
        </h1>

        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-xl mx-auto md:mx-0">
          Using cutting-edge technological solutions and remaining one step
          ahead of the competition are essential to advancing your career with
          CodeMechanism Infotech. Here’s how CodeMechanism Infotech can help you
          advance in your career:
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={heroImg}
          alt="Training Hero"
          className="rounded-2xl w-[90%] sm:w-[80%] md:w-[85%] lg:w-[90%] max-w-lg mt-6 md:max-w-xl object-cover"
        />
      </div>
    </section>
  );
};

export default TElevate;
