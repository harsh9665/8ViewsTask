'use client';

import { useState } from 'react';
import styles from '@/styles/ClientReviews.module.css';
import { clientReviews } from '@/data/siteData';

const VISIBLE = 2; // cards visible at once

export default function ClientReviews() {
  const [current, setCurrent] = useState(0);

  const total = clientReviews.length;
  const canPrev = current > 0;
  const canNext = current < total - VISIBLE;

  const prev = () => canPrev && setCurrent((c) => c - 1);
  const next = () => canNext && setCurrent((c) => c + 1);

  return (
    <section className={styles.section}>

      {/* ── Title ── */}
      <h2 className={styles.title}>Our Client Reviews</h2>

      {/* ── Carousel ── */}
      <div className={styles.carouselWrapper}>

        {/* Prev arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft} ${!canPrev ? styles.arrowDisabled : ''}`}
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Track */}
        <div className={styles.trackOuter}>
          <div
            className={styles.track}
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE}) - ${current} * 24px))` }}
          >
            {clientReviews.map((item) => (
              <div key={item.id} className={styles.card}>
                <span className={styles.project}>{item.project}</span>
                <p className={styles.review}>{item.review}</p>
                <p className={styles.author}>— <em>{item.author}</em></p>
              </div>
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowRight} ${!canNext ? styles.arrowDisabled : ''}`}
          onClick={next}
          aria-label="Next"
        >
          →
        </button>

      </div>

      {/* ── Dots ── */}
      <div className={styles.dots}>
        {clientReviews.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => i <= total - VISIBLE && setCurrent(i)}
          />
        ))}
      </div>

      {/* ── View All ── */}
      <button className={styles.viewAll}>VIEW ALL</button>

    </section>
  );
}