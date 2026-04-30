import React from "react";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import img1 from "../../../../assets/client/syedBawkher/img/heroImg1.png";
import img2 from "../../../../assets/client/syedBawkher/img/heroImg2.png";
import img3 from "../../../../assets/client/syedBawkher/img/heroImg3.png";
import img4 from "../../../../assets/client/syedBawkher/img/heroImg4.png";
import img5 from "../../../../assets/client/syedBawkher/img/elegantPairImg.png";
import img6 from "../../../../assets/client/syedBawkher/img/signatureImg.png";

const IMGS = {
  circleB: img1,
  elpairing: img2,
  textural: img3,
  circleW: img4,
  elegant: img5,
  signature: img6,
};

const ROWS = [
  [{ t: "textural", x: 62, s: 164, r: 0 }],
  [{ t: "circleB", x: 62, s: 164, r: 0 }],
  [
    { t: "elpairing", x: 50, s: 222, r: -30 },
    { t: "circleW", x: 63, s: 144, r: 0 },
    { t: "signature", x: 70, s: 222, r: 0 },
  ],
  [
    { t: "circleB", x: 44, s: 164, r: -18 },
    { t: "circleW", x: 59, s: 99, r: 8 },
    { t: "textural", x: 73, s: 144, r: 0 },
    { t: "signature", x: 80, s: 99, r: 8 },
  ],
  [
    { t: "elegant", x: 37, s: 222, r: 26 },
    { t: "elpairing", x: 51, s: 164, r: -20 },
    { t: "circleB", x: 64, s: 99, r: 5 },
    { t: "textural", x: 77, s: 222, r: 0 },
    { t: "signature", x: 83, s: 144, r: 26 },
    { t: "circleW", x: 90, s: 164, r: -20 },
  ],
  [
    { t: "elpairing", x: 30, s: 164, r: -26 },
    { t: "circleW", x: 43, s: 99, r: 12 },
    { t: "textural", x: 55, s: 222, r: 0 },
    { t: "signature", x: 66, s: 144, r: -24 },
    { t: "elegant", x: 78, s: 164, r: 18 },
    { t: "signature", x: 84, s: 99, r: 5 },
    { t: "circleB", x: 87, s: 144, r: -24 },
    { t: "textural", x: 95, s: 99, r: 5 },
  ],
  [
    { t: "circleB", x: 5, s: 144, r: 0 },
    { t: "signature", x: 15, s: 222, r: -10 },
    { t: "elpairing", x: 32, s: 144, r: 0 },
    { t: "circleW", x: 46, s: 164, r: 0 },
    { t: "textural", x: 60, s: 99, r: 5 },
    { t: "elegant", x: 66, s: 222, r: 0 },
    { t: "circleW", x: 82, s: 164, r: 0 },
    { t: "elpairing", x: 92, s: 222, r: 0 },
  ],
];

const ROW_Y = ["15vh", "25vh", "35vh", "45vh", "55vh", "65vh", "75vh"];

export default function MobSyedTheCourt() {
  return (
    <section
      className="w-full h-[80vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* HEADING */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[60px] z-10 salo text-[#262666] text-[30px] leading-none uppercase text-center">
        OWN THE COURT
      </h2>

      <div className="w-full relative h-full">
        {ROWS.map((row, ri) =>
          row.map((item, i) => {
            const flatIndex =
              ROWS.slice(0, ri).reduce((acc, r) => acc + r.length, 0) + i;

            return (
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
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}