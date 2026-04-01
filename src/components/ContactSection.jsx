import ContactForm from '@/components/ContactForm';
import styles from '@/styles/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner + ' container'}>
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Let's Build Your Dream Space Together!
          </h2>
        </div>
        <div className={styles.rightCol}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}