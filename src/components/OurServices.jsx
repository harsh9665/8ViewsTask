'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/OurServices.module.css';
import { services } from '@/data/siteData';

export default function OurServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>

      {/* ── Title ── */}
      <h2 className={styles.title}>OUR SERVICES</h2>

      {/* ── Service rows ── */}
      <div className={styles.list}>
        {services.map((service, idx) => (
          <div
            key={service.id}
            className={`${styles.row} ${hovered === idx ? styles.rowHovered : ''}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Divider line top */}
            <div className={styles.divider} />

            <div className={styles.rowInner}>

              {/* Left — text content */}
              <div className={styles.textBlock}>
                <h3 className={styles.serviceName}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>

              {/* Center — image (visible on hover) */}
              <div className={styles.imageBlock}>
                <Image
                  src="/images/OurServicesGenericImage.png"
                  alt={service.title}
                  fill
                  className={styles.serviceImage}
                  sizes="400px"
                />
              </div>

              {/* Right — arrow */}
              <div className={styles.arrowBlock}>
                <span className={styles.arrow}>↗</span>
              </div>

            </div>

          </div>
        ))}
      </div>
</div>
    </section>
  );
}