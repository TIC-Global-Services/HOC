import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../../../assets/client/syedBawkher/img/heroImg4.png";
import img5 from "../../../../assets/client/syedBawkher/img/elegantPairImg.png";
import img6 from "../../../../assets/client/syedBawkher/img/signatureImg.png";

import GridOverlay from "../../../GridOverlay";

const IMGS = {
  circleB: img1,
  elpairing: img2,
  textural: img3,
  circleW: img4,
  elegant: img5,
  signature: img6,
};

const ROWS = [
  [{ t: "textural", x: 62, s: 164, r: 0, d: 0.05 }],
  [{ t: "circleB", x: 62, s: 164, r: 0, d: 0.2 }],
  [
    { t: "elpairing", x: 50, s: 222, r: -30, d: 0.4 },
    { t: "circleW", x: 63, s: 144, r: 0, d: 0.5 },
    { t: "signature", x: 70, s: 222, r: 0, d: 0.6 },
  ],
  [
    { t: "circleB", x: 44, s: 164, r: -18, d: 0.8 },
    { t: "circleW", x: 59, s: 99, r: 8, d: 0.9 },
    { t: "textural", x: 73, s: 144, r: 0, d: 1.0 },
    { t: "signature", x: 80, s: 99, r: 8, d: 1.1 },
  ],
  [
    { t: "elegant", x: 37, s: 222, r: 26, d: 1.3 },
    { t: "elpairing", x: 51, s: 164, r: -20, d: 1.4 },
    { t: "circleB", x: 64, s: 99, r: 5, d: 1.5 },
    { t: "textural", x: 77, s: 222, r: 0, d: 1.6 },
    { t: "signature", x: 83, s: 144, r: 26, d: 1.7 },
    { t: "circleW", x: 90, s: 164, r: -20, d: 1.8 },
  ],
  [
    { t: "elpairing", x: 30, s: 164, r: -26, d: 2.0 },
    { t: "circleW", x: 43, s: 99, r: 12, d: 2.1 },
    { t: "textural", x: 55, s: 222, r: 0, d: 2.2 },
    { t: "signature", x: 66, s: 144, r: -24, d: 2.3 },
    { t: "elegant", x: 78, s: 164, r: 18, d: 2.4 },
    { t: "signature", x: 84, s: 99, r: 5, d: 2.5 },
    { t: "circleB", x: 87, s: 144, r: -24, d: 2.6 },
    { t: "textural", x: 95, s: 99, r: 5, d: 2.7 },
  ],
  [
    { t: "circleB", x: 5, s: 144, r: 0, d: 2.9 },
    { t: "signature", x: 15, s: 222, r: -10, d: 3.0 },
    { t: "elpairing", x: 32, s: 144, r: 0, d: 3.1 },
    { t: "circleW", x: 46, s: 164, r: 0, d: 3.2 },
    { t: "textural", x: 60, s: 99, r: 5, d: 3.3 },
    { t: "elegant", x: 66, s: 222, r: 0, d: 3.4 },
    { t: "circleW", x: 82, s: 164, r: 0, d: 3.5 },
    { t: "elpairing", x: 92, s: 222, r: 0, d: 3.6 },
  ],
];

const ROW_Y = [
  "21vh",
  "30vh",
  "40vh",
  "50vh",
  "60vh",
  "70vh",
  "80vh",
];

export default function MobSyedTheCourt() {
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
      className="w-full h-[85vh] relative overflow-hidden bg-white"
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
          top-[70px]
          z-10
          salo
          text-[#262666]
          text-[30px]
          leading-none
          uppercase
          text-center
        "
      >
        REFINED IDENTITY
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
                    width={item.s * 0.7}
                    draggable={false}
                  />
                </div>
              );
            })
          )}
      </div>
    </section>
  );
}
