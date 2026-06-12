import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { useSectionNav } from "../../hooks/useSectionNav";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const goToSection = useSectionNav();

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link className={styles.title} to="/">
          Joey Jaehyeok Kim
        </Link>
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
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={goToSection(id)}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/motorcycle">Motorcycle</Link>
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
