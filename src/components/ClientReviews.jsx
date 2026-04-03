'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';
import { clientReviews } from '@/data/siteData';
import styles from '@/styles/ClientReviews.module.css';

export default function ClientReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="client-reviews" className={styles.section}>
      <h2 className={styles.title}>Our Client Reviews</h2>

      <div className={styles.reviewsViewport} aria-label="Client reviews">
        <div className={styles.reviewsTrack}>
          {clientReviews.map((item) => (
            <article key={item.id} className={styles.card}>
              <p className={styles.project}>{item.project}</p>

              <div className={styles.reviewGroup}>
                <p className={styles.review}>{item.review}</p>
                <p className={styles.author}>&mdash; {item.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.viewAll}
        onClick={() => setIsModalOpen(true)}
      >
        VIEW ALL
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Client Reviews"
      >
        <ContactForm
          source="client_reviews"
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
}
