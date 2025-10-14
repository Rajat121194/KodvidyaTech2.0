import { useState, useEffect } from "react";
import logo from "../../assets/pictures/logo.png";
import contactImg from "../../assets/pictures/contact.png";
import hireImg from "../../assets/pictures/hire.png";
import bellIcon from "../../assets/pictures/bell.png";
import closeIcon from "../../assets/pictures/close.png";
import notifySound from "../../assets/sounds/notify.mp3"; // Your ringtone file

export default function AdminDashboard({ token }) {
  const [forms, setForms] = useState({
    contactForms: [],
    hireUsForms: [],
    selectedForm: null,
  });
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [prevNotificationCount, setPrevNotificationCount] = useState(0);

  // Audio object
  const audio = new Audio(notifySound);

  // Fetch forms from backend
  const fetchForms = async (authToken) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/forms", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      setForms({ ...data, selectedForm: null });

      // Count total notifications
      const totalNotifications =
        data.contactForms.filter((f) => !f.dismissedByAdmin).length +
        data.hireUsForms.filter((f) => !f.dismissedByAdmin).length;

      // Play sound if new notifications arrived
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

  // Auto-refresh every 10 seconds
  useEffect(() => {
    if (!token) return;
    fetchForms(token);
    const interval = setInterval(() => fetchForms(token), 10000);
    return () => clearInterval(interval);
  }, [token, prevNotificationCount]);

  // View CV
  const handleViewCV = async (id) => {
    if (!token) return alert("No token, login first!");
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/contact/${id}/cv`,
        { headers: { Authorization: `Bearer ${token}` } }
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

  // Toggle notification panel
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  // Dismiss a notification persistently
  const dismissNotification = async (id, type) => {
    try {
      await fetch(
        `http://localhost:5000/api/admin/forms/${type}/${id}/dismiss`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchForms(token); // refresh forms to update notifications
    } catch (err) {
      console.error("Failed to dismiss notification:", err);
    }
  };

  // Combined notifications
  const notifications = [
    ...forms.contactForms
      .filter((f) => !f.dismissedByAdmin)
      .slice(-5)
      .map((f) => ({ ...f, type: "contact" })),
    ...forms.hireUsForms
      .filter((f) => !f.dismissedByAdmin)
      .slice(-5)
      .map((f) => ({ ...f, type: "hire" })),
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="flex flex-col h-screen w-screen bg-kalu/10">
      {/* Header */}
      <header className="relative flex items-center justify-between bg-chitu border-blue/20 border-1 px-6 h-28">
        <img src={logo} alt="Logo" className="h-22 w-45 object-contain" />

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-Bebas text-gold">
          Admin Dashboard
        </h1>

        {/* Notification Icon */}
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="relative p-2 hover:opacity-80"
          >
            <img src={bellIcon} alt="Notifications" className="w-20 h-20" />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-md">
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
                          setView(n.type === "contact" ? "contact" : "hire");
                          setShowNotifications(false);
                        }}
                      >
                        <p className="text-sm font-semibold text-blue">
                          {n.type === "contact"
                            ? `Contact Form: ${n.firstName} ${n.lastName}`
                            : `Hire Us Form: ${n.name}`}
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

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-55 bg-blue/40 flex flex-col justify-between py-7 px-4">
          <div className="space-y-4">
            <button
              onClick={() => setView("dashboard")}
              className={`px-6 py-2 rounded-lg w-full text-left ${
                view === "dashboard"
                  ? "bg-gold text-blue"
                  : "text-blue hover:bg-gold/60"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setView("contact")}
              className={`px-6 py-2 rounded-lg w-full text-left ${
                view === "contact"
                  ? "bg-gold text-blue"
                  : "text-blue hover:bg-gold/60"
              }`}
            >
              Contact Forms
            </button>
            <button
              onClick={() => setView("hire")}
              className={`px-6 py-2 rounded-lg w-full text-left ${
                view === "hire"
                  ? "bg-gold text-blue"
                  : "text-blue hover:bg-gold/60"
              }`}
            >
              Hire Us Forms
            </button>
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

        {/* Forms content */}
        <main className="flex-1 px-6 overflow-auto bg-chitu">
          {view === "dashboard" && (
            <div className="flex flex-col mt-8 h-full w-200 space-y-12 ml-40">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-25">
                <div className="bg-blue/20 backdrop-blur-md rounded-2xl shadow-sm shadow-gold p-6 flex flex-col items-center justify-center">
                  <img
                    src={contactImg}
                    alt="Contact Forms"
                    className="w-40 h-40 object-contain"
                  />
                  <h3 className="text-2xl font-Bebas text-blue">
                    Total Contact Forms
                  </h3>
                  <p className="text-6xl font-Bebas text-gold">
                    {forms.contactForms.length}
                  </p>
                </div>

                <div className="bg-blue/20 backdrop-blur-md rounded-2xl shadow-sm shadow-gold p-6 flex flex-col items-center justify-center">
                  <img
                    src={hireImg}
                    alt="Hire Us Forms"
                    className="w-40 h-40 object-contain"
                  />
                  <h3 className="text-2xl font-Bebas text-blue">
                    Total Hire Us Forms
                  </h3>
                  <p className="text-6xl font-Bebas text-gold">
                    {forms.hireUsForms.length}
                  </p>
                </div>
              </div>
            </div>
          )}

          {!forms.selectedForm && (view === "contact" || view === "hire") && (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
              {(view === "contact"
                ? forms.contactForms
                : forms.hireUsForms
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
                      : f.name}
                  </h3>
                  <p className="text-[10px] text-blue">
                    {new Date(f.createdAt).toLocaleDateString()} |{" "}
                    {new Date(f.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
          )}

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
              <div className="space-y-1">
                <p className="text-sm text-blue">
                  Date:{" "}
                  {new Date(forms.selectedForm.createdAt).toLocaleString()}
                </p>
                <p className="text-xl font-semibold text-blue">
                  Name:{" "}
                  {view === "contact"
                    ? `${forms.selectedForm.firstName} ${forms.selectedForm.lastName}`
                    : forms.selectedForm.name}
                </p>
                <p className="text-blue">Email: {forms.selectedForm.email}</p>
                {view === "hire" && (
                  <>
                    <p className="text-blue">
                      Company: {forms.selectedForm.company}
                    </p>
                    <p className="text-blue">
                      Phone:+{forms.selectedForm.phone}
                    </p>
                  </>
                )}
                <p className="text-blue">
                  Message: {forms.selectedForm.message}
                </p>
                {view === "contact" && forms.selectedForm.cv && (
                  <button
                    onClick={() => handleViewCV(forms.selectedForm._id)}
                    className="px-3 py-1 bg-teal-400 text-blue rounded border border-blue"
                  >
                    View CV
                  </button>
                )}
              </div>
            </div>
          )}

          {view === "settings" && (
            <div className="flex justify-center items-center h-full">
              <h2 className="text-4xl font-Bebas text-blue">
                Settings Page Coming Soon...
              </h2>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
