'use client';

import { useRef } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { ourProjects } from '@/data/siteData';
import { classNames } from '@/utils/classNames';
import styles from '@/styles/OurProjects.module.css';

const fallbackScrollStep = 720;

function ProjectArrowControl({ direction, onClick, label }) {
  const isPrevious = direction === 'previous';

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      className={styles.arrowControl}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={label}
    >
      <svg
        className={classNames(
          styles.arrowSvg,
          !isPrevious && styles.arrowSvgNext
        )}
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7.5 1L2.5 6L7.5 11"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </span>
  );
}

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

          <span className={styles.viewAllLabel}>VIEW ALL</span>
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
            <ProjectArrowControl
              direction="previous"
              onClick={() => scrollProjects(-1)}
              label="Previous project"
            />

            <ProjectArrowControl
              direction="next"
              onClick={() => scrollProjects(1)}
              label="Next project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
