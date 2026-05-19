import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/client/raks/img/heroImg1.png";
import img2 from "../../../../assets/client/raks/img/heroImg2.png";
import img3 from "../../../../assets/client/raks/img/heroImg3.png";
import img4 from "../../../../assets/client/raks/img/heroImg4.png";
import img5 from "../../../../assets/client/raks/img/raksLearn.png";

import GridOverlay from "../../../GridOverlay";

const IMGS = {
  vivid: img1,
  play: img2,
  innocence: img3,
  pragma: img4,
  raks: img5,
};

const ROWS = [
  [{ t: "vivid", x: 60, s: 100, r: -30, d: 0.05 }],
  [
    { t: "play", x: 50, s: 100, r: -30, d: 0.22 },
    { t: "play", x: 65, s: 100, r: 30, d: 0.22 },
  ],
  [
    { t: "raks", x: 50, s: 100, r: -30, d: 0.42 },
    { t: "raks", x: 70, s: 100, r: 0, d: 0.42 },
  ],
  [
    { t: "pragma", x: 35, s: 100, r: -20, d: 0.62 },
    { t: "vivid", x: 45, s: 100, r: -20, d: 0.72 },
    { t: "vivid", x: 65, s: 100, r: 20, d: 0.72 },
    { t: "innocence", x: 75, s: 100, r: 20, d: 0.62 },
  ],
  [
    { t: "play", x: 25, s: 100, r: -18, d: 0.92 },
    { t: "pragma", x: 40, s: 100, r: 8, d: 1.02 },
    { t: "innocence", x: 62, s: 100, r: 0, d: 1.02 },
    { t: "pragma", x: 78, s: 100, r: 8, d: 0.92 },
  ],
  [
    { t: "innocence", x: 15, s: 100, r: 0, d: 1.22 },
    { t: "pragma", x: 35, s: 100, r: -20, d: 1.32 },
    { t: "vivid", x: 45, s: 100, r: -20, d: 1.42 },
    { t: "vivid", x: 65, s: 100, r: 20, d: 1.42 },
    { t: "innocence", x: 75, s: 100, r: 20, d: 1.32 },
  ],
  [
    { t: "raks", x: 15, s: 100, r: -26, d: 1.62 },
    { t: "vivid", x: 35, s: 100, r: 20, d: 1.72 },
    { t: "raks", x: 45, s: 100, r: 5, d: 1.82 },
    { t: "innocence", x: 55, s: 100, r: 0, d: 1.82 },
    { t: "pragma", x: 65, s: 100, r: -26, d: 1.72 },
    { t: "vivid", x: 80, s: 100, r: 20, d: 1.62 },
  ],
  [
    { t: "innocence", x: 15, s: 100, r: 0, d: 2.02 },
    { t: "raks", x: 25, s: 100, r: 12, d: 2.12 },
    { t: "pragma", x: 35, s: 100, r: 0, d: 2.22 },
    { t: "vivid", x: 45, s: 100, r: -24, d: 2.32 },
    { t: "innocence", x: 65, s: 100, r: 0, d: 2.32 },
    { t: "play", x: 80, s: 100, r: -18, d: 2.22 },
  ],
];

const ROW_Y = [
  "20vh",
  "30vh",
  "38vh",
  "44vh",
  "52vh",
  "60vh",
  "68vh",
  "75vh",
];

export default function MobRaksOwnTheCourt() {
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
      className="
        w-full
        h-[80vh]
        relative
        overflow-hidden
        bg-white
      "
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* HEADING */}
      <h2
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[65px]
          z-10
          salo
          text-[#000085]
          text-[30px]
          uppercase
          leading-none
          text-center
        "
      >
        YOUNG EXPLORERS
      </h2>

      <div className="w-full relative h-full z-10">

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
                    className="block"
                  />
                </div>
              );
            })
          )}
      </div>
    </section>
  );
}
