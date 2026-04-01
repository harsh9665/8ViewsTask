'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/constants/logo.png';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container + ' container'}>

        {/* Logo */}
        <a href="/" className={styles.logoWrapper}>
          <Image
            src={logo}
            alt="E-INFRA"
            width={120}
            height={36}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>
<div className='d-flex'>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          <li><a href="#OurProjects">PROJECTS</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>

        {/* Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}