import React from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export default function AlertesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Centre d'Alertes Intelligent</h1>
          <p>Surveillance en temps réel des menaces environnementales critiques.</p>
        </div>
        <div className={styles.headerActions}>
          <Button variant="primary" icon="🔄">Actualiser le Flux</Button>
        </div>
      </div>

      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiCardHeader}>
            <span>Alertes Actives</span>
            <span className={styles.kpiIcon}>⚠️</span>
          </div>
          <div className={styles.kpiValue}>12</div>
          <div className={styles.kpiSub}>
            <span className={styles.kpiTrendUp}>↗ +3</span> depuis 1h
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiCardHeader}>
            <span>Niveau de Risque Global</span>
            <span className={styles.kpiIcon}>🛡️</span>
          </div>
          <div className={styles.kpiValue}>Élevé</div>
          <div className={styles.kpiBar}>
            <div className={styles.kpiBarFill} style={{ width: '75%', backgroundColor: 'var(--color-danger)' }} />
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiCardHeader}>
            <span>Temps de Réponse Moyen</span>
            <span className={styles.kpiIcon}>⏱️</span>
          </div>
          <div className={styles.kpiValue}>4m 12s</div>
          <div className={styles.kpiSub}>
            <span className={styles.kpiTrendDown}>↘ -15%</span> vs hier
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiCardHeader}>
            <span>Sites Impactés</span>
            <span className={styles.kpiIcon}>⊞</span>
          </div>
          <div className={styles.kpiValue}>07</div>
          <div className={styles.kpiSub}>
            Sur 24 sites actifs
          </div>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Flux des Alertes Actives</h2>
            <div className={styles.sectionActions}>
              <button className={styles.filterBtn}>Filtres</button>
              <button className={styles.filterBtn}>Exporter</button>
            </div>
          </div>

          <div className={styles.alertFeed}>
            {/* Critical Alert */}
            <div className={`${styles.alertCard} ${styles.critique}`}>
              <div className={styles.alertIconWrapper}>
                🔥
              </div>
              <div className={styles.alertContent}>
                <div className={styles.alertMeta}>
                  <span className={styles.alertLevel}>CRITIQUE</span>
                  <span className={styles.alertId}>• ID: 4892-A</span>
                </div>
                <h3 className={styles.alertTitle}>Risque d'Incendie Majeur détecté</h3>
                <div className={styles.alertLocation}>Réserve Naturelle de Camargue • Zone Sud-Est</div>
              </div>
              <div className={styles.alertAi}>
                <span className={styles.aiProb}>94% Probabilité AI</span>
                <span className={styles.aiTime}>Détecté il y a 8 min</span>
                <div className={styles.alertActions}>
                  <button className={`${styles.alertBtn} ${styles.primary}`}>Intervenir</button>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Détails</button>
                </div>
              </div>
            </div>

            {/* High Alert */}
            <div className={`${styles.alertCard} ${styles.eleve}`}>
              <div className={styles.alertIconWrapper}>
                💧
              </div>
              <div className={styles.alertContent}>
                <div className={styles.alertMeta}>
                  <span className={styles.alertLevel}>ÉLEVÉ</span>
                  <span className={styles.alertId}>• ID: 5012-B</span>
                </div>
                <h3 className={styles.alertTitle}>Inondation : Seuil de Crue dépassé</h3>
                <div className={styles.alertLocation}>Bassin Versant du Rhône • Station 04</div>
              </div>
              <div className={styles.alertAi}>
                <span className={styles.aiProb}>82% Probabilité AI</span>
                <span className={styles.aiTime}>Détecté il y a 22 min</span>
                <div className={styles.alertActions}>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Assigner</button>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Détails</button>
                </div>
              </div>
            </div>

            {/* Moderate Alert */}
            <div className={`${styles.alertCard} ${styles.modere}`}>
              <div className={styles.alertIconWrapper}>
                🍃
              </div>
              <div className={styles.alertContent}>
                <div className={styles.alertMeta}>
                  <span className={styles.alertLevel}>MODÉRÉ</span>
                  <span className={styles.alertId}>• ID: 5044-C</span>
                </div>
                <h3 className={styles.alertTitle}>Pollution Atmosphérique : NO2 élevé</h3>
                <div className={styles.alertLocation}>Zone Industrielle Fos • Secteur Nord</div>
              </div>
              <div className={styles.alertAi}>
                <span className={styles.aiProb}>65% Probabilité AI</span>
                <span className={styles.aiTime}>Détecté il y a 45 min</span>
                <div className={styles.alertActions}>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Ignorer</button>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Détails</button>
                </div>
              </div>
            </div>

            {/* Low Alert */}
            <div className={`${styles.alertCard} ${styles.faible}`}>
              <div className={styles.alertIconWrapper}>
                ☁️
              </div>
              <div className={styles.alertContent}>
                <div className={styles.alertMeta}>
                  <span className={styles.alertLevel}>FAIBLE</span>
                  <span className={styles.alertId}>• ID: 5055-D</span>
                </div>
                <h3 className={styles.alertTitle}>Sécheresse : Humidité des sols basse</h3>
                <div className={styles.alertLocation}>Parc des Cévennes • Capteur S12</div>
              </div>
              <div className={styles.alertAi}>
                <span className={styles.aiProb}>45% Probabilité AI</span>
                <span className={styles.aiTime}>Détecté il y a 1h 15m</span>
                <div className={styles.alertActions}>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Archiver</button>
                  <button className={`${styles.alertBtn} ${styles.secondary}`}>Détails</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>🗺️ Carte d'Impact Critique</h3>
              <span className={styles.liveBadge}>EN DIRECT</span>
            </div>
            <div className={styles.mapPreview}>
              <div className={styles.mapOverlay}>
                <div className={styles.mapTarget}></div>
              </div>
            </div>
            <div className={styles.mapInfo}>
              <h4>Camargue : Zone Sud-Est</h4>
              <p>Rayon d'impact estimé : 2.5 km</p>
            </div>
            <Button variant="outline" fullWidth>Ouvrir la carte interactive</Button>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Journal des Événements</h3>
            <div className={styles.timeline}>
              <div className={`${styles.timelineItem} ${styles.success}`}>
                <div className={styles.timelineIcon}>✓</div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Autorités Notifiées</span>
                  <span className={styles.timelineDesc}>SDIS 13 a reçu le rapport critique.</span>
                  <span className={styles.timelineTime}>il y a 4 min</span>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.neutral}`}>
                <div className={styles.timelineIcon}>💬</div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>SMS d'Alerte Envoyés</span>
                  <span className={styles.timelineDesc}>14 techniciens de terrain notifiés.</span>
                  <span className={styles.timelineTime}>il y a 8 min</span>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.danger}`}>
                <div className={styles.timelineIcon}>⚠️</div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Alerte Critique Générée</span>
                  <span className={styles.timelineDesc}>Incident #4892-A créé par le noyau AI.</span>
                  <span className={styles.timelineTime}>il y a 9 min</span>
                </div>
              </div>

              <div className={`${styles.timelineItem} ${styles.neutral}`}>
                <div className={styles.timelineIcon}>✉️</div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Rapport de Synthèse Email</span>
                  <span className={styles.timelineDesc}>Envoyé à la direction régionale.</span>
                  <span className={styles.timelineTime}>il y a 15 min</span>
                </div>
              </div>
            </div>
            <div className={styles.viewAllBtn}>Voir tout l'historique</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>État des Canaux</h3>
            <div className={styles.channelList}>
              <div className={styles.channelItem}>
                <div className={styles.channelName}>📡 Réseau IoT LoRaWAN</div>
                <div className={`${styles.channelStatus} ${styles.ok}`}>
                  100% <div className={`${styles.statusDot} ${styles.ok}`} />
                </div>
              </div>
              <div className={styles.channelItem}>
                <div className={styles.channelName}>✉️ Passerelle SMTP</div>
                <div className={`${styles.channelStatus} ${styles.ok}`}>
                  OK <div className={`${styles.statusDot} ${styles.ok}`} />
                </div>
              </div>
              <div className={styles.channelItem}>
                <div className={styles.channelName}>💬 Service SMS API</div>
                <div className={`${styles.channelStatus} ${styles.ok}`}>
                  OK <div className={`${styles.statusDot} ${styles.ok}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
