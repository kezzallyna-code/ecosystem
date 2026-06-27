import React from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/FormElements/FormElements';

const capteursData = [
  {
    id: 'SENS-HYD-042',
    sn: '8A44-01-FF',
    type: 'Humidité Sol',
    typeIcon: '💧',
    site: 'Vignoble Nord-Est',
    valeur: '42.5 %',
    valeurState: 'neutral',
    signal: -78,
    signalBars: 4,
    battery: 82,
    status: 'ACTIF'
  },
  {
    id: 'SENS-NPK-012',
    sn: '2B22-44-AC',
    type: 'Engrais NPK',
    typeIcon: '🌱',
    site: 'Verger Principal',
    valeur: 'N:12 / P:5 / K:15',
    valeurState: 'success',
    signal: -92,
    signalBars: 2,
    battery: 15,
    status: 'MAINTENANCE'
  },
  {
    id: 'SENS-TMP-099',
    sn: 'FD39-88-12',
    type: 'Température',
    typeIcon: '🌡️',
    site: 'Serre AI Autonome',
    valeur: '24.8 °C',
    valeurState: 'success',
    signal: -65,
    signalBars: 5,
    battery: 95,
    status: 'ACTIF'
  },
  {
    id: 'SENS-LVL-005',
    sn: '4F2A-DE-05',
    type: "Niveau d'eau",
    typeIcon: '🌊',
    site: "Bassin d'irrigation",
    valeur: '1.22 m',
    valeurState: 'success',
    signal: null,
    signalBars: 0,
    battery: null,
    status: 'INACTIF'
  }
];

export default function CapteursPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Gestion du Parc Capteurs</h1>
          <p>Visualisez et gérez 142 dispositifs IoT déployés sur vos sites.</p>
        </div>
        <div className={styles.headerActions}>
          <Button variant="outline" icon="🔍">Filtrer par Type</Button>
          <Button variant="outline" icon="🏢">Site: Tous</Button>
          <button className={styles.iconButton}>⋮</button>
        </div>
      </div>

      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiInfo}>
            <span className={styles.kpiLabel}>Total Connectés</span>
            <span className={styles.kpiValue}>138 <span className={styles.kpiSub}>/ 142</span></span>
          </div>
          <div className={`${styles.kpiIconWrapper} ${styles.success}`}>
            📶
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiInfo}>
            <span className={styles.kpiLabel}>Alertes Critiques</span>
            <span className={`${styles.kpiValue} ${styles.danger}`}>3</span>
          </div>
          <div className={`${styles.kpiIconWrapper} ${styles.danger}`}>
            ⚠️
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiInfo}>
            <span className={styles.kpiLabel}>Batterie Faible</span>
            <span className={`${styles.kpiValue} ${styles.success}`}>12</span>
          </div>
          <div className={`${styles.kpiIconWrapper} ${styles.success}`}>
            🔋
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiInfo}>
            <span className={styles.kpiLabel}>Optimisation IA</span>
            <span className={`${styles.kpiValue} ${styles.success}`}>94.2%</span>
          </div>
          <div className={`${styles.kpiIconWrapper} ${styles.info}`}>
            🧠
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nom / ID</th>
                <th>Type</th>
                <th>Site Associé</th>
                <th>Dernière Valeur</th>
                <th>Signal LoRa</th>
                <th>Batterie</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {capteursData.map((capteur) => (
                <tr key={capteur.id}>
                  <td>
                    <div className={styles.sensorId}>
                      <span className={styles.sensorName}>{capteur.id}</span>
                      <span className={styles.sensorSn}>SN: {capteur.sn}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.sensorType}>
                      <span className={styles.typeIcon}>{capteur.typeIcon}</span>
                      {capteur.type}
                    </div>
                  </td>
                  <td>
                    <span className={styles.siteName}>{capteur.site}</span>
                  </td>
                  <td>
                    <span className={`${styles.latestValue} ${capteur.valeurState === 'neutral' ? styles.neutral : ''}`}>
                      {capteur.valeur}
                    </span>
                  </td>
                  <td>
                    {capteur.signal !== null ? (
                      <div className={styles.signal}>
                        <div className={styles.signalBars}>
                          {[1, 2, 3, 4, 5].map(bar => (
                            <div 
                              key={bar} 
                              className={`${styles.signalBar} ${bar <= capteur.signalBars ? styles.active : ''} ${capteur.signalBars <= 2 && bar <= capteur.signalBars ? styles.low : ''}`}
                              style={{ height: `${20 + bar * 16}%` }}
                            />
                          ))}
                        </div>
                        <span className={styles.signalText}>{capteur.signal} dBm</span>
                      </div>
                    ) : (
                      <div className={styles.signalOffline}>
                        <span>⚠️</span> Hors-ligne
                      </div>
                    )}
                  </td>
                  <td>
                    {capteur.battery !== null ? (
                      <div className={styles.battery}>
                        <div className={styles.batteryBarContainer}>
                          <div 
                            className={styles.batteryBar} 
                            style={{ 
                              width: `${capteur.battery}%`,
                              backgroundColor: capteur.battery > 20 ? 'var(--color-success)' : 'var(--color-danger)'
                            }} 
                          />
                        </div>
                        <span className={styles.batteryText}>{capteur.battery}%</span>
                      </div>
                    ) : (
                      <span className={styles.batteryText}>--</span>
                    )}
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles[capteur.status.toLowerCase()]}`}>
                      {capteur.status}
                    </span>
                  </td>
                  <td className={styles.actionCell}>
                    ›
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className={styles.tableFooter}>
          <span>Affichage 1-10 de 142 capteurs</span>
          <div className={styles.pagination}>
            <button className={styles.pageBtn} disabled>‹</button>
            <button className={styles.pageBtn}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
