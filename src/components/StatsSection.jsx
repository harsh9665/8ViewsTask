import { stats } from '@/data/siteData';
import styles from '@/styles/StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
