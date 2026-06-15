import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Hero } from "../Hero/Hero";
import { Stats } from "../Stats/Stats";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};
