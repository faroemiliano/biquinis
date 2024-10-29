import React from "react";
import styles from "../styles/Footer.module.css";
import imagen from "../imagenes/imgFooter.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div id="contacto" className={styles.contactInfo}>
        <h3>Contacto</h3>
        <p>Email: contacto@mitiendadebiquinis.com</p>
        <p>Teléfono: +55 12 3456-7890</p>
        <p>Dirección: Rua Exemplo, 123 - Florianópolis, SC</p>
      </div>
      <div>
        <img src={imagen} alt="imgFooter" className={styles.imagen} />
      </div>
      <div className={styles.paymentMethods}>
        <h3>Formas de Pago</h3>
        <ul>
          <li>
            <i className="fa fa-credit-card" aria-hidden="true"></i> Cartão de
            Crédito
          </li>
          <li>
            <i className="fa fa-credit-card-alt" aria-hidden="true"></i> Cartão
            de Débito
          </li>
          <li>
            <i className="fa fa-paypal" aria-hidden="true"></i> PayPal
          </li>
          <li>
            <i className="fa fa-exchange" aria-hidden="true"></i> PIX
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
