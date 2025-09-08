import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Form from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/App/ContactUs/Form.jsx";
import Footer from "../Home/Footer.jsx";

function ContactUsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default ContactUsPage;
