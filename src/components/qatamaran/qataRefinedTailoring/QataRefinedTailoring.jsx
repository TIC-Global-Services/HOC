import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from "../qataRefinedTailoring/panels/Section";
import Section1 from "../qataRefinedTailoring/panels/Section1";
import Section2 from "../qataRefinedTailoring/panels/Section2";
import Section3 from "../qataRefinedTailoring/panels/Section3";
import Section4 from "../qataRefinedTailoring/panels/Section4";
import Section5 from "../qataRefinedTailoring/panels/Section5";

gsap.registerPlugin(ScrollTrigger);

export default function QataRefinedTailoring() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const track = trackRef.current;

    // correct width based on children
    const totalScroll = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => {
  ctx.revert();

  ScrollTrigger.getAll().forEach(t => t.kill(true));
  gsap.killTweensOf("*");

  if (trackRef.current) {
    gsap.set(trackRef.current, { x: 0 });
  }
};
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full">
          {/* SECTION GROUP */}
          <div
            className="flex h-full"
            style={{ width: "150vw", flexShrink: 0 }}
          >
            <div style={{ width: "50vw", height: "100%" }}>
              <Section />
            </div>

            <div style={{ width: "100vw", height: "100%" }}>
              <Section1 />
            </div>
          </div>

          <div
            className="flex h-full"
            style={{ width: "140vw", flexShrink: 0 }}
          >
            <div style={{ width: "40vw", height: "100%" }}>
              <Section2 />
            </div>

            <div style={{ width: "100vw", height: "100%" }}>
              <Section3 />
            </div>
          </div>

          <div
            className="flex h-full"
            style={{ width: "130vw", flexShrink: 0 }}
          >
            <div style={{ width: "100vw", height: "100%" }}>
              <Section4 />
            </div>

            <div style={{ width: "30vw", height: "100%" }}>
              <Section5 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
