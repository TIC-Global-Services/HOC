import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "../courtSky/panels/Section1";
import Section2 from "../courtSky/panels/Section2";
import Section3 from "../courtSky/panels/Section3";
import Section4 from "../courtSky/panels/Section4";
import Section5 from "../courtSky/panels/Section5";
// import Section6 from "../courtSky/panels/Section6";
import Section7 from "../courtSky/panels/Section7";
import Section8 from "./panels/Section8";
import Section9 from "./panels/Section9";

gsap.registerPlugin(ScrollTrigger);

export default function CourtSky() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

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
          invalidateOnRefresh: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* TRACK */}
        <div ref={trackRef} className="flex h-full w-max">
          {/* GROUP 1 */}
          <div className="flex h-full shrink-0">
            <div style={{ width: "50vw", flexShrink: 0 }}>
              <Section1 />
            </div>

            <div style={{ width: "100vw", flexShrink: 0 }}>
              <Section2 />
            </div>

            {/* AUTO WIDTH IMAGE */}
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <Section5 />
            </div>
          </div>

          {/* GROUP 2 */}
          <div className="flex h-full shrink-0">
            <div style={{ width: "85vw", flexShrink: 0 }}>
              <Section3 />
            </div>

            {/* AUTO WIDTH IMAGE */}
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <Section9 />
            </div>

            <div style={{ width: "40vw", flexShrink: 0 }}>
              <Section4 />
            </div>

            <div style={{ width: "50vw", flexShrink: 0 }}>
              <Section8 />
            </div>

            {/* AUTO WIDTH */}
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <Section7 />
            </div>

            {/* <div style={{ width: "60vw", flexShrink: 0 }}>
              <Section6 />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
