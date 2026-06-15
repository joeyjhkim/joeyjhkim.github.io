import React from "react";

import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { Reveal } from "../Reveal/Reveal";

const AwardIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <p className={styles.kicker}>Credentials</p>
      <h2 className={styles.title}>Certifications</h2>
      <p className={styles.hint}>Click a card to view the certificate.</p>

      <div className={styles.grid}>
        {certifications.map((cert, i) => (
          <Reveal as="article" key={cert.title} delay={i * 80} className={styles.card}>
            <a
              className={styles.cardLink}
              href={cert.verifyUrl || cert.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${cert.title} certificate (opens in a new tab)`}
            >
              <span className={styles.badge}>
                <AwardIcon />
              </span>
              <h3 className={styles.cardTitle}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <span className={styles.datePill}>{cert.date}</span>
              <span className={styles.view}>
                {cert.verifyUrl ? "View & verify" : "View certificate"}
                <span className={styles.arrow} aria-hidden="true">→</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
