'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/InteriorVideo.module.css';

export default function InteriorVideo() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.videoWrapper}>
        <video
          className={`${styles.video} ${isVisible ? styles.videoVisible : ''}`}
          src="/videos/interiorvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
