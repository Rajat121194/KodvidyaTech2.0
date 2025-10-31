import React from "react";
import teamImage from "../../assets/pictures/cp2.jpg";

const Culture = () => {
  return (
    <div className="bg-gold/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-6">
          Our culture is a reflection of our shared values, attitudes, beliefs,
          and working practices.
        </h1>

        {/* Paragraph */}
        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-3xl mx-auto mb-10">
          Any organization's culture, including CodeMechanism Infotech, is a
          reflection of its common attitudes, beliefs, values, and methods of
          operation. Here's a closer look at how these components influence and
          characterize CodeMechanism Infotech's culture:
        </p>

        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src={teamImage}
            alt="Team Culture"
            className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[100%] rounded-3xl shadow-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;
