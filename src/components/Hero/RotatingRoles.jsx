import React, { useEffect, useRef, useState } from "react";

import styles from "./RotatingRoles.module.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1400;

// Typewriter that cycles through a list of roles: types each one out,
// holds, deletes, advances. Under reduced-motion it shows them as a static
// dot-separated line so there is no animation and no layout shift.
export const RotatingRoles = ({ roles }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting
  const timeout = useRef(0);
  const reduced = useRef(prefersReducedMotion());

  useEffect(() => {
    if (reduced.current) return undefined;

    const current = roles[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout.current = window.setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_MS
        );
      } else {
        timeout.current = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout.current = window.setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_MS
        );
      } else {
        setPhase("typing");
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => window.clearTimeout(timeout.current);
  }, [text, phase, roleIndex, roles]);

  if (reduced.current) {
    return (
      <p className={styles.roles} aria-label={roles.join(", ")}>
        {roles.join(" · ")}
      </p>
    );
  }

  return (
    <p className={styles.roles} aria-label={roles.join(", ")}>
      <span className={styles.word}>{text}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </p>
  );
};
