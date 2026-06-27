'use client';

import React from 'react';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import styles from './page.module.css';

export default function Rapports() {
  const stats = [
    { label: "RAPPORTS CE MOIS-CI", value: "24", icon: "📄", iconBg: "#dcfce7", iconColor: "#16a34a" },
    { label: "RAPPORTS PLANIFIÉS", value: "6", icon: "📅", iconBg: "#f1f5f9", iconColor: "#64748b" },
    { label: "DERNIER RAPPORT", value: "Aujourd'hui à 09:30", icon: "🕐", iconBg: "#e0f2fe", iconColor: "#0284c7" },
    { label: "TAUX D'ENVOI", value: "92%", icon: "↗", iconBg: "#dcfce7", iconColor: "#16a34a" }
  ];

  const models = [
    { id: 1, title: "Environnemental", desc: "Analyse complète des empreintes carbone, biodiversité et impacts écologiques locaux.", icon: "🍃", iconColor: "#10b981", badge: "PREMIUM" },
    { id: 2, title: "Capteurs", desc: "Données brutes et agrégées de télémétrie. Humidité, température et pression atmosphérique.", icon: "((•))", iconColor: "#10b981" },
    { id: 3, title: "Alertes", desc: "Journal des incidents critiques et temps de réponse moyen par site surveillé.", icon: "⚠", iconColor: "#ef4444" },
    { id: 4, title: "Consommation d'eau", desc: "Suivi précis des volumes d'irrigation et détection de fuites potentielles en temps réel.", icon: "💧", iconColor: "#3b82f6" },
    { id: 5, title: "Maintenance", desc: "État du parc matériel, cycles de remplacement et journal des interventions techniques.", icon: "🔧", iconColor: "#f59e0b" },
    { id: 6, title: "IA et prédictions", desc: "Modèles prédictifs climatiques à 30 jours basés sur l'apprentissage automatique profond.", icon: "🧠", iconColor: "#10b981", variant: "dark" }
  ];

  const recentReports = [
    { name: "Impact_Mensuel_Q1", site: "Mitidja", period: "Jan 2024", formats: ["PDF", "XLS"], status: "Terminé", statusColor: "#10b981" },
    { name: "Analyse_Sols_02", site: "Chréa", period: "01/02 - 14/02", formats: ["PDF"], status: "Terminé", statusColor: "#10b981" },
    { name: "Irrigation_Hebdo_W7", site: "Réghaïa", period: "Dernière semaine", formats: ["PDF"], status: "Généré", statusColor: "#f59e0b" }
  ];

  const autoDispatches = [
    { title: "Hebdo - Environnement", subtitle: "Chaque Lundi, 08h00", icon: "📅", active: true },
    { title: "Mensuel - Consommation", subtitle: "Le 1er du mois", icon: "📅", active: true },
    { title: "Quotidien - Alertes", subtitle: "Désactivé temporairement", icon: "⚠", active: false }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.pageTitle}>Rapports</h1>
          <p className={styles.pageSubtitle}>Générez, consultez et exportez vos rapports environnementaux</p>
        </div>
        <div className={styles.headerActions}>
          <Button style={{ backgroundColor: '#047857', color: 'white' }}>+ Créer un rapport</Button>
          <Button variant="outline">⌚ Planifier</Button>
          <Button variant="outline">📥 Exporter l'historique</Button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <Card key={idx} padding="md" className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              <div 
                className={styles.statIcon} 
                style={{ backgroundColor: stat.iconBg, color: stat.iconColor }}
              >
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Modèles de rapports</h2>
        <a href="#" className={styles.seeAllLink}>Voir tout</a>
      </div>

      <div className={styles.modelsGrid}>
        {models.map(model => (
          <Card 
            key={model.id} 
            padding="lg" 
            className={`${styles.modelCard} ${model.variant === 'dark' ? styles.modelCardDark : ''}`}
          >
            <div className={styles.modelHeader}>
              <div 
                className={styles.modelIcon}
                style={{ color: model.iconColor, backgroundColor: model.variant === 'dark' ? 'rgba(255,255,255,0.1)' : '#f8fafc' }}
              >
                {model.icon}
              </div>
              {model.badge && (
                <Badge variant="success" className={styles.modelBadge}>{model.badge}</Badge>
              )}
            </div>
            <h3 className={styles.modelTitle}>{model.title}</h3>
            <p className={styles.modelDesc}>{model.desc}</p>
            <Button 
              variant="outline" 
              fullWidth 
              className={model.variant === 'dark' ? styles.btnDark : styles.btnLight}
            >
              Créer →
            </Button>
          </Card>
        ))}
      </div>

      <div className={styles.bottomLayout}>
        <div className={styles.recentReportsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Rapports récents</h2>
            <a href="#" className={styles.seeAllLink}>Voir tout</a>
          </div>
          <Card padding="none" className={styles.tableCard}>
            <table className={styles.reportsTable}>
              <thead>
                <tr>
                  <th>NOM</th>
                  <th>SITE</th>
                  <th>PÉRIODE</th>
                  <th>FORMAT</th>
                  <th>STATUT</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report, idx) => (
                  <tr key={idx}>
                    <td className={styles.nameCell}>
                      <span className={styles.docIcon}>📄</span> {report.name}
                    </td>
                    <td>{report.site}</td>
                    <td>{report.period}</td>
                    <td>
                      <div className={styles.formatTags}>
                        {report.formats.map(fmt => (
                          <span key={fmt} className={styles.formatTag}>{fmt}</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span className={styles.statusDot} style={{ backgroundColor: report.statusColor }}></span>
                      {report.status}
                    </td>
                    <td className={styles.moreCell}>⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        <div className={styles.autoDispatchSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Envois automatiques</h2>
            <Badge variant="neutral" className={styles.activeCountBadge}>6 actifs</Badge>
          </div>
          <div className={styles.dispatchList}>
            {autoDispatches.map((dispatch, idx) => (
              <Card key={idx} padding="md" className={`${styles.dispatchCard} ${!dispatch.active ? styles.inactiveDispatch : ''}`}>
                <div className={styles.dispatchIcon}>{dispatch.icon}</div>
                <div className={styles.dispatchInfo}>
                  <h4 className={styles.dispatchTitle}>{dispatch.title}</h4>
                  <p className={styles.dispatchSubtitle}>{dispatch.subtitle}</p>
                </div>
                <div className={`${styles.toggleSwitch} ${dispatch.active ? styles.toggleOn : styles.toggleOff}`}>
                  <div className={styles.toggleKnob}></div>
                </div>
              </Card>
            ))}
            <Button variant="outline" fullWidth className={styles.newScheduleBtn}>
              + Nouvelle planification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
