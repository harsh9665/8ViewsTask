import styles from '@/styles/StickyContact.module.css';

export default function StickyContact() {
  return (
    <a href="#contact" className={styles.stickyContact}>
      <span className={styles.label}>CONTACT US</span>
    </a>
  );
}