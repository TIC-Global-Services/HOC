import React from "react";

import img1 from "../../../../assets/client/padlr/img/heroImg1.png";
import img2 from "../../../../assets/client/padlr/img/heroImg2.png";
import img3 from "../../../../assets/client/padlr/img/heroImg3.png";
import img4 from "../../../../assets/client/padlr/img/heroImg4.png";

import GridOverlay from "../../../GridOverlay";

const IMGS = {
  circle: img1,
  bat: img2,
  spring: img3,
  can: img4,
};

const ROWS = [
  [{ t: "can", x: 60, s: 100, r: 0 }],
  [
    { t: "spring", x: 40, s: 100, r: -30 },
    { t: "bat", x: 60, s: 100, r: 0 },
    { t: "spring", x: 70, s: 100, r: 30 },
  ],
  [
    { t: "can", x: 30, s: 100, r: -18 },
    { t: "circle", x: 45, s: 99, r: 8 },
    { t: "bat", x: 60, s: 100, r: 0 },
    { t: "circle", x: 75, s: 99, r: 8 },
  ],
  [
    { t: "bat", x: 25, s: 100, r: 26 },
    { t: "spring", x: 38, s: 100, r: -20 },
    { t: "can", x: 48, s: 99, r: 5 },
    { t: "circle", x: 58, s: 100, r: 0 },
    { t: "bat", x: 75, s: 100, r: 26 },
  ],
  [
    { t: "spring", x: 20, s: 100, r: 26 },
    { t: "can", x: 35, s: 100, r: -20 },
    { t: "circle", x: 55, s: 99, r: 5 },
    { t: "spring", x: 65, s: 100, r: 0 },
    { t: "bat", x: 75, s: 100, r: 26 },
    { t: "can", x: 85, s: 100, r: -20 },
  ],
  [
    { t: "can", x: 15, s: 100, r: -26 },
    { t: "circle", x: 35, s: 99, r: 12 },
    { t: "spring", x: 45, s: 100, r: 0 },
    { t: "bat", x: 55, s: 100, r: -24 },
    { t: "can", x: 65, s: 100, r: 18 },
    { t: "circle", x: 75, s: 99, r: 5 },
    { t: "bat", x: 85, s: 100, r: -24 },
    { t: "circle", x: 90, s: 99, r: 5 },
  ],
  [
    { t: "bat", x: 5, s: 100, r: 0 },
    { t: "spring", x: 15, s: 100, r: -10 },
    { t: "bat", x: 30, s: 100, r: 0 },
    { t: "can", x: 40, s: 100, r: 0 },
    { t: "circle", x: 50, s: 99, r: 5 },
    { t: "spring", x: 60, s: 100, r: 0 },
    { t: "can", x: 75, s: 100, r: 0 },
    { t: "spring", x: 85, s: 100, r: 0 },
  ],
];

//Mobile spacing
const ROW_Y = ["20vh", "28vh", "38vh", "48vh", "58vh", "66vh", "75vh"];

export default function MobOwnTheCourt() {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden bg-white">

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
                width={item.s * 1}
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