import React from 'react';
import styles from './page.module.css';

export default function CartographiePage() {
  return (
    <div className={styles.container}>
      {/* Left Sidebar - Filters and Layers */}
      <div className={styles.leftSidebar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input 
              type="text" 
              placeholder="Rechercher un site, wilaya..." 
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Filtres Généraux</h3>
          <div className={styles.filterGroup}>
            <select className={styles.select} defaultValue="tous">
              <option value="tous">Type de site: Tous</option>
              <option value="agricole">Agricole</option>
              <option value="foret">Forêt</option>
            </select>
            <select className={styles.select} defaultValue="tous">
              <option value="tous">Niveau de risque: Tous</option>
              <option value="critique">Critique</option>
              <option value="eleve">Élevé</option>
            </select>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Couches de Données</h3>
          <div className={styles.layersGroup}>
            <label className={styles.layerItem}>
              <div className={styles.layerLabel}>
                <span className={`${styles.layerIcon} ${styles.green}`}>📍</span>
                Sites actifs
              </div>
              <input type="checkbox" defaultChecked />
            </label>
            <label className={styles.layerItem}>
              <div className={styles.layerLabel}>
                <span className={styles.layerIcon}>📡</span>
                Capteurs LoRaWAN
              </div>
              <input type="checkbox" defaultChecked />
            </label>
            <label className={styles.layerItem}>
              <div className={styles.layerLabel}>
                <span className={`${styles.layerIcon} ${styles.orange}`}>🔥</span>
                Risque d'incendie
              </div>
              <input type="checkbox" defaultChecked />
            </label>
            <label className={styles.layerItem}>
              <div className={styles.layerLabel}>
                <span className={`${styles.layerIcon} ${styles.blue}`}>💧</span>
                Humidité du sol
              </div>
              <input type="checkbox" />
            </label>
            <label className={styles.layerItem}>
              <div className={styles.layerLabel}>
                <span className={styles.layerIcon}>🗺️</span>
                Vue Satellite
              </div>
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>

      {/* Center - Map Area */}
      <div className={styles.mapArea}>
        <div className={styles.mapControls}>
          <button className={styles.mapBtn}>+</button>
          <button className={`${styles.mapBtn} ${styles.divider}`}>-</button>
          <button className={styles.mapBtn}>📍</button>
          <button className={styles.mapBtn}>⛶</button>
          <button className={styles.mapBtn}>📏</button>
          <button className={styles.mapBtn}>🥞</button>
        </div>

        {/* Mock Markers */}
        <div className={`${styles.mapMarker} ${styles.green}`} style={{ top: '30%', left: '60%' }}>
          🌊
        </div>
        <div className={`${styles.mapMarker} ${styles.green}`} style={{ top: '45%', left: '45%' }}>
          🚜
        </div>
        <div className={`${styles.mapMarker} ${styles.orange}`} style={{ top: '65%', left: '55%' }}>
          🔥
        </div>

        {/* Bottom Overlay */}
        <div className={styles.mapOverlay}>
          <div className={styles.overlayCard}>
            <span className={styles.overlayIcon}>⚠️</span>
            Alertes géolocalisées (4)
          </div>
          <div className={styles.overlayCard} style={{ opacity: 0.9 }}>
            <span className={styles.overlayIcon}>💧</span>
            Risque hydrique
          </div>
        </div>
      </div>

      {/* Right Sidebar - Details */}
      <div className={styles.rightSidebar}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Résumé de la zone</h3>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Sites</span>
              <span className={styles.summaryValue}>03</span>
            </div>
            <div className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Capteurs</span>
              <span className={styles.summaryValue}>57</span>
            </div>
            <div className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Alertes</span>
              <span className={styles.summaryValue}>04</span>
            </div>
            <div className={styles.summaryCard}>
              <span className={styles.summaryLabel}>Risques</span>
              <span className={styles.summaryValue}>02</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Sélection Actuelle</h3>
          <div className={styles.selectionCard}>
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Forêt" 
              className={styles.selectionImg}
            />
            <div className={styles.selectionContent}>
              <div className={styles.selectionHeader}>
                <div>
                  <h4 className={styles.selectionTitle}>Forêt de Chréa</h4>
                  <p className={styles.selectionSubtitle}>Parc National, Blida</p>
                </div>
                <span className={styles.selectionBadge}>ALERTE</span>
              </div>

              <div className={styles.statusRow}>
                <span className={styles.statusLabel}>Statut IA</span>
                <span className={styles.statusValue}>Surveillance accrue</span>
              </div>
              <div className={styles.statusBar}>
                <div className={styles.statusBarFill}></div>
              </div>

              <div className={styles.recoBox}>
                <div className={styles.recoIconBox}>🧠</div>
                <div className={styles.recoBoxContent}>
                  <span className={styles.recoBoxTitle}>Recommandation IA</span>
                  <p className={styles.recoBoxText}>
                    Augmentation critique de l'indice FWI (Fire Weather Index). Déclenchement conseillé d'une patrouille préventive en zone C-02.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Capteurs à proximité</h3>
          <div className={styles.sensorList}>
            <div className={styles.sensorItem}>
              <div className={styles.sensorItemName}>
                <span className={styles.sensorItemIcon}>🌡️</span>
                TEMP-CH-01
              </div>
              <span className={styles.sensorItemValue}>22.4°C</span>
            </div>
            <div className={styles.sensorItem}>
              <div className={styles.sensorItemName}>
                <span className={styles.sensorItemIcon}>💨</span>
                WIND-CH-04
              </div>
              <span className={styles.sensorItemValue}>18 km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
