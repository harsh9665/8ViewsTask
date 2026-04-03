import Image from 'next/image';
import ArrowOutwardIcon from '@/components/ArrowOutwardIcon';
import logo from '@/constants/logo.png';
import { footerNavLinks, footerSocialLinks } from '@/data/siteData';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <Image
          src={logo}
          alt="E-INFRA"
          width={191}
          height={50}
          className={styles.logo}
        />

        <div className={styles.columns}>
          <nav className={styles.navCol} aria-label="Footer navigation">
            {footerNavLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.contactCol}>
            <a
              href="https://maps.google.com/?q=Plot+No+32+Sy+No+135+Brindavan+Colony+Gandipet+Road+Hyderabad"
              className={styles.address}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.addressText}>
                Plot No:32, Sy No:135, Brindavan Colony Gandipet road, RR Dist.
                Hyderabad- 500075 Telangana
                <ArrowOutwardIcon className={styles.arrowIcon} />
              </span>
            </a>

            <div className={styles.contactLinks}>
              <a href="mailto:mailusto@einfra.com" className={styles.contactLink}>
                mailusto@einfra.com
              </a>
              <a href="tel:+91897466XXXX" className={styles.contactLink}>
                +91-897466XXXX
              </a>
            </div>
          </div>

          <div className={styles.socialCol}>
            <p className={styles.followText}>Follow us on</p>

            {footerSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowOutwardIcon className={styles.arrowIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>@E-INFRA, 2026</p>
        <p className={styles.legalText}>Legal, Privacy, Cookies, Settings</p>
      </div>
    </footer>
  );
}
