import React, { useCallback } from "react";

import styles from "./ProjectCard.module.css";
import { useInView } from "../../hooks/useInView";

const LINK_FIELDS = [
  { key: "demo", label: "Demo" },
  { key: "workflow", label: "Workflow" },
  { key: "paper", label: "Paper" },
  { key: "code", label: "Repo" },
  { key: "poster", label: "Poster" },
];

export const ProjectCard = ({ project, onSelect, index = 0 }) => {
  const { title, imageSrc, description, skills } = project;
  const [ref, inView] = useInView();

  const handleClick = useCallback(() => {
    onSelect(project);
  }, [onSelect, project]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(project);
      }
    },
    [onSelect, project]
  );

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.container} ${inView ? styles.visible : ""}`}
      style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${title}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={title}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {LINK_FIELDS.map(({ key, label }) =>
            project[key] ? (
              <a
                key={key}
                href={project[key]}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                {key === "paper" && project.paperLabel
                  ? project.paperLabel
                  : label}{" "}
                ›
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
