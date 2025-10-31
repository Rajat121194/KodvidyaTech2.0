import React from "react";
import { Link } from "react-router-dom";
import uiUxImage from "../../assets/pictures/uiuxp.jpg";

const UiUxDesign = () => {
  return (
    <section className="bg-chitu px-4 sm:px-8 md:px-12 lg:px-30 py-22 sm:py-16 md:py-24 lg:py-52">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-Bebas text-gold mb-4">
            UI/UX Design And Consulting Services
          </h2>

          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-Sans text-blue mb-6">
            At CodeMechanism Infotech, we offer the most advanced UI and UX
            design techniques to guarantee the best outcome that is delivered on
            time. Our creative team is capable of working as a unique design
            firm for a complex platform due to our creative design process..
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="bg-gold text-blue hover:bg-chitu hover:text-gold border border-transparent hover:border-gold px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={uiUxImage}
            alt="UI UX Design Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl shadow-gold object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UiUxDesign;

