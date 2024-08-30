"use client";

import React, { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Manejar la transición automática del carrusel
  useEffect(() => {
    if (!isHovered && !isModalOpen) { // Detener la transición si el modal está abierto
      slideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Cambia de imagen cada 3 segundos
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isHovered, isModalOpen, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="galería" className={styles.gallery}>
      <div className={styles['section-title']}>
        <h2>Galería</h2>
      </div>

      <div className={styles['carousel-container']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {images.length > 0 && images[currentIndex] && (
          <>
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className={styles['carousel-image']}
              onClick={handleImageClick}
            />
            <button className={styles['carousel-button']} onClick={prevSlide}>◀</button>
            <button className={styles['carousel-button']} onClick={nextSlide}>▶</button>
          </>
        )}
      </div>

      {/* Modal para la imagen ampliada */}
      <ImageModal isOpen={isModalOpen} imageUrl={images[currentIndex]} onClose={handleCloseModal} />
    </section>
  );
};

export default Gallery;