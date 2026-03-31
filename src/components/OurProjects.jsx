'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import styles from '@/styles/OurProjects.module.css';
import { ourProjects } from '@/data/siteData';

export default function OurProjects() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((i) => (i === 0 ? ourProjects.length - 1 : i - 1));
  const next = () =>
    setStartIndex((i) => (i === ourProjects.length - 1 ? 0 : i + 1));

  // Show 2 cards starting from startIndex, wrapping around
  const visibleProjects = [
    ourProjects[startIndex],
    ourProjects[(startIndex + 1) % ourProjects.length],
  ];

  return (
    <section id="OurProjects" className={styles.section}>
      <div className={styles.inner}>

        {/* ── Left — Text ── */}
        <div className={styles.leftCol}>
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.description}>
            we create refined, functional spaces here aesthetics meet purpose.
            Each project is a dialogue between form and feeling - crfted with
            precision, shaped by context, and inspired by timeless design
            principles.
          </p>
          <Button variant="outlineGold" size="md" href="#projects">
            VIEW ALL
          </Button>
        </div>

        {/* ── Right — Cards + Arrows ── */}
        <div className={styles.rightCol}>

          {/* Left arrow */}
          <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            ‹
          </button>

          {/* 2 visible cards */}
          <div className={styles.cardsStrip}>
            {visibleProjects.map((project, idx) => (
              <ProjectCard
                key={`${project.id}-${startIndex}`}
                {...project}
                isActive={idx === 0}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            ›
          </button>

        </div>
      </div>
    </section>
  );
}