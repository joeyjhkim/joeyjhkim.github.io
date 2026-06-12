import { useLocation, useNavigate } from "react-router-dom";

// In-page section navigation that coexists with HashRouter: plain
// `href="#about"` anchors would be interpreted as routes, so section
// links scroll directly when on the home page and otherwise navigate
// home with the target section in route state (Home scrolls on mount).
export const useSectionNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId) => (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };
};
