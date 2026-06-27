import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Maîtrisez l'intelligence environnementale à l'échelle planétaire.</h1>
              <p className={styles.heroSubtitle}>Des solutions connectées et durables pour des défis globaux. Rejoignez-nous pour protéger la biodiversité et optimiser vos ressources avec l'IA.</p>
              <div className={styles.heroButtons}>
                <Link href="/solutions">
                  <Button size="lg">Découvrir nos solutions</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary">Nous contacter</Button>
                </Link>
              </div>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <div className={styles.statValue}>1 200+</div>
                <div className={styles.statLabel}>Sites surveillés</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>40ms</div>
                <div className={styles.statLabel}>Temps de latence</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>99%</div>
                <div className={styles.statLabel}>Précision Analytique</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>-30%</div>
                <div className={styles.statLabel}>Empreinte Carbone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className={styles.dashboardPreview}>
        <div className="container">
          <div className={styles.dashboardImage}>
            {/* Placeholder for complex dashboard screenshot */}
            <div className={styles.dashboardPlaceholder}></div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className={styles.hardwareSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <Badge variant="primary" className={styles.badge}>Catalogue Hardware</Badge>
              <h2 className={styles.sectionTitle}>Équipements de pointe, durables et fiables.</h2>
              <p className={styles.sectionSubtitle}>Des capteurs robustes pour une collecte de données en temps réel dans les environnements les plus difficiles.</p>
            </div>
            <Link href="/solutions">
              <Button variant="outline">Voir tout le catalogue</Button>
            </Link>
          </div>
          
          <div className={styles.hardwareGrid}>
            {[
              { title: "Analyseur Air Qualité", spec1: "PM2.5, PM10, CO2", spec2: "Autonomie 5 ans", status: "En stock", tag: "Nouveau" },
              { title: "Station Météo IoT", spec1: "Vent, Pluie, T°, Humidité", spec2: "Solaire intégré", status: "Sur commande", tag: "Populaire" },
              { title: "Boîtier Connecté", spec1: "Edge AI computing", spec2: "IP68 Résistant", status: "En stock", tag: "Best-seller" },
              { title: "Capteur de Sol", spec1: "Humidité, NPK, pH", spec2: "Sonde 50cm", status: "En stock", tag: "Nouveau" },
              { title: "Point Relais LoRa", spec1: "Portée 15km", spec2: "Réseau maillé", status: "En stock", tag: "Populaire" },
              { title: "Caméra Vision IA", spec1: "Reconnaissance d'espèces", spec2: "Infrarouge", status: "Rupture", tag: "Bientôt" }
            ].map((item, index) => (
              <Card key={index} hoverable className={styles.hardwareCard} padding="none">
                <div className={styles.productImageWrapper}>
                  <div className={styles.productImage}></div>
                  <Badge variant="primary" className={styles.productBadge}>{item.tag}</Badge>
                </div>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>{item.title}</h3>
                  <ul className={styles.productSpecs}>
                    <li>✓ {item.spec1}</li>
                    <li>✓ {item.spec2}</li>
                  </ul>
                  <div className={styles.productFooter}>
                    <span className={styles.productStatus}>{item.status}</span>
                    <Button size="sm" variant="outline">Détails</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.videoHeader}>
            <h2 className={styles.sectionTitle}>Découvrez l'expérience complète</h2>
            <p className={styles.sectionSubtitle}>De l'installation des capteurs à l'analyse sur tableau de bord, une solution bout en bout.</p>
          </div>
          <div className={styles.videoPlayer}>
            <div className={styles.playButton}>▶</div>
          </div>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⚡</div>
              <div>Scalabilité</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔒</div>
              <div>Sécurité absolue</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📞</div>
              <div>Support 24/7</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔄</div>
              <div>Intégration API</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className={styles.coverageSection}>
        <div className="container">
          <div className={styles.coverageGrid}>
            <div className={styles.coverageText}>
              <Badge variant="success">Réseau National</Badge>
              <h2 className={styles.coverageTitle}>Couverture totale du territoire Algérien.</h2>
              <p className={styles.coverageDesc}>Où que soient vos sites d'exploitation, notre réseau LoRaWAN étendu garantit une connectivité sans faille.</p>
              <div className={styles.coverageStats}>
                <div>
                  <div className={styles.cStatValue}>98%</div>
                  <div className={styles.cStatLabel}>Couverture Utile</div>
                </div>
                <div>
                  <div className={styles.cStatValue}>1 200+</div>
                  <div className={styles.cStatLabel}>Antennes Déployées</div>
                </div>
              </div>
            </div>
            <div className={styles.coverageMap}>
              <div className={styles.mapPlaceholder}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Prêt à agir pour l'avenir ?</h2>
            <p className={styles.ctaDesc}>Rejoignez le mouvement de l'intelligence environnementale. Prenez de meilleures décisions, réduisez vos coûts et protégez la nature.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Réserver ma démonstration gratuite</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
