'use client';

import React from 'react';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { Input, Textarea } from '@/components/FormElements/FormElements';
import { AccordionItem } from '@/components/Accordion/Accordion';
import styles from './page.module.css';

export default function Contact() {
  const faqs = [
    { question: "Comment demander une démonstration en direct ?", answer: "Remplissez simplement le formulaire ci-dessus et notre équipe vous contactera sous 24h pour planifier une session adaptée à vos disponibilités." },
    { question: "Quel est le délai de réponse du support technique ?", answer: "Notre support technique de niveau 1 répond généralement dans l'heure pour les clients sous contrat SLA standard." },
    { question: "Proposez-vous des installations sur site en dehors d'Alger ?", answer: "Oui, nos équipes interviennent sur tout le territoire national et peuvent également se déplacer à l'international selon le projet." }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Contactez <span className={styles.textGreen}>l'Intelligence</span> Environnementale</h1>
          <p className={styles.heroDesc}>
            Nos experts AIoT sont prêts à vous accompagner dans vos projets de surveillance et de durabilité.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.splitLayout}>
            {/* Form Column */}
            <div className={styles.formCol}>
              <Card padding="lg" className={styles.formCard}>
                <form className={styles.form}>
                  <div className={styles.inputRow}>
                    <Input id="nom" label="Nom complet" placeholder="Jean Dupont" />
                    <Input id="entreprise" label="Entreprise" placeholder="Ex: EcoSystems" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <Input id="email" type="email" label="Adresse email" placeholder="contact@entreprise.com" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <Input id="sujet" label="Sujet" placeholder="Demande de démonstration" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <Textarea id="message" label="Votre message" placeholder="Comment pouvons-nous vous aider ?" />
                  </div>
                  
                  <Button fullWidth size="lg" style={{ marginTop: 'var(--spacing-4)', backgroundColor: '#047857' }}>
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info Column */}
            <div className={styles.infoCol}>
              <h2 className={styles.infoTitle}>Informations de contact</h2>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉</div>
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <div className={styles.infoValue}>contact@ecosystem.dz</div>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <div className={styles.infoLabel}>Téléphone</div>
                    <div className={styles.infoValue}>+213 (0) 23 45 67 89</div>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <div className={styles.infoLabel}>Adresse</div>
                    <div className={styles.infoValue}>Alger, Algérie</div>
                  </div>
                </div>
              </div>

              <div className={styles.socialsSection}>
                <div className={styles.socialsLabel}>Suivez-nous</div>
                <div className={styles.socialsList}>
                  <a href="#" className={styles.socialIcon}>in</a>
                  <a href="#" className={styles.socialIcon}>𝕏</a>
                </div>
              </div>

              <div className={styles.quoteCard}>
                "L'intelligence environnementale au service d'un avenir durable. Notre équipe répond sous 24 heures ouvrées."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Où nous trouver</h2>
        </div>
        <div className={styles.mapVisualContainer}>
          {/* Faux map visual */}
          <div className={styles.fauxMap}>
            <div className={styles.mapPin}>
              <div className={styles.pinIcon}>☘</div>
              <div className={styles.pinLabel}>Ecosystem HQ Algiers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Questions fréquentes</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
