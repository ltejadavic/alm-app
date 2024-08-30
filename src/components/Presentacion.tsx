"use client"; // Esto convierte el componente en un Client Component

import React from 'react';
import styles from './Presentacion.module.css';
import presentacionContent from '../data/presentacionContent.json'; // Importa el JSON

const Presentacion: React.FC = () => {
  const handleScrollToContacto = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="presentacion" className={styles.presentation}>
      <div className={styles['presentation-content']}>
        <h1>{presentacionContent.mainMessage}</h1>
        <div>
          <p>{presentacionContent.subMessage}</p>
        </div>
      </div>

      {/* Contenedor para el enlace "Saber más" */}
      <div className={styles['more-info-container']}>
        <span className={styles['more-info']} onClick={handleScrollToContacto}>
          Saber más
        </span>
      </div>
    </section>
  );
};

export default Presentacion;