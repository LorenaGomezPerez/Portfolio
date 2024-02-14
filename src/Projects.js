import React from "react";
import Equipo from "../src/images/Equipo.png";
import Coctails from "../src/images/Coctails.png";
import Owen from "../src/images/Owen.png";
import Cards from "../src/images/Cards.png";
import CardsRef from "../src/images/CardsRefactoring.png";
import Calculator from "../src/images/calculator.png";
import Bibliography from "../src/images/Bibliography.png";
import Restaurants from "../src/images/restaurants.png";
import RealEstate from "../src/images/RealEstate.png";
import "../src/styles/App.css";

function Proyectos() {
  return (
	<>
	 <h2 className="project">* Mis proyectos *</h2>
    <div id="Projects" className="cardContainer">
     
      {/* // primer proyecto */}
	  <div className="containerProjects">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equipo} alt="Proyecto" />
            
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una primera web colaborativa. Para ello crearemos
              una web con la información social de todos los miembros del equipo
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas</h2>
            <p className="flip-card-back-info">
              HTML, CSS, diseño responsive, GitHub pages, Sass, grid, gulp
            </p>
            <h2 className="flip-card-back-title">Metodología de trabajo</h2>
            <p className="flip-card-back-info">Scrum y Agile</p>
          </div>
        </div>
      </div>
      {/* // segundo proyecto */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Calculator} alt="Proyecto" />
            
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una calculadora simple.
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">
              HTML, CSS, Javascript, GitHub pages
			  </p>
            
          </div>
        </div>
      </div>
      {/* // tercer proyecto */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Coctails} alt="Proyecto" />
           
          </div>
          <div className="flip-card-back">
            <div className="flip-card-back-info">
              <h2 className="flip-card-back-title">Proyecto:</h2>
              <p className="flip-card-back-info">
                Aplicación web que contiene un listado de las bebidas y cócteles
                de todo el mundo, nos permite des/marcar las bebidas como
                favoritas y guardarlas en local storage.
              </p>
              <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
              <p className="flip-card-back-info">
                HTML,Sass,Javascript,diseño responsive, GitHub pages,Uso de
                peticiones al servidor y almacenamiento en LS.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* // cuarto proyecto */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Owen} alt="Proyecto" />
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una página web con el listado de las escenas de las
              películas donde el actor Owen Wilson ha dicho "wow".
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">
              HTML y Sass (Partials y anidaciones.) React.Js Componentes y props
              para pasar datos. Variables de estado, funciones, métodos
              funcionales de array, eventos... Hooks. React router. Peticiones
              al servidor y almacenamiento en localStorage.
            </p>
          </div>
        </div>
      </div>
      {/* // quinto proyecto */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Cards} alt="Proyecto" />
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una aplicación web que nos permite crear una tarjeta
              de visita personalizada. En la página web podemos introducir
              nuestros datos profesionales y obtener una vista maquetada con
              esta información.
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">HTML, SASS, Javascript</p>
            <h2 className="flip-card-back-title">Metodología de trabajo:</h2>
            <p className="flip-card-back-info">Scrum y Agile</p>
          </div>
        </div>
      </div>
	   {/* // sexto proyecto */}
	   <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Bibliography} alt="Proyecto" />
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una aplicación web que nos permite crear añadir a una lista
             refencias bibliográficas de la Edad Media.
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">HTML, SASS, Javascript, Lit-Elements</p>
          </div>
        </div>
      </div>
	  {/* // séptimo proyecto */}
	  <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Restaurants} alt="Proyecto" />
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una Landing page donde podemos buscar en un listado de restaurantes
			  y hacer reservas.
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">HTML, SASS, Javascript</p>
          </div>
        </div>
      </div>
      {/* // octavo proyecto */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={CardsRef} alt="Proyecto" />
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Refactorizar el proyecto en Javascript heredado a un proyecto
              React.Js manteniendo las características.
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">
              React.Js, HTML, SASS, Node.Js, Express.Js, SQL, API Rest
            </p>
            <h2 className="flip-card-back-title">Metodología de trabajo:</h2>
            <p className="flip-card-back-info">Scrum y Agile</p>
          </div>
        </div>
      </div>
	   {/* // noveno proyecto */}
	  <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={RealEstate} alt="Proyecto"/>
          </div>
          <div className="flip-card-back">
            <h2 className="flip-card-back-title">Proyecto:</h2>
            <p className="flip-card-back-info">
              Desarrollo de una web para una inmobiliaria donde se gestiona la venta y alquiler de viviendas. En proyecto aún!!
            </p>
            <h2 className="flip-card-back-title">Tecnologías utilizadas:</h2>
            <p className="flip-card-back-info">HTML, SASS, React, Vite, backend </p>
          </div>
        </div>
      </div>
	  </div>
    </div>
	</>
  );
}

export default Proyectos;
