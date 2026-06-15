import React, { useEffect, useRef, useState } from "react";

import styles from "./Stats.module.css";
import { useInView } from "../../hooks/useInView";

const STATS = [
  { value: 12, label: "Projects & Research" },
  { value: 4, label: "Roles Across Industry" },
  { value: 4, label: "Engineering Domains" },
];

const DURATION = 1200;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const useCountUp = (target, active) => {
  const [value, setValue] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!active) return undefined;

    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / DURATION, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(step);
      }
    };

    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [target, active]);

  return value;
};

const Stat = ({ value, label, active }) => {
  const count = useCountUp(value, active);
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{count}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section className={styles.band} ref={ref} aria-label="Portfolio at a glance">
      <div className={styles.container}>
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} active={inView} />
        ))}
      </div>
    </section>
  );
};
