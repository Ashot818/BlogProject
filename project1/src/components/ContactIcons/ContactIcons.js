import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './ContactIcons.css'

function ContactIcons() {
  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon id="icon" icon={faTwitter} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon id="icon" icon={faFacebook} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon id="icon" icon={faLinkedin} className="icon" />
        </li>
        <li>
          
          <FontAwesomeIcon id="icon" icon={faInstagram} className="icon" />
        </li>
      </ul>
      <button>Hire Me</button>
    </>
  );
}

export default ContactIcons;
