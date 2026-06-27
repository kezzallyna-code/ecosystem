import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo-new.png" 
            alt="Ecosystem Monitoring Logo" 
            width={64} 
            height={64} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
        
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>Accueil</Link>
          <Link href="/solutions" className={styles.link}>Solution</Link>
          <Link href="/secteurs" className={styles.link}>Secteurs</Link>
          <Link href="/tarification" className={styles.link}>Tarification</Link>
          <Link href="/a-propos" className={styles.link}>À propos</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/login" className={styles.loginLink}>Connexion</Link>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/contact">
            <Button size="sm">Demander une démo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
