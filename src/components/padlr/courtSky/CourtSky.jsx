import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "../courtSky/panels/Section1";
import Section2 from "../courtSky/panels/Section2";
import Section3 from "../courtSky/panels/Section3";
import Section4 from "../courtSky/panels/Section4";
import Section5 from '../courtSky/panels/Section5';
import Section6 from '../courtSky/panels/Section6';
import Section7 from '../courtSky/panels/Section7';


gsap.registerPlugin(ScrollTrigger);

export default function CourtSky() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    // Fixed calculation — avoids sub-pixel scrollWidth issues on wide screens
    const totalScroll = window.innerWidth * 4.5;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex h-full"
        >

          {/* GROUP 1 — Section1 + Section2 = 200vw */}
          <div className="flex h-full" style={{ width: "200vw", flexShrink: 0 }}>
            <div style={{ width: "50vw", flexShrink: 0, height: "100%" }}>
              <Section1 />
            </div>
            <div style={{ width: "100vw", flexShrink: 0, height: "100%" }}>
              <Section2 />
            </div>
            <div style={{ width: "50vw", flexShrink: 0, height: "100%" }}>
              <Section5 />
            </div>
          </div>

          {/* GROUP 2 — Section3 + Section4 = 200vw */}
          <div className="flex h-full" style={{ width: "330vw", flexShrink: 0 }}>
            <div style={{ width: "100vw", flexShrink: 0, height: "100%" }}>
              <Section3 />
            </div>
            <div style={{ width: "80vw", flexShrink: 0, height: "100%" }}>
              <Section4 />
            </div>

            <div style={{ width: "100vw", flexShrink: 0, height: "100%" }}>
              <Section6 />
            </div>

            <div style={{ width: "50vw", flexShrink: 0, height: "100%" }}>
              <Section7 />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}