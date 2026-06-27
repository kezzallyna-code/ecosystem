import React from 'react';
import styles from './page.module.css';

export default function CentreIAPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Centre d'Intelligence Artificielle</h1>
          <p>Surveillance prédictive de pointe utilisant le réseau neuronal TerraEngine pour anticiper les risques environnementaux et optimiser vos opérations.</p>
        </div>
        <div className={styles.modelBadge}>
          MODÈLE IA: V4.2 STABLE
        </div>
      </div>

      <div className={styles.gaugesGrid}>
        <div className={styles.gaugeCard}>
          <div className={styles.gaugeHeader}>
            🔥 RISQUE INCENDIE
          </div>
          <div className={`${styles.gaugeVisual} ${styles.critique}`}>
            <div className={styles.gaugeArchBg}></div>
            <div className={styles.gaugeArchFill}></div>
          </div>
          <div className={styles.gaugeValue}>82%</div>
          <div className={styles.gaugeStatus}>ALERTE CRITIQUE</div>
          <div className={styles.gaugeMeta}>Zone Sud-Est - 48h</div>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.gaugeHeader}>
            💧 SÉCHERESSE
          </div>
          <div className={`${styles.gaugeVisual} ${styles.warning}`}>
            <div className={styles.gaugeArchBg}></div>
            <div className={styles.gaugeArchFill}></div>
          </div>
          <div className={styles.gaugeValue}>55%</div>
          <div className={styles.gaugeStatus}>SURVEILLANCE</div>
          <div className={styles.gaugeMeta}>Plateau Nord - 15j</div>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.gaugeHeader}>
            🌊 INONDATION
          </div>
          <div className={`${styles.gaugeVisual} ${styles.safe}`}>
            <div className={styles.gaugeArchBg}></div>
            <div className={styles.gaugeArchFill}></div>
          </div>
          <div className={styles.gaugeValue}>12%</div>
          <div className={styles.gaugeStatus}>RISQUE FAIBLE</div>
          <div className={styles.gaugeMeta}>Stabilité régionale</div>
        </div>

        <div className={styles.gaugeCard}>
          <div className={styles.gaugeHeader}>
            🏭 POLLUTION
          </div>
          <div className={`${styles.gaugeVisual} ${styles.modere}`}>
            <div className={styles.gaugeArchBg}></div>
            <div className={styles.gaugeArchFill}></div>
          </div>
          <div className={styles.gaugeValue}>38%</div>
          <div className={styles.gaugeStatus}>MODÉRÉ</div>
          <div className={styles.gaugeMeta}>Bassin Industriel</div>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.sectionHeader}>
            <span style={{ fontSize: '1.2rem' }}>!</span> Analyse des Risques Détectés
          </div>

          <div className={styles.riskCards}>
            {/* Risk Card 1 */}
            <div className={styles.riskCard}>
              <div 
                className={styles.riskImage}
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
              >
                <div className={`${styles.riskBadge} ${styles.critique}`}>CRITIQUE</div>
              </div>
              <div className={styles.riskContent}>
                <div className={styles.riskHeader}>
                  <div>
                    <h3 className={styles.riskTitle}>Incendie: Zone Sud-Est</h3>
                    <span className={styles.riskEst}>Estimation: 12 Juillet - 15:00</span>
                  </div>
                  <span className={styles.linkIcon}>↗</span>
                </div>
                
                <div className={styles.riskStats}>
                  <div className={styles.riskStat}>
                    <span className={styles.statLabel}>Humidité Sol</span>
                    <span className={`${styles.statValue} ${styles.danger}`}>8.4% (Seuil crit.)</span>
                  </div>
                  <div className={styles.riskStat}>
                    <span className={styles.statLabel}>Vitesse Vent</span>
                    <span className={`${styles.statValue} ${styles.danger}`}>42 km/h</span>
                  </div>
                </div>

                <div className={styles.riskTags}>
                  <span className={`${styles.tag} ${styles.primary}`}>Déploiement préventif requis</span>
                  <span className={`${styles.tag} ${styles.secondary}`}>Modèle: Fire-Net v2</span>
                </div>
              </div>
            </div>

            {/* Risk Card 2 */}
            <div className={styles.riskCard}>
              <div 
                className={styles.riskImage}
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563203494-d2e82512808c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}
              >
                <div className={`${styles.riskBadge} ${styles.alerte}`}>ALERTE</div>
              </div>
              <div className={styles.riskContent}>
                <div className={styles.riskHeader}>
                  <div>
                    <h3 className={styles.riskTitle}>Sécheresse: Plateau Nord</h3>
                    <span className={styles.riskEst}>Estimation: Prochains 10 jours</span>
                  </div>
                  <span className={styles.linkIcon}>↗</span>
                </div>
                
                <div className={styles.riskStats}>
                  <div className={styles.riskStat}>
                    <span className={styles.statLabel}>Pluviométrie</span>
                    <span className={`${styles.statValue} ${styles.danger}`}>-65% vs normale</span>
                  </div>
                  <div className={styles.riskStat}>
                    <span className={styles.statLabel}>Stress Hydrique</span>
                    <span className={`${styles.statValue} ${styles.danger}`}>Haut</span>
                  </div>
                </div>

                <div className={styles.riskTags}>
                  <span className={`${styles.tag} ${styles.success}`}>Optimisation irrigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.sectionHeader}>
            <span style={{ fontSize: '1.2rem' }}>✨</span> Recommandations IA
          </div>

          <div className={styles.recoCards}>
            {/* Reco Card 1 */}
            <div className={`${styles.recoCard} ${styles.primary}`}>
              <div className={styles.recoHeader}>
                <div className={styles.recoIcon}>💧</div>
                <h3 className={styles.recoTitle}>Irrigation Recommandée</h3>
              </div>
              <p className={styles.recoText}>
                Les capteurs d'humidité indiquent un déficit critique dans le secteur G-14. Une session de 45min est préconisée cette nuit.
              </p>
              <button className={styles.recoBtn}>Activer maintenant ▶</button>
            </div>

            {/* Reco Card 2 */}
            <div className={`${styles.recoCard} ${styles.secondary}`}>
              <div className={styles.recoHeader}>
                <div className={styles.recoIcon}>🔧</div>
                <div>
                  <h3 className={styles.recoTitle}>Maintenance préventive</h3>
                  <span className={styles.recoSubtitle}>Capteur de CO2 #842</span>
                </div>
              </div>
              <p className={styles.recoText}>
                L'IA détecte une dérive de signal inhabituelle. Une recalibration est nécessaire pour éviter de fausses alertes.
              </p>
              <span className={styles.recoLink}>Planifier l'intervention ›</span>
            </div>

            {/* Reco Card 3 */}
            <div className={`${styles.recoCard} ${styles.danger}`}>
              <div className={styles.recoHeader}>
                <div className={styles.recoIcon}>🛡️</div>
                <div>
                  <h3 className={styles.recoTitle}>Mesures pare-feu</h3>
                  <span className={styles.recoSubtitle}>Périmètre Forêt Ouest</span>
                </div>
              </div>
              <p className={styles.recoText}>
                Activation conseillée du système d'aspersion périmétral en raison des vents tournants prévus à 18:00.
              </p>
              <span className={styles.recoLink}>Consulter le protocole ›</span>
            </div>

            {/* Reco Card 4 */}
            <div className={`${styles.recoCard} ${styles.disabled}`}>
              <h3 className={styles.recoTitle}>SIMULATION ATMOSPHÉRIQUE</h3>
              <p className={styles.recoText}>
                Générer une projection 3D du flux thermique
              </p>
              <button className={styles.disabledBtn}>Lancer Simulation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
