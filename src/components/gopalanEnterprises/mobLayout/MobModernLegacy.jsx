import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import img1 from "../../../assets/client/gopalan/heroImg1.png";
import img2 from "../../../assets/client/gopalan/heroImg2.png";
import img3 from "../../../assets/client/gopalan/heroImg3.png";
import img4 from "../../../assets/client/gopalan/heroImg4.png";
import GridOverlay from "../../../components/GridOverlay";


const IMGS = {
  minimal: img1,
  evolution: img2,
  quality: img3,
  stroke: img4,
};

const ROWS = [
  [{ t: "quality", x: 60, s: 100, r: 0, d: 0.05 }],
  [{ t: "quality", x: 60, s: 100, r: 20, d: 0.2 }],
  [
    { t: "evolution", x: 50, s: 100, r: 0, d: 0.4 },
    { t: "quality", x: 60, s: 100, r: 30, d: 0.5 },
    { t: "quality", x: 70, s: 100, r: 30, d: 0.6 },
  ],
  [
    { t: "evolution", x: 40, s: 100, r: 0, d: 0.8 },
    { t: "minimal", x: 55, s: 150, r: 20, d: 0.9 },
    { t: "stroke", x: 75, s: 100, r: 0, d: 1.0 },
  ],
  [
    { t: "stroke", x: 30, s: 100, r: 0, d: 1.2 },
    { t: "quality", x: 50, s: 100, r: 30, d: 1.3 },
    { t: "quality", x: 65, s: 100, r: 30, d: 1.4 },
    { t: "stroke", x: 80, s: 100, r: 0, d: 1.5 },
  ],
  [
    { t: "stroke", x: 20, s: 100, r: 0, d: 1.7 },
    { t: "evolution", x: 40, s: 100, r: 12, d: 1.8 },
    { t: "quality", x: 60, s: 100, r: 0, d: 1.9 },
    { t: "quality", x: 75, s: 100, r: -24, d: 2.0 },
  ],
  [
    { t: "minimal", x: 15, s: 120, r: 0, d: 2.2 },
    { t: "minimal", x: 35, s: 120, r: -10, d: 2.3 },
    { t: "evolution", x: 60, s: 100, r: 0, d: 2.4 },
    { t: "evolution", x: 75, s: 100, r: 0, d: 2.5 },
  ],
];

//better mobile spacing
const ROW_Y = ["22vh","27vh", "35vh", "45vh", "57vh", "68vh", "78vh"];

export default function MobModernLegacy() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = (el, index) => {
    if (el) itemRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const tl = gsap.timeline();
    let index = 0;

    ROWS.forEach((row) => {
      row.forEach((item) => {
        const el = itemRefs.current[index++];
        if (!el) return;

        gsap.set(el, {
          y: -window.innerHeight,
          opacity: 0,
        });

        tl.to(
          el,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.5)",
          },
          item.d
        );
      });
    });
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="w-full h-[85vh] relative overflow-hidden"
    >
        <GridOverlay
            color="0,0,0"
            opacity={0.15}
            size={100}
            position="99px 0px"
          />
      {/* MOBILE HEADING */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[75px] z-10 salo text-[#E96428] text-[30px] uppercase text-center leading-none">
        MODERN LEGACY
      </h2>

      {/* STATIC IMAGES */}
      <div className="w-full relative h-full">
        {isVisible &&
          ROWS.map((row, ri) =>
            row.map((item, i) => {
              const flatIndex =
                ROWS.slice(0, ri).reduce((acc, r) => acc + r.length, 0) + i;

              return (
                <div
                  key={`${ri}-${i}`}
                  ref={(el) => setRef(el, flatIndex)}
                  style={{
                    position: "absolute",
                    left: `${item.x}%`,
                    top: ROW_Y[ri],
                    transform: `translate(-50%, -50%) rotate(${item.r}deg)`,
                  }}
                >
                  <img
                    src={IMGS[item.t]}
                    alt=""
                    width={item.s * 1.2}
                    draggable={false}
                    style={{
                      display: "block",
                      filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              );
            })
          )}
      </div>
    </section>
  );
}
