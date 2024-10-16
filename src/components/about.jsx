import React from "react";
import styles from "../styles/About.module.css";
import bikiniImage from "../imagenes/biquiniAbout.jpg"; // Asegúrate de tener la imagen en la carpeta correspondiente

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <img src={bikiniImage} alt="Biquinis" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2>Sobre Nuestra Tienda</h2>
        <p>
          En nuestra tienda de bikinis, nos especializamos en ofrecer diseños
          únicos y de alta calidad para mujeres que buscan estilo y comodidad.
          Cada una de nuestras piezas es elaborada con los mejores materiales,
          garantizando que te sientas segura y atractiva, sin renunciar al
          confort. Descubre nuestra colección, llena de colores vibrantes y
          estilos modernos que se ajustan a cada tipo de cuerpo.
        </p>
        <p>
          Nuestro compromiso es ofrecer productos que realcen tu belleza natural
          y que te acompañen en tus momentos más especiales, ya sea en la playa,
          en la piscina, o en tus vacaciones soñadas.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={bikiniImage} alt="Biquinis" className={styles.image} />
      </div>
    </div>
  );
};

export default About;
