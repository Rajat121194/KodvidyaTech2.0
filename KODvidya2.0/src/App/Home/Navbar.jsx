import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import logo from "../../assets/pictures/slogo.png";
import ig from "../../assets/pictures/ingr.png";
import linkedin from "../../assets/pictures/lnkdin.png";
import gmail from "../../assets/pictures/maile.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSecondBar, setShowSecondBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHireFormOpen, setIsHireFormOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ new loading state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);

  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Scroll behavior for second bar
  const controlSecondBar = () => {
    const currentScrollY = window.scrollY;
    setShowSecondBar(
      currentScrollY < lastScrollY.current || currentScrollY === 0
    );
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlSecondBar);
    return () => window.removeEventListener("scroll", controlSecondBar);
  }, []);

  // Prevent body scroll when menus or modal open
  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || isHireFormOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen, isHireFormOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Form handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });
    setShowMessage(false);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/hire-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Unknown error",
        });
      }

      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);

      if (res.ok) {
        setTimeout(() => setIsHireFormOpen(false), 2500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        type: "error",
        message: "Could not send request. Try again later.",
      });
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Training", path: "/training" },
    { label: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Web Development", path: "/services/web-development" },
    { label: "Mobile Apps", path: "/services/mobile-apps" },
    { label: "UI/UX Design", path: "/services/ui-ux-design" },
    { label: "Internet Marketing", path: "/services/internet-marketing" },
  ];

  const getLinkClass = (path) =>
    location.pathname === path ? "text-gold" : "text-blue";

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
      <div className="hidden lg:flex fixed top-0 left-0 w-full z-[1000] bg-kalu/10 backdrop-blur-md px-8 lg:px-23 justify-between items-center shadow-md h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-15 w-auto object-contain" />
          </Link>
        </div>

        {/* Social + Hire Us */}
        <div className="flex items-center -space-x-4 group transition-all duration-500">
          <a
            href="https://www.instagram.com/codemechanism_infotech/"
            target="_blank"
            rel="noreferrer"
            className="animate-[bounce_1.5s_ease-in-out_infinite]"
          >
            <img src={ig} alt="Instagram" className="h-10 w-12" />
          </a>
          <a
            href="mailto:rockyrangra1993@gmail.com"
            className="animate-[bounce_1.5s_ease-in-out_infinite] [animation-delay:0.3s]"
          >
            <img src={gmail} alt="Gmail" className="h-12 w-11" />
          </a>
          <a
            href="https://www.linkedin.com/company/codemechanism/"
            target="_blank"
            rel="noreferrer"
            className="animate-[bounce_1.5s_ease-in-out_infinite] [animation-delay:0.6s]"
          >
            <img src={linkedin} alt="LinkedIn" className="h-10 w-12" />
          </a>

          {/* Hire Us */}
          <button
            onClick={() => setIsHireFormOpen(true)}
            className="ml-12 bg-gold text-chitu px-4 py-2 rounded-full hover:bg-chitu cursor-pointer hover:text-gold hover:border-gold border transition"
          >
            Hire Us
          </button>
        </div>
      </div>

      {/* ---------- SECOND BAR ---------- */}
      <div
        className={`hidden lg:flex fixed left-0 w-full z-[999] bg-gold/10 backdrop-blur-md px-20 font-Sans font-semibold transition-transform duration-500 ease-in-out ${
          showSecondBar ? "translate-y-[60px]" : "translate-y-0"
        }`}
        style={{ top: "0px" }}
      >
        <div className="flex items-center space-x-10 h-9">
          {navItems.map((item, index) =>
            item.label.toLowerCase() === "services" ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`px-3 py-1 rounded-full transition duration-300 ${
                    location.pathname.startsWith("/services")
                      ? "text-gold"
                      : "text-blue"
                  }`}
                >
                  {item.label}
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-chitu text-blue rounded-md shadow-lg w-44 z-20">
                    <ul className="flex flex-col text-sm">
                      {serviceLinks.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          className={`px-3 py-2 hover:bg-yellowLight ${getLinkClass(
                            service.path
                          )}`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`px-3 py-1 rounded-full transition duration-300 ${getLinkClass(
                  item.path
                )}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* ---------- MOBILE NAVBAR ---------- */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[1000] bg-chitu/60 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center h-16 px-4">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold font-extrabold text-2xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className={`${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 bg-chitu/60`}
        >
          <div className="flex flex-col px-4 py-4 space-y-3 font-semibold">
            {navItems.map((item, index) =>
              item.label.toLowerCase() === "services" ? (
                <div key={index}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left py-2 px-2 text-blue font-semibold hover:underline"
                  >
                    {item.label}
                  </button>
                  {isDropdownOpen && (
                    <ul className="ml-4">
                      {serviceLinks.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                          className={`block px-2 py-1 text-md ${getLinkClass(
                            service.path
                          )}`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-2 rounded ${getLinkClass(
                    item.path
                  )}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* ---------- HIRE US  ---------- */}
      {isHireFormOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative">
            <button
              onClick={() => setIsHireFormOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-blue">
              Hire Us
            </h2>

            {/* Success/Error message */}
            {formStatus.message && (
              <div
                className={`text-center py-2 px-3 rounded mb-3 transition-opacity duration-500 ${
                  showMessage ? "opacity-100" : "opacity-0"
                } ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="!w-full !h-11 !text-base"
                containerClass="!w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              />

              <button
                type="submit"
                className="w-full bg-gold text-chitu py-2 rounded-md font-bold hover:bg-chitu hover:text-gold border hover:border-gold transition"
              >
                Submit
              </button>

              {/* ✅ Loader Overlay  */}
              {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[3000]">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-chitu text-2xl font-Bebas">
                      Submitting...
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
