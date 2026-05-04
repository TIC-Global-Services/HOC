import React from "react";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import img1 from "../../../../assets/client/raks/img/heroImg1.png";
import img2 from "../../../../assets/client/raks/img/heroImg2.png";
import img3 from "../../../../assets/client/raks/img/heroImg3.png";
import img4 from "../../../../assets/client/raks/img/heroImg4.png";
import img5 from "../../../../assets/client/raks/img/raksLearn.png";

const IMGS = {
  vivid: img1,
  play: img2,
  innocence: img3,
  pragma: img4,
  raks: img5,
};

const ROWS = [
  [{ t: "vivid", x: 60, s: 100, r: -30 }],
  [
    { t: "play", x: 50, s: 100, r: -30 },
    { t: "play", x: 65, s: 100, r: 30 },
  ],
  [
    { t: "raks", x: 50, s: 100, r: -30 },
    { t: "raks", x: 70, s: 100, r: 0 },
  ],
  [
    { t: "play", x: 25, s: 100, r: -18 },
    { t: "pragma", x: 40, s: 100, r: 8 },
    { t: "innocence", x: 62, s: 100, r: 0 },
    { t: "pragma", x: 78, s: 100, r: 8 },
  ],
  [
    { t: "innocence", x: 15, s: 100, r: 0 },
    { t: "pragma", x: 35, s: 100, r: -20 },
    { t: "vivid", x: 45, s: 100, r: -20 },
    { t: "vivid", x: 65, s: 100, r: 20 },
    { t: "innocence", x: 75, s: 100, r: 20 },
  ],
  [
    { t: "raks", x: 15, s: 100, r: -26 },
    { t: "vivid", x: 35, s: 100, r: 20 },
    { t: "raks", x: 45, s: 100, r: 5 },
    { t: "innocence", x: 55, s: 100, r: 0 },
    { t: "pragma", x: 65, s: 100, r: -26 },
    { t: "vivid", x: 80, s: 100, r: 20 },
  ],
  [
    { t: "innocence", x: 15, s: 100, r: 0 },
    { t: "raks", x: 25, s: 100, r: 12 },
    { t: "pragma", x: 35, s: 100, r: 0 },
    { t: "vivid", x: 45, s: 100, r: -24 },
    { t: "innocence", x: 65, s: 100, r: 0 },
    { t: "play", x: 80, s: 100, r: -18 },
  ],
];

const ROW_Y = ["30vh", "38vh", "46vh", "52vh", "58vh", "66vh", "72vh"];

export default function MobRaksOwnTheCourt() {
  return (
    <section
      className="w-full h-[80vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      {/* HEADING */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[80px] z-10 salo text-[#000085] text-[30px] uppercase leading-none text-center">
        OWN THE COURT
      </h2>

      <div className="w-full relative h-full">
        {ROWS.map((row, ri) =>
          row.map((item, i) => {
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
                  width={item.s * 1}
                  draggable={false}
                  className="block"
                />
              </div>
            );
          }),
        )}
      </div>
    </section>
  );
}
