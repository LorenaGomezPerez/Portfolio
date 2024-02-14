import React from "react";

function Contact() {


	
  return (
    <div>
      <h2 id="Contacts" className="contact">* Contáctame *</h2>
	  <div className="contactContainer">

	  <div className="iconContainer">
          <a
        	title="teléfono"  
			href={`tel:+34600757306`}
		>
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
          <a
            title="Github"
            href="https://github.com/LorenaGomezPerez"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github icon" />
          </a>
        </div>
		<div className="iconContainer">
          <a
            title="Twitter"
            href="https://twitter.com/LorenaGP21"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter icon"/>
          </a>
        </div>
      </div>
	  </div>
 
  );
}

export default Contact;
