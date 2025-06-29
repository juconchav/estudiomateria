import Footer from "../Footer/Footer.jsx";
import "./Bio.css";
import estudiomateria from "../../assets/estudio_materia.jpeg";

function Bio() {
  return (
    <>
      <div className="about">
        <h1 className="titleAbout">Biografía</h1>
        <div className="container">
          <div>
            <img src={estudiomateria} alt="imagen de artista" />
          </div>
          <div>
            <h3>Katia Montes (1979)<br/>
            Artista Visual y Arquitecta UCH, basada en Santiago de Chile. Diplomada en Arquitecturas Temporales UCH y Cerámica experimental UNAB.
            Desarrolla su obra, investigación y docencia en Estudio Materia desde el 2019. Se especializa en investigación material y en el trabajo con pasta cerámica de alta temperatura, con especialidad en Porcelana. Escultora y arquitecta de formación, lo cual ha influido en la forma en que aborda su práctica a través de la conciencia material y espacial, con énfasis en las relaciones que establece el cuerpo con la materia, el vacío y la ciudad. Fragilidad y Conmemoración, son temas recurrentes en su quehacer artístico.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bio;
