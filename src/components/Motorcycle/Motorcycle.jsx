import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Motorcycle.module.css";
import videos from "../../data/hobbies.json";

// Video entries live in src/data/hobbies.json:
// { "title": "...", "description": "...", "youtubeId": "dQw4w9WgXcQ" }
export const Motorcycle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.container}>
      <Link to="/" className={styles.back}>
        <span aria-hidden="true">←</span> Back to home
      </Link>
      <p className={styles.kicker}>Hobbies</p>
      <h2 className={styles.title}>Motorcycle Footage</h2>
      <p className={styles.intro}>
        Riding through the mountains — footage from the road.
      </p>

      {videos.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.road} aria-hidden="true">
            <span className={styles.bike}>🏍️</span>
          </div>
          <p className={styles.emptyTitle}>Footage coming soon</p>
          <p>Gear's on, GoPro's charging — clips from the canyon land here soon.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {videos.map((video) => (
            <div key={video.youtubeId} className={styles.videoCard}>
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title || "Motorcycle footage"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {video.title && <h3 className={styles.videoTitle}>{video.title}</h3>}
              {video.description && (
                <p className={styles.videoDesc}>{video.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
