import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function smoothScrollTo(top, duration = 700) {
  const start = window.scrollY || window.pageYOffset;
  const distance = top - start;
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollTo(0, 700);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
