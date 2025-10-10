import { useState, useEffect } from "react";
import logo from "../../assets/pictures/logo.png";

export default function AdminDashboard({ token, onLogout }) {
  const [forms, setForms] = useState({
    contactForms: [],
    hireUsForms: [],
    selectedForm: null,
  });
  const [view, setView] = useState("contact");
  const [loading, setLoading] = useState(false);

  // Fetch forms
  const fetchForms = async (authToken) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/admin/forms", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      setForms({ ...data, selectedForm: null });
    } catch (err) {
      console.error(err);
      alert("Failed to fetch forms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchForms(token);
  }, [token]);

  // View CV
  const handleViewCV = async (id) => {
    if (!token) return alert("No token, login first!");
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

  return (
    <div className="flex flex-col h-screen w-screen bg-kalu/10">
      {/* Header */}
      <header className="flex items-center justify-between bg-white shadow-md px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-30 w-40 object-contain" />
          <h1 className="text-6xl ml-12 font-Bebas text-gold">
            Admin Dashboard
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => fetchForms(token)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Refresh
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-52 bg-blue/40 flex flex-col px-4 py-7 space-y-4 overflow-y-auto">
          <button
            onClick={() => setView("contact")}
            className={`px-7 py-2 rounded-lg text-left ${
              view === "contact"
                ? "bg-gold text-blue "
                : "text-blue hover:bg-gold/60"
            }`}
          >
            Contact Forms
          </button>
          <button
            onClick={() => setView("hire")}
            className={`px-7 py-2 rounded-lg text-left ${
              view === "hire"
                ? "bg-gold text-blue "
                : "text-blue hover:bg-gold/60"
            }`}
          >
            Hire Us Forms
          </button>
        </aside>

        {/* Forms content */}
        <main className="flex-1 px-6 overflow-auto bg-chitu">
          {!forms.selectedForm && (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
                className="px-6 py-2 bg-slate-500 hover:bg-slate-700 text-white rounded-lg hover:bg-darkBlue"
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
                  <p className="text-blue">
                    Company: {forms.selectedForm.company}
                  </p>
                )}
                {view === "hire" && (
                  <p className="text-blue">Phone:+{forms.selectedForm.phone}</p>
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
        </main>
      </div>
    </div>
  );
}
