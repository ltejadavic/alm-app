"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './Contacto.module.css';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    organization: '',
    fullName: '',
    email: '',
    message: '',
    captcha: ''
  });

  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaText, setCaptchaText] = useState(''); // Guardar el texto captcha para validar
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    message: false,
    captcha: false,
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const formContainerRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    fetchCaptcha(); // Obtener captcha al cargar el componente

    if (formContainerRef.current && mapContainerRef.current) {
      mapContainerRef.current.style.height = `${formContainerRef.current.clientHeight}px`;
    }
  }, []);

  const fetchCaptcha = async () => {
    try {
      const response = await fetch('/api/captcha');
      const data = await response.json();
      setCaptchaImage(data.data); // Establecer la imagen captcha como base64
      setCaptchaText(data.text); // Guardar el texto captcha para validación
    } catch (error) {
      console.error('Error fetching captcha:', error);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaInput(e.target.value);

    // Validar entrada de captcha ignorando mayúsculas y minúsculas
    if (e.target.value.toLowerCase() === captchaText.toLowerCase()) {
      setCaptchaValid(true);
      setFormErrors((prevErrors) => ({ ...prevErrors, captcha: false }));
    } else {
      setCaptchaValid(false);
      setFormErrors((prevErrors) => ({ ...prevErrors, captcha: true }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      fullName: formData.fullName.trim() === '',
      email: !validateEmail(formData.email),
      message: formData.message.trim() === '',
      captcha: !captchaValid,
    };
    setFormErrors(errors);

    if (!errors.fullName && !errors.email && !errors.message && captchaValid) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFeedbackMessage('¡Mensaje enviado exitosamente!');
          setFormData({
            organization: '',
            fullName: '',
            email: '',
            message: '',
            captcha: ''
          });
          setCaptchaInput('');
          fetchCaptcha(); // Regenerar CAPTCHA después de enviar el formulario
        } else {
          setFeedbackMessage('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
        }
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        setFeedbackMessage('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
      }
    } else {
      setFeedbackMessage(null);
    }
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <h2 className={styles.title}>Comunícate con nosotros</h2>
      <p className={styles.description}>
        Puedes escribirnos para una cotización a <strong>ventas@alm-tecnologia.com</strong> o puedes llamarnos al <strong>(+51) 999999999</strong>.
      </p>

      <div className={styles.contactContainer}>
        <div className={styles.mapContainer}>
          <iframe
            ref={mapContainerRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.823299497332!2d-76.9822024846599!3d-12.13949169139347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c84f6d5e5e9f%3A0x876e0d1f4e6f4eeb!2sThomas%20Alva%20Edinson%20780%2C%20Santiago%20de%20Surco%2015049%2C%20Peru!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.formContainer} ref={formContainerRef}>
          <h3>Mándanos un Mensaje</h3>
          <form onSubmit={handleSubmit}>
            <label className={styles.formLabel}>
              Organización:
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className={styles.formInput}
              />
            </label>
            <label className={styles.formLabel}>
              Nombres y Apellidos:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`${styles.formInput} ${formErrors.fullName ? styles.errorInput : ''}`}
              />
              {formErrors.fullName && <span className={styles.errorText}>Este campo es obligatorio.</span>}
            </label>
            <label className={styles.formLabel}>
              Correo:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${styles.formInput} ${formErrors.email ? styles.errorInput : ''}`}
              />
              {formErrors.email && <span className={styles.errorText}>Ingrese un correo válido.</span>}
            </label>
            <label className={styles.formLabel}>
              Mensaje:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.formTextarea} ${formErrors.message ? styles.errorInput : ''}`}
              ></textarea>
              {formErrors.message && <span className={styles.errorText}>Este campo es obligatorio.</span>}
            </label>
            <label className={styles.formLabel}>
              CAPTCHA:
              <div className={styles.captchaContainer}>
                {/* Usar un <img> para mostrar el CAPTCHA */}
                <img src={captchaImage} alt="Captcha" />
              </div>
              <input
                type="text"
                name="captcha"
                value={captchaInput}
                onChange={handleCaptchaChange}
                className={`${styles.formInput} ${formErrors.captcha ? styles.errorInput : ''}`}
              />
              {formErrors.captcha && <span className={styles.errorText}>CAPTCHA incorrecto.</span>}
            </label>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
              {feedbackMessage && <span className={styles.feedbackText}>{feedbackMessage}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;