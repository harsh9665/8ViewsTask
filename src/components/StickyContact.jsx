'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/StickyContact.module.css';

export default function StickyContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateStickyContact = () => {
      const heroSection = document.getElementById('home');
      const heroBottom = heroSection?.getBoundingClientRect().bottom;

      setIsVisible(heroBottom !== undefined && heroBottom <= 0);
    };

    updateStickyContact();
    window.addEventListener('scroll', updateStickyContact, { passive: true });
    window.addEventListener('resize', updateStickyContact);

    return () => {
      window.removeEventListener('scroll', updateStickyContact);
      window.removeEventListener('resize', updateStickyContact);
    };
  }, []);

  const wrapClassName = [
    styles.stickyWrap,
    !isVisible && styles.hidden,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapClassName}>
      <a href="#contact" className={styles.stickyContact}>
        <span className={styles.label}>CONTACT US</span>
      </a>
    </div>
  );
}
