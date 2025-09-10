import React from "react";
import { Link } from "react-router-dom";
import uiUxImage from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/uiuxp.jpg";

const UiUxDesign = () => {
  return (
    <section className="bg-chitu px-16 md:px-20 py-48">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-Bebas text-gold">
            UI/UX Design And Consulting Services
          </h2>
          <p className="text-xl font-Sans text-blue mb-6">
            At CodeMechanism Infotech, we offer the most advanced UI and UX
            design techniques to guarantee the best outcome that is delivered on
            time. Our creative team is capable of working as a unique design
            firm for a complex platform due to our creative design process.
          </p>
          <Link
            to="/contact"
            className="bg-gold hover:bg-chitu text-blue hover:text-blue border hover:border-gold px-6 py-3 rounded-full hover:font-bold transition inline-block text-center cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src={uiUxImage}
            alt="UI UX Design Illustration"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default UiUxDesign;
