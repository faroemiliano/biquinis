import React from "react";
import ProductsList from "../components/ProductList";
import styles from "../styles/HomePage.module.css";
import Carousel from "../components/carousel";
import About from "../components/about";

const homePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Carousel />
        <div className={styles.products}>
          <ProductsList />
        </div>
        <About />
      </div>
    </div>
  );
};

export default homePage;
