import Image from 'next/image';
import styles from '@/styles/Builders.module.css';

const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Builders() {
  return (
    <section className={styles.buildersSection}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...items, ...items].map((_, i) => (
            <div key={i} className={styles.logoItem}>
              <Image
                src="/images/builder1.png"
                alt="Builders"
                width={900}
                height={120}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}