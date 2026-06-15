import React, { useState, useMemo, useCallback } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const ALL = "All";

// Fixed category order so chips don't reshuffle as data changes.
const CATEGORY_ORDER = [
  "Simulation & Analysis",
  "Mechatronics & Embedded",
  "Software & ML",
  "Design & Research",
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filters = useMemo(() => {
    const present = new Set(projects.map((p) => p.category).filter(Boolean));
    const ordered = [ALL, ...CATEGORY_ORDER.filter((c) => present.has(c))];
    return ordered.map((name) => ({
      name,
      count:
        name === ALL
          ? projects.length
          : projects.filter((p) => p.category === name).length,
    }));
  }, []);

  const visibleProjects = useMemo(
    () =>
      activeFilter === ALL
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const handleSelect = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section className={styles.container} id="projects">
      <p className={styles.kicker}>Portfolio</p>
      <h2 className={styles.title}>Research and Projects</h2>

      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
        {filters.map(({ name, count }) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={activeFilter === name}
            className={`${styles.chip} ${
              activeFilter === name ? styles.chipActive : ""
            }`}
            onClick={() => setActiveFilter(name)}
          >
            {name}
            <span className={styles.chipCount}>{count}</span>
          </button>
        ))}
      </div>

      <div className={styles.projects}>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={handleSelect}
            index={index}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </section>
  );
};
