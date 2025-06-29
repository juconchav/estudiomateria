import Footer from "../Footer/Footer";
import estudio from "../../assets/dinotaller.jpeg";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="title">Estudio Materia</h1>
      <h2 className="bajada">Escultura+Cerámica+Docencia</h2>

      <div className="container">
        <div>
          <h3 className="descriptionEstudio">
            Estudio Materia es un estudio de Arte y Diseño dedicado a la
            investigación material y producción de joyas, objetos y esculturas
            con especialidad en porcelana. Su objetivo es valorar el oficio
            cerámico, en el hacer, combinando saberes ancestrales y tecnologías
            manuales con el diseño contemporáneo.
          </h3>
        </div>
        <div>
          <img className="imgTaller" src={estudio} alt="imagen taller" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home