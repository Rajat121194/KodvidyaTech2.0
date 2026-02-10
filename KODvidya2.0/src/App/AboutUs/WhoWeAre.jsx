import React from "react";
import bgVideoLandscape from "/src/assets/videos/you.mp4";
import bgVideoPortrait from "/src/assets/videos/you-vertical2.mp4";

const WhoWeAre = () => {
  return (
    <section className="relative py-32 sm:py-40 md:py-62 overflow-hidden">
      {/* Desktop / Tablet Video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={bgVideoLandscape}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src={bgVideoPortrait}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay (optional for contrast) */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-0">
        {/* Heading */}
        <div className="text-right mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            Who We Are
          </h1>
          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px]">
            CodeMechanism Infotech
          </p>
        </div>

        {/* Description */}
        <div className="w-full md:w-4/5 lg:w-1/2 ml-auto text-right space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px]">
            Hey Everyone!
          </h2>
          <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans pl-20 lg:ml-0 md:ml-36 sm:ml-50 leading-relaxed md:leading-[32px]">
            Greetings from CodeMechanism Infotech! Our team of full stack
            developers and digital experts has successfully serviced over 219
            clients and completed over 367 projects, building 10–12 years of
            industry experience between them. Our experts are committed to
            developing cutting-edge solutions that support business growth and
            offer success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
