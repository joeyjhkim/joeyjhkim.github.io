import React from 'react'
import { Link } from "react-router-dom";

import styles from "./About.module.css";

// import pictures
import aboutImage from "/assets/about/me_with_bike.png";
import GT_logo_desktop from "/assets/about/GT_logo_desktop.png";
import GT_logo_mobile from "/assets/about/GT_logo_mobile.png";
import hobby_icon from "/assets/about/hobbies.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <p className={styles.kicker}>Introduction</p>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img
            src={aboutImage}
            alt="Joey with his motorcycle"
            className={styles.aboutImage}
            loading="lazy"
            decoding="async"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={GT_logo_desktop}
                        alt="Georgia Tech logo"
                        className={styles.iconDesktop}
                    />
                    <img
                        src={GT_logo_mobile}
                        alt="Georgia Tech logo"
                        className={styles.iconMobile}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>I graduated from Georgia Tech with a B.S. in Mechanical Engineering in July 2026.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                    src={hobby_icon}
                    alt="Hobbies icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies</h3>
                        <p>
                            I enjoy motorcycling through the mountains, mechanic work, and product design and fabrication. <br />
                            I can always be found at the gym.</p>
                        <Link to="/motorcycle" className={styles.bikeCta}>
                            <span className={styles.bikeCtaIcon} aria-hidden="true">🏍️</span>
                            Watch me ride
                            <span className={styles.bikeCtaArrow} aria-hidden="true">→</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
