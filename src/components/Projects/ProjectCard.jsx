import React, { useRef, useState, useCallback } from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project,
  onSelect,
}) => {
  const { title, imageSrc, description, skills, demo, workflow, paper, paperLabel, code, poster } = project;
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    setTilt({ rotateX, rotateY });
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleClick = useCallback(() => {
    onSelect(project);
  }, [onSelect, project]);

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.container} ${isHovered ? styles.hovered : ""}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isHovered && (
        <div
          className={styles.glow}
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(139, 124, 248, 0.15) 0%, transparent 60%)`,
          }}
        />
      )}
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
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
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Demo
            </a>
          )}
          {workflow && (
            <a
              href={workflow}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Workflow
            </a>
          )}
          {paper && (
            <a
              href={paper}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              {paperLabel || "Paper"}
            </a>
          )}
          {code && (
            <a
              href={code}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Repo
            </a>
          )}
          {poster && (
            <a
              href={poster}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Poster
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
