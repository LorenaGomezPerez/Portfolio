import React from "react";
import imageBW from "../src/images/black$white.jpg";

function AboutMe() {
  return (
    <div>
      <div className="photoContainer">
        <img className="imgBlackWhite" src={imageBW} alt="mi imagen" />
        <h2 className="hello">Hola!! soy Lorena, desarrolladora Front-End</h2>
      </div>

      <h2 id="AboutM" className="aboutMe">
        * Sobre mí *
      </h2>

      <h3 className="textAboutMe">
        Soy una historiadora en busca de nuevos descubrimientos. Me apasiona la
        forma de vida de muchos de nuestros antepasados pero también la presente
        y futura que está creando la tecnología. Por ello trabajo cada día
        buscando el código más exigente para dejar huella a los que un día
        hablarán de nosotros.
      </h3>
    </div>
  );
}

export default AboutMe;
