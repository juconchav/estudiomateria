import Footer from "../Footer/Footer";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // Almacena los productos obtenidos de Firebase
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Estado para la categoría seleccionada

  // Función asíncrona para obtener y filtrar productos de Firebase
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const db = getFirestore();
      const productsCollectionRef = collection(db, "products");
      
      let q = productsCollectionRef; // La consulta base es la colección completa de prodcutos

      // Si una categoría está seleccionada y no es "all", añade el filtro 'where'
      if (selectedCategory && selectedCategory !== "all") {
        // Usa 'categoryId'
        q = query(productsCollectionRef, where("categoryId", "==", selectedCategory));
      }

      const querySnapshot = await getDocs(q); // Ejecuta la consulta (filtrada o no)
      
      // Mapea los documentos obtenidos a un formato de objeto
      const productsData = querySnapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(), // Copia todos los campos del documento
      }));
      
      setProducts(productsData); // Actualiza el estado con los productos
      
    } catch (err) {
      console.error("Error al obtener los documentos: ", err);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect para búsqueda de productos cada vez que 'selectedCategory' cambia
  // o la primera vez que el componente se monta.
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const handleCardClick = (productId) => {
    console.log(`Clicked product with ID: ${productId}`);
    navigate(`/productodetail/${productId}`);
  };

  // Manejador del cambio en el dropdown
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Actualiza el estado con la categoría seleccionada
  };

  // Renderizado Condicional de Estados (loading, error, vacío)
  if (loading) {
    return (
      <div className="products-loading">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-error">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Si no hay productos después de cargar
  if (products.length === 0 && !loading && !error) {
    return (
      <div className="products-empty">
        <p>No hay productos disponibles para la categoría seleccionada.</p>
        <button onClick={() => setSelectedCategory("all")}>Mostrar todos los productos</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>Nuestros productos</h1>
        <div>
          <label htmlFor="categories">Seleccionar categoría:</label>
          <select name="category" id="categories" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">Todas las categorías</option>
            {/* categorias de productos disponibles */}
            <option value="artefactos_luminicos">Artefacto lumínico</option>
            <option value="aros">Aros</option>
            <option value="anillos">Anillos</option>
          </select>
        </div>

        <ul className="container">
          {products.map((product) => ( // Mapea sobre 'products' que ya contiene los filtrados
            <li key={product.id} onClick={() => handleCardClick(product.id)} className="product-card">
              <img src={product.imageId} alt={product.title || "imagen de producto"}/>
              <h3>{product.title}</h3>
              <h4>{product.description}</h4>
              <p>Precio: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Products;