import styles from '@/styles/Tag.module.css';

export default function Tag({ children, variant = 'dark' }) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {children}
    </span>
  );
}