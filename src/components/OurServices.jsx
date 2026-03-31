'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/OurServices.module.css';

const services = [
  {
    id: 1,
    title: 'High-Rise Apartments',
    description:
      'Modern living with panoramic views. Our high-rise projects are designed with a focus on luxury, convenience, and sustainability.',
  },
  {
    id: 2,
    title: 'Luxury Villas',
    description:
      'We specialize in creating exclusive, spacious luxury villas that provide unparalleled comfort, privacy, and elegance, tailored to your lifestyle.',
  },
  {
    id: 3,
    title: 'Commercial Spaces',
    description:
      'Our commercial spaces are designed to foster productivity and innovation, with a focus on functionality, sophistication, and the needs of modern businesses.',
  },
  {
    id: 4,
    title: 'Open Plots',
    description:
      'Prime locations for investment or personal development. Our open plots offer the freedom to create your ideal space.',
  },
];

export default function OurServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section}>

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

            {/* Divider line bottom (only for last item) */}
            {idx === services.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}