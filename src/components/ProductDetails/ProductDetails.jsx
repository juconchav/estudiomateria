import luminico from "../../assets/iconestudio.png";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";

function ProductDetails() {
  return (
    <>
      <div>
        <h1>Detalle producto</h1>
        <ul className="container">
          <div>
            <img src={luminico} alt="imagen de producto" />
          </div>
          <div>
            <p>Artefacto lumínico</p>
            <p>$295.000</p>
            <p>Pieza de porcelana hecha a mano con detalles de oro</p>
            <input className="btnAdd" type="submit" value="add to cart" />
          </div>
        </ul>
      </div>
      <Footer/>
    </>
  );
}

export default ProductDetails;
