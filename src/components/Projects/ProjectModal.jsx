import React, { useEffect, useRef, useCallback } from "react";

import styles from "./ProjectModal.module.css";

const LINK_FIELDS = [
  { key: "demo", label: "Demo" },
  { key: "workflow", label: "Workflow" },
  { key: "paper", label: "Paper" },
  { key: "code", label: "Repo" },
  { key: "poster", label: "Poster" },
];

export const ProjectModal = ({ project, onClose }) => {
  const { title, imageSrc, description, details, skills } = project;
  const closeBtnRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
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

  const videoSrc =
    typeof project.demo === "string" && project.demo.endsWith(".mp4")
      ? project.demo
      : null;

  // A video demo renders inline, so don't also surface it as a text link.
  const links = LINK_FIELDS.filter(
    ({ key }) => project[key] && !(key === "demo" && videoSrc)
  );

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className={styles.content}>
          {videoSrc ? (
            <div className={styles.videoSection}>
              <video
                className={styles.video}
                src={videoSrc}
                poster={imageSrc}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ) : (
            <div className={styles.imageSection}>
              <img
                src={imageSrc}
                alt={title}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          <div className={styles.details}>
            <h2 className={styles.title} id="project-modal-title">
              {title}
            </h2>
            {Array.isArray(details) ? (
              <ul className={styles.detailsList}>
                {details.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.description}>{details || description}</p>
            )}

            <ul className={styles.skills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>

            {links.length > 0 && (
              <div className={styles.links}>
                {links.map(({ key, label }) => (
                  <a
                    key={key}
                    href={project[key]}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key === "paper" && project.paperLabel
                      ? project.paperLabel
                      : label}{" "}
                    ›
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
