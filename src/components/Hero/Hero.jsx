import React from "react";
import styles from "./Hero.module.css";

// import of images
import ProfilePicture from "/assets/hero/profile_picture.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Joey Jaehyeok Kim</h1>
        <p className={styles.description}>
            Mechanical Engineering student at Georgia Tech.<br />
            Ex-Tesla test engineer. Researcher in computational design & metamaterials.<br />
            Building things that work.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={ProfilePicture}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
