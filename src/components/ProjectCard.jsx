import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';

/**
 * ProjectCard — Generic project card with image, badge, title, type
 *
 * Props:
 *  - image       {string}   image path
 *  - name        {string}   project name e.g. "LA'PALOMA"
 *  - type        {string}   project type e.g. "Luxury Villas"
 *  - badge       {string}   optional badge text e.g. "COMPLETED PROJECT"
 *  - isActive    {boolean}  larger/highlighted card
 */
export default function ProjectCard({ image, name, type, badge, isActive }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`}>

      {/* Background image */}
      <Image
        src={image}
        alt={name}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Badge — top right */}
      {badge && (
        <div className={styles.badge}>{badge}</div>
      )}

      {/* Info — bottom left */}
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.type}>{type}</p>
      </div>

    </div>
  );
}