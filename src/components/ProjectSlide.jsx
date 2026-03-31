import Image from 'next/image';
import Button from '@/components/Button';
import Tag from '@/components/Tag';
import styles from '@/styles/ProjectSlide.module.css';

/**
 * ProjectSlide — Generic full-screen project panel
 *
 * Props:
 *  - label        {string}   e.g. "FEATURED PROJECTS-01"
 *  - title        {string}   e.g. "LACASA VILLA"
 *  - description  {string}
 *  - tags         {string[]} e.g. ["Hyderabad", "2025", "Residential"]
 *  - image        {string}   path to image in /public
 *  - overlayColor {string}   CSS rgba for dark overlay (default 60% black)
 *  - onView       {fn}       callback for VIEW button
 *  - index        {number}   z-index stacking order
 */
export default function ProjectSlide({
  label,
  title,
  description,
  tags = [],
  image,
  overlayColor = 'rgba(33,33,33,0.60)',
  onView,
  index = 0,
}) {
  return (
    <div
      className={styles.slide}
      style={{ zIndex: index }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className={styles.bg}
        sizes="100vw"
        priority={index === 0}
      />

      {/* Dark overlay */}
      <div
        className={styles.overlay}
        style={{ backgroundColor: overlayColor }}
      />

      {/* Gold top border */}
      <div className={styles.topBorder} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        {/* Tags row */}
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} variant="dark">{tag}</Tag>
            ))}
          </div>
        )}

        <Button variant="outline" size="md" onClick={onView}>
          VIEW
        </Button>
      </div>
    </div>
  );
}