import React from "react";
import pic1 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/pp1.jpg";
import pic2 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/pp2.jpg";
import pic3 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/pp3.jpg";
import pic4 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/pp4.jpg";
import pic5 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/pp5.jpg";

const caseStudies = [
  { id: 1, src: pic1, alt: "Travel App", title: "Travel App" },
  { id: 2, src: pic2, alt: "Dashboard Design", title: "Dashboard Design" },
  { id: 3, src: pic3, alt: "Woman Working", title: "Education App" },
  { id: 4, src: pic4, alt: "Education Platform", title: "Coding Platform" },
  { id: 5, src: pic5, alt: "App Development", title: "App Development" },
];

const CaseStudies = () => {
  return (
    <section className="py-20 px-4 md:px-16 text-center">
      <h2 className="text-6xl md:text-6xl text-gold font-Bebas mb-2">
        Our Case Studies
      </h2>

      <p className="text-xl font-Sans text-blue max-w-2xl mx-auto mb-10">
        Producing engaging case studies entails showcasing accomplished projects
        and proving the company’s proficiency, aptitude for addressing problems,
        and value to customers. This is a methodical process for creating
        impactful case studies:
      </p>

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row gap-6">
          {[caseStudies[0], caseStudies[1]].map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold text-5xl font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg group relative">
          <img
            src={caseStudies[2].src}
            alt={caseStudies[2].alt}
            className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-blue text-6xl font-semibold">
              {caseStudies[2].title}
            </span>
          </div>
        </div>

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
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold text-5xl font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
