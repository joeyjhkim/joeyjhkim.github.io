import { useEffect, useState } from "react";

// Tracks which section is currently in view so the navbar can highlight it.
// Returns the id of the active section (or "" before any is reached).
export const useScrollSpy = (sectionIds, { offset = 80 } = {}) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    let ticking = false;
    const update = () => {
      ticking = false;
      const scrollPos = window.scrollY + offset + 1;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      // Snap to the last section once the page is scrolled to the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = sectionIds[sectionIds.length - 1];
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};
