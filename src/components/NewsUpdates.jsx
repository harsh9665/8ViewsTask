'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';
import logo from '@/constants/logo.png';
import { newsItems } from '@/data/siteData';
import styles from '@/styles/NewsUpdates.module.css';

export default function NewsUpdates() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>News &amp; Updates</h2>

          <button
            type="button"
            className={styles.viewAll}
            onClick={() => setIsModalOpen(true)}
          >
            VIEW ALL
          </button>
        </header>

        <div className={styles.cardsRow}>
          {newsItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 460px"
                />

                <div className={styles.overlay} aria-hidden="true">
                  <Image
                    src={logo}
                    alt=""
                    width={155}
                    height={45}
                    className={styles.overlayLogo}
                  />
                </div>
              </div>

              <div className={styles.cardMeta}>
                <p className={styles.projectDate}>
                  {item.project}, {item.date}
                </p>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="News & Updates"
      >
        <ContactForm
          source="news_updates"
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
}
