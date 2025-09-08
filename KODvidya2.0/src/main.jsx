import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import LenisProvider from "./Other/LenisProvider.jsx"; // 👈 Import Lenis wrapper
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LenisProvider>
        <App />
      </LenisProvider>
    </BrowserRouter>
  </React.StrictMode>
);
