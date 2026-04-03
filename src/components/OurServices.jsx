'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArrowOutwardIcon from '@/components/ArrowOutwardIcon';
import { services } from '@/data/siteData';
import styles from '@/styles/OurServices.module.css';

export default function OurServices() {
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  return (
    <section id="our-services" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>OUR SERVICES</h2>

        <div className={styles.list}>
          {services.map((service) => {
            const isHovered = hoveredServiceId === service.id;

            return (
              <article
                key={service.id}
                className={`${styles.row} ${isHovered ? styles.rowHovered : ''}`}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
              >
                <div className={styles.rowContent}>
                  <div className={styles.textBlock}>
                    <h3 className={styles.serviceName}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.description}</p>
                  </div>

                  <div className={styles.imageBlock} aria-hidden={!isHovered}>
                    <Image
                      src="/images/OurServicesGenericImage.png"
                      alt=""
                      fill
                      className={styles.serviceImage}
                      sizes="(max-width: 1279px) 0px, 400px"
                    />
                  </div>

                  <span className={styles.arrowBlock} aria-hidden="true">
                    <ArrowOutwardIcon className={styles.arrowIcon} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
