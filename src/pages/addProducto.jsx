import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/addProducto.module.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    size: "",
    description: "",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null); // Para almacenar el archivo de la imagen
  const [fileName, setFileName] = useState("No hay archivo seleccionado");

  // Manejar cambios en los campos de texto
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar cambios en el campo de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    // Actualiza el estado con el nombre del archivo o muestra el mensaje si no hay archivo seleccionado
    setFileName(file ? file.name : "No hay archivo seleccionado");
  };

  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un FormData para enviar los datos y el archivo
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("size", formData.size);
    data.append("description", formData.description);
    data.append("image", image); // Adjuntar el archivo de imagen

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/bikinis/create/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Bikini creado:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error al crear bikini:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.containerForm}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="price">Precio</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Precio"
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor="size">Tamaño</label>
        <input
          type="text"
          id="size"
          name="size"
          placeholder="Tamaño"
          value={formData.size}
          onChange={handleChange}
        />

        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="image">Imagen</label>
        {/* Oculta el input de tipo archivo */}
        <input
          type="file"
          id="image"
          name="image"
          className={styles.hiddenInput} // Clase para ocultar el input
          onChange={handleFileChange}
        />
        {/* Botón personalizado para seleccionar archivo */}
        <label htmlFor="image" className={styles.customFileButton}>
          Buscar
        </label>
        {/* Mostrar el nombre del archivo seleccionado */}
        <p className={styles.fileName}>{fileName}</p>

        <button type="submit">Añadir Bikini</button>
      </div>
    </form>
  );
};

export default AddProduct;
