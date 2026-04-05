import React, { useEffect, useCallback } from "react";

import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ project, onClose }) => {
  const { title, imageSrc, description, skills, demo, workflow, paper, paperLabel, code, poster } = project;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const hasLinks = demo || workflow || paper || code || poster;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img src={imageSrc} alt={title} className={styles.image} />
          </div>

          <div className={styles.details}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>

            {hasLinks && (
              <div className={styles.links}>
                {demo && (
                  <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
                {workflow && (
                  <a href={workflow} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Workflow
                  </a>
                )}
                {paper && (
                  <a href={paper} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {paperLabel || "Paper"}
                  </a>
                )}
                {code && (
                  <a href={code} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Repo
                  </a>
                )}
                {poster && (
                  <a href={poster} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Poster
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
