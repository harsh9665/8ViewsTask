import styles from '@/styles/QuoteSection.module.css';

export default function QuoteSection() {
  return (
    <section id="quote-section" className={styles.quoteSection}>
      <div className={styles.inner}>
        <span className={styles.quoteMark} aria-hidden="true">
          “”
        </span>

        <div className={styles.quoteContent}>
          <p className={styles.quoteText}>
            We work at the intersection of architectural design, construction
            science, and ecological research. Where dreams take shape, spaces
            come alive
          </p>

          <div className={styles.brand}>
            <span className={styles.brandDot}></span>
            <span className={styles.brandName}>E-INFRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
