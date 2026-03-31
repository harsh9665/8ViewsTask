import Image from 'next/image';
import logo from '@/constants/logo.png';
import styles from '@/styles/NewsUpdates.module.css';

// ── Static news data (replace with DB/API later) ──
const news = [
  {
    id: 1,
    image: '/images/news&updates1.png',
    project: 'River Edge',
    date: '01.08.2025',
    title: 'The Future of Urban Living: Trends in Real Estate Development',
  },
  {
    id: 2,
    image: '/images/news&updates2.png',
    project: "La'Paloma",
    date: '01.06.2024',
    title: 'Building Your Dream Home: How E-Infra Delivers Luxury Villas',
  },
  {
    id: 3,
    image: '/images/news&updates3.png',
    project: 'River Edge',
    date: '01.24.2027',
    title: 'How to Choose the Perfect Commercial Space for Your Business',
  },
];

export default function NewsUpdates() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header Row ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>News &amp; Updates</h2>
          <button className={styles.viewAll}>VIEW ALL</button>
        </div>

        {/* ── Cards Row ── */}
        <div className={styles.cardsRow}>
          {news.map((item) => (
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