import Image from 'next/image';
import styles from '@/styles/Builders.module.css';
import { classNames } from '@/utils/classNames';

const marqueeCopies = [0, 1];

export default function BuilderMarquee({
  imageSrc,
  imageAlt = 'Builder logos',
  sectionClassName = '',
  reverse = false,
}) {
  return (
    <section
      className={classNames(styles.buildersSection, sectionClassName)}
    >
      <div className={styles.marqueeWrapper}>
        <div
          className={classNames(
            styles.marqueeTrack,
            reverse && styles.reverseTrack
          )}
        >
          {marqueeCopies.map((item) => (
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
