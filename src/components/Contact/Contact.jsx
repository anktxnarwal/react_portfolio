import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Contact() {
  return (
    <section id="contact" className="contactSection">
      <h1 className="sectionTitle">Contect Me</h1>
      <div class="contact-info-container">
        <p className="headLine">
          <a href="mailto:ankitnarwal224@gmail.com" target="_blank">
            ankitnarwal224@gmail.com
          </a>
        </p>
      </div>
      <div class="contact-info-container">
        <p className="headLine">
          <a href="https://www.linkedin.com/in/ankitxnarwal/" target="_blank">
            Linkedin
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
