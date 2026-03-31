'use client';

import { useEffect } from 'react';
import styles from '@/styles/Modal.module.css';

/**
 * Modal — Generic reusable modal
 * Props:
 *  - isOpen    {boolean}
 *  - onClose   {fn}
 *  - title     {string}
 *  - children  {ReactNode}
 */
export default function Modal({ isOpen, onClose, title, children }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className={styles.body}>
          {children}
        </div>

      </div>
    </div>
  );
}