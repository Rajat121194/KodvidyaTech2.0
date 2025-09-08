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
      bgColor: "bg-sky-600",
    },
    {
      icon: <FaSitemap />,
      title: "Information Architecture",
      description:
        "Creating a content structure that helps clients understand and explore it easily.",
      bgColor: "bg-sky-600",
    },
    {
      icon: <FaPencilRuler />,
      title: "Wireframing and Prototyping",
      description:
        "Creating a visual representation of a website’s structure, layout and functionality.",
      bgColor: "bg-sky-600",
    },
  ];

  const featuresRight = [
    {
      icon: <FaBookOpen />,
      title: "Styleguide",
      description:
        "Maintaining the brand’s identity and enhancing user experience.",
      bgColor: "bg-sky-600",
    },
    {
      icon: <FaFont />,
      title: "Typography",
      description:
        "Arranging typefaces, font sizes, line letter spacing to readability.",
      bgColor: "bg-sky-600",
    },
    {
      icon: <FaPalette />,
      title: "Colors & Forms",
      description:
        "Shaping the visual identity, user and of a website or application.",
      bgColor: "bg-sky-600",
    },
  ];

  const FeatureCard = ({ icon, title, description, bgColor }) => (
    <div className="flex items-start space-x-4 mb-6">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${bgColor}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-sky-600 text-lg font-Bebas">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-20 py-10 min-h-screen">
      <h2 className="text-4xl md:text-6xl font-Bebas text-sky-600 text-center mb-1">
        What is UI/UX Design
      </h2>
      <p className="text-center text-xl max-w-4xl mx-auto text-black">
        The goal of User Experience Design (UX design) is to provide products
        and services that offer significant experiences in a variety of fields.
        In order to optimise usability and happiness, it involves understanding
        user needs and behaviours. However, every visual component, motion, and
        transition in a product works together to provide a smooth and enjoyable
        user experience by using User Interface (UI) design.
      </p>
      <p className="text-lg text-center max-w-4xl mx-auto mb-12 text-black">
        In today’s digital world, UX and UI design work together to create
        user-friendly interfaces that boost engagement and promote success.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6">
          {featuresLeft.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="relative flex-shrink-0 w-72 h-72">
          <div className="w-48 h-48 bg-sky-500 rounded-full flex items-center justify-center text-3xl font-bold absolute top-0 left-0 z-10">
            UI
          </div>
          <div className="w-48 h-48 bg-sky-400 rounded-full flex items-center justify-center text-3xl font-bold absolute top-15 left-25 z-0">
            UX
          </div>
        </div>

        <div className="space-y-8">
          {featuresRight.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
