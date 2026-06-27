'use client';

import React, { useState } from 'react';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Select } from '@/components/FormElements/FormElements';
import styles from './page.module.css';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('toutes');

  const stats = [
    { title: "Notifications aujourd'hui", value: "12", change: "+15%", changeType: "positive", icon: "📅" },
    { title: "Alertes critiques", value: "1", tag: "CRITIQUE", tagType: "error", icon: "⚠" },
    { title: "Notifications non lues", value: "5", tag: "ACTIF", tagType: "neutral", icon: "✉" },
    { title: "Canaux actifs", value: "3/4", tag: "CONFIGURÉ", tagType: "neutral", icon: "⚙" },
  ];

  const tabs = [
    { id: 'toutes', label: 'Toutes', count: 5 },
    { id: 'non-lues', label: 'Non lues', count: 5 },
    { id: 'critiques', label: 'Alertes critiques', count: 1 },
    { id: 'systeme', label: 'Système' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'preferences', label: 'Préférences' },
  ];

  const notifications = [
    {
      id: 1,
      title: "Humidité du sol faible",
      level: "MOYENNE",
      levelType: "warning",
      desc: "Parcelle B, Mitidja • Humidité actuelle : 39%",
      time: "Il y a 12 min",
      action: "Voir le site",
      icon: "💧",
      iconBg: "#eaf6ee",
      iconColor: "#10b981",
      unread: true
    },
    {
      id: 2,
      title: "Batterie faible détectée",
      level: "FAIBLE",
      levelType: "neutral",
      desc: "Capteur SOL-B-04, Mitidja • Autonomie : 18%",
      time: "Il y a 45 min",
      action: "Créer un ticket",
      icon: "🔋",
      iconBg: "#f1f5f9",
      iconColor: "#64748b",
      unread: true
    },
    {
      id: 3,
      title: "Risque incendie modéré",
      level: "HAUTE",
      levelType: "error",
      desc: "Forêt de Chréa • Indice de sécheresse critique atteint.",
      time: "Il y a 2h",
      action: "Voir la carte",
      icon: "🔥",
      iconBg: "#fef2f2",
      iconColor: "#ef4444",
      unread: false
    },
    {
      id: 4,
      title: "Rapport environnemental généré",
      level: "INFO",
      levelType: "primary",
      desc: "Secteur Mitidja • Période Hebdomadaire S12.",
      time: "Il y a 5h",
      action: "Télécharger",
      icon: "📄",
      iconBg: "#eff6ff",
      iconColor: "#3b82f6",
      unread: false
    },
    {
      id: 5,
      title: "Maintenance terminée",
      level: "SUCCÈS",
      levelType: "success",
      desc: "Capteur TEMP-A-01 • Étalonnage effectué avec succès.",
      time: "Hier, 16:30",
      action: "Voir le ticket",
      icon: "🔧",
      iconBg: "#fffbeb",
      iconColor: "#f59e0b",
      unread: false
    },
    {
      id: 6,
      title: "Niveau d'eau en baisse",
      level: "VIGILANCE",
      levelType: "primary",
      desc: "Zone humide de Réghaïa • Seuil minimal d'étiage approché.",
      time: "Hier, 10:15",
      action: "Voir le site",
      icon: "🌊",
      iconBg: "#f0fdfa",
      iconColor: "#14b8a6",
      unread: false
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <div className={styles.titleRow}>
            <h1 className={styles.pageTitle}>Notifications</h1>
            <Badge variant="error" className={styles.titleBadge}>5 NON LUES</Badge>
          </div>
          <p className={styles.pageSubtitle}>Consultez vos alertes et configurez vos préférences de réception.</p>
        </div>
        <div className={styles.headerActions}>
          <Button variant="outline">✓ Tout marquer comme lu</Button>
          <Button style={{ backgroundColor: '#047857', color: 'white' }}>⚙ Configurer les notifications</Button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <Card key={idx} padding="md" className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon}>{stat.icon}</div>
              {stat.change && <div className={`${styles.statChange} ${styles[stat.changeType]}`}>{stat.change}</div>}
              {stat.tag && <div className={styles.statTag}>{stat.tag}</div>}
            </div>
            <div className={styles.statLabel}>{stat.title}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </Card>
        ))}
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className={`${styles.tabCount} ${activeTab === tab.id ? styles.activeCount : ''}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filtersBar}>
        <div className={styles.filters}>
          <select className={styles.filterSelect}>
            <option>Tous les sites</option>
          </select>
          <select className={styles.filterSelect}>
            <option>Type d'alerte</option>
          </select>
          <select className={styles.filterSelect}>
            <option>Priorité</option>
          </select>
        </div>
        <div className={styles.viewToggle}>
          <span>Affichage :</span>
          <div className={styles.toggleGroup}>
            <button className={styles.toggleBtnActive}>≡</button>
            <button className={styles.toggleBtn}>⊞</button>
          </div>
        </div>
      </div>

      <div className={styles.notificationsList}>
        {notifications.map(notif => (
          <Card key={notif.id} padding="md" className={`${styles.notifCard} ${notif.unread ? styles.unread : ''}`}>
            {notif.unread && <div className={styles.unreadIndicator}></div>}
            <div className={styles.notifContent}>
              <div 
                className={styles.notifIcon} 
                style={{ backgroundColor: notif.iconBg, color: notif.iconColor }}
              >
                {notif.icon}
              </div>
              <div className={styles.notifDetails}>
                <div className={styles.notifTitleRow}>
                  <h4 className={styles.notifTitle}>{notif.title}</h4>
                  <Badge variant={notif.levelType as any} className={styles.notifBadge}>{notif.level}</Badge>
                </div>
                <p className={styles.notifDesc}>{notif.desc}</p>
                <span className={styles.notifTime}>{notif.time}</span>
              </div>
              <div className={styles.notifActions}>
                <button className={styles.actionLink}>{notif.action}</button>
                <button className={styles.moreBtn}>⋮</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
