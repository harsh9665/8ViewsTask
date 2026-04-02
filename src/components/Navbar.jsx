'use client';

import Image from 'next/image';
import logo from '@/constants/logo.png';
import styles from '@/styles/Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // hero is 100vh

      if (currentScrollY < heroHeight) {
        // Inside hero — always show, transparent bg
        setVisible(true);
        setScrolled(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Past hero, scrolling UP — show with dark bg
        setVisible(true);
        setScrolled(true);
      } else {
        // Past hero, scrolling DOWN — hide
        setVisible(false);
        setScrolled(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      ${styles.navbar} 
      ${scrolled ? styles.scrolled : ''} 
      ${visible ? styles.navVisible : styles.navHidden}
    `}>

      <div className={styles.inner}>

        {/* LOGO — 155×45px, left: 250px */}
        <a href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="E-INFRA"
            width={155}
            height={45}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* RIGHT: links + hamburger */}
        <div className={styles.right}>

          {/* Nav links — Inter 500 20px, gap 36px */}
          <ul className={styles.navLinks}>
            <li><a href="#OurProjects">PROJECTS</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>

          {/* Hamburger — 40×40px */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`}></span>
          </button>

        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><a href="#OurProjects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
}