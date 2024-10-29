import React from "react";
import imagen1 from "../imagenes/imgCarousel1.jpg";
import imagen2 from "../imagenes/imgCarousel2.jpg";
import imagen3 from "../imagenes/imgCarousel3.webp";
import styles from "../styles/carousel.module.css";

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} className={styles.carouselImg} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen2} className={styles.carouselImg} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className={styles.carouselImg} alt="..." />
        </div>
      </div>
      <button
        className={`carousel-control-prev ${styles.carouselControl}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${styles.carouselControl}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
