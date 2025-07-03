import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../CartContext/CartContext'; 
import { Link } from 'react-router-dom'; 

function CartWidget() {
  const { totalItems } = useCart(); // Obtiene el total de ítems del carrito

  return (
    <Link to="/cart" className="cart-widget-link"> 
      <div className="carrito">
        <FaShoppingCart size="25px" />
        {/* Renderiza la cantidad de ítems solo si es mayor a 0 */}
        {totalItems > 0 && <span className="badge">{totalItems}</span>}
      </div>
    </Link>
  );
}

export default CartWidget;