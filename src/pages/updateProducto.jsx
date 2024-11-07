import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/addProducto.module.css";

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    size: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/bikinis/${id}/`
        );
        setFormData({
          name: response.data.name,
          price: response.data.price,
          size: response.data.size,
          description: response.data.description,
        });
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("size", formData.size);
    data.append("description", formData.description);

    if (image) {
      data.append("image", image);
    }

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/bikinis/update/${id}/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("PRODUCTO ACTUALIZADO:", response.data);

      // Redirige al home después de la actualización
      navigate("/"); // Cambia la ruta según tu configuración
    } catch (error) {
      if (error.response) {
        console.error("Error al actualizar el producto:", error.response.data);
        console.error("Código de estado:", error.response.status);
      } else if (error.request) {
        console.error("No se recibió respuesta:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.containerForm}>
        <div className={`form-control ${styles.contentDiv}`}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={`form-control ${styles.contentDiv}`}>
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={`form-control ${styles.contentDiv}`}>
          <label htmlFor="size">Tamaño</label>
          <input
            type="text"
            id="size"
            name="size"
            placeholder="Tamaño"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div className={`form-control ${styles.contentDiv}`}>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className={`form-control ${styles.contentDiv}`}>
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </div>
    </form>
  );
};

export default UpdateProduct;
