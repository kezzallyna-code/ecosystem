'use client';

import React from 'react';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import styles from './page.module.css';

export default function MesSites() {
  const sites = [
    {
      id: 1,
      title: "Ferme intelligente de Mitidja",
      location: "Blida, Algérie",
      status: "ACTIF",
      statusType: "success",
      risk: "Risque Faible",
      riskColor: "#10b981",
      icon: "🚜",
      iconBg: "#bbf7d0",
      image: "linear-gradient(135deg, #10b981, #047857)",
      metrics: [
        { label: "Capteurs", value: "18" },
        { label: "Humidité sol", value: "45%" }
      ],
      lastActive: "Il y a 2 min"
    },
    {
      id: 2,
      title: "Forêt pilote de Chréa",
      location: "Blida, Algérie",
      status: "ALERTE",
      statusType: "error",
      risk: "Risque Moyen",
      riskColor: "#ef4444",
      icon: "🌲",
      iconBg: "#bbf7d0",
      image: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      metrics: [
        { label: "Capteurs", value: "24" },
        { label: "Risque incendie", value: "Élevé" }
      ],
      lastActive: "Il y a 5 min"
    },
    {
      id: 3,
      title: "Zone humide de Réghaïa",
      location: "Alger, Algérie",
      status: "ACTIF",
      statusType: "success",
      risk: "Risque Faible",
      riskColor: "#10b981",
      icon: "🌊",
      iconBg: "#e0f2fe",
      image: "linear-gradient(135deg, #f59e0b, #b45309)",
      metrics: [
        { label: "Capteurs", value: "15" },
        { label: "Qualité eau", value: "Optimale" }
      ],
      lastActive: "Il y a 8 min"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.pageTitle}>Gestion des Sites</h1>
          <p className={styles.pageSubtitle}>Surveillez et gérez vos déploiements environnementaux en temps réel.</p>
        </div>
        <Button style={{ backgroundColor: '#047857', color: 'white' }}>+ Ajouter un site</Button>
      </div>

      <div className={styles.filtersBar}>
        <div className={styles.filters}>
          <div className={styles.searchContainer}>
            <span className={styles.searchIcon}>🔍</span>
            <input 
              type="text" 
              placeholder="Rechercher un site, une région..." 
              className={styles.searchInput}
            />
          </div>
          <select className={styles.filterSelect}>
            <option>Tous les statuts</option>
          </select>
          <select className={styles.filterSelect}>
            <option>Technologie</option>
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button className={styles.toggleBtnActive}>⊞</button>
          <button className={styles.toggleBtn}>≡</button>
        </div>
      </div>

      <div className={styles.sitesGrid}>
        {sites.map(site => (
          <Card key={site.id} padding="none" className={styles.siteCard}>
            <div 
              className={styles.siteImage} 
              style={{ background: site.image }}
            >
              {/* Optional: Add gradient overlay or small tags on image if needed */}
            </div>
            
            <div className={styles.siteContent}>
              <div className={styles.siteTopRow}>
                <div 
                  className={styles.siteIcon} 
                  style={{ backgroundColor: site.iconBg }}
                >
                  {site.icon}
                </div>
                <div className={styles.statusCol}>
                  <Badge variant={site.statusType as any}>{site.status}</Badge>
                  <span className={styles.riskLabel} style={{ color: site.riskColor }}>{site.risk}</span>
                </div>
              </div>
              
              <h3 className={styles.siteTitle}>{site.title}</h3>
              <p className={styles.siteLocation}>
                <span className={styles.locIcon}>📍</span> {site.location}
              </p>
              
              <div className={styles.metricsGrid}>
                {site.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <span className={styles.metricLabel}>{metric.label}</span>
                    <span className={styles.metricValue}>{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.siteFooter}>
                <span className={styles.lastActive}>Dernière activité: {site.lastActive}</span>
                <div className={styles.actionIcons}>
                  <button className={styles.iconBtn} style={{ color: '#10b981' }}>✎</button>
                  <button className={styles.iconBtn} style={{ color: '#ef4444' }}>🗑</button>
                  <button className={styles.iconBtn} style={{ color: '#10b981' }}>→</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
