
import styles from "../styles/Products.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [productToEdit, setProductToEdit] = useState(null); // Nuevo estado para el producto a editar
  const navigate = useNavigate(); // Hook para redirigir a la página de edición

  // Función para obtener los bikinis del backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bikinis/")
      .then((response) => {
        console.log(response.data); // Verifica qué datos estás recibiendo
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bikinis:", error);
      });
  }, []);

  // Función para alternar la selección de productos
  const toggleSelection = (id) => {
    setSelectedProducts((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id); // Desseleccionar
        setProductToEdit(null); // Si deseleccionas, limpia el producto a editar
      } else {
        newSelection.add(id); // Seleccionar
        setProductToEdit(id); // Establece el producto a editar
      }
      return newSelection;
    });
  };

  // Función para eliminar los productos seleccionados
  const deleteSelected = () => {
    Promise.all(
      Array.from(selectedProducts).map((id) =>
        axios.delete(`http://127.0.0.1:8000/api/bikinis/delete/${id}/`)
      )
    )
      .then(() => {
        // Refrescar la lista de productos
        setProducts((prev) =>
          prev.filter((product) => !selectedProducts.has(product.id))
        );
        setSelectedProducts(new Set()); // Limpiar selección
      })
      .catch((error) => {
        console.error("Error deleting products:", error);
      });
  };

  // Función para redirigir a la página de edición del producto
  const editProduct = () => {
    if (productToEdit) {
      navigate(`/update/${productToEdit}`); // Redirige a la página de edición con el ID del producto
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonDelAdd}>
        <Link to="/addProducto">
          <button>Adicionar Producto</button>
        </Link>
        <button
          onClick={editProduct}
          disabled={!productToEdit} // Deshabilita el botón si no hay un producto seleccionado para editar
        >
          Modificar Producto
        </button>
        <button onClick={deleteSelected} disabled={selectedProducts.size === 0}>
          Eliminar Seleccionados
        </button>
      </div>

      <div className={styles.cardContainer}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`${styles.card} ${
              selectedProducts.has(product.id) ? styles.selectedCard : ""
            }`} // Cambia el estilo si está seleccionado
            onClick={() => toggleSelection(product.id)} // Selección al hacer clic en la carta
          >
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img
              src={`http://127.0.0.1:8000/media/${product.image}`}
              alt={product.name}
            />
            <p>{product.description || "No description available."}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductsList;
