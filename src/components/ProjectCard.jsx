import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';

export default function ProjectCard({ image, name, type, badge }) {
  return (
    <article className={styles.card} data-project-card="true">
      <Image
        src={image}
        alt={name}
        fill
        className={styles.image}
        sizes="(max-width: 767px) 82vw, (max-width: 1279px) 520px, 700px"
      />

      <div className={styles.overlay} />

      {badge && <div className={styles.badge}>{badge}</div>}

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.type}>{type}</p>
      </div>
    </article>
  );
}
