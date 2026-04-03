import Image from 'next/image';
import styles from '@/styles/Builders.module.css';

export default function BuilderMarquee({
  imageSrc,
  imageAlt = 'Builder logos',
  sectionClassName = '',
  reverse = false,
}) {
  return (
    <section
      className={[styles.buildersSection, sectionClassName]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.marqueeWrapper}>
        <div
          className={[styles.marqueeTrack, reverse ? styles.reverseTrack : '']
            .filter(Boolean)
            .join(' ')}
        >
          {[0, 1].map((item) => (
            <Image
              key={item}
              src={imageSrc}
              alt={item === 0 ? imageAlt : ''}
              width={1920}
              height={72}
              className={styles.logoStrip}
              aria-hidden={item !== 0}
              priority={item === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
