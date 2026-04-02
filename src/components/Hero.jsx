'use client';

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
        <source src="/videos/0_Loft_Interior_3840x2160.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Hero Content — no Bootstrap container, we use padding-left: 250px */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          REMARKABLE SPACES,<br />
          GUIDED BY LIFESTYLE
        </h1>

        <div className={styles.buttons}>
          <button className={styles.btnOutline} onClick={onExploreClick}>
            EXPLORE PROJECTS
          </button>
          <button className={styles.btnFilled} onClick={onLetsTalkClick}>
            LET&apos;S TALK
          </button>
        </div>
      </div>

    </section>
  );
}