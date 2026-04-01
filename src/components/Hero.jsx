'use client';

import Button from '@/components/Button';
import styles from '@/styles/Hero.module.css';

export default function Hero({ onExploreClick, onLetsTalkClick }) {
  return (
    <section className={styles.hero} id="home">

      {/* Video Background */}
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/0_Loft_Interior_3840x2160.mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Hero Content */}
      <div className={styles.content + ' container'}>
        <h1 className={styles.heading}>
          REMARKABLE SPACES,<br />
          GUIDED BY LIFESTYLE
        </h1>

        <div className={styles.buttons}>
          <Button variant="outline" size="md" onClick={onExploreClick}>
            EXPLORE PROJECTS
          </Button>
          <Button variant="solid" size="md" onClick={onLetsTalkClick}>
            LET&apos;S TALK
          </Button>
        </div>
      </div>

    </section>
  );
}