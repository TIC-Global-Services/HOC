import React from "react";

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
  [{ t: "quality", x: 60, s: 100, r: 0 }],
  [{ t: "quality", x: 60, s: 100, r: 20 }],
  [
    { t: "evolution", x: 50, s: 100, r: 0 },
    { t: "quality", x: 60, s: 100, r: 30 },
    { t: "quality", x: 70, s: 100, r: 30 },
  ],
  [
    { t: "evolution", x: 40, s: 100, r: 0 },
    { t: "minimal", x: 55, s: 150, r: 20 },
    { t: "stroke", x: 75, s: 100, r: 0 },
  ],
  [
    { t: "stroke", x: 30, s: 100, r: 0 },
    { t: "quality", x: 50, s: 100, r: 30 },
    { t: "quality", x: 65, s: 100, r: 30 },
    { t: "stroke", x: 80, s: 100, r: 0 },
  ],
  [
    { t: "stroke", x: 20, s: 100, r: 0 },
    { t: "evolution", x: 40, s: 100, r: 12 },
    { t: "quality", x: 60, s: 100, r: 0 },
    { t: "quality", x: 75, s: 100, r: -24 },
  ],
  [
    { t: "minimal", x: 15, s: 120, r: 0 },
    { t: "minimal", x: 35, s: 120, r: -10 },
    { t: "evolution", x: 60, s: 100, r: 0 },
    { t: "evolution", x: 75, s: 100, r: 0 },
  ],
];

//better mobile spacing
const ROW_Y = ["22vh","27vh", "35vh", "45vh", "57vh", "68vh", "78vh"];

export default function MobModernLegacy() {
  return (
    <section
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
        {ROWS.map((row, ri) =>
          row.map((item, i) => (
            <div
              key={`${ri}-${i}`}
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
          ))
        )}
      </div>
    </section>
  );
}