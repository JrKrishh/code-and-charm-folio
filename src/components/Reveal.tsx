import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-entrance wrapper. Adds a rise-in when the element first enters the
 * viewport, then disconnects — one-shot, no per-scroll work.
 *
 * Reduced motion is respected twice over: here (render visible immediately)
 * and in CSS, where the global reduced-motion block zeroes the transition.
 */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${shown ? "reveal-in" : "reveal-init"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
