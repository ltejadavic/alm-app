"use client"; // Esto convierte el componente en un Client Component

import React from 'react';
import styles from './Consultoria.module.css';
import consultoriaContent from '../data/consultoriaContent.json'; // Importa el JSON

const Consultoria: React.FC = () => {
  const handleImageClick = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="consultoría" className={styles.consultoria}>
      {/* Contenedor del título principal */}
      <div className={styles['section-title']}>
        <h2>Consultorías</h2>
      </div>

      <div className={styles['consultoria-container']}>
        {consultoriaContent.map((item, index) => (
          <div key={index} className={`${styles['consultoria-item']} ${styles['hover-effect']}`} onClick={handleImageClick}>
            <img
              src={`/images/consultoria/${item.image}`}
              alt={item.title}
              className={styles['consultoria-image']}
            />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Consultoria;