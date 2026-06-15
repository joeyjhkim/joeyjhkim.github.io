import React, { useState } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import experience from "../../data/experience.json";
import { useInView } from "../../hooks/useInView";

const MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// "Aug 2026" -> sortable integer (months since year 0). Used to order the
// timeline chronologically left -> right.
const startValue = (s) => {
  const [month, year] = String(s).split(" ");
  return Number(year) * 12 + (MONTHS[month] ?? 0);
};

// Immutable chronological copy — never mutate the imported JSON.
const ORDERED = [...experience].sort(
  (a, b) => startValue(a.startDate) - startValue(b.startDate)
);

// Default the detail panel to the most recent role that actually has bullets,
// so the section never loads looking empty.
const DEFAULT_ACTIVE = ORDERED.reduce(
  (acc, item, i) => (item.experiences.length > 0 ? i : acc),
  0
);

const SkillItem = ({ skill, index }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.skill} ${inView ? styles.skillVisible : ""}`}
      style={{ transitionDelay: `${Math.min(index * 60, 360)}ms` }}
    >
      <div className={styles.skillImageContainer}>
        <img src={skill.imageSrc} alt={skill.title} loading="lazy" />
      </div>
      <p>{skill.title}</p>
    </div>
  );
};

export const Experience = () => {
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const [wrapRef, inView] = useInView({ threshold: 0.2 });

  const item = ORDERED[active];
  const isCurrent = item.endDate === "Present";

  return (
    <section className={styles.band} id="experience">
      <div className={styles.container}>
        <p className={styles.kicker}>Experience</p>
        <h2 className={styles.title}>Career Timeline &amp; Skills</h2>
        <p className={styles.hint}>Hover or tap a logo to see what I did there.</p>

        <div
          ref={wrapRef}
          className={`${styles.timelineWrap} ${inView ? styles.drawn : ""}`}
        >
          <ol className={styles.hTimeline}>
            {ORDERED.map((job, i) => {
              const filled = i <= active;
              const nodeClasses = [
                styles.node,
                filled ? styles.filled : "",
                i === active ? styles.active : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li
                  key={`${job.organisation}-${i}`}
                  className={nodeClasses}
                  style={{ transitionDelay: `${Math.min(i * 120, 480)}ms` }}
                >
                  <button
                    type="button"
                    className={styles.nodeBtn}
                    aria-pressed={i === active}
                    aria-label={`Show what I did as ${job.role} at ${job.organisation}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.marker}>
                      <img
                        src={job.imageSrc}
                        alt={`${job.organisation} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </button>
                  <span className={styles.nodeMeta}>
                    <span className={styles.nodeOrg}>{job.organisation}</span>
                    <span className={styles.nodeDate}>
                      {job.startDate} — {job.endDate}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>

          <div className={styles.detail} aria-live="polite">
            <div key={active} className={styles.detailInner}>
              <div className={styles.detailHead}>
                <h3 className={styles.detailRole}>
                  {item.role}, {item.organisation}
                </h3>
                <span
                  className={`${styles.datePill} ${
                    isCurrent ? styles.datePillCurrent : ""
                  }`}
                >
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              {item.experiences.length > 0 ? (
                <ul className={styles.bullets}>
                  {item.experiences.map((bullet, id) => (
                    <li key={id}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.detailEmpty}>
                  Incoming — starting {item.startDate}. More soon.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsHeading}>Skills &amp; Tools</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <SkillItem key={id} skill={skill} index={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
