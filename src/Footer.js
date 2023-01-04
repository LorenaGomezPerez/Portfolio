import React from "react";
import Logo from "../src/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="copyright">Desarrollado por Lorena Gómez Pérez</h3>
	  <img className="logoFooter" src={Logo} alt="logo"/>
    </footer>
  );
}

export default Footer;
