import React from "react";

function Contact() {
  return (
    <div>
      <h2 id="Contacts" className="contact">* Contáctame *</h2>
      <div className="contactContainer">
        <div className="iconContainer">
          <a title="llamar por teléfono" href="tel+600757306" target="_blank">
            <i className="fa-solid fa-mobile-screen-button icon" />
          </a>
        </div>
        <div className="iconContainer">
          <a
            title="enviar email"
            href="mailto:lorenagomezperez@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope icon" />
          </a>
        </div>
        <div className="iconContainer">
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/lorena-gomez-perez/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin icon" />
          </a>
        </div>
        <div className="iconContainer">
          <a title="Instagram" href="." target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram icon" />
          </a>
        </div>
        <div className="iconContainer">
          <a
            title="Github"
            href="https://github.com/LorenaGomezPerez"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
