import React from "react";

const hiringData = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Transform your vision into reality with our comprehensive software development services. We specialize in crafting custom solutions that optimize operational efficiency and drive digital transformation.",
    tags: ["UX/UI Design", "Ecommerce", "Digital Product", "Design Systems"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Transform your mobile vision into reality with our comprehensive mobile app development services. We specialize in crafting custom applications that enhance user engagement, improve operational efficiency, and drive digital transformation. Whether it's iOS, Android, or cross-platform, our expert team ensures a seamless and intuitive experience for your users.",
    tags: ["UX/UI Design", "Ecommerce", "Digital Product", "Design Systems"],
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Transform your business with our cutting-edge artificial intelligence solutions. We specialize in developing custom AI applications that optimize operations, enhance decision-making, and drive innovation. From machine learning and natural language processing to computer vision and predictive analytics, our AI expertise helps you stay ahead in the digital era.",
    tags: ["Mobile app", "iOS", "Android", "Cross-platform design"],
  },
  {
    number: "04",
    title: "Managed DevOps",
    description:
      "Transform your development and operations with our comprehensive managed DevOps services. We specialize in creating seamless integration and automation solutions that enhance productivity, reduce time-to-market, and ensure robust performance. Our expert team manages your DevOps processes, enabling you to focus on innovation and growth while we ensure stability and efficiency.",
    tags: ["UX/UI Design", "Ecommerce", "Digital Product", "Design Systems"],
  },
];

export default function Hiring() {
  return (
    <section className="bg-gold/10 py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl sm:text-4xl md:text-6xl font-Bebas text-gold mb-1">
          We're hiring and can't wait to meet you!
        </h2>
        <p className="text-blue max-w-3xl mx-auto text-xl">
          That’s wonderful news! An important tool for attracting bright people
          who share CodeMechanism Infotech’s mission and values are hiring
          announcements. Here are a few powerful methods to communicate this
          idea:
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-4">
        {hiringData.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start bg-chitu p-6 rounded-md border border-gold hover:shadow-lg transition duration-300"
          >
            <div className="flex gap-6 w-full">
              <p className="text-blue font-Bebas text-lg">{item.number}</p>
              <div className="w-full">
                <div className="group">
                  <h3 className="text-2xl sm:text-3xl  text-blue font-Bebas mb-1 cursor-pointer">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-5 text-sm text-gold mb-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${
                          [
                            "Design Systems",
                            "Cross-platform design",
                            "Ecommerce",
                            "iOS",
                          ].includes(tag)
                            ? "font-semibold text-gold"
                            : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="block md:hidden text-base text-blue mt-2">
                    {item.description}
                  </p>

                  <p
                    className="hidden md:block text-base text-blue mt-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                    style={{ transitionProperty: "max-height, opacity" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
