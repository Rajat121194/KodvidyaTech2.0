import React from "react";
import bgVideo from "/src/assets/videos/you.mp4";

const WhoWeAre = () => {
  return (
    <section className="relative bg-kalu text-chitu py-25 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 text-right mr-10 mt-10">
        <h1 className="text-6xl text-gold font-Bebas">Who We Are</h1>
        <p className="text-xl tracking-tight font-Sans text-blue">
          CodeMechanism Technologies
        </p>
      </div>

      <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 ml-auto text-right p-12">
        <h2 className="text-5xl text-gold font-Sans mb-2">Hey Everyone!</h2>
        <p className="text-2xl text-blue font-Sans">
          Greetings from CodeMechanism Infotech! Our team of full stack
          developers and digital experts has successfully serviced over 219
          clients and completed over 367 projects, building 10–12 years of
          industry experience between them. Our experts are committed to
          developing cutting-edge solutions that support business growth and
          offer success.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
