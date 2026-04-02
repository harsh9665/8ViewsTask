import styles from '@/styles/QuoteSection.module.css';
import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection}>

      {/* Decorative Quote */}
      <Image
        src="/images/quotes.png"
        alt="Quotes"
        width={83}
        height={77}
        className={styles.quoteMark}
      />

      <div className={`${styles.inner} container`}>
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
  )
}