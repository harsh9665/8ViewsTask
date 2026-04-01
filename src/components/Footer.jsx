import Image from 'next/image';
import logo from '@/constants/logo.png';
import styles from '@/styles/Footer.module.css';

const navLinks = ['ABOUT US', 'PROJECTS', 'CONTACT US', 'SERVICES'];

export default function Footer() {
    return (
        <footer className={styles.footer}>

            {/* ── Main Footer Body ── */}
            <div className={styles.body + ' container'}>

                {/* Col 1 — Logo */}
                <div className={styles.logoCol}>
                    <Image
                        src={logo}
                        alt="E-INFRA"
                        width={160}
                        height={48}
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div className='d-flex flex-wrap gap-0 gap-sm-5'>
 {/* Col 2 — Nav Links */}
                <nav className={styles.navCol}>
                    {navLinks.map((link) => (
                        <a key={link}
                            href={link === 'CONTACT US' ? '#contact' : '#'}
                            className={styles.navLink}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                 {/* Col 3 — Address & Contact */}
                <div className={styles.contactCol}>
                    <p className={styles.address}>
                        Plot No:32, Sy No:135, Brindavan Colony Gandipet road, RR Dist,
                        Hyderabad- 500075 Telangana{' '}
                        <span className={styles.arrow}>↗</span>
                    </p>
                    <a href="mailto:mailusto@einfra.com" className={styles.contactLink}>
                        mailusto@einfra.com
                    </a>
                    <a href="tel:+91897466XXXX" className={styles.contactLink}>
                        +91-897466XXXX
                    </a>
                </div>
                 {/* Col 4 — Social */}
                <div className={styles.socialCol}>
                    <span className={styles.followText}>Follow us on</span>
                    <a href="#" className={styles.socialLink}>
                        Instagram <span className={styles.arrow}>↗</span>
                    </a>
                    <a href="#" className={styles.socialLink}>
                        Linkedin <span className={styles.arrow}>↗</span>
                    </a>
                </div>
                </div>
               

               

               

            </div>

            {/* ── Bottom Bar ── */}
            <div className={styles.bottomBar}>
                <span className={styles.copyright}>@E-INFRA 2026</span>
                <div className={styles.legalLinks}>
                    <a href="#">Legal.</a>
                    <a href="#">Privacy.</a>
                    <a href="#">Cookies.</a>
                    <a href="#">Settings</a>
                </div>
            </div>

        </footer>
    );
}