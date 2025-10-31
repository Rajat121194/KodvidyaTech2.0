import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { getColor } from "../../utils/getColor.js";

const highlights = [
  { title: "Mobile-Apps Development", color: "text-gold" },
  { title: "Web Development", color: "text-gold" },
  { title: "Internet-Marketing", color: "text-gold" },
];

export default function Hero({ setToken }) {
  const [index, setIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const glowRef = useRef(null);
  const containerRef = useRef(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  // Rotate highlights
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % highlights.length),
      1500
    );
    return () => clearInterval(interval);
  }, []);

  const { title, color } = highlights[index];

  // Button glow animation
  useEffect(() => {
    const glow = glowRef.current;
    const container = containerRef.current;
    if (!glow || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const centerX = rect.width / 2;
      gsap.to(glow, {
        x: offsetX - centerX,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 1, ease: "power2.out" });
      gsap.to(container, {
        boxShadow: `0px 0px 20px ${getColor("gold")}`,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Popup animation
  useEffect(() => {
    if (!popupRef.current) return;
    if (showLogin) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0, opacity: 0, y: 50, x: 50 },
        { scale: 1, opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(popupRef.current, {
        scale: 0,
        opacity: 0,
        y: 50,
        x: 50,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [showLogin]);

  // Admin login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        navigate("/admin");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative flex flex-col md:flex-row items-center justify-center md:justify-between 
        min-h-screen overflow-hidden
        px-4 sm:px-8 md:px-16 lg:px-32 
        py-12 md:py-24
        lg:pt-32 
        xl:pt-36 
        [@media(min-width:1024px)_and_(max-width:1280px)]:pt-28 
        [@media(min-width:1366px)_and_(max-width:1440px)]:pt-32
        [@media(min-width:600px)_and_(max-width:1024px)]:pt-20
        [@media(min-width:1280px)_and_(max-width:1366px)]:pt-28
        [@media(min-width:1024px)_and_(max-width:1200px)]:justify-center
      "
    >
      {/* Background overlay for small screens */}
      <div className="absolute inset-0 bg-chitu/10 md:hidden -z-10"></div>

      {/* Background videos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-full h-full object-cover -z-20
        "
      >
        <source src="/src/assets/videos/herobg.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          block md:hidden absolute top-0 left-0 w-full h-full object-cover -z-20
        "
      >
        <source src="/src/assets/videos/herobg-vertical.mp4" type="video/mp4" />
      </video>

      {/* Hero Text */}
      <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start max-w-[95%] md:max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-blue leading-tight md:leading-[70px]">
          A Leading <br />
          <span className={`${color} block`}>{title}</span>
          Company
        </h1>

        <p className="text-blue text-base sm:text-lg md:text-xl lg:text-[20px] font-Sans leading-relaxed md:leading-[32px] max-w-[95%] sm:max-w-2xl">
          Welcome to{" "}
          <span className="font-Bebas text-3xl sm:text-xl md:text-2xl lg:text-3xl text-gold">
            CodeMechanism Infotech
          </span>
          , We provide proficient Web Development, Mobile App Development, and
          Internet Marketing Services, with a focus on complete digital
          solutions. Our team of professionals creates advanced mobile apps and
          user-friendly, responsive websites to meet your business's demands.
        </p>

        {/* Button */}
        <div className="relative inline-flex justify-center md:justify-start mt-6">
          <Link
            to="/contact"
            ref={containerRef}
            className="relative flex items-center justify-center px-6 sm:px-10 md:px-16 py-3 sm:py-4 rounded-full border border-chitu bg-chitu/10 backdrop-blur-md overflow-hidden font-Sans text-sm sm:text-lg font-semibold transition-all duration-300 group"
            style={{ boxShadow: `0px 0px 40px ${getColor("gold")}` }}
          >
            <div
              ref={glowRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
            ></div>
            <span className="relative z-10 text-[16px] sm:text-[18px] md:text-[20px] text-blue">
              Schedule a Free Consultancy Meeting
            </span>
          </Link>
        </div>
      </div>

      {/* Workplace Login button */}
      {!showLogin && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-10 md:right-16 z-50">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-blue bg-transparent text-blue font-semibold backdrop-blur-md hover:bg-gold/10 hover:border-gold hover:text-blue transition-all duration-300 shadow-lg cursor-pointer text-sm sm:text-base"
          >
            Workplace Login
          </button>
        </div>
      )}

      {/* Login Popup */}
      {showLogin && (
        <div className="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-[100] flex justify-end">
          <div
            ref={popupRef}
            className="bg-chitu/30 rounded-2xl shadow-2xl p-4 sm:p-6 w-[90vw] sm:w-[400px] relative origin-bottom-right backdrop-blur-md border border-gold"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-blue hover:text-red-500 text-xl sm:text-2xl"
            >
              ✕
            </button>
            <h2 className="text-xl sm:text-2xl font-Bebas text-center text-blue mb-4">
              Workplace Login
            </h2>
            <form className="space-y-3" onSubmit={handleLogin}>
              <div>
                <label className="block ml-1 text-sm font-semibold text-blue">
                  ID
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-gold rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Enter your ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block ml-1 text-sm font-semibold text-blue">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 px-3 py-2 border border-gold rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-2.5 bg-blue text-white rounded-lg font-semibold hover:bg-gold transition-all duration-300 text-sm sm:text-base"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
