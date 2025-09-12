import { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cv") {
      setFormData((prev) => ({ ...prev, cv: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim())
      newErrors.message = "Don't forget to add a message.";
    return newErrors;
  };

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

    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      body: formToSend,
    })
      .then((res) => res.json())
      .then((data) => {
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
        console.error("Error:", err);
        alert("Failed to send message");
      });
  };

  return (
    <div className="min-h-screen bg-gold/10 flex flex-col lg:flex-row items-start justify-center px-14 py-28 gap-2">
      <div className="flex-1 text-center lg:text-left space-y-10 mt-12">
        <h2 className="text-6xl font-Bebas text-gold mb-4">Contact Us</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-Bebas text-3xl text-blue">Email:</h3>
            <p className="text-xl">
              <a
                href="mailto:rockyrangra1993@gmail.com"
                className="text-blue font-Sans"
              >
                info@codemechanism.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-Bebas text-3xl text-blue">Address:</h3>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/66EAnyh6sojb3xYb6"
              className="text-blue"
            >
              <p className="text-xl text-blue font-Sans">
                CodeMechanism Infotech Private Limited,
                <br />
                F-426, 1st Floor, Phase 8B, Industrial Area,
                <br />
                Sector 91, SAS Nagar (Mohali), Punjab (160055), India
              </p>
            </a>
          </div>

          <div>
            <a href="tel:+91-9594999079">
              <h3 className="font-Bebas text-3xl text-blue">Phone:</h3>
              <p className="text-xl text-blue font-Sans">+91- 95949 99079</p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gold rounded-xl shadow-2xl p-4">
        <h2 className="text-6xl font-Bebas text-blue text-center">
          We’d love to hear from you
        </h2>
        <p className="text-center text-xl font-Sans text-blue mb-6">
          The door might be open—reach out and see
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                  } rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue`}
                />
                {errors[field] && (
                  <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="zd@example.com*"
                className={`w-full bg-chitu text-kalu border ${
                  errors.email ? "border-red-600" : "border-blue"
                } rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex-1">
              <input
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full bg-chitu text-kalu border border-blue rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="I’d love to know how your experiences have prepared you for this role.*"
            className={`w-full bg-chitu text-kalu border ${
              errors.message ? "border-red-600" : "border-blue"
            } rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue`}
          />
          {errors.message && (
            <p className="text-red-600 text-sm ">{errors.message}</p>
          )}

          <button
            type="submit"
            className="mx-auto block bg-blue hover:bg-white text-white hover:text-blue border hover:border-blue hover:font-bold font-Sans px-10 py-3 rounded-full shadow-lg transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center z-50">
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
    </div>
  );
}
