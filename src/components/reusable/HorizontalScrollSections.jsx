"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection({ children, id }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel", trackRef.current);

      if (!panels.length) {
        console.warn("No panels found");
        return;
      }

      gsap.to(trackRef.current, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () =>
            "+=" +
            containerRef.current.offsetWidth * (panels.length - 1),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-hidden relative"
    >
      <div ref={trackRef} className="flex h-full">
        {children}
      </div>
    </section>
  );
}