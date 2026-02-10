import {
  FaUserAlt,
  FaSitemap,
  FaPencilRuler,
  FaBookOpen,
  FaFont,
  FaPalette,
} from "react-icons/fa";

function App() {
  const featuresLeft = [
    {
      icon: <FaUserAlt />,
      title: "User Research/Stories",
      description:
        "Collecting details about user needs, and using a combination of qualitative methods.",
      bgColor: "bg-gold",
    },
    {
      icon: <FaSitemap />,
      title: "Information Architecture",
      description:
        "Creating a content structure that helps clients understand and explore it easily.",
      bgColor: "bg-gold",
    },
    {
      icon: <FaPencilRuler />,
      title: "Wireframing and Prototyping",
      description:
        "Creating a visual representation of a website’s structure, layout and functionality.",
      bgColor: "bg-gold",
    },
  ];

  const featuresRight = [
    {
      icon: <FaBookOpen />,
      title: "Styleguide",
      description:
        "Maintaining the brand’s identity and enhancing user experience.",
      bgColor: "bg-gold",
    },
    {
      icon: <FaFont />,
      title: "Typography",
      description:
        "Arranging typefaces, font sizes, line letter spacing to readability.",
      bgColor: "bg-gold",
    },
    {
      icon: <FaPalette />,
      title: "Colors & Forms",
      description:
        "Shaping the visual identity, user and of a website or application.",
      bgColor: "bg-gold",
    },
  ];

  const FeatureCard = ({ icon, title, description, bgColor }) => (
    <div className="flex items-start space-x-4 sm:space-x-5">
      <div
        className={`min-w-12 min-h-12 w-12 h-12 flex items-center justify-center rounded-full text-white ${bgColor}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-Bebas text-gold leading-tight md:leading-[70px]">
          {title}
        </h3>
        <p className="text-blue text-base sm:text-md md:text-lg lg:text-xl font-Sans leading-relaxed md:leading-[32px]">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-chitu px-4 sm:px-8 md:px-16 lg:px-30 py-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-gold text-center leading-tight md:leading-[70px] mb-6">
        What is UI/UX Design
      </h2>

      {/* Paragraphs */}
      <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] text-center max-w-4xl mx-auto mb-4">
        The goal of User Experience Design (UX design) is to provide products
        and services that offer significant experiences in a variety of fields.
        In order to optimise usability and happiness, it involves understanding
        user needs and behaviours. However, every visual component, motion, and
        transition in a product works together to provide a smooth and enjoyable
        user experience by using User Interface (UI) design.
      </p>

      <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] text-center max-w-4xl mx-auto mb-12">
        In today’s digital world, UX and UI design work together to create
        user-friendly interfaces that boost engagement and promote success.
      </p>

      {/* Features + Middle Graphic */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Left column */}
        <div className="w-full md:w-1/3 space-y-6">
          {featuresLeft.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Middle overlapping circles */}
        <div className="relative flex-shrink-0 w-60 h-60 sm:w-72 sm:h-72 mb-8 md:mb-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-blue rounded-full flex items-center justify-center text-2xl sm:text-3xl text-gold font-bold absolute top-0 right-30 z-50">
            UI
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-blueLight rounded-full flex items-center justify-center text-chitu text-2xl sm:text-3xl font-bold absolute top-10 left-22 z-0">
            UX
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/3 space-y-6">
          {featuresRight.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
