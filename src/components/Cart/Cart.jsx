import Footer from "../Footer/Footer";
import "./Cart.css"; 
import { useCart } from "../CartContext/CartContext"; 
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalItems, totalPrice } = useCart(); // importa estado y las funciones del carrito

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <>
        <div className="cart-empty-container">
          <h1 className="titleCart">Tu carrito está vacío...</h1>
          <h2 className="bajadaCart">Gracias por tu apoyo, con cada compra Estudio Materia crece...</h2>
          <Link to="/productos" className="styleButtom">Ir a comprar</Link>
        </div>
        <Footer />
      </>
    );
  }

  // Si el carrito NO está vacío
  return (
    <>
      <div className="cart-container">
        <h1 className="titleCart">Tu carrito</h1>

        <div className="cart-items-list">
          {cart.map((product) => (
            <div key={product.id} className="cart-item-card">
              <img src={product.imageId} alt={product.title} className="cart-item-image"/>
              <div className="cart-item-info">
                <h3>{product.title}</h3>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio Unitario: ${product.price}</p>
                <p>Subtotal: ${product.price * product.quantity}</p>
              </div>
              <button className="btn-remove-item"onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <p>Total de ítems: {totalItems}</p>
          <h2>Total a Pagar: ${totalPrice}</h2>{" "}
          <button className="btn-clear-cart" onClick={clearCart}>Vaciar carrito</button>
          <button className="btn-checkout">Finalizar compra</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
