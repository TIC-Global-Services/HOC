import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "./panels/Section1";
import Section2 from "./panels/Section2";
import Section3 from "./panels/Section3";

gsap.registerPlugin(ScrollTrigger);

export default function QataSaltSilk() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  // widths of each section in vw
  const sectionWidths = [120, 250, 100];
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
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

  }, wrapperRef);

  return () => {
  ctx.revert();

  ScrollTrigger.getAll().forEach(t => t.kill(true)); // remove pin
  gsap.killTweensOf("*");

  if (trackRef.current) {
    gsap.set(trackRef.current, { x: 0 });
  }
};
}, []);

  return (
    <section ref={wrapperRef}>
      <div className="h-screen overflow-hidden">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${totalWidth}vw` }}
        >
          <div className="w-[120vw] h-full flex-shrink-0">
            <Section1 />
          </div>

          <div className="w-[250vw] h-full flex-shrink-0">
            <Section2 />
          </div>

          <div className="w-[100vw] h-full flex-shrink-0">
            <Section3 />
          </div>
        </div>

      </div>
    </section>
  );
}