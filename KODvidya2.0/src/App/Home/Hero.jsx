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

  // Highlight rotation
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % highlights.length),
      1500
    );
    return () => clearInterval(interval);
  }, []);

  const { title, color } = highlights[index];

  // GSAP glow on button
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

  // GSAP popup animation
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
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] overflow-hidden px-5 py-8">
      {/* Mobile overlay */}
      <div className="block md:hidden absolute inset-0 bg-chitu/10 -z-5"></div>

      {/* Background videos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/src/assets/videos/herobg.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/src/assets/videos/herobg-vertical.mp4" type="video/mp4" />
      </video>

      {/* Hero content */}
      <div className="relative z-10 max-w-xl space-y-2 md:px-16 py-20">
        <h1 className="text-5xl leading-snug font-Bebas text-blue">
          A Leading <span className={`${color} text-6xl`}>{title}</span>{" "}
          Company.
        </h1>
        <p className="text-blue text-xl font-Sans mb-6">
          Welcome to CodeMechanism Infotech, We provide proficient web
          development, mobile app development, and digital marketing services,
          with a focus on complete digital solutions. Our team of professionals
          creates advanced mobile apps and user-friendly, responsive websites to
          meet your business's demands.
        </p>

        {/* Schedule button */}
        <div className="relative inline-flex items-center">
          <Link
            to="/contact"
            ref={containerRef}
            className="relative flex items-center justify-center px-10 py-2 rounded-full border border-chitu bg-chitu/10 backdrop-blur-md overflow-hidden font-Sans text-lg font-semibold transition-all duration-300 group"
            style={{ boxShadow: `0px 0px 80px ${getColor("gold")}` }}
          >
            <div
              ref={glowRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
            ></div>
            <span className="relative z-10 text-blue">
              Schedule a Free Consultancy Meeting
            </span>
          </Link>
        </div>
      </div>

      {/* Login button */}
      {!showLogin && (
        <div className="fixed bottom-5 right-10 z-50">
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-3 rounded-full border border-blue bg-transparent text-blue font-semibold tracking-wide backdrop-blur-md hover:bg-gold/10 hover:border-gold hover:text-blue transition-all duration-300 shadow-lg cursor-pointer"
          >
            Workplace Login
          </button>
        </div>
      )}

      {/* Login popup */}
      {showLogin && (
        <div className="fixed bottom-15 right-10 z-[100]">
          <div
            ref={popupRef}
            className="bg-chitu/10 rounded-2xl shadow-2xl p-6 w-[350px] relative origin-bottom-right"
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute text-2xl top-2 right-2 text-blue hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-Bebas text-center text-blue mb-2">
              Workplace Login
            </h2>
            <form className="space-y-3" onSubmit={handleLogin}>
              <div>
                <label className="block ml-1 text-sm font-semibold text-blue">
                  ID
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border border-gold rounded-lg"
                  placeholder="Enter your ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue ml-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 px-3 py-2 border border-gold rounded-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue text-white rounded-lg font-semibold hover:bg-gold transition-all duration-300"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
