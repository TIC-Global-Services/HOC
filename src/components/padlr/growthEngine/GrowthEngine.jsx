import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "../growthEngine/panels/Section1";
import Section2 from "../growthEngine/panels/Section2";
import Section3 from "../growthEngine/panels/Section3";
import Section4 from "./panels/Section4";

gsap.registerPlugin(ScrollTrigger);

export default function CourtSky() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const wrapper = wrapperRef.current;

      if (!track || !wrapper) return;

      // USE REAL TRACK WIDTH
      const totalScroll =
        track.scrollWidth - window.innerWidth;

      if (totalScroll <= 0) return;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
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

    return () => {
      ctx.revert();

      if (trackRef.current) {
        gsap.set(trackRef.current, {
          clearProps: "all",
        });
      }
    };
  }, []);

  return (
    <section ref={wrapperRef}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex h-full"
        >

          {/* SECTION 1 */}
          <div className="w-[120vw] h-full flex-shrink-0">
            <Section1 />
          </div>

          {/* SECTION 2 */}
          <div className="w-[100vw] h-full flex-shrink-0">
            <Section2 />
          </div>

          {/* AUTO WIDTH IMAGE SECTION */}
          <div className="h-full flex-shrink-0">
            <Section4 />
          </div>

          {/* SECTION 3 */}
          <div className="w-[40vw] h-full flex-shrink-0">
            <Section3 />
          </div>

        </div>
      </div>
    </section>
  );
}