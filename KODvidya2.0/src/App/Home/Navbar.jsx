import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/pictures/logo.png";
import ig from "/src/assets/pictures/ingr.png";
import linkedin from "/src/assets/pictures/lnkdin.png";
import gmail from "/src/assets/pictures/maile.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSecondBar, setShowSecondBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Scroll behavior (only for desktop second bar)
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Click outside handler
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
    { label: "Digital Marketing", path: "/services/digital-marketing" },
  ];

  const getLinkClass = (path) =>
    location.pathname === path ? "text-gold" : "text-blue";

  return (
    <>
      {/* Top Bar - Desktop */}
      <div className="hidden lg:flex fixed top-0 left-0 w-full z-[1000] bg-kalu/10 backdrop-blur-md px-8 lg:px-20 justify-between items-center shadow-md h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Social Icons (with hover spread effect) */}
        <div className="flex items-center -space-x-8 group transition-all duration-500">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transform transition-all z-10 duration-500 group-hover:-translate-x-4"
          >
            <img src={ig} alt="Instagram" className="h-10 w-12" />
          </a>

          <a
            href="mailto:yourcompany@gmail.com"
            className="transform transition-all z-90 duration-500 "
          >
            <img src={gmail} alt="Gmail" className="h-12 w-11" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transform transition-all z-10 duration-500 group-hover:translate-x-4"
          >
            <img src={linkedin} alt="LinkedIn" className="h-10 w-12" />
          </a>

          <button
            onClick={() => alert("Open Login Form")}
            className="ml-12 bg-gold text-chitu px-4 py-2 rounded-full hover:bg-chitu hover:text-gold hover:border-gold border transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* Second Bar - Desktop */}
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

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[1000] bg-chitu/60 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold font-extrabold text-2xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
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
    </>
  );
}

export default Navbar;
