import React from "react";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import img1 from "../../../../assets/client/qatamaran/heroFloat1.png";
import img2 from "../../../../assets/client/qatamaran/heroFloat2.png";
import img3 from "../../../../assets/client/qatamaran/heroFloat3.png";
import img4 from "../../../../assets/client/qatamaran/heroFloat4.png";

const IMGS = {
  circle: img1,
  bat: img2,
  spring: img3,
  can: img4,
};

const ROWS = [
  [{ t: "can", x: 60, s: 164, r: 0 }],
  [
    { t: "spring", x: 50, s: 222, r: -30 },
    { t: "bat", x: 60, s: 144, r: 0 },
    { t: "spring", x: 70, s: 222, r: 30 },
  ],
  [
    { t: "can", x: 40, s: 164, r: -18 },
    { t: "circle", x: 50, s: 99, r: 8 },
    { t: "bat", x: 60, s: 144, r: 0 },
    { t: "circle", x: 70, s: 99, r: 8 },
  ],
  [
    { t: "spring", x: 35, s: 222, r: 26 },
    { t: "can", x: 45, s: 164, r: -20 },
    { t: "circle", x: 55, s: 99, r: 5 },
    { t: "spring", x: 65, s: 222, r: 0 },
    { t: "bat", x: 75, s: 144, r: 26 },
    { t: "can", x: 85, s: 164, r: -20 },
  ],
  [
    { t: "can", x: 25, s: 164, r: -26 },
    { t: "circle", x: 35, s: 99, r: 12 },
    { t: "spring", x: 45, s: 222, r: 0 },
    { t: "bat", x: 55, s: 144, r: -24 },
    { t: "can", x: 65, s: 164, r: 18 },
    { t: "circle", x: 75, s: 99, r: 5 },
    { t: "bat", x: 85, s: 144, r: -24 },
    { t: "circle", x: 90, s: 99, r: 5 },
  ],
  [
    { t: "bat", x: 5, s: 144, r: 0 },
    { t: "spring", x: 15, s: 222, r: -10 },
    { t: "bat", x: 30, s: 144, r: 0 },
    { t: "can", x: 40, s: 164, r: 0 },
    { t: "circle", x: 50, s: 99, r: 5 },
    { t: "spring", x: 60, s: 222, r: 0 },
    { t: "can", x: 75, s: 164, r: 0 },
    { t: "spring", x: 85, s: 222, r: 0 },
  ],
];

//better mobile spacing
const ROW_Y = ["18vh", "32vh", "45vh", "58vh", "70vh", "78vh"];

export default function MobQataOwnTheCourt() {
  return (
    <section
      className="w-full h-[80vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* MOBILE HEADING */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[60px] z-10 salo text-[#1E382D] text-[30px] uppercase text-center leading-none">
        OWN THE COURT
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
                width={item.s * 0.8}
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