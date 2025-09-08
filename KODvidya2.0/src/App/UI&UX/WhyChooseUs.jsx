import { FaMobileAlt, FaMousePointer, FaPalette } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";

const services = [
  {
    title: "User Experience (UX) Design",
    description:
      "By arranging simplicity, accessibility, and feelings of attraction, we craft seamless experiences in our design that captivate consumers and encourage repeat visits.",
    icon: <FaMousePointer className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
  {
    title: "User Interface (UI) Design",
    description:
      "Our expertise is in designing attractive interfaces that motivate conversions. Our method combines design and functionality to ensure every pixel has a capacity.",
    icon: <FaPalette className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
  {
    title: "Wireframing and Prototyping",
    description:
      "The way we work is in developing detailed wireframes that represent user interactions and journeys, offering the structure for intuitive designs.",
    icon: <AiOutlineFundProjectionScreen className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
  {
    title: "User Research and Testing",
    description:
      "We implement extensive study approaches to gain a deep insight into user behaviours and interests. Each choice in design is reviewed for maximum usability and satisfaction via our testing frameworks.",
    icon: <MdScreenSearchDesktop className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
  {
    title: "Responsive Web Design",
    description:
      "Our strong point depends on creating websites that seamlessly adjust to all screen sizes, ensuring the best feasible user experience across PCs, tablets, and smartphones.",
    icon: <BiLayer className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
  {
    title: "Mobile App Design",
    description:
      "Use our expertise to stay ahead in a mobile-first world with our expertise in responsive design that prioritises usability and accessibility. Make a unique and professional app.",
    icon: <FaMobileAlt className="text-4xl text-black" />,
    hoverBg: "bg-sky-white md:hover:bg-sky-600",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 px-6 md:px-20 bg-sky-600/10">
    <h2 className="text-4xl md:text-6xl font-Bebas text-sky-600">
      Why Choose Us...?
    </h2>
    <p className="text-black max-w-3xl mb-6 font-Sans">
      Globally, our seasoned team of professionals at CodeMechanism Infotech has
      crafted over 250 outstanding UI/UX designs. From initial concept to final
      launch, each project is meticulously executed. We specialise in
      comprehensive web design services, covering UX design, UI design, and
      branding consultancy, ensuring every aspect of your digital presence
      reflects excellence and innovation.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-crosshair">
      {services.map((svc, idx) => (
        <div
          key={idx}
          className={`
            group p-6 rounded-xl border transition duration-300 transform 
            md:hover:scale-105 bg-white text-sky-600 ${svc.hoverBg}
          `}
        >
          <div className="mb-2 md:group-hover:text-sky-600">{svc.icon}</div>
          <h3 className="text-2xl font-Bebas text-black md:group-hover:text-white">
            {svc.title}
          </h3>
          <p className="text-md text-black md:group-hover:text-white">
            {svc.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
