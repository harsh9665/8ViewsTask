'use client';

import styles from '@/styles/Hero.module.css';

export default function Hero({ onLetsTalkClick }) {
  const handleExploreClick = () => {
    document.getElementById('featured-projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={styles.hero} id="home">
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

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          REMARKABLE SPACES,
          <br />
          GUIDED BY LIFESTYLE
        </h1>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.btnOutline}
            onClick={handleExploreClick}
          >
            EXPLORE PROJECTS
          </button>

          <button
            type="button"
            className={styles.btnFilled}
            onClick={onLetsTalkClick}
          >
            LET&apos;S TALK
          </button>
        </div>
      </div>
    </section>
  );
}
