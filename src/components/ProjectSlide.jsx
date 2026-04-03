import Image from 'next/image';
import Button from '@/components/Button';
import Tag from '@/components/Tag';
import styles from '@/styles/ProjectSlide.module.css';

export default function ProjectSlide({
  label,
  title,
  description,
  tags = [],
  image,
  mobileImagePosition = 'center center',
  overlayColor = 'rgba(33,33,33,0.60)',
  onView,
  index = 0,
}) {
  return (
    <article
      className={styles.slide}
      style={{
        '--slide-z-index': index,
        '--mobile-image-position': mobileImagePosition,
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className={styles.bg}
        sizes="100vw"
        priority={index === 0}
      />

      <div className={styles.overlay} style={{ backgroundColor: overlayColor }} />

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.copyGroup}>
            <span className={styles.label}>{label}</span>

            <div className={styles.projectInfo}>
              <div className={styles.textBlock}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
              </div>

              {tags.length > 0 && (
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <Tag key={tag} variant="dark">
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={onView}
            className={styles.viewButton}
          >
            VIEW
          </Button>
        </div>
      </div>
    </article>
  );
}
