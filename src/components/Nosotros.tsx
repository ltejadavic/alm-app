"use client"; // Esto convierte el componente en un Client Component

import React from 'react';
import styles from './Nosotros.module.css';
import nosotrosContent from '../data/nosotrosContent.json'; // Importa el JSON

const Nosotros: React.FC = () => {
  return (
    <section id="nosotros" className={styles.nosotros}>
      <div className={styles['section-title']}>
        <h2>Nosotros</h2>
      </div>

      <div className={styles['content-container']}>
        {/* Contenedor de Texto */}
        <div className={styles['text-container']}>
          <p dangerouslySetInnerHTML={{ __html: nosotrosContent.text }} />
        </div>

        {/* Contenedor de Imagen */}
        <div className={styles['image-container']}>
          <img src="/images/about.jpg" alt="About us" className={styles['nosotros-image']} />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;