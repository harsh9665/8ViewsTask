'use client';

import { useRef } from 'react';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import { ourProjects } from '@/data/siteData';
import styles from '@/styles/OurProjects.module.css';

export default function OurProjects() {
  const sliderRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector('[data-project-card="true"]');
    const styles = window.getComputedStyle(sliderRef.current.firstElementChild);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const cardStep = card ? card.getBoundingClientRect().width + gap : 720;

    sliderRef.current.scrollBy({
      left: direction * cardStep,
      behavior: 'smooth',
    });
  };

  return (
    <section id="our-projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <div className={styles.textGroup}>
            <h2 className={styles.title}>Our Projects</h2>
            <p className={styles.description}>
              we create refined, functionalspaces here aesthetics meet purpose.
              Each project is a dialogue between form and feeling - crfted with
              precision, shaped by context, and inspired by timeless design
              principles.
            </p>
          </div>

          <Button variant="outlineGold" size="md" href="#our-projects">
            VIEW ALL
          </Button>
        </div>

        <div className={styles.rightCol}>
          <div ref={sliderRef} className={styles.sliderViewport}>
            <div className={styles.cardsStrip}>
              {ourProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>

          <div className={styles.arrowRow} aria-label="Project carousel controls">
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scrollProjects(-1)}
              aria-label="Previous project"
            >
              <span className={`${styles.arrowIcon} ${styles.arrowIconLeft}`} />
            </button>

            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scrollProjects(1)}
              aria-label="Next project"
            >
              <span className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
