import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

// Crea el Proveedor del Contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito: un array de productos con 'quantity'

  // Función para agregar un item al carrito
  // item: el objeto producto completo (id, title, price, etc.)
  // quantity: la cantidad a agregar
  const addItem = (item, quantity) => {
    // Busca si el item ya existe en el carrito
    const existingItemIndex = cart.findIndex(prod => prod.id === item.id);

    if (existingItemIndex !== -1) {
      // Si el item ya existe, actualiza su cantidad
      const updatedCart = [...cart];
      // Asegura que la nueva cantidad no sea negativa
      updatedCart[existingItemIndex].quantity = Math.max(0, updatedCart[existingItemIndex].quantity + quantity);
      setCart(updatedCart);
    } else {
      // Si el item no existe, agrégalo con la cantidad
      setCart(prevCart => [...prevCart, { ...item, quantity }]);
    }
    console.log(`Agrega ${quantity} de ${item.title} al carrito.`);
  };

  // Función para eliminar un item del carrito por su ID
  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== itemId));
  };

  // Función para vaciar completamente el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcula el total de items únicos en el carrito 
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Calcula el precio total del carrito
  const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);