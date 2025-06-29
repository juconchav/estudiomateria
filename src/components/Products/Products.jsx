import Footer from "../Footer/Footer";
import luminico from "../../assets/iconestudio.png";
import "./Products.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Products() {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleCardClick = (productId) => {
    console.log(`Clicked product with ID: ${productId}`);
    navigate(`/productodetail`);
  };

  return (
    <>
      <div>
        <h1>Nuestros productos</h1>
        <ul className="container">
          <li onClick={() => handleCardClick(1)} // Pass a dummy ID for now
            className="product-card">
            <img src={luminico} alt="imagen de producto" />
            <p>Artefacto lumínico</p>
            <p>$295.000</p>
          </li>
          <li
            onClick={() => handleCardClick(2)} // Pass another dummy ID
            className="product-card">
            <img src={luminico} alt="imagen de producto" />
            <p>Artefacto lumínico</p>
            <p>$295.000</p>
          </li>
          <li
            onClick={() => handleCardClick(2)} // Pass another dummy ID
            className="product-card">
            <img src={luminico} alt="imagen de producto" />
            <p>Artefacto lumínico</p>
            <p>$295.000</p>
          </li>
          <li
            onClick={() => handleCardClick(2)} // Pass another dummy ID
            className="product-card">
            <img src={luminico} alt="imagen de producto" />
            <p>Artefacto lumínico</p>
            <p>$295.000</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Products;
