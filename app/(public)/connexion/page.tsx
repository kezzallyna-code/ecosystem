'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { Input, Checkbox } from '@/components/FormElements/FormElements';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Connexion() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess('Connexion réussie. Redirection en cours...');
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.splitLayout}>
        <div className={styles.heroSide}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className={styles.logo}>
              <span className={styles.logoLight}>Ecosystem</span>{' '}
              <span className={styles.logoDark}>Monitoring</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Maîtrisez votre impact environnemental.
            </h1>
            
            <p className={styles.heroSubtitle}>
              Accédez à votre tableau de bord haute précision et gérez vos réseaux de capteurs intelligents en temps réel.
            </p>

            <div className={styles.heroBottom}>
              <div className={styles.decorativeCircles}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
              </div>
              <p className={styles.heroTrust}>
                Rejoignez plus de 500 entreprises engagées dans la durabilité technologique.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formSide}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Bon retour parmi nous</h2>
              <p className={styles.formSubtitle}>Veuillez entrer vos informations de connexion.</p>
            </div>

            <div className={styles.ssoButtons}>
              <button type="button" className={styles.ssoBtn}>
                <span className={styles.ssoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </span>
                Google
              </button>
              <button type="button" className={styles.ssoBtn}>
                <span className={styles.ssoIcon}>
                  <svg width="18" height="18" viewBox="0 0 21 21">
                    <path fill="#f25022" d="M0 0h10v10H0z"/>
                    <path fill="#7fba00" d="M11 0h10v10H11z"/>
                    <path fill="#00a4ef" d="M0 11h10v10H0z"/>
                    <path fill="#ffb900" d="M11 11h10v10H11z"/>
                  </svg>
                </span>
                Microsoft
              </button>
            </div>

            <div className={styles.divider}>
              <span>ou via email</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.errorMessage}>{error}</div>}
              {success && <div className={styles.successMessage}>{success}</div>}
              
              <div className={styles.inputGroup}>
                <Input 
                  id="email" 
                  type="email" 
                  label="Email" 
                  placeholder="nom@entreprise.com" 
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 4l10 8 10-8" />
                    </svg>
                  }
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.passwordHeader}>
                  <label htmlFor="password" className={styles.label}>Mot de passe</label>
                  <Link href="/mot-de-passe-oublie" className={styles.forgotLink}>
                    Oublié ?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  }
                  required 
                />
              </div>

              <div className={styles.optionsRow}>
                <Checkbox id="remember" label="Se souvenir de moi" />
              </div>

              <Button 
                type="submit" 
                fullWidth 
                size="lg" 
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? 'Connexion en cours...' : 'Se connecter'}
              </Button>
            </form>

            <div className={styles.footer}>
              Nouveau sur Ecosystem ? <Link href="/contact" className={styles.signupLink}>Créer un compte</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
