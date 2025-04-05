import { useEffect, useState } from "react";
import './card.css'
import Slide from '../../components/slider/slider'
import Products from '../../data/products.json'
import ProductModal from '../../components/product_modal/productModal'

// Estados
const Card = () => {
  const [burgers, setBurgers] = useState([]); // Lista del producto 
  const [error, setError] = useState(null); 
  const [selectProduct, setSelectProduct] = useState(null); // Producto del modal
  const [showModal, setShowModal] = useState(false); // visivilidad del modal

  // Funciones
  // Carga los productos desde el archivo Json  
  useEffect(() => {
    try {
      setBurgers(Products.Hamburguesas); 
    } catch (error) {
      console.error("Error al cargar los datos", error)
      setError(error.message)
    }
  }, []);

  // Actualizar el producto seleccionado y muestra el modal
  const onProductClick = (product) => {
    setSelectProduct(product);
    setShowModal(true);
  }

  // Ocultar modal y resetear el producto seleccionado 
  const offModal = () => {
    setShowModal(false);
    setSelectProduct(null);
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Renderizado
  return (
    <div className="slider">
      <h1 className="title-card">Starters</h1>
        <Slide burgers={burgers} productClick={onProductClick} /> {/* Renderza el componente slide y pasa los productos */}
        {showModal && (
          <ProductModal
            product={selectProduct} // Renderizar el componente y pasar el producto selecconado
            offModal={offModal} // Pasar funcion
          />
        )}
    </div>
  );
};
 
export default Card;

