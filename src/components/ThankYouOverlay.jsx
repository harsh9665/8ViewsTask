'use client';

import styles from '@/styles/ThankYouOverlay.module.css';

export default function ThankYouOverlay({ heading, message, isClosing, onClose }) {
  return (
    <div
      className={`${styles.backdrop} ${isClosing ? styles.fadeOut : styles.fadeIn}`}
      onClick={onClose}
      role="presentation"
    >
      <section
        className={`${styles.card} ${isClosing ? styles.cardOut : styles.cardIn}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={heading}
      >
        <span className={styles.eyebrow}>E-INFRA</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.message}>{message}</p>
      </section>
    </div>
  );
}
