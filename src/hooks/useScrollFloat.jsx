import { useEffect } from "react";
import gsap from "gsap";

const useScrollFloat = (ref, options = {}) => {
  const {
    xFactor = 0,
    yFactor = 0.6,
    rFactor = 0.3,
    ease = "power3.out",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.8, ease });
    const setY = gsap.quickTo(el, "y", { duration: 0.8, ease });
    const setR = gsap.quickTo(el, "rotation", { duration: 1, ease });

    let lastScrollY = window.scrollY;
    let velocity = 0;
    let raf;

    const tick = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      velocity += (delta - velocity) * 0.15;

      setX(velocity * xFactor);
      setY(velocity * yFactor);
      setR(velocity * rFactor);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref, xFactor, yFactor, rFactor, ease]);
};

export default useScrollFloat;