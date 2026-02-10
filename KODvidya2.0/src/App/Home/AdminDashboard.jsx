import { useState, useEffect } from "react";
import logo from "../../assets/pictures/logo.png";
import contactImg from "../../assets/pictures/contact.png";
import hireImg from "../../assets/pictures/hire.png";
import bellIcon from "../../assets/pictures/bell.png";
import closeIcon from "../../assets/pictures/close.png";
import notifySound from "../../assets/sounds/notify.mp3";

export default function AdminDashboard({ token }) {
  const [forms, setForms] = useState({
    contactForms: [],
    hireUsForms: [],
    careerForms: [],
    selectedForm: null,
  });
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [prevNotificationCount, setPrevNotificationCount] = useState(0);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const audio = new Audio(notifySound);

  // ✅ Fetch all forms
  const fetchForms = async (authToken) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/forms", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch forms");

      setForms({
        contactForms: data.contactForms || [],
        hireUsForms: data.hireUsForms || [],
        careerForms: data.careerForms || [],
        selectedForm: null,
      });

      const totalNotifications =
        (data.contactForms || []).filter((f) => !f.dismissedByAdmin).length +
        (data.hireUsForms || []).filter((f) => !f.dismissedByAdmin).length +
        (data.careerForms || []).filter((f) => !f.dismissedByAdmin).length;

      if (totalNotifications > prevNotificationCount) {
        audio.play().catch((err) => console.log("Audio play blocked:", err));
      }

      setPrevNotificationCount(totalNotifications);
    } catch (err) {
      console.error("Error fetching forms:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Auto-refresh every 10 seconds
  useEffect(() => {
    if (!token) return;
    fetchForms(token);
    const interval = setInterval(() => fetchForms(token), 10000);
    return () => clearInterval(interval);
  }, [token]);

  // ✅ View CV
  const handleViewCV = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/contact/${id}/cv`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch CV");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Error fetching CV:", err);
      alert("Could not load CV");
    }
  };

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  // ✅ Dismiss notification
  const dismissNotification = async (id, type) => {
    try {
      await fetch(
        `http://localhost:5000/api/admin/forms/${type}/${id}/dismiss`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchForms(token);
    } catch (err) {
      console.error("Failed to dismiss notification:", err);
    }
  };

  // ✅ Combine all new notifications
  const notifications = [
    ...forms.contactForms
      .filter((f) => !f.dismissedByAdmin)
      .map((f) => ({ ...f, type: "contact" })),
    ...forms.hireUsForms
      .filter((f) => !f.dismissedByAdmin)
      .map((f) => ({ ...f, type: "hireus" })),
    ...forms.careerForms
      .filter((f) => !f.dismissedByAdmin)
      .map((f) => ({ ...f, type: "career" })),
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // ✅ Update Admin credentials
  const updateAdmin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newEmail, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Updated successfully! Please login again.");
      } else {
        alert(data.error || "Failed to update admin credentials.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update credentials.");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-kalu/10">
      {/* Header */}
      <header className="relative flex items-center justify-between bg-chitu border-blue/20 border-1 px-6 h-28">
        <img src={logo} alt="Logo" className="h-22 w-45 object-contain" />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-Bebas text-gold">
          Admin Dashboard
        </h1>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="relative p-2 hover:scale-105"
          >
            <img src={bellIcon} alt="Notifications" className="w-18 h-18" />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-4 font-bold bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-md">
                {notifications.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-auto bg-chitu/50 shadow-lg rounded-lg border border-gold z-50">
              <h3 className="font-Bebas text-xl text-gold px-3 border-b border-blue">
                Notifications
              </h3>
              {notifications.length === 0 ? (
                <p className="p-4 text-sm text-blue">No new notifications</p>
              ) : (
                <ul className="divide-y divide-gold">
                  {notifications.map((n) => (
                    <li
                      key={n._id + n.type}
                      className="px-4 py-1 hover:bg-blue/10 flex justify-between items-start cursor-pointer"
                    >
                      <div
                        className="flex-1"
                        onClick={() => {
                          setForms((prev) => ({ ...prev, selectedForm: n }));
                          setView(
                            n.type === "hireus"
                              ? "hire"
                              : n.type === "contact"
                              ? "contact"
                              : "career"
                          );
                          setShowNotifications(false);
                        }}
                      >
                        <p className="text-sm font-semibold text-blue">
                          {n.type === "contact"
                            ? `Contact: ${n.firstName} ${n.lastName}`
                            : n.type === "hireus"
                            ? `Hire Us: ${n.name}`
                            : `Career: ${n.fullName}`}
                        </p>
                        <p className="text-xs text-gray-700">
                          {new Date(n.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          dismissNotification(n._id, n.type);
                        }}
                        className="ml-2"
                      >
                        <img
                          src={closeIcon}
                          alt="Close"
                          className="mt-1 w-7 h-7 hover:scale-110"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-55 bg-blue/40 flex flex-col justify-between py-7 px-4">
          <div className="space-y-4">
            {["dashboard", "contact", "hire", "career"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setView(tab);
                  setForms((prev) => ({ ...prev, selectedForm: null }));
                }}
                className={`px-6 py-2 rounded-lg w-full text-left ${
                  view === tab
                    ? "bg-gold text-blue"
                    : "text-blue hover:bg-gold/60"
                }`}
              >
                {tab === "dashboard"
                  ? "Dashboard"
                  : tab === "contact"
                  ? "Contact Forms"
                  : tab === "hire"
                  ? "Hire Us Forms"
                  : "Career Applications"}
              </button>
            ))}
          </div>

          <div>
            <hr className="border-t border-blue/30 my-3" />
            <button
              onClick={() => setView("settings")}
              className={`px-6 py-2 rounded-lg w-full text-left ${
                view === "settings"
                  ? "bg-gold text-blue"
                  : "text-blue hover:bg-gold/60"
              }`}
            >
              Settings
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 px-6 overflow-auto bg-chitu">
          {/* Dashboard Cards */}
          {view === "dashboard" && (
            <div className="flex flex-col mt-8 h-full w-200 space-y-12 ml-40">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-25">
                <Card
                  img={contactImg}
                  title="Contact Forms"
                  count={forms.contactForms.length}
                />
                <Card
                  img={hireImg}
                  title="Hire Us Forms"
                  count={forms.hireUsForms.length}
                />
                <Card
                  img={hireImg}
                  title="Career Forms"
                  count={forms.careerForms.length}
                />
              </div>
            </div>
          )}

          {/* List of Forms */}
          {!forms.selectedForm &&
            ["contact", "hire", "career"].includes(view) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
                {(
                  forms[view === "hire" ? "hireUsForms" : `${view}Forms`] || []
                ).map((f) => (
                  <div
                    key={f._id}
                    className="bg-blue/20 border-1 border-gold p-2 rounded-xl shadow-md shadow-blue cursor-pointer hover:shadow-2xl transition"
                    onClick={() =>
                      setForms((prev) => ({ ...prev, selectedForm: f }))
                    }
                  >
                    <h3 className="text-xl font-Bebas text-blue">
                      {view === "contact"
                        ? `${f.firstName} ${f.lastName}`
                        : view === "hire"
                        ? f.name
                        : f.fullName}
                    </h3>
                    <p className="text-[10px] text-blue">
                      {new Date(f.createdAt).toLocaleDateString()} |{" "}
                      {new Date(f.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            )}

          {/* Selected Form Details */}
          {forms.selectedForm && (
            <div className="bg-blue/20 p-4 rounded-xl shadow-2xl shadow-blue space-y-4">
              <button
                onClick={() =>
                  setForms((prev) => ({ ...prev, selectedForm: null }))
                }
                className="px-6 py-2 bg-slate-500 hover:bg-slate-700 text-white rounded-lg"
              >
                Back
              </button>

              <div className="space-y-2 text-blue">
                <p>
                  Date:{" "}
                  {new Date(forms.selectedForm.createdAt).toLocaleString()}
                </p>

                {view === "career" && (
                  <>
                    <p>Name: {forms.selectedForm.fullName}</p>
                    <p>Email: {forms.selectedForm.email}</p>
                    <p>Role: {forms.selectedForm.role}</p>
                    {forms.selectedForm.duration && (
                      <p>Duration: {forms.selectedForm.duration}</p>
                    )}
                    <p>Message: {forms.selectedForm.message}</p>
                    {forms.selectedForm.cv && (
                      <button
                        onClick={() => handleViewCV(forms.selectedForm._id)}
                        className="px-3 py-1 bg-teal-400 text-blue rounded border border-blue"
                      >
                        View CV
                      </button>
                    )}
                  </>
                )}

                {view === "contact" && (
                  <>
                    <p>
                      Name: {forms.selectedForm.firstName}{" "}
                      {forms.selectedForm.lastName}
                    </p>
                    <p>Email: {forms.selectedForm.email}</p>
                    <p>Message: {forms.selectedForm.message}</p>
                    {forms.selectedForm.cv && (
                      <button
                        onClick={() => handleViewCV(forms.selectedForm._id)}
                        className="px-3 py-1 bg-teal-400 text-blue rounded border border-blue"
                      >
                        View CV
                      </button>
                    )}
                  </>
                )}

                {view === "hire" && (
                  <>
                    <p>Name: {forms.selectedForm.name}</p>
                    <p>Email: {forms.selectedForm.email}</p>
                    <p>Company: {forms.selectedForm.company}</p>
                    <p>Phone: +{forms.selectedForm.phone}</p>
                    <p>Message: {forms.selectedForm.message}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Settings */}
          {view === "settings" && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h2 className="text-3xl font-Bebas text-blue">
                Update Admin Credentials
              </h2>
              <input
                type="email"
                placeholder="New Email"
                className="border rounded px-2 py-1 w-64"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                className="border rounded px-2 py-1 w-64"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                onClick={updateAdmin}
                className="px-6 py-2 bg-gold text-blue rounded hover:bg-chitu hover:text-gold"
              >
                Update
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ✅ Reusable Card Component
function Card({ img, title, count }) {
  return (
    <div className="bg-blue/20 backdrop-blur-md rounded-2xl shadow-sm shadow-gold p-6 flex flex-col items-center justify-center">
      <img src={img} alt={title} className="w-40 h-40 object-contain" />
      <h3 className="text-2xl font-Bebas text-blue">{title}</h3>
      <p className="text-6xl font-Bebas text-gold">{count}</p>
    </div>
  );
}
