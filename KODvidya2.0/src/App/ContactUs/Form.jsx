import React, { useState } from "react";
import { TbFileFilled } from "react-icons/tb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData((prev) => ({ ...prev, cv: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific errors on change
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  // 🔹 Form Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";
    return newErrors;
  };

  // 🔹 Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formToSend = new FormData();
    formToSend.append("firstName", formData.firstName);
    formToSend.append("lastName", formData.lastName);
    formToSend.append("email", formData.email);
    formToSend.append("message", formData.message);
    if (formData.cv) formToSend.append("cv", formData.cv);

    setLoading(true);
    //http://192.168.1.7:5173/
    // 🔹 Correct fetch (no Content-Type manually added)
    fetch("http://192.168.1.7:5000/api/contact", {
      method: "POST",
      body: formToSend,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          alert("Error: " + data.error);
        } else {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            cv: null,
          });
          setErrors({});
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error:", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-col lg:flex-row items-start justify-center px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24 lg:py-32 gap-10 md:gap-16 relative transition-all duration-300">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-center lg:text-left space-y-6 md:space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-Bebas text-gold leading-tight md:leading-[70px] mb-6 md:mb-8 md:max-w-3xl">
          Contact Us
        </h2>

        <div className="space-y-6 md:space-y-8">
          {/* Email */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-Bebas text-gold mb-2">
              Email:
            </h3>
            <p className="text-blue text-lg md:text-xl font-Sans">
              <a href="mailto:info@codemechanism.com">info@codemechanism.com</a>
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-Bebas text-gold mb-2">
              Address:
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/66EAnyh6sojb3xYb6"
            >
              <p className="text-blue text-lg md:text-xl font-Sans leading-relaxed">
                CodeMechanism Infotech Pvt. Ltd.
                <br />
                F-426, 1st Floor, Phase 8B, Industrial Area,
                <br />
                Sector 91, SAS Nagar (Mohali), Punjab 160055, India
              </p>
            </a>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-Bebas text-gold mb-2">
              Phone:
            </h3>
            <a href="tel:+91-9594999079">
              <p className="text-blue text-lg md:text-xl font-Sans">
                +91-95949 99079
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 bg-gold rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-[700px] mx-auto lg:mx-0 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-Bebas text-blue text-center mb-3">
          We’d love to hear from you
        </h2>
        <p className="text-blue text-base sm:text-lg md:text-xl font-Sans text-center mb-6">
          The door might be open — reach out and see!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-6">
            {["firstName", "lastName"].map((field) => (
              <div className="flex-1" key={field}>
                <input
                  id={field}
                  name={field}
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "firstName" ? "First Name*" : "Last Name*"
                  }
                  className={`w-full bg-chitu text-kalu border ${
                    errors[field] ? "border-red-600" : "border-blue"
                  } rounded-lg px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue`}
                />
                {errors[field] && (
                  <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Email + File */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com*"
                className={`w-full bg-chitu text-kalu border ${
                  errors.email ? "border-red-600" : "border-blue"
                } rounded-lg px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="w-full flex flex-col items-center justify-center border border-blue rounded-lg bg-chitu cursor-pointer hover:bg-blue/10 transition">
                <TbFileFilled className="text-blue text-2xl mb-1" />
                <span className="text-kalu text-sm">
                  {formData.cv ? formData.cv.name : "Upload CV (PDF/DOC)"}
                </span>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Message */}
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us a bit about you.*"
            className={`w-full bg-chitu text-kalu border ${
              errors.message ? "border-red-600" : "border-blue"
            } rounded-lg px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue`}
          />
          {errors.message && (
            <p className="text-red-600 text-sm">{errors.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mx-auto block bg-blue hover:bg-white text-white hover:text-blue border hover:border-blue hover:font-bold font-Sans px-10 py-3 md:py-4 rounded-full shadow-lg transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full">
            <h3 className="text-2xl text-gold font-Bebas mb-2">
              The form’s on its journey now.
            </h3>
            <p className="text-blue font-Sans text-lg">
              🚀 Sent! Your message is on a mission to reach us.
            </p>
          </div>
        </div>
      )}

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-kalu/70 flex flex-col items-center justify-center z-50 text-white">
          <div className="w-20 h-20 border-4 border-t-transparent border-gold rounded-full animate-spin mb-4"></div>
          <p className="text-3xl sm:text-5xl md:text-[50px] lg:text-[65px] font-Bebas text-chitu leading-tight">
            Sending message...
          </p>
        </div>
      )}
    </div>
  );
}
