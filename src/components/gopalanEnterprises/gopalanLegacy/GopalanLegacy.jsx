import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section8 from "./Section8";
import Section9 from "./Section9";
import WannaSec from "./WannaSec";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section7 from "./Section7";
import Section12 from "./Section12";

gsap.registerPlugin(ScrollTrigger);

export default function GopalanLegacy() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const wrapper = wrapperRef.current;

      if (!track || !wrapper) return;

      const totalScroll =
        track.scrollWidth - window.innerWidth;

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

      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef}>
      
      {/* VIEWPORT */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex h-full w-max"
        >

          {/* GROUP 1 */}
          <div className="flex h-full shrink-0">

            <div className="w-[150vw] h-full shrink-0">
              <Section1 />
            </div>

            <div className="w-[80vw] h-full shrink-0">
              <Section2 />
            </div>

            {/* AUTO WIDTH */}
            <div
              className="h-full shrink-0"
              style={{
                minWidth: "fit-content",
              }}
            >
              <Section3 />
            </div>

            <div className="w-[40vw] h-full shrink-0">
              <Section4 />
            </div>

          </div>

          {/* GROUP 2 */}
          <div className="flex h-full shrink-0">

            {/* AUTO WIDTH */}
            <div
              className="h-full shrink-0"
              style={{
                minWidth: "fit-content",
              }}
            >
              <Section5 />
            </div>

            <div className="w-[50vw] h-full shrink-0">
              <Section6 />
            </div>

            <div className="w-[100vw] h-full shrink-0">
              <Section7 />
            </div>

            <div className="w-[30vw] h-full shrink-0">
              <Section12 />
            </div>

            <div className="w-[55vw] h-full shrink-0">
              <Section8 />
            </div>

            <div className="w-[100vw] h-full shrink-0">
              <Section9 />
            </div>

          </div>

          {/* GROUP 3 */}
          <div className="flex h-full shrink-0">

            <div className="w-[60vw] h-full shrink-0">
              <WannaSec />
            </div>

            <div
              className="w-[50vw] h-screen shrink-0"
            >
              <Section10 />
            </div>

            <div className="w-[40vw] h-screen shrink-0">
              <Section11 />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}