'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArrowOutwardIcon from '@/components/ArrowOutwardIcon';
import { services } from '@/data/siteData';
import styles from '@/styles/OurServices.module.css';
import { classNames } from '@/utils/classNames';

const defaultServiceId = services[0]?.id ?? null;

export default function OurServices() {
  const [hoveredServiceId, setHoveredServiceId] = useState(defaultServiceId);

  const activateService = (serviceId) => setHoveredServiceId(serviceId);
  const resetService = () => setHoveredServiceId(defaultServiceId);

  return (
    <section id="our-services" className={styles.section}>
      <h2 className={styles.title}>OUR SERVICES</h2>

      <div className={styles.servicesWrapper}>
        <div className={styles.list}>
          {services.map((service) => {
            const isHovered = hoveredServiceId === service.id;
            const rowClassName = classNames(
              styles.row,
              isHovered && styles.rowHovered
            );

            return (
              <article
                key={service.id}
                className={rowClassName}
                tabIndex={0}
                onMouseEnter={() => activateService(service.id)}
                onMouseLeave={resetService}
                onClick={() => activateService(service.id)}
                onFocus={() => activateService(service.id)}
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
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 520px, 432px"
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
