'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '@/styles/AboutUs.module.css';

export default function AboutUs() {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once only
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Left — Text content ── */}
        <div className={styles.leftCol}>

          <div className={styles.FirstColGroup}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.description}>
            E-Infra is a premier real estate developer in Hyderabad, with over 20
            years of expertise in crafting exceptional residential and commercial
            spaces. We are committed to delivering quality, innovation, and
            sustainability in every project. Our approach focuses on creating
            spaces that enhance lifestyles, offering modern designs and world-class
            amenities.
          </p>
          </div>
          <Button variant="outlineGold" size="md" href="#about">
            KNOW MORE
          </Button>
        </div>

        {/* ── Right — Image slides in from right ── */}
        <div
          ref={imageRef}
          className={`${styles.rightCol} ${visible ? styles.visible : ''}`}
        >
          <Image
            src="/images/aboutus.png"
            alt="About E-Infra"
             style={{ objectFit: 'cover' }}
             fill
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}