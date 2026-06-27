import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7l9 5 9-5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.logoText}>
              <span className={styles.logoBold}>Ecosystem</span> Monitoring
            </span>
          </div>
          <p className={styles.description}>
            Expertise technologique au service de la biodiversité et de la transition écologique en Afrique du Nord.
          </p>
          <div className={styles.socials}>
            {/* Simple placeholder social icons */}
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><div className={styles.iconCircle}></div></a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter"><div className={styles.iconCircle}></div></a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><div className={styles.iconCircle}></div></a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Plateforme</h4>
          <Link href="/solutions" className={styles.link}>Surveillance IoT</Link>
          <Link href="/solutions" className={styles.link}>Analyse IA</Link>
          <Link href="/solutions" className={styles.link}>Alerte Précoce</Link>
          <Link href="/solutions" className={styles.link}>Intégration API</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Secteurs</h4>
          <Link href="/secteurs#agriculture" className={styles.link}>Agriculture</Link>
          <Link href="/secteurs#foresterie" className={styles.link}>Foresterie</Link>
          <Link href="/secteurs#industrie" className={styles.link}>Industrie</Link>
          <Link href="/secteurs#villes-vertes" className={styles.link}>Villes Vertes</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Contact</h4>
          <div className={styles.contactItem}>
            <span>✉</span> contact@ecovigil.dz
          </div>
          <div className={styles.contactItem}>
            <span>⚲</span> Alger, Algérie
          </div>
          <div className={styles.contactItem}>
            <span>☎</span> +213 (0) 23 45 67 89
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>© 2024 EcoVigil AI&T. Tous droits réservés.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/support">Support</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
