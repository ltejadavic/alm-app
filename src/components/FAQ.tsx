"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import faqData from '../data/faqData.json'; // Importa los datos desde el JSON

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="fAQ" className={styles.faqSection}>
      <h2 className={styles.title}>Preguntas Frecuentes</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className={styles.plus}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;