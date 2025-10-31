import React from "react";
import { Link } from "react-router-dom";

export default function DropIdeaSection() {
  const tags = [
    "Discuss a new project",
    "Build a responsive website",
    "Design a modern UI/UX",
    "Develop a mobile-friendly site",
    "Create an iOS app",
    "Create an Android app",
    "Build a cross-platform app",
    "Rebuild our existing website",
    "Add features to our mobile app",
    "Develop a hybrid mobile app",
    "Launch an e-commerce website",
    "Set up a company portfolio site",
    "Create a landing page",
    "Build a blog or news site",
    "Integrate third-party APIs",
    "Optimize site for SEO & speed",
    "Add a content management system (CMS)",
    "Improve our current UX design",
    "Add animations & interactions",
    "Convert Figma to code",
    "Build a web dashboard",
    "Develop a Progressive Web App (PWA)",
    "Make our site mobile-friendly",
    "Update our brand visuals",
    "Migrate site to a new platform",
    "Add payment integration",
    "Build a booking or reservation system",
    "Implement push notifications",
    "Set up analytics tracking",
    "Create a customer feedback form",
    "Add authentication & user accounts",
    "Design a custom admin panel",
    "Support our product launch",
    "Surprise Me!",
  ];

  const gradients = [
    "from-white to-[#f7bc00]",
    "from-[#f7bc00] to-white",
    "from-white via-[#f7bc00] to-[#f7bc00]",
    "from-[#f7bc00] via-white to-[#f7bc00]",
    "from-white via-[#f7bc00] to-white",
    "from-[#f7bc00] via-[#f7bc00] to-white",
    "from-white via-[#f7bc00] to-[#f7bc00]",
    "from-[#f7bc00] via-white to-[#f7bc00]",
    "from-white via-[#f7bc00] to-white",
    "from-[#f7bc00] via-[#f7bc00] to-white",
    "from-white via-[#f7bc00] to-[#f7bc00]",
    "from-[#f7bc00] via-white to-[#f7bc00]",
  ];
   return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
        }
      `}</style>

      <div className="bg-chitu pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-[65px]
              font-Bebas text-gold
              leading-tight sm:leading-snug md:leading-[65px]
              pt-8 sm:pt-12 md:pt-16
            "
          >
            Drop Us Your Idea
          </h2>

          {/* Paragraph */}
          <p
            className="
              text-blue font-Sans
              text-base sm:text-lg md:text-xl lg:text-[22px]
              leading-relaxed sm:leading-[30px] md:leading-[32px]
              max-w-[95%] sm:max-w-2xl mx-auto mt-4 sm:mt-6 mb-1 sm:mb-2
            "
          >
            You may craft an engaging message that is clear and kind in order to successfully ask prospective customers or partners to share their ideas with CodeMechanism Infotech.
          </p>

          {/* Button */}
          <Link to="/contact">
            <button
              className="
                bg-gold hover:bg-chitu text-chitu hover:text-gold
                border border-transparent hover:border-blue
                hover:font-bold
                text-sm sm:text-base md:text-lg
                px-6 sm:px-10 md:px-12
                py-3 sm:py-4
                rounded
                cursor-pointer
                mb-4 sm:mb-6
                transition-all duration-300
              "
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Scrolling Tags */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-8 md:mt-12">
          {/* Row 1 */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-3 sm:gap-4 animate-scroll-right">
              {[...tags, ...tags].map((tag, idx) => {
                const gradient = gradients[idx % gradients.length];
                return (
                  <span
                    key={`top-${idx}`}
                    className={`
                      bg-gradient-to-r ${gradient}
                      text-xs sm:text-sm md:text-base
                      text-blue
                      px-5 sm:px-8 md:px-10
                      py-2 sm:py-3
                      rounded-full whitespace-nowrap
                      transition duration-300 hover:grayscale hover:contrast-125
                    `}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-3 sm:gap-4 animate-scroll-left">
              {[...tags, ...tags].map((tag, idx) => {
                const gradient = gradients[(idx + 2) % gradients.length];
                return (
                  <span
                    key={`bottom-${idx}`}
                    className={`
                      bg-gradient-to-r ${gradient}
                      text-xs sm:text-sm md:text-base
                      text-blue
                      px-5 sm:px-8 md:px-10
                      py-2 sm:py-3
                      rounded-full whitespace-nowrap
                      transition duration-300 hover:grayscale hover:contrast-125
                    `}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

