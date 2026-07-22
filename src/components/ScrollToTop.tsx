import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reset scroll on route change, but leave in-page anchors (#about, #contact)
 * alone so they still land on their section.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
