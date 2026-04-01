import styles from '@/styles/QuoteSection.module.css';

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection} >
      <div className={styles.inner  + ' container'}>
        {/* Left quote marks */}
        <div className={styles.quoteMark}>&ldquo;&rdquo;</div>

        {/* Main quote text */}
        <div className={styles.quoteContent}>
          <p className={styles.quoteText}>
            We work at the intersection of architectural design, construction
            science, and ecological research. Where dreams takes shape, spaces
            come alive
          </p>
          <div className={styles.brand}>
            <span className={styles.brandDot}></span>
            <span className={styles.brandName}>E- INFRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}