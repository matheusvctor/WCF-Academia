import { useState, useEffect } from "react";

interface UseParallaxOptions {
  speed?: number; // e.g. 0.2 means moves at 20% of scroll speed
  disabled?: boolean;
}

export function useParallax({ speed = 0.2, disabled = false }: UseParallaxOptions = {}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setOffset(scrollY * speed);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, disabled]);

  return offset;
}
