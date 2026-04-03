'use client';

import styles from '@/styles/ThankYouOverlay.module.css';
import { classNames } from '@/utils/classNames';

export default function ThankYouOverlay({
  heading,
  message,
  isClosing,
  onClose,
}) {
  const backdropClassName = classNames(
    styles.backdrop,
    isClosing ? styles.fadeOut : styles.fadeIn
  );
  const cardClassName = classNames(
    styles.card,
    isClosing ? styles.cardOut : styles.cardIn
  );

  return (
    <div
      className={backdropClassName}
      onClick={onClose}
      role="presentation"
    >
      <section
        className={cardClassName}
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
