import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // ⏳ slightly slower for smoother feel
      easing: (t) => 1 - Math.pow(1 - t, 3), // 🎢 smooth cubic easing
      smooth: true,
      smoothTouch: true, // also smooth on touch devices
      touchMultiplier: 1.5, // softer touch scroll
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
