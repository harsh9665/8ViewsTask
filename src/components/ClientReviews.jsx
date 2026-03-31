'use client';

import { useState } from 'react';
import styles from '@/styles/ClientReviews.module.css';

const reviews = [
  {
    id: 1,
    project: 'Skyline Heights',
    review:
      '"Living in Skyline Heights has been a dream come true. The views are absolutely breathtaking, and the modern amenities make every day feel luxurious. The location in Gachibowli is perfect-close to everything yet peaceful. Highly recommend this place!"',
    author: 'Ravi Kumar, Resident',
  },
  {
    id: 2,
    project: 'Green Park Towers',
    review:
      '"As an eco-conscious buyer, Green Park Towers was exactly what I was looking for. The blend of modern design and sustainable features made it an easy choice. I feel good knowing that my home is energy-efficient, and the community is equally forward-thinking."',
    author: 'Suresh Reddy, Resident',
  },
  {
    id: 3,
    project: 'Sapphire Residences',
    review:
      '"From the first visit, I knew Sapphire Residences was special. The luxurious interiors, amazing amenities, and prime location exceeded my expectations. It\'s more than a home — it\'s a lifestyle. The perfect place to unwind after a long day."',
    author: 'Priya Desai, Resident',
  },
  {
    id: 4,
    project: 'The Corporate Hub',
    review:
      '"The Corporate Hub was a game-changer for our business. The space is not only visually impressive but also strategically located. It provides the perfect environment for our team to collaborate and innovate. It truly aligns with our company\'s vision."',
    author: 'Prakash Mehta, CEO of Tech Innovations Pvt. Ltd.',
  },
  {
    id: 5,
    project: 'The Villas at Maple Grove',
    review:
      '"The Villas at Maple Grove offered the perfect balance of elegance and serenity. I was looking for a space that feels like home, and this villa delivered on all fronts. The quiet neighborhood and expansive design make it the ideal sanctuary. I couldn\'t be happier!"',
    author: 'Anjali Sharma, Villa Owner',
  },
];

const VISIBLE = 2; // cards visible at once

export default function ClientReviews() {
  const [current, setCurrent] = useState(0);

  const total = reviews.length;
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
            {reviews.map((item) => (
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
        {reviews.map((_, i) => (
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