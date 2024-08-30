"use client";

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    const section = document.getElementById('presentacion'); // Asegúrate de que el ID sea correcto
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección "Presentación"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.clientHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      {/* Añadir onClick al contenedor del logo */}
      <div className={styles['logo-container']} onClick={handleLogoClick}>
        <img src="/images/logo.png" alt="Company Logo" className={styles.logo} />
      </div>
      <div className={styles['menu-container']}>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          {['consultoría', 'nosotros', 'galería', 'fAQ', 'contacto'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          {/* Añadir "Iniciar sesión" dentro del menú hamburguesa */}
          {isMenuOpen && (
            <a href="/login" className={styles['login-menu-item']}>
              <img src="/images/login.ico" alt="Login Icon" className={styles['login-icon']} />
              Iniciar sesión
            </a>
          )}
        </nav>
      </div>

      {/* Contenedor para el ícono de login y el texto fuera del menú */}
      <div className={styles['login-container']}>
        <a href="/login" className={styles['login-link']}>
          <img src="/images/login.ico" alt="Login Icon" className={styles['login-icon']} />
          <span>Iniciar sesión</span>
        </a>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;