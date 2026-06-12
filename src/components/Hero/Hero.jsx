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
          <p className={styles.kicker}>Product Design Engineer · Apple</p>
          <h1 className={styles.title}>Hi, I'm Joey Jaehyeok Kim</h1>
          <p className={styles.description}>
            I like building stuff.
            <br />
            If you do as well, let's connect!
          </p>
          <a href="#contact" className={styles.contactBtn} onClick={goToSection("contact")}>
            Contact Me
          </a>
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
