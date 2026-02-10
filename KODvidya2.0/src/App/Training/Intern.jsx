import React from "react";

const programs = [
  {
    title: "MERN Full Stack Development",
    description:
      "In our training program, we offer comprehensive, hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js). Participants will learn to build full-stack web applications from scratch, mastering both frontend and backend development. The curriculum covers everything from setting up databases and server-side APIs to creating dynamic user interfaces and deploying applications.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Mongoose",
      "Material UI",
      "Tailwind CSS",
      "React Hook Form",
      "zod",
      "react query",
      "redux toolkit",
    ],
  },
  {
    title: "Next.js Full Stack Development",
    description:
      "Our Next.js full stack development training equips you with the skills to build fast, SEO-optimized web applications. You'll learn both frontend and backend development, covering API integration, state management, and database connectivity. With hands-on projects and expert guidance, you'll be ready to build and deploy full-stack Next.js applications.",
    tags: [
      "React.js",
      "Node.js",
      "Next.js",
      "MongoDb",
      "Mongoose",
      "Material UI",
      "Tailwind CSS",
      "React Hook Form",
      "zod",
      "react query",
      "redux toolkit",
    ],
  },
  {
    title: "React Native/Expo Development",
    description:
      "Our React Native/Expo development training teaches you to build mobile apps for both iOS and Android using a single codebase. You'll learn to create native-like apps with Expo's powerful tools, covering UI/UX design, navigation, state management, and API integration. Through hands-on projects and expert guidance, you'll gain practical skills to deploy and optimize mobile apps effectively.",
    tags: [
      "React Native",
      "Expo",
      "React Navigation",
      "gluestack UI",
      "React Hook Form",
      "Redux toolkit",
    ],
  },
];

export default function TrainingPrograms() {
  const bgColors = ["bg-chitu", "bg-chitu", "bg-chitu"];

  return (
    <section className="max-w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 bg-gold/10 text-center">
      {/* Headings */}
      <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] md:max-w-4xl mx-auto">
        Our culture is a reflection of our shared values, attitudes, beliefs,
        and working practices.
      </h2>

      <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl mx-auto mb-2">
        Industrial Training / Internship Programs
      </p>

      <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl mx-auto mb-2">
        45 days / 3 months / 6 months
      </p>

      <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl mx-auto mb-10">
        Email us your resume at:{" "}
        <a
          href="mailto:rockyrangra1993@gmail.com"
          className="underline font-semibold text-gold break-words"
        >
          rockyrangra1993@gmail.com
        </a>
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className={`rounded-[25px] transform transition-transform hover:scale-105 hover:rotate-1 p-5 sm:p-6 text-left shadow-xl ${
              bgColors[idx % bgColors.length]
            }`}
          >
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-Bebas text-gold leading-tight md:leading-[70px] mb-4 md:mb-0 md:max-w-2xl">
              {program.title}
            </h3>

            <p className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl mx-auto md:mx-0 mb-4">
              {program.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {program.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm sm:text-md bg-blue text-gold rounded-full font-Sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
