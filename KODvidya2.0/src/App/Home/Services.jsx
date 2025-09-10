import { useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi2";
import { IoPhonePortrait } from "react-icons/io5";
import { BsFillTvFill, BsHeadsetVr } from "react-icons/bs";
import { FaUikit } from "react-icons/fa6";
import { SiTestinglibrary } from "react-icons/si";
import { ImBullhorn } from "react-icons/im";
import { GiPentarrowsTornado } from "react-icons/gi";
import { Link } from "react-router-dom";
import gsap from "gsap";

const services = [
  {
    id: 1,
    title: "Software Development",
    slug: "mobile-apps",
    icon: <FaLaptopCode size={22} />,
    description:
      "With the help of our complete software development team, we create possibilities. We provide user-friendly solutions that effectively take part with your audience by closely following industry developments and user experience. Our committed staff makes sure that every line of code reflects your goals and vision, from conception to execution. Join challenges with us to make the upcoming future Product, where brightness and technology live.",
    process: [
      "Software Consulting",
      "Custom Software Development",
      "Software Product Development",
      "Cloud Application Development",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    icon: <HiGlobeAlt size={22} />,
    description:
      "Our team of specialists is committed to providing large and mid-sized businesses with comprehensive digital solutions, so come and elevate your business with us. We will ensure that your digital systems not only remain operational but also reach optimal Total Cost of Ownership efficiency.",
    process: [
      "Website Development",
      "Website Management",
      "Website Integration",
      "Website Testing",
      "Website Maintenance",
    ],
  },
  {
    id: 3,
    title: "Mobile App",
    slug: "mobile-apps",
    icon: <IoPhonePortrait size={22} />,
    description:
      "We work on top and latest technologies like Java, Kotlin, Swift, Objective-C, Xamarin, Cordova, React Native, Flutter competencies to make mobile apps. CodeMechanism Infotech provides flexible assistance at every level of development, from design to deployment.",
    process: [
      "Mobile Development",
      "Mobile App Design",
      "Mobile App Integration",
      "Mobile App Management",
      "Mobile App Testing",
      "Mobile App Maintenance",
    ],
  },
  {
    id: 4,
    title: "TV/OTT App",
    slug: "web-development",
    icon: <BsFillTvFill size={22} />,
    description:
      "In the OTT app world's everyone is talking about Netflix and other big brands. Would you like your OTT app to provide the same response? CodeMechanism Infotech is a one of the most leading OTT mobile app development Company...",
    process: [
      "OTT Development",
      "OTT App Integration",
      "OTT App Management",
      "OTT App Testing",
      "OTT App Maintenance",
    ],
  },
  {
    id: 5,
    title: "AR/VR Development",
    slug: "web-development",
    icon: <BsHeadsetVr size={22} />,
    description:
      "As a premier provider of AR/VR development solutions, we are skilled at identifying the particular business goals you have in mind. After a thorough assessment, we create a personalised development plan...",
    process: [
      "AR/VR Development",
      "AR/VR App Design",
      "AR/VR App Integration",
      "AR/VR App Management",
      "AR/VR App Testing",
      "AR/VR App Maintenance",
    ],
  },
  {
    id: 6,
    title: "UX/UI Design",
    slug: "ui-ux-design",
    icon: <FaUikit size={22} />,
    description:
      "UI/UX Design is the king of any platform. Apart from engaging and unique design we also focus on User friendly design. We create designs that are dynamic, persuasive, and intuitive using the most advanced UI/UX approaches...",
    process: [
      "Responsive Web App Design",
      "(SAAS) UI/UX Design",
      "Ecommerce Website Design",
      "Website Redesign",
      "Mobile App Design",
    ],
  },
  {
    id: 7,
    title: "Testing & QA",
    slug: "mobile-apps",
    icon: <SiTestinglibrary size={22} />,
    description:
      "There might be multiple bugs in your platform which can be hidden from the eyes of software developers. At CodeMechanism Infotech on each step of the development journey...",
    process: [
      "Security Testing",
      "Functional Testing",
      "Usability Testing",
      "Performance Testing",
      "Automation testing",
      "Penetration Testing",
    ],
  },
  {
    id: 8,
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: <ImBullhorn size={22} />,
    description:
      "In today's digital age, digital marketing is a cornerstone of business success. Without a robust digital marketing strategy, your business's online presence may remain virtually invisible...",
    process: [
      "Define Goals",
      "Identify Target Audience",
      "Establish Budget",
      "Create Engaging Content",
      "Optimise for Mobile",
      "Make Strategy as per Analysis",
    ],
  },
];

export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(services[0]);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const processRef = useRef(null);

  // Helper: split text into spans (for typing effect)
  const splitText = (element, text) => {
    element.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      element.appendChild(span);
    });
  };

  useEffect(() => {
    if (!titleRef.current || !descRef.current || !processRef.current) return;

    // Reset
    splitText(titleRef.current, selectedService.title);
    splitText(descRef.current, selectedService.description);

    // Animate Title
    gsap.fromTo(
      titleRef.current.querySelectorAll("span"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "none",
      }
    );

    // Animate Description
    gsap.fromTo(
      descRef.current.querySelectorAll("span"),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.01,
        stagger: 0.02,
        ease: "none",
        delay: 0.5,
      }
    );

    // Animate Process (line by line typing)
    const processItems =
      processRef.current.querySelectorAll("li .process-text");
    processItems.forEach((spanEl, index) => {
      splitText(spanEl, selectedService.process[index]);
      gsap.fromTo(
        spanEl.querySelectorAll("span"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.03,
          stagger: 0.03,
          ease: "none",
          delay: 1 + index * 0.6,
        }
      );
    });
  }, [selectedService]);

  return (
    <div className="p-6 md:p-12 bg-chitu min-h-screen ">
      <h2 className="text-6xl text-gold tracking-wide mb-2 font-Bebas">
        Services We Offer
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT MENU */}
        <div className="flex-1 bg-chitu rounded-xl overflow-hidden border-2 border-blue">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`w-full flex items-center gap-4 px-6 py-4 text-left border-b cursor-pointer transition-all duration-200 ${
                selectedService.id === service.id
                  ? "bg-gold text-blue"
                  : "bg-gold/10 text-blue hover:bg-gold hover:text-blue"
              }`}
            >
              <span>{service.icon}</span>
              <span className="font-semibold">{service.title}</span>
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-[2] bg-gold/10 border-2 border-blue rounded-xl p-3 flex flex-col justify-between">
          <div>
            <h2 ref={titleRef} className="text-5xl text-gold font-Bebas mb-1">
              {selectedService.title}
            </h2>

            <p
              ref={descRef}
              className="text-blue text-xl mb-2 whitespace-pre-line"
            >
              {selectedService.description}
            </p>

            <h3 className="text-xl text-gold mt-2">Our Process</h3>
            <ul ref={processRef} className="space-y-2 text-md">
              {selectedService.process.map((step, index) => (
                <li key={index} className="flex items-center text-blue">
                  <GiPentarrowsTornado className="text-gold mr-2" />
                  <span className="process-text">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-2 self-start bg-gold hover:bg-chitu px-6 py-2 rounded text-blue hover:text-gold hover:font-bold border-1 hover:border-gold font-Sans">
            <Link to={`/services/${selectedService.slug}`}>
              {selectedService.title}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
