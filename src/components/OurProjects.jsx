'use client';

import { useRef } from 'react';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import { ourProjects } from '@/data/siteData';
import styles from '@/styles/OurProjects.module.css';

const fallbackScrollStep = 720;

export default function OurProjects() {
  const sliderRef = useRef(null);

  const getScrollStep = () => {
    const slider = sliderRef.current;
    if (!slider) return fallbackScrollStep;

    const card = slider.querySelector('[data-project-card="true"]');
    const track = slider.firstElementChild;
    const trackStyle = track ? window.getComputedStyle(track) : null;
    const gap = Number.parseFloat(
      trackStyle?.columnGap || trackStyle?.gap || '0'
    );

    return card ? card.getBoundingClientRect().width + gap : fallbackScrollStep;
  };

  const scrollProjects = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction * getScrollStep(),
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
              We create refined, functional spaces where aesthetics meet
              purpose. Each project is a dialogue between form and feeling -
              crafted with precision, shaped by context, and inspired by
              timeless design principles.
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

          <div
            className={styles.arrowRow}
            aria-label="Project carousel controls"
          >
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
