import React from "react";

import styles from "./Contact.module.css";

// import icons
import email_icon from "/assets/contact/emailIcon.png"
import github_icon from "/assets/contact/githubIcon.png"
import linkedin_icon from "/assets/contact/linkedinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.band}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email_icon} alt="Email icon" />
          <a href="mailto:joey.jaehyeok@gmail.com">joey.jaehyeok@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin_icon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/joeyjhkim">linkedin.com/joeyjhkim</a>
        </li>
        <li className={styles.link}>
          <img src={github_icon} alt="Github icon" />
          <a href="https://github.com/joeyjhkim">github.com/joeyjhkim</a>
        </li>
      </ul>
      </div>
    </footer>
  );
};
