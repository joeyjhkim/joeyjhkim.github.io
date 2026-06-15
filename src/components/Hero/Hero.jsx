import React from "react";
import styles from "./Hero.module.css";
import { useSectionNav } from "../../hooks/useSectionNav";
import { RotatingRoles } from "./RotatingRoles";

import ProfilePicture from "/assets/hero/profile_picture.png";

const ROLES = [
  "Product Design Engineer",
  "Mechanical Engineer",
  "Maker & Fabricator",
  "Motorcyclist",
];

export const Hero = () => {
  const goToSection = useSectionNav();
  return (
    <section className={styles.band}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>Product Design Engineer · Apple</p>
          <h1 className={styles.title}>Hi, I'm Joey Jaehyeok Kim</h1>
          <RotatingRoles roles={ROLES} />
          <p className={styles.description}>
            I like building stuff.
            <br />
            If you do as well, let's connect!
          </p>
          <div className={styles.actions}>
            <a
              href="#projects"
              className={styles.primaryBtn}
              onClick={goToSection("projects")}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={styles.secondaryBtn}
              onClick={goToSection("contact")}
            >
              Get in Touch
            </a>
          </div>
        </div>
        <img
          src={ProfilePicture}
          alt="Portrait of Joey Jaehyeok Kim"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
