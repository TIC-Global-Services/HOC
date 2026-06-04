import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const img1 = "https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg1.png";
const img2 = "https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg2.png";
const img3  ="https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg3.png";
const img4 = "https://ik.imagekit.io/hoc01/assets/client/padlr/heroImg4.png";

import GridOverlay from "../../../GridOverlay";

const IMGS = {
  circle: img1,
  bat: img2,
  spring: img3,
  can: img4,
};

const ROWS = [
  [{ t: "can", x: 60, s: 100, r: 0, d: 0.05 }],
  [
    { t: "spring", x: 40, s: 100, r: -30, d: 0.22 },
    { t: "bat", x: 60, s: 100, r: 0, d: 0.32 },
    { t: "spring", x: 70, s: 100, r: 30, d: 0.22 },
  ],
  [
    { t: "can", x: 30, s: 100, r: -18, d: 0.46 },
    { t: "circle", x: 45, s: 99, r: 8, d: 0.56 },
    { t: "bat", x: 60, s: 100, r: 0, d: 0.66 },
    { t: "circle", x: 75, s: 99, r: 8, d: 0.56 },
  ],
  [
    { t: "bat", x: 25, s: 100, r: 26, d: 0.8 },
    { t: "spring", x: 38, s: 100, r: -20, d: 0.9 },
    { t: "can", x: 48, s: 99, r: 5, d: 1.0 },
    { t: "circle", x: 58, s: 100, r: 0, d: 1.1 },
    { t: "bat", x: 75, s: 100, r: 26, d: 0.8 },
  ],
  [
    { t: "spring", x: 20, s: 100, r: 26, d: 1.22 },
    { t: "can", x: 35, s: 100, r: -20, d: 1.32 },
    { t: "circle", x: 55, s: 99, r: 5, d: 1.42 },
    { t: "spring", x: 65, s: 100, r: 0, d: 1.52 },
    { t: "bat", x: 75, s: 100, r: 26, d: 1.22 },
    { t: "can", x: 85, s: 100, r: -20, d: 1.32 },
  ],
  [
    { t: "can", x: 15, s: 100, r: -26, d: 1.74 },
    { t: "circle", x: 35, s: 99, r: 12, d: 1.84 },
    { t: "spring", x: 45, s: 100, r: 0, d: 1.94 },
    { t: "bat", x: 55, s: 100, r: -24, d: 2.04 },
    { t: "can", x: 65, s: 100, r: 18, d: 2.14 },
    { t: "circle", x: 75, s: 99, r: 5, d: 2.24 },
    { t: "bat", x: 85, s: 100, r: -24, d: 2.04 },
    { t: "circle", x: 90, s: 99, r: 5, d: 2.24 },
  ],
  [
    { t: "bat", x: 5, s: 100, r: 0, d: 2.46 },
    { t: "spring", x: 15, s: 100, r: -10, d: 2.56 },
    { t: "bat", x: 30, s: 100, r: 0, d: 2.66 },
    { t: "can", x: 40, s: 100, r: 0, d: 2.76 },
    { t: "circle", x: 50, s: 99, r: 5, d: 2.86 },
    { t: "spring", x: 60, s: 100, r: 0, d: 2.96 },
    { t: "can", x: 75, s: 100, r: 0, d: 3.06 },
    { t: "spring", x: 85, s: 100, r: 0, d: 3.06 },
  ],
];

//Mobile spacing
const ROW_Y = ["20vh", "28vh", "38vh", "48vh", "58vh", "66vh", "75vh"];

export default function MobOwnTheCourt() {
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
    <section ref={containerRef} className="w-full h-[80vh] relative overflow-hidden bg-white">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* MOBILE HEADING */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[70px] z-10 salo text-[#7ac9f0] text-[30px] uppercase text-center leading-none">
        OWN THE COURT
      </h2>

      {/* STATIC GRID */}
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
                    width={item.s * 1}
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
