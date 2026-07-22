import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll management for route changes.
 *
 * React Router does NOT emulate native hash-anchor scrolling: a <Link
 * to="/#contact"> updates the URL and nothing else. So hash navigation is
 * handled here — including cross-page (e.g. /work → /#contact), where the
 * target element doesn't exist until the destination page has rendered, hence
 * the retry loop over animation frames.
 *
 * `key` is in the deps deliberately: clicking the same anchor twice pushes a
 * new history entry with an identical pathname+hash, and it should scroll
 * again both times.
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // Offset comes from CSS scroll-padding-top / scroll-mt on targets;
          // smoothness from the html scroll-behavior rule (which reduced
          // motion already downgrades to auto).
          el.scrollIntoView();
        } else if (attempts++ < 30) {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
