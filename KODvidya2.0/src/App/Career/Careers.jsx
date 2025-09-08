import React, { useState } from "react";
import img1 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/frntend.jpg";
import img2 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/bkend.jpg";
import img3 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/intern.jpg";
import img4 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/Full.jpg";
import img5 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/dvops.jpg";
import img6 from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/Bidd.jpg";

export default function Career() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [duration, setDuration] = useState("");
  const [step, setStep] = useState("form"); // 👈 "duration" | "form"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    cv: null,
  });

  const jobs = [
    {
      role: "Internship",
      type: "Training",
      img: img3,
      durations: ["45 Days", "3 Months", "6 Months"],
    },
    { role: "Frontend Developer", type: "Full-time", img: img1 },
    { role: "Backend Developer", type: "Full-time", img: img2 },
    { role: "Full Stack Developer", type: "Full-time", img: img4 },
    { role: "DevOps", type: "Full-time", img: img5 },
    {
      role: "Business Development Executive/Manager",
      type: "Full-time",
      img: img6,
    },
  ];

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setDuration("");
    if (role === "Internship") {
      setStep("duration"); // 👈 first choose duration
    } else {
      setStep("form");
    }
    setShowPopup(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      role: selectedRole,
      duration: selectedRole === "Internship" ? duration : null,
      ...formData,
    };
    console.log("Form Submitted:", submission);

    alert(
      `Application Submitted!\nRole: ${submission.role}${
        submission.duration ? ` (${submission.duration})` : ""
      }\nName: ${submission.fullName}\nEmail: ${submission.email}\nMessage: ${
        submission.message
      }\nCV: ${submission.cv ? submission.cv.name : "Not uploaded"}`
    );

    setShowPopup(false);
    setFormData({ fullName: "", email: "", message: "", cv: null });
  };

  return (
    <section className="bg-gold/10 py-6 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-Bebas text-center text-gold mb-6">
          Open Positions
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="px-2 py-2 relative group bg-chitu shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex flex-col rounded-md"
            >
              <img
                src={job.img}
                alt={job.role}
                className="w-full h-32 object-cover transform group-hover:scale-105 transition duration-500 ease-out rounded"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-100 rounded"></div>
              <div className="p-2 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-Bebas text-gold transition">
                    {job.role}
                  </h3>
                  <p className="text-blueLight text-xs mb-1">{job.type}</p>
                  <p className="text-blue text-xs">
                    {job.role === "Internship"
                      ? "Grow with our team, shape the future."
                      : "Work with innovators turning ideas into reality."}
                  </p>
                  {job.durations && (
                    <div className="mt-1 flex gap-1 text-blue font-Bebas flex-wrap">
                      {job.durations.map((d, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-blueLight rounded-md shadow-sm text-xs"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleApplyClick(job.role)}
                  className={`mt-2 px-3 py-1.5 rounded-md shadow-sm border text-sm transition 
                    ${
                      job.role === "Internship"
                        ? "bg-gold text-chitu hover:bg-chitu hover:text-gold border-gold"
                        : "bg-blue text-chitu hover:bg-chitu hover:text-blue border-blue"
                    }`}
                >
                  {job.role === "Internship"
                    ? "Apply for Internship"
                    : "Apply Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-kalu/50 z-50">
          <div className="bg-chitu p-4 rounded-md shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-kalu hover:text-blue text-sm"
            >
              ✖
            </button>

            {/* STEP 1: Choose Duration */}
            {step === "duration" && (
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gold mb-3 text-center">
                  Select Internship Duration
                </h2>
                {["45 Days", "3 Months", "6 Months"].map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setDuration(d);
                      setStep("form"); // 👈 go to form
                    }}
                    className="w-full py-2 rounded text-blue bg-yellowLight hover:bg-gold hover:text-blue transition"
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 2: Show Form */}
            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                <h2 className="text-xl font-bold text-gold mb-3 text-center">
                  Apply Now
                </h2>
                <div>
                  <label className="block text-blue mb-1">Role</label>
                  <input
                    type="text"
                    value={
                      selectedRole === "Internship"
                        ? `${selectedRole} (${duration})`
                        : selectedRole
                    }
                    readOnly
                    className="w-full border rounded px-2 py-1 bg-gray-100 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-blue mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-blue mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-blue mb-1">Upload CV</label>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-blue mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    required
                    className="w-full border rounded px-2 py-1 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-1.5 rounded text-sm hover:bg-chitu hover:text-gold hover:border-gold border"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
