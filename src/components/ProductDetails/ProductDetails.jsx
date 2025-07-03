import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";
import { useCart } from '../CartContext/CartContext';

function ProductDetails() {
  const { id } = useParams(); // Obtiene el 'id' de los parámetros de la URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad a agregar al carrito

  const { addItem } = useCart(); // Usa el hook para obtener la función addItem

  useEffect(() => {
    if (!id) {
      setError("ID de producto no encontrado en la URL.");
      setLoading(false);
      return;
    }

    const db = getFirestore();
    const docRef = doc(db, "products", id); // Referencia al documento específico usando 'id'

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Producto no encontrado.");
          console.log("Producto no encontrado.");
        }
      })
      .catch((err) => {
        console.error("Error al obtener el documento: ", err);
        setError("Error al cargar los detalles del producto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // Se re-ejecuta si el 'id' de la URL cambia

  const handleAddToCart = () => {
    if (product && quantity > 0) { // Si producto esté cargado y la cantidad sea válida
      addItem(product, quantity);
    } else if (quantity <= 0) {
      alert("Por favor, selecciona una cantidad mayor a cero.");
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    // Asegura que la cantidad sea un número y mayor a 1
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (isNaN(value) || value < 1) {
      setQuantity(1); // O setQuantity(''); para un campo de texto vacío
    }
  };

  // --- Renderizado Condicional ---
  if (loading) {
    return (
      <div className="product-detail-loading">
        <p>Cargando detalles del producto...</p>
      </div>
    );
  }

  // --- En caso de error ---

  if (error) {
    return (
      <div className="product-detail-error">
        <p>Error: {error}</p>
        <button onClick={() => navigate('/products')}>Volver a Productos</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <p>El producto no está disponible.</p>
      </div>
    );
  }

  // --- Renderizado del Producto ---
  return (
    <>
      <div>
        <h1 className="titleDetail">Detalle del Producto</h1>
        <div className="product-detail-container"> 
          <div className="product-image-section">
            <img src={product.imageId} alt={product.title || "imagen de producto"}/>
          </div>
          <div className="product-info-section">
            <h2>{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>

            <div className="add-to-cart-controls">
              <label htmlFor="quantity">Cantidad:</label>
              <input type="number" id="quantity" min="1" value={quantity} onChange={handleQuantityChange} className="quantity-input"/><br/>
              <button className="btnAdd" onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;