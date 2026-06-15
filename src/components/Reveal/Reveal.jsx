import React from "react";

import styles from "./Reveal.module.css";
import { useInView } from "../../hooks/useInView";

// Wraps children in a fade-up reveal that triggers on scroll-into-view.
// `delay` (ms) staggers grouped reveals; `as` swaps the wrapper element.
export const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.visible : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};
