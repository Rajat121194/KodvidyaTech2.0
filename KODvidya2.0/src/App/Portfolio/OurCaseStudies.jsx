import React, { useState, useEffect, useRef } from "react";

import pic3 from "../../assets/pictures/pp3.jpg";
import pic4 from "../../assets/pictures/pp4.jpg";
import pic5 from "../../assets/pictures/pp5.jpg";

import bp1 from "../../assets/pictures/bp1.png";
import bp2 from "../../assets/pictures/bp2.png";
import bp3 from "../../assets/pictures/bp3.png";
import bp5 from "../../assets/pictures/bp5.png";

import mA1 from "../../assets/pictures/mA1.png";
import mA2 from "../../assets/pictures/mA2.png";
import mA3 from "../../assets/pictures/mA3.png";
import mA4 from "../../assets/pictures/mA4.png";

import R1 from "../../assets/pictures/R1.png";
import R2 from "../../assets/pictures/R2.png";
import R3 from "../../assets/pictures/R3.png";

import tg1 from "../../assets/pictures/tg1.png";
import tg2 from "../../assets/pictures/tg2.png";
import tg3 from "../../assets/pictures/tg3.png";
import tg4 from "../../assets/pictures/tg4.png";
import tg5 from "../../assets/pictures/tg5.png";

import or1 from "../../assets/pictures/or1.png";
import or2 from "../../assets/pictures/or2.png";
import or3 from "../../assets/pictures/or3.png";

import centerImg from "../../assets/pictures/Tree.png";

const caseStudies = [
  {
    id: 1,
    alt: "BuskerPro",

    title: "BuskerPRO",
    description:
      "BuskerPRO is the world’s first fair-trade music streaming platform with a transparent per-second royalty system. It empowers fans to directly support artists while ensuring right holders earn instantly with every stream.",
    images: [
      {
        src: bp1,
        title: "BuskerPRO – Fair Trade Music Streaming",
        description:
          "Stream every second, pay every second. Fans enjoy affordable music while artists and right holders earn real-time royalties through a fully transparent, per-second payment system. Experience music the fair way.",
      },
      {
        src: bp5,
        title: "Interactive Vinyl Music Player",
        description:
          "A sleek, retro-inspired music player designed with a vinyl turntable interface, offering immersive playback controls, real-time interaction, and an engaging user experience that blends nostalgia with modern functionality.",
      },
      {
        src: bp3,
        title: "Admin Dashboard",
        description:
          "The BuskerPRO Admin Dashboard delivers real-time insights into users, tracks, royalties, and activity, empowering transparent management for a fair-trade music streaming platform focused on direct artist compensation.",
      },
      {
        src: bp2,
        title: "Stripe Payment Integration",
        description:
          "Implemented Stripe to deliver a secure, reliable, and seamless payment experience, enabling users to make instant, hassle-free transactions with ease, enhancing overall trust and satisfaction on the platform.",
      },
    ],
    link: "https://thebusker.pro/",
  },
  {
    id: 2,
    alt: "mAGRI",
    title: "mAGRI",
    description:
      "mAGRI is a digital agriculture platform offering courses, video lessons, farmer certification (virtual), community messaging, chatbox, and an SOS Emergency System to empower farmers with knowledge, support, and connectivity.",
    images: [
      {
        src: mA1,
        title: "mAgri – Connecting the Unconnected Farmers",
        description:
          "mAgri empowering farmers nationwide with marketing, trading, price comparisons, updates, financial services, and mobile stores—accessible anytime, anywhere via simple phones.",
      },
      {
        src: mA2,
        title: "How mAgri Works – Farming Made Simple",
        description:
          "mAgri is a USSD-based application that empowers farmers with weather alerts, crop prices, chat, Wikipedia, email, business profiles, and a marketplace—accessible on any phone, anytime, anywhere.",
      },
      {
        src: mA3,
        title: "Smart Farming Tips & Updates",
        description:
          "mAgri connects farmers with farming tips, business profiles, a digital marketplace, community chat, instant Wikipedia access, and email—creating a simple, all-in-one platform for knowledge, trading, and communication.",
      },
      {
        src: mA4,
        title: "ChatBot",
        description:
          "Integrated a live chatbox for real-time visitor communication with instant messaging, email transcripts, notifications, and support tools, boosting engagement, customer interaction, and overall service efficiency.",
      },
    ],
    link: "http://www.magri.co.bw/",
  },
  {
    id: 3,
    src: pic3,
    alt: "RAW",
    title: "RAW",
    description:
      "We crafted RAW’s UI/UX to deliver a seamless, modern dating experience—bold visuals, fluid interactions, and user-first design that makes authentic connections feel effortless.",
    images: [
      {
        src: R2,
        title: "Seamless User Profiling for Deeper Connections",
        description:
          "We designed RAW’s user detailing interface to highlight authenticity and personalization. Clean layouts, structured inputs, and intuitive navigation ensure profiles are both comprehensive and effortless to create.",
      },
      {
        src: R1,
        title: "Premium Experience, Designed for Engagement",
        description:
          "We developed RAW’s premium plan interface with a clean, intuitive design focused on clarity and conversion. Seamless layouts, refined visuals, and user-centered flows elevate the upgrade journey and maximize value perception.",
      },

      {
        src: R3,
        title: "Smart Matching, Simplified by Design",
        description:
          "We created RAW’s matching interface to balance clarity and engagement. Thoughtful layouts, intuitive gestures, and subtle visual cues guide users toward meaningful connections with ease.",
      },
    ],
  },
  {
    id: 4,
    src: pic4,
    alt: "Tego TV",
    title: "Tego TV",
    description:
      "Tego TV is a free streaming platform delivering Caribbean entertainment, including live TV channels with DVR, on-demand content, exclusive events, and sports. It supports push notifications, Google Cast, and seamless viewing on Android phones and TVs.",
    images: [
      {
        src: tg1,
        title: "TegoTV–Caribbean Entertainment Streaming Platform",
        description:
          "A feature-rich streaming app delivering free Caribbean TV, live sports, concerts, and on-demand content. Includes DVR rewind, Google Cast support, push notifications, and seamless Android TV and mobile experiences.",
      },
      {
        src: tg2,
        title: "Seamless Caribbean Streaming – Anytime, Anywhere",
        description:
          "Promotional creative for Tego TV highlighting its free streaming experience. The design emphasizes accessibility—allowing users to stream live Caribbean shows and events at home or on the go, with no subscription fees.",
      },
      {
        src: tg3,
        title: "Intuitive Streaming Dashboar",
        description:
          "Tego TV’s dashboard offers a simple, intuitive layout, enabling users to quickly access Live TV, On Demand content, sports, events, and radio for a complete Caribbean streaming experience.",
      },
      {
        src: tg4,
        title: "Interactive Program Guide",
        description:
          "An intuitive electronic program guide (EPG) that allows viewers to browse live channels, view upcoming shows, and access detailed program information for a seamless TV experience.",
      },
      {
        src: tg5,
        title: "Live Events Showcase",
        description:
          "A dynamic events section highlighting exclusive Caribbean concerts and festivals. Provides event details, schedules, and media previews, connecting audiences to real-time cultural and entertainment experiences.",
      },
    ],
    link: "https://tegotv.com/",
  },
  {
    id: 5,
    src: pic5,
    alt: "OrkaTV",
    title: "OrkaTV",
    description:
      "Think of OrkaTV as your trusted line item for FAST. We bring clarity before you buy, transparency throughout, and reliable delivery every time. As curators of premium FAST and CTV, we connect you directly with channels you know and brands you trust—making your campaigns seamless and impactful.",
    images: [
      {
        src: or1,
        title: "OrkaTV: Premium FAST & CTV, Curated for You",
        description:
          "OrkaTV delivers premium FAST and CTV inventory with clarity, reliability, and transparency—connecting your campaigns directly to trusted channels and recognized brands for measurable, impactful results.",
      },
      {
        src: or2,
        title: "Curated Premium FAST & CTV for Brands",
        description:
          "Orka TV connects advertisers with trusted channels and recognizable brands through premium FAST and CTV. We ensure clarity, transparency, and reliable campaign delivery—bringing impactful results, direct to your audience.",
      },
      {
        src: or3,
        title: "Precision Targeting for Streaming TV Advertising",
        description:
          "Reach your exact audience on FAST & CTV with OrkaTV’s advanced targeting tools. Connect with viewers by location, interests, demographics, and more to maximize your campaign performance.",
      },
    ],
    link: "https://orka.tv/solutions/",
  },
];

const CaseStudies = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [subIndex, setSubIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setSubIndex(0);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setSubIndex(0);
  };

  const handleNext = () => {
    const project = caseStudies[selectedIndex];
    if (project?.images && subIndex < project.images.length - 1) {
      setSubIndex(subIndex + 1);
    }
  };

  const handlePrev = () => {
    if (subIndex > 0) setSubIndex(subIndex - 1);
  };

  const selectedCaseStudy = caseStudies[selectedIndex];

  // ✅ Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCaseStudy]);

  // ✅ Prevent scroll bubbling from modal content
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return; // allow bubbling
      }
      e.stopPropagation();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [selectedCaseStudy]);

  return (
    <section className="py-20 px-4 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-6xl md:text-6xl text-gold font-Bebas text-left">
            Our Case Studies
          </h2>
          <p className="text-xl font-Sans text-blue max-w-xl text-left mt-2">
            Producing engaging case studies entails showcasing accomplished
            projects and proving the company s proficiency, aptitude for
            addressing problems, and value to customers. This is a methodical
            process for creating impactful case studies:
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mb-6">
          <img
            src={centerImg}
            alt="Case Studies Illustration"
            className="w-[600px] h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Project cards */}
      <div className="space-y-2">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row gap-6">
          {[caseStudies[0], caseStudies[1]].map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.images?.[0]?.src || item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-2xl font-semibold text-gold">
                  {item.title || item.images?.[0]?.title}
                </h3>
                <p className="text-chitu text-sm mt-2">
                  {item.description || item.images?.[0]?.description}
                </p>
                <button
                  onClick={() => handleOpen(caseStudies.indexOf(item))}
                  className="mt-4 bg-gold text-blue font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue hover:text-gold transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Middle */}
        <div className="rounded-xl overflow-hidden shadow-lg group relative">
          <img
            src={caseStudies[2].src}
            alt={caseStudies[2].alt}
            className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-xl font-bold text-gold">
              {caseStudies[2].title}
            </h3>
            <p className="text-white text-sm mt-2">
              {caseStudies[2].description}
            </p>
            <button
              onClick={() => handleOpen(2)}
              className="mt-4 bg-gold text-blue font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue hover:text-gold transition"
            >
              View Project
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row gap-6">
          {[caseStudies[3], caseStudies[4]].map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-bold text-gold">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
                <button
                  onClick={() => handleOpen(caseStudies.indexOf(item))}
                  className="mt-4 bg-gold text-blue font-bold px-6 py-2 rounded-lg shadow-md hover:bg-blue hover:text-gold transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white max-w-2xl w-[90vw] max-h-[85vh] rounded-xl p-4 relative transform transition-all duration-300 scale-90 flex flex-col overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              ✕
            </button>

            <div ref={scrollRef} className="flex-1 overflow-y-auto pr-2">
              {selectedCaseStudy.images?.length > 0 ? (
                <>
                  <img
                    src={selectedCaseStudy.images[subIndex].src}
                    alt={selectedCaseStudy.alt}
                    className="w-full h-full object-contain rounded-lg mb-1"
                  />
                  <h3 className="text-2xl font-bold text-gold">
                    {selectedCaseStudy.images[subIndex].title}
                  </h3>
                  <p className="text-blue mb-2">
                    {selectedCaseStudy.images[subIndex].description}
                  </p>
                </>
              ) : (
                <>
                  <img
                    src={selectedCaseStudy.src}
                    alt={selectedCaseStudy.alt}
                    className="w-full max-h-[50vh] object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gold mb-2">
                    {selectedCaseStudy.title}
                  </h3>
                  <p className="text-blue mb-4">
                    {selectedCaseStudy.description}
                  </p>
                </>
              )}
            </div>

            {selectedCaseStudy.images?.length > 0 && (
              <div className="flex items-center justify-between mt-2 w-full">
                <div className="flex-1 flex justify-start">
                  {subIndex > 0 && (
                    <button
                      onClick={handlePrev}
                      className="bg-blue text-white px-6 py-2 rounded-lg shadow-md hover:border-gold border transition"
                    >
                      Prev
                    </button>
                  )}
                </div>

                <div className="flex-1 flex justify-center gap-2">
                  {selectedCaseStudy.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === subIndex ? "bg-gold" : "bg-blue"
                      }`}
                    ></span>
                  ))}
                </div>

                <div className="flex-1 flex justify-end">
                  {subIndex < selectedCaseStudy.images.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="bg-blue text-white px-6 py-2 rounded-lg shadow-md hover:border-gold border transition"
                    >
                      Next
                    </button>
                  ) : selectedCaseStudy.link ? (
                    <a
                      href={selectedCaseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:border-blue border transition"
                    >
                      .Visit
                    </a>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
