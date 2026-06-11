import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a className={styles.title} href="/">
          Joey Jaehyeok Kim
        </a>
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarTopOpen : ""}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarMidOpen : ""}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarBotOpen : ""}`} />
          </button>
          <ul
            className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                className={styles.resumeBtn}
                href="/assets/personal_data/Jaehyeok_Joey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
