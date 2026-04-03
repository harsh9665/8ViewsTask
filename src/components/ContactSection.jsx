import ContactForm from '@/components/ContactForm';
import styles from '@/styles/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Let&apos;s Build Your Dream Space Together!
        </h2>

        <ContactForm />
      </div>
    </section>
  );
}
