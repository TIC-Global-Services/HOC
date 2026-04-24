import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "../raksLearn/panels/Section1";
import Section2 from "../raksLearn/panels/Section2";
import Section3 from "../raksLearn/panels/Section3";
import Section4 from "../raksLearn/panels/Section4";
import Section5 from "../raksLearn/panels/Section5";
import Section6 from "../raksLearn/panels/Section6";
import Section7 from "../raksLearn/panels/Section7";
import Section8 from "../raksLearn/panels/Section8";

gsap.registerPlugin(ScrollTrigger);

export default function RaksLearning() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  // ── Tune each section's width in vw ──
  const sectionWidths = [120, 120, 100, 100, 100, 150, 150, 200];
  const totalWidth = sectionWidths.reduce((a, b) => a + b, 0); 

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const wrapper = wrapperRef.current;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const sections = [
    { Component: Section1, width: sectionWidths[0] },
    { Component: Section2, width: sectionWidths[1] },
    { Component: Section3, width: sectionWidths[2] },
    { Component: Section4, width: sectionWidths[3] },
    { Component: Section5, width: sectionWidths[4] },
    { Component: Section6, width: sectionWidths[5] },
    { Component: Section7, width: sectionWidths[6] },
    { Component: Section8, width: sectionWidths[7] },
  ];

  return (
    <section ref={wrapperRef}>
      <div className="sticky top-0 h-screen overflow-visible">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${totalWidth}vw` }}
        >
          {sections.map(({ Component, width }, i) => (
            <div
              key={i}
              className="h-full flex-shrink-0"
              style={{ width: `${width}vw` }}
            >
              <Component />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}