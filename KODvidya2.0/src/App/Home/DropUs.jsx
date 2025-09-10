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

      <div className="bg-chitu pt-10 pb-16 overflow-hidden">
        <div className="text-center">
          <h2 className="text-6xl font-Bebas text-gold ">Drop Us Your Idea</h2>

          <p className="text-xl font-Sans text-blue max-w-2xl mx-auto mb-5 px-1">
            You may craft an engaging message that is clear and kind in order to
            successfully ask prospective customers or partners to share their
            ideas with CodeMechanism Infotech.
          </p>
          <Link to="/contact">
            <button className="bg-gold hover:bg-chitu text-chitu hover:text-gold hover:border-blue border-1 hover:font-bold px-10 py-2 rounded  cursor-pointer mb-10">
              Get Started
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-4 animate-scroll-right">
              {[...tags, ...tags].map((tag, idx) => {
                const gradient = gradients[idx % gradients.length];
                return (
                  <span
                    key={`top-${idx}`}
                    className={`bg-gradient-to-r ${gradient} text-md text-blue px-8 py-2 rounded-full whitespace-nowrap transition duration-300 hover:grayscale hover:contrast-125`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-4 animate-scroll-left">
              {[...tags, ...tags].map((tag, idx) => {
                const gradient = gradients[(idx + 2) % gradients.length];
                return (
                  <span
                    key={`bottom-${idx}`}
                    className={`bg-gradient-to-r ${gradient} text-md text-blue px-8 py-2 rounded-full whitespace-nowrap transition duration-300 hover:grayscale hover:contrast-125`}
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
