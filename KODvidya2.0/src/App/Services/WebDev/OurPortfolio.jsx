import React from "react";
import photovideography from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por.jpg";
import training from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por2.jpg";
import marketing from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por3.jpg";
import consultancy from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por4.jpg";
import ecommerce from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/por5.jpg";

const portfolioData = [
  {
    title: "Photography & Videography",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: photovideography,
    bg: "bg-gold",
  },
  {
    title: "Training & Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: training,
    bg: "bg-gold",
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: marketing,
    bg: "bg-gold",
  },
  {
    title: "Business Consultancy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: consultancy,
    bg: "bg-gold",
  },
  {
    title: "E-Commerce Solution",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: ecommerce,
    bg: "bg-gold",
  },
];

const Portfolio = () => {
  return (
    <section className="px-5 py-10 bg-chitu">
      <div className="text-center mb-4">
        <h2 className="text-6xl font-Bebas text-gold">Our Portfolio</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-4 rounded-lg shadow relative h-64 overflow-hidden`}
          >
            <div className="z-10 relative">
              <h3 className="text-2xl text-blue font-Bebas">{item.title}</h3>
              <p className="text-sm font-Sans text-blue">{item.description}</p>
            </div>

            <div className="absolute bottom-0 right-0 w-80 h-42 overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
