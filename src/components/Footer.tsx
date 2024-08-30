"use client";

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contenedor de la dirección y el logo */}
        <div className={styles.infoContainer}>
          <img src="/images/logo.png" alt="Company Logo" className={styles.logo} />
          <div className={styles.contactInfo}>
            <h3>Contacto</h3>
            <p>
              <span className={styles.icon}>📍</span> Thomás Alva Edinson 780, Santiago de Surco
            </p>
            <p>
              <span className={styles.icon}>📞</span> (+51) 999999999
            </p>
          </div>
        </div>

        {/* Contenedor del Newsletter */}
        <div className={styles.newsletterContainer}>
          <h3>Newsletter</h3>
          <p>Regístrate para recibir nuestras noticias</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Ingresa tu correo..." className={styles.newsletterInput} />
            <button type="submit" className={styles.newsletterButton}>Enviar</button>
          </form>
        </div>
      </div>

      {/* Footer Legal */}
      <div className={styles.footerLegal}>
        <p>© Copyright 2024 ALM Servicios Tecnológicos SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;