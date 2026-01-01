import React from 'react'

import styles from "./About.module.css";

// import pictures
import aboutImage from "/assets/about/me_with_bike.png";
import GT_logo_desktop from "/assets/about/GT_logo_desktop.png";
import GT_logo_mobile from "/assets/about/GT_logo_mobile.png";
import hobby_icon from "/assets/about/hobbies.png";
export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img
            src={aboutImage}
            alt="Me with bike"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={GT_logo_desktop}
                        alt="GT logo desktop"
                        className={styles.iconDesktop}
                    />
                    <img
                        src={GT_logo_mobile}
                        alt="GT logo mobile"
                        className={styles.iconMobile}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>I am 4th year Undergraduate Mechanical Engineering student at Georgia Tech.<br />
                        My expected graduation is July 2026.
                        </p>
                    </div>
                </li>                

                <li className={styles.aboutItem}>
                    <img
                    src={hobby_icon}
                    alt="Hobby Icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies</h3>
                        <p>
                            I enjoy motorcycling through the mountains, mechanic work, and product design and fabrication. <br />
                            I can always be found at the gym.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
