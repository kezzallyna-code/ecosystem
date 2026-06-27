import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import styles from './page.module.css';

export default function APropos() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroSubtitle}>NOTRE HISTOIRE</div>
              <h1 className={styles.heroTitle}>Pionniers de l'intelligence environnementale.</h1>
              <p className={styles.heroDesc}>Fondée sur la vision d'un avenir où la technologie protège la nature, Ecosystem est née d'une collaboration entre experts de l'IA et écologues. Depuis 2021, nous développons des systèmes avancés pour surveiller et préserver les écosystèmes vitaux.</p>
              <Link href="/contact">
                <Button size="lg">Découvrir Ecosystem</Button>
              </Link>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImagePlaceholder}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <div className={styles.missionBlock}>
                <h3 className={styles.missionTitle}><span className={styles.missionIcon}>⦿</span> Notre Vision</h3>
                <p className={styles.missionDesc}>Un monde où chaque décision humaine qui impacte la nature est guidée par des données précises, garantissant un équilibre durable entre développement et conservation.</p>
              </div>
              <div className={styles.missionBlock}>
                <h3 className={styles.missionTitle}><span className={styles.missionIcon}>⦿</span> Notre Mission</h3>
                <p className={styles.missionDesc}>Démocratiser l'accès aux technologies de pointe pour permettre aux gouvernements, entreprises et ONG d'agir efficacement contre la dégradation environnementale.</p>
              </div>
            </div>
            <div className={styles.missionImageContainer}>
              <div className={styles.missionImagePlaceholder}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Vanguard */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techHeader}>
            <h2 className={styles.techTitle}>L'Avant-garde Technologique</h2>
            <p className={styles.techDesc}>Notre ADN est fondé sur l'innovation. Nous concevons nos propres solutions logicielles et matérielles.</p>
          </div>
          
          <div className={styles.techGrid}>
            <Card hoverable className={styles.techCardPrimary} padding="lg">
              <div className={styles.techIcon}>⚙</div>
              <h3>AI & Predictive Analytics</h3>
              <p>Modèles Deep Learning développés en interne pour l'analyse des données de terrain avec une précision exceptionnelle.</p>
            </Card>
            
            <div className={styles.techColumn}>
              <Card hoverable padding="lg" className={styles.techCardSecondary}>
                <div className={styles.techIcon}>📡</div>
                <h3>Hardware Satellite & LoRa</h3>
                <p>Nos capteurs sont conçus pour fonctionner dans les zones les plus reculées de la planète.</p>
              </Card>
              
              <Card hoverable padding="lg" className={styles.techCardSecondary}>
                <div className={styles.techIcon}>⚡</div>
                <h3>Zéro Consommation</h3>
                <p>Équipements auto-alimentés (Solaire) avec une durée de vie supérieure à 10 ans.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <h2 className={styles.timelineTitle}>Notre Trajectoire</h2>
          <p className={styles.timelineDesc}>De l'idée fondatrice au déploiement global.</p>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2021</div>
              <div className={styles.timelineContent}>
                <h3>Fondation & R&D</h3>
                <p>Lancement de la phase de R&D pour notre premier réseau de capteurs environnementaux connectés.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2022</div>
              <div className={styles.timelineContent}>
                <h3>Premier Prototype</h3>
                <p>Déploiement réussi du premier MVP dans la forêt de Baïnem, combinant AI et IoT LoRa.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2023</div>
              <div className={styles.timelineContent}>
                <h3>Déploiement en Algérie</h3>
                <p>Partenariat stratégique et couverture de 5 parcs nationaux. Obtention du label startup.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <h3>Expansion Globale</h3>
                <p>Ouverture de nouveaux marchés en Afrique du Nord et Moyen-Orient. Lancement API 2.0.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className={styles.sustainabilitySection}>
        <div className="container">
          <div className={styles.susGrid}>
            <div className={styles.susText}>
              <h2>Engagement & Durabilité</h2>
              <p className={styles.susDesc}>Nous croyons que la technologie ne doit pas polluer pour protéger. Notre modèle est bâti sur une empreinte nette positive dès l'année 1.</p>
              
              <div className={styles.susFeatures}>
                <div className={styles.susFeature}>
                  <div className={styles.susIcon}>♻</div>
                  <div>
                    <h4>Neutralité Carbone Opérationnelle</h4>
                    <p>Nos serveurs et opérations sont alimentés par des énergies renouvelables.</p>
                  </div>
                </div>
                <div className={styles.susFeature}>
                  <div className={styles.susIcon}>🔄</div>
                  <div>
                    <h4>Économie Circulaire</h4>
                    <p>100% de nos capteurs sont conçus pour être recyclés et reconditionnés.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.susStatsGrid}>
              <div className={styles.susStatBox}>
                <div className={styles.susStatValue}>92%</div>
                <div className={styles.susStatLabel}>RECYCLABILITÉ</div>
              </div>
              <div className={styles.susStatBox}>
                <div className={styles.susStatValue}>-40%</div>
                <div className={styles.susStatLabel}>CONSO ÉNERGIE</div>
              </div>
              <div className={styles.susStatBox}>
                <div className={styles.susStatValue}>15k</div>
                <div className={styles.susStatLabel}>ARBRES SAUVÉS</div>
              </div>
              <div className={styles.susStatBox}>
                <div className={styles.susStatValue}>24/7</div>
                <div className={styles.susStatLabel}>MONITORING ACTIF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Prêt à agir pour l'avenir ?</h2>
            <p className={styles.ctaDesc}>Rejoignez le mouvement de l'intelligence environnementale. Prenez de meilleures décisions et protégez notre planète.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Demander une démo</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" style={{ borderColor: 'white', color: 'white' }}>Nous contacter</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
