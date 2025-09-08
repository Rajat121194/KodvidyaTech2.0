import React from "react";
import logo from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import facebookIcon from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/fb.png";
import linkedinIcon from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/lin.png";
import instagramIcon from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/ig.png";
import gmailIcon from "/home/codewisdom/KodvidyaTech2.0/KODvidya2.0/src/assets/pictures/gmail.png";

export default function FooterSection() {
  return (
    <div className="bg-gold/10 text-blue">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-10 border-t-1 border-gold">
        {/* MIDDLE + RIGHT */}
        <div className="flex flex-col flex-1 mt-1 order-first md:order-none">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* MIDDLE: LOGO & TAGLINE */}
            <div className="flex flex-col items-center text-center mt-2 ml-20">
              <img src={logo} alt="Logo" className="w-40 md:w-60" />
              <p className="text-2xl md:text-4xl mt-4 font-Bebas text-gold">
                Beyond Your Dreams
              </p>
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div className="space-y-2 max-w-lg">
              <h3 className="text-2xl md:text-4xl text-gold font-Bebas mt-2">
                Get in touch
              </h3>

              <div className="flex items-start gap-2">
                <MdLocationPin className="text-red-600 text-2xl md:text-4xl" />
                <a
                  href="https://maps.app.goo.gl/66EAnyh6sojb3xYb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue text-sm md:text-base font-Sans hover:underline"
                >
                  CodeMechanism Infotech, F-426, 1st Floor, Phase 8B, Industrial
                  Area, Sector 91, SAS Nagar (Mohali), Punjab (160055), India
                </a>
              </div>

              <div className="flex items-center gap-2">
                <IoCallSharp className="text-green-400 text-lg md:text-xl" />
                <a href="tel:+91-9594999079">
                  <p className="text-sm md:text-base font-Sans text-blue hover:underline">
                    +91-95949 99079
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <IoIosMail className="text-orange-400 text-lg md:text-xl" />
                <a
                  href="mailto:rockyrangra1993@gmail.com"
                  className="text-blue font-Sans text-sm md:text-base hover:underline"
                >
                  rockyrangra1993@gmail.com
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex space-x-3 mt-2">
                <a
                  href="https://www.facebook.com/Kodvidya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition"
                  />
                </a>
                <a
                  href="https://in.linkedin.com/company/kodvidyatech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition"
                  />
                </a>
                <a
                  href="https://www.instagram.com/kodvidyatech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition"
                  />
                </a>
                <a href="mailto:rockyrangra1993@gmail.com">
                  <img
                    src={gmailIcon}
                    alt="Gmail"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="font-Sans text-md mt-1 lg:ml-30 md:text-md text-blue">
            © 2025 CodeMechanism Infotech Private Limited. All Rights Reserved
          </div>
        </div>

        {/* LEFT: MAP (appears at bottom on mobile) */}
        <div className="flex-shrink-0 order-last md:order-first">
          <iframe
            title="CodeMechanism Infotech Pvt. Ltd."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179.79268804622686!2d76.68293376157128!3d30.70213346531758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb1e2997c75%3A0x3c21ad07c027a5ff!2sKodvidya%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sin!4v1756966735049!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-xl md:w-[300px] md:h-[250px] md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
