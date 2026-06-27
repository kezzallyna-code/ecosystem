'use client';

import React, { useState } from 'react';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { AccordionItem } from '@/components/Accordion/Accordion';
import styles from './page.module.css';

export default function Tarification() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Pour les petits sites et pilotes",
      price: "2900da",
      period: "/an",
      features: [
        "Jusqu'à 10 capteurs",
        "SIG Basique",
        "Alertes Standard",
        "Support Email"
      ],
      button: "Choisir Starter",
      variant: "light"
    },
    {
      name: "Professional",
      desc: "Pour les entreprises en croissance",
      price: "5000da",
      period: "/an",
      features: [
        "Jusqu'à 50 capteurs",
        "Analyse IA Avancées",
        "SIG 3D & Cartographie",
        "Intégration Drones",
        "Support 24/7"
      ],
      button: "Commencer l'essai gratuit",
      variant: "dark",
      badge: "PLUS POPULAIRE"
    },
    {
      name: "Enterprise",
      desc: "Pour les organisations globales",
      price: "Sur mesure",
      period: "",
      features: [
        "Capteurs illimités",
        "Surveillance Satellite",
        "Accès API complet",
        "Manager de compte dédié",
        "SLA personnalisé"
      ],
      button: "Contacter l'équipe",
      variant: "light"
    }
  ];

  const comparisonData = [
    { feature: "Rétention de données", starter: "3 mois", pro: "12 mois", ent: "Illimité" },
    { feature: "Nombre d'utilisateurs", starter: "5 utilisateurs", pro: "15 utilisateurs", ent: "Illimité" },
    { feature: "Fréquence des rapports", starter: "Hebdomadaire", pro: "Quotidien", ent: "Temps Réel" },
    { feature: "Analyse IA prédictive", starter: "—", pro: "✓", ent: "✓" },
    { feature: "Données Drone & Satellite", starter: "—", pro: "Partiel (Drone)", ent: "Complet" },
    { feature: "Tableaux de bord personnalisés", starter: "Standard", pro: "Jusqu'à 5", ent: "Illimité" },
  ];

  const faqs = [
    { question: "Quels types de capteurs sont compatibles ?", answer: "Nous supportons la majorité des capteurs IoT via MQTT et LoraWAN." },
    { question: "Comment mes données sont-elles sécurisées (RGPD) ?", answer: "Toutes nos données sont chiffrées de bout en bout et hébergées sur des serveurs certifiés." },
    { question: "Proposez-vous des services d'installation sur site ?", answer: "Oui, nos équipes techniques peuvent se déplacer selon votre plan." }
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <Badge variant="success" className={styles.topBadge}>Tarification Transparente</Badge>
        <h1 className={styles.heroTitle}>Une intelligence écologique, accessible à tous.</h1>
        <p className={styles.heroSubtitle}>
          Choisissez le plan adapté à vos ambitions environnementales. De l'expérimentation locale à la surveillance satellitaire globale.
        </p>

        <div className={styles.toggleContainer}>
          <span className={`${styles.toggleLabel} ${!annual ? styles.activeLabel : ''}`}>Facturation mensuelle</span>
          <div 
            className={`${styles.toggleSwitch} ${annual ? styles.toggleOn : styles.toggleOff}`}
            onClick={() => setAnnual(!annual)}
          >
            <div className={styles.toggleKnob}></div>
          </div>
          <span className={`${styles.toggleLabel} ${annual ? styles.activeLabel : ''}`}>Facturation annuelle</span>
          <Badge variant="success" className={styles.savingBadge}>20% d'économie</Badge>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              padding="lg" 
              className={`${styles.pricingCard} ${plan.variant === 'dark' ? styles.cardDark : styles.cardLight}`}
            >
              {plan.badge && (
                <div className={styles.planBadgeWrap}>
                  <Badge variant="success" className={styles.planBadge}>{plan.badge}</Badge>
                </div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.desc}</p>
                <div className={styles.planPriceWrap}>
                  <span className={styles.planPrice}>{plan.price}</span>
                  <span className={styles.planPeriod}>{plan.period}</span>
                </div>
              </div>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <div className={styles.btnWrapper}>
                {plan.variant === 'dark' ? (
                  <Button fullWidth style={{ backgroundColor: 'white', color: '#047857' }}>{plan.button}</Button>
                ) : (
                  <Button variant="outline" fullWidth>{plan.button}</Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <h2 className={styles.sectionTitleCenter}>Comparaison détaillée</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Fonctionnalités</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td>{row.starter}</td>
                  <td className={styles.proCell}>{row.pro}</td>
                  <td className={styles.entCell}>{row.ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitleCenter}>Questions Fréquentes</h2>
        <div className={styles.accordionWrapper}>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Prêt à commencer ?</h2>
          <p className={styles.ctaDesc}>Rejoignez les leaders du changement environnemental positif.</p>
          <div className={styles.ctaActions}>
            <Button style={{ backgroundColor: '#6ee7b7', color: '#064e3b' }}>Demander une démo</Button>
            <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>Nous contacter</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
