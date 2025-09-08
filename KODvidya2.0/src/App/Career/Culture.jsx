import React from "react";
import teamImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/cp2.jpg";

const Culture = () => {
  return (
    <div className="bg-gold/10">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-6xl sm:text-4xl md:text-6xl font-Bebas text-gold mb-1">
          Our culture is a reflection of our shared values, attitudes, beliefs,
          and working practices.
        </h1>

        <p className="text-blue font-Sans text-xl max-w-3xl mx-auto mb-8">
          Any organization's culture, including CodeMechanism Infotech, is a
          reflection of its common attitudes, beliefs, values, and methods of
          operation. Here's a closer look at how these components influence and
          characterize CodeMechanism Infotech's culture:
        </p>

        <img
          src={teamImage}
          alt="Team Culture"
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Culture;
