import styles from '@/styles/StatsSection.module.css';

const stats = [
  { number: '20+',   label: 'Years of Experience' },
  { number: '1500+', label: 'Satisfied Home Owners' },
  { number: '30+',   label: 'Projects Completed' },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}