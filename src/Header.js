import React from "react";
import { Link } from "react-scroll";
import CV from "../src/images/LorenaGomezPerez.pdf";
import Logo from "../src/images/logo.png";

function Header() {
  return (
    <div>
	<img className="logo" src={Logo} alt="logo"/>
      <nav>
        <ul className="headerMenu">
          <li>
            <Link
              className="linkHeader"
              to="AboutM"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              rel="noreferrer"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              className="linkHeader"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              rel="noreferrer"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              className="linkHeader"
              to="Contacts"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
              rel="noreferrer"
            >
              Contacto
            </Link>
          </li>
          <li>
            <a
              title="CV"
              className="linkHeader"
              href={CV}
              download="LorenaGomezPerez.pdf"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
