import React from "react";
import styles from "../styles/Products.module.css";
import imagen from "../imagenes/biquini.webp";

const products = [
  { id: 1, name: "Biquini tamanho S", price: "R 100.50", image: imagen },
  { id: 2, name: "Biquini tamanho M", price: "R200.50", image: imagen },
  { id: 3, name: "Biquini tamanho P", price: "300.50", image: imagen },
  { id: 4, name: "Biquini tamanho PP", price: "300.50", image: imagen },
  { id: 5, name: "Biquini tamanho XS", price: "300.50", image: imagen },
  { id: 6, name: "Biquini tamanho XL", price: "300.50", image: imagen },
  { id: 7, name: "Biquini tamanho XL", price: "300.50", image: imagen },
  { id: 8, name: "Biquini tamanho XL", price: "300.50", image: imagen },
];

const ProductsList = () => {
  return (
    <div className={styles.cardContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
