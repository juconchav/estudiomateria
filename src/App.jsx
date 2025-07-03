import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Bio from "./components/Bio/Bio";
import Works from "./components/Works/Works";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="/productos" element={<Products/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/nosotros" element={<Bio/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/productodetail/:id" element={<ProductDetails/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
