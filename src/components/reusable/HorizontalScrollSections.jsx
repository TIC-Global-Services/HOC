"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection({ panels, SharedLayer }) {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const TOTAL = panels.length;

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // scroll animation
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const totalWidth = window.innerWidth * (TOTAL - 1);

      // PANELS SCROLL
      gsap.to(trackRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: stickyRef.current,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={wrapperRef}
      style={{
        height: isMobile
          ? "auto"
          : `calc(100vh + ${(TOTAL - 1) * 100}vw)`,
        position: "relative",
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          overflow: "hidden",
        }}
      >
        {/* CONTINUITY LAYER */}
        {!isMobile && SharedLayer?.render?.()}

        {/* TRACK */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : `${TOTAL * 100}vw`,
            height: "100%",
          }}
        >
          {panels.map((PanelComponent, i) => (
            <div key={i} style={{ width: "100vw", height: "100vh" }}>
              <PanelComponent />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}