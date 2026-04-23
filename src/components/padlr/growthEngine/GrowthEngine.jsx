import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "../growthEngine/panels/Section1";
import Section2 from "../growthEngine/panels/Section2";
import Section3 from "../growthEngine/panels/Section3";

gsap.registerPlugin(ScrollTrigger);

export default function CourtSky() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const totalScroll = window.innerWidth * 2.5;

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

        {/* TRACK — 300vw */}
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: "350vw" }}
        >

          {/* SECTION 1 */}
          <div className="w-[120vw] h-full flex-shrink-0">
            <Section1 />
          </div>

          {/* SECTION 2 */}
          <div className="w-[140vw] h-full flex-shrink-0">
            <Section2 />
          </div>

          {/* SECTION 3 */}
          <div className="w-[90vw] h-full flex-shrink-0">
            <Section3 />
          </div>

        </div>
      </div>
    </section>
  );
}