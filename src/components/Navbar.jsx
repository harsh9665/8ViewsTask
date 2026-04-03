'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/constants/logo.png';
import { navbarLinks } from '@/data/siteData';
import styles from '@/styles/Navbar.module.css';
import { classNames } from '@/utils/classNames';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isInsideHero = currentScrollY < window.innerHeight;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      setScrolled(!isInsideHero);
      setVisible(isInsideHero || isScrollingUp);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClassName = classNames(
    styles.navbar,
    scrolled && styles.scrolled,
    visible ? styles.navVisible : styles.navHidden
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navClassName}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="E-INFRA"
            width={155}
            height={45}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <div className={styles.right}>
          <ul className={styles.navLinks}>
            {navbarLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={classNames(styles.bar, menuOpen && styles.barOpen1)}
            />
            <span
              className={classNames(styles.bar, menuOpen && styles.barOpen2)}
            />
            <span
              className={classNames(styles.bar, menuOpen && styles.barOpen3)}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
