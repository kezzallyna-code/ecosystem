'use client';

import React from 'react';
import { Card } from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';
import { Badge } from '@/components/Badge/Badge';
import styles from './page.module.css';

export default function DashboardOverview() {
  const stats = [
    {
      label: "Capteurs Actifs",
      value: "1,284",
      icon: "((•))",
      status: "active",
      color: "var(--color-primary)"
    },
    {
      label: "Alertes Critiques",
      value: "03",
      icon: "⚠",
      status: "error",
      color: "var(--color-error)"
    },
    {
      label: "Connectivité",
      value: "99.8%",
      subtext: "LoRaWAN",
      icon: "📶",
      status: "neutral",
      color: "var(--color-text-main)"
    },
    {
      label: "Efficience IA",
      value: "+15%",
      subtext: "↗",
      icon: "⚡",
      status: "success",
      color: "var(--color-primary)"
    }
  ];

  const recentActivity = [
    { event: "Variation Nitrate Détectée", source: "Node_Alpha_04", action: "Calibration automatique effectuée", status: "SUCCÈS", time: "Il y a 5 min", icon: "⚗" },
    { event: "Batterie Faible", source: "Drone_Scan_02", action: "Retour station de charge requis", status: "ALERTE", time: "Il y a 14 min", icon: "🔋" },
    { event: "Mise à jour Firmware", source: "Réseau Local", action: "Optimisation LoRaWAN v2.4", status: "TERMINÉ", time: "Il y a 1h 22m", icon: "☁" },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.pageTitle}>Aperçu Global</h1>
          <p className={styles.pageSubtitle}>
            Surveillance en temps réel du site : <span className={styles.highlightSite}>Réserve Naturelle d'Auvergne</span>
          </p>
        </div>
        <div className={styles.headerActions}>
          <span className={styles.lastUpdate}>⏱ Dernières 24h</span>
          <Button icon="📥">Exporter les Données</Button>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <Card key={idx} className={styles.statCard}>
                <div className={styles.statIcon} style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className={styles.statInfo}>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statValueWrap}>
                    <span className={styles.statValue}>{stat.value}</span>
                    {stat.status === 'active' && <span className={styles.statusDotActive}></span>}
                    {stat.subtext && <span className={styles.statSubtext}>{stat.subtext}</span>}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className={styles.mapCard} padding="none">
            <div className={styles.mapHeader}>
              <div>
                <h3 className={styles.mapTitle}>Carte Interactive GIS</h3>
                <p className={styles.mapSubtitle}>Vue Topographique & Humidité du Sol</p>
              </div>
              <div className={styles.mapToggles}>
                <button className={`${styles.mapToggleBtn} ${styles.activeToggle}`}>Satellite</button>
                <button className={styles.mapToggleBtn}>Relief</button>
                <button className={styles.mapToggleBtn}>Heatmap</button>
              </div>
            </div>
            <div className={styles.mapArea}>
              {/* Simulated Map Visuals */}
              <div className={styles.mapNodeLabel}>
                <span className={styles.statusDotActive}></span>
                Actif: Node_72A
              </div>
              <div className={styles.mapControls}>
                <button className={styles.mapCtrlBtn}>+</button>
                <button className={styles.mapCtrlBtn}>-</button>
                <button className={styles.mapCtrlBtn}>◎</button>
              </div>
            </div>
          </Card>

          <Card className={styles.chartCard} padding="lg">
            <div className={styles.chartHeader}>
              <div>
                <h3 className={styles.chartTitle}>Analyses Temps Réel</h3>
                <p className={styles.chartSubtitle}>Variation Température vs Humidité (24h)</p>
              </div>
              <div className={styles.chartLegend}>
                <span className={styles.legendItem}><span className={styles.dotTemp}></span> Température (°C)</span>
                <span className={styles.legendItem}><span className={styles.dotHum}></span> Humidité (%)</span>
              </div>
            </div>
            <div className={styles.chartPlaceholder}>
              {/* CSS Art representation of a bar chart */}
              <div className={styles.chartBars}>
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className={styles.barGroup}>
                    <div className={styles.barHum} style={{ height: `${20 + Math.random() * 40}%` }}></div>
                    <div className={styles.barTemp} style={{ height: `${30 + Math.random() * 50}%` }}></div>
                  </div>
                ))}
              </div>
              <div className={styles.chartXAxis}>
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>23:59</span>
              </div>
            </div>
          </Card>

          <Card className={styles.activityCard} padding="none">
            <div className={styles.activityHeader}>
              <h3 className={styles.activityTitle}>Activité Récente du Système</h3>
              <a href="/historique" className={styles.viewAllLink}>Voir tout l'historique</a>
            </div>
            <table className={styles.activityTable}>
              <thead>
                <tr>
                  <th>Événement</th>
                  <th>Source</th>
                  <th>Action IA</th>
                  <th>Statut</th>
                  <th>Horodatage</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((act, idx) => (
                  <tr key={idx}>
                    <td className={styles.eventCell}>
                      <span className={styles.eventIcon} style={{ color: act.status === 'ALERTE' ? 'var(--color-error)' : 'var(--color-primary)' }}>
                        {act.icon}
                      </span>
                      {act.event}
                    </td>
                    <td>{act.source}</td>
                    <td>{act.action}</td>
                    <td>
                      <Badge variant={act.status === 'SUCCÈS' ? 'success' : act.status === 'ALERTE' ? 'error' : 'neutral'}>
                        {act.status}
                      </Badge>
                    </td>
                    <td className={styles.timeCell}>{act.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        <div className={styles.rightColumn}>
          <Card className={styles.aiPanel} padding="lg">
            <h3 className={styles.aiTitle}>✨ Prévisions IA</h3>
            
            <div className={styles.aiAlertBox}>
              <div className={styles.aiAlertLabel}>ALERTE STRESS HYDRIQUE</div>
              <p className={styles.aiAlertText}>
                Le modèle prédictif anticipe une baisse critique de l'humidité du sol dans le secteur Nord-Est d'ici <strong>12 heures</strong>.
              </p>
              <div className={styles.confidenceBar}>
                <div className={styles.confidenceFill} style={{ width: '85%' }}></div>
                <span className={styles.confidenceText}>Confiance 85%</span>
              </div>
            </div>

            <div className={styles.weatherWidget}>
              <div className={styles.weatherItem}>
                <span className={styles.weatherIcon}>🌧</span>
                <div>
                  <div className={styles.weatherLabel}>Précipitations</div>
                  <div className={styles.weatherDesc}>Probabilité d'averses (15%) vers 04:00 AM</div>
                </div>
              </div>
              <div className={styles.weatherItem}>
                <span className={styles.weatherIcon}>🌡</span>
                <div>
                  <div className={styles.weatherLabel}>Température</div>
                  <div className={styles.weatherDesc}>Augmentation de +4°C prévue pour demain</div>
                </div>
              </div>
            </div>

            <Button fullWidth style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
              Lancer le Protocole d'Irrigation
            </Button>
          </Card>

          <Card className={styles.kpiCircleCard} padding="lg">
            <div className={styles.kpiCircleTitle}>Qualité du Sol</div>
            <div className={styles.circularGauge}>
              <div className={styles.gaugeCenter}>
                <span className={styles.gaugeValue}>82%</span>
                <span className={styles.gaugeStatus}>OPTIMAL</span>
              </div>
              <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
                <circle cx="50" cy="50" r="40" className={styles.gaugeBg} />
                <circle cx="50" cy="50" r="40" className={styles.gaugeProg} style={{ strokeDasharray: '251.2', strokeDashoffset: '45.2' }} />
              </svg>
            </div>
          </Card>

          <Card className={styles.kpiCircleCard} padding="lg">
            <div className={styles.kpiCircleTitle}>État de l'Eau</div>
            <div className={styles.circularGauge}>
              <div className={styles.gaugeCenter}>
                <span className={styles.gaugeValue}>64%</span>
                <span className={styles.gaugeStatus}>STABLE</span>
              </div>
              <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
                <circle cx="50" cy="50" r="40" className={styles.gaugeBg} />
                <circle cx="50" cy="50" r="40" className={styles.gaugeProg} style={{ strokeDasharray: '251.2', strokeDashoffset: '90.4' }} />
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
