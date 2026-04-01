import Image from 'next/image';
import logo from '@/constants/logo.png';
import styles from '@/styles/NewsUpdates.module.css';
import { newsItems } from '@/data/siteData';

export default function NewsUpdates() {
  return (
    <section className={styles.section}>
      <div className={styles.inner + ' container'}>

        {/* ── Header Row ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>News &amp; Updates</h2>
          <button className={styles.viewAll}>VIEW ALL</button>
        </div>

        {/* ── Cards Row ── */}
        <div className={styles.cardsRow}>
          {newsItems.map((item) => (
            <article key={item.id} className={styles.card}>

              {/* Image with hover overlay */}
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Hover overlay — sweeps left to right, shows logo */}
                <div className={styles.overlay}>
                  <div className={styles.overlayLogo}>
                    <Image
                      src={logo}
                      alt="E-INFRA"
                      width={160}
                      height={48}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

              </div>

              {/* Card Meta */}
              <div className={styles.cardMeta}>
                <span className={styles.projectDate}>
                  {item.project}, {item.date}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}