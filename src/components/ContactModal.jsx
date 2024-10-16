import React from "react";
import styles from "../styles/ContactModal.module.css"; // Estilos CSS para el modal

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  return (
    <div className={styles.modaOverlay}>
      <div className={styles.modalContent}>
        <h2>Información de Contacto</h2>
        <p>Email: contacto@ejemplo.com</p>
        <p>Teléfono: +123 456 7890</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ContactModal;
