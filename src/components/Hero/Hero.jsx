import React from "react";
import styles from "./Hero.module.css";
import { useSectionNav } from "../../hooks/useSectionNav";

import ProfilePicture from "/assets/hero/profile_picture.png";

export const Hero = () => {
  const goToSection = useSectionNav();
  return (
    <section className={styles.band}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Joey</h1>
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
