import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topLeftImg from "../../../assets/client/gopalan/heroImg2.png";
import topRightImg from "../../../assets/client/gopalan/heroImg4.png";
import GridOverlay from "../../GridOverlay";

const MobSection2 = () => {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);

  useScrollFloat(topLeftRef, {
    yFactor: 0.3,
    rFactor: 0.2,
  });

  useScrollFloat(topRightRef, {
    yFactor: 0.5,
    rFactor: 0.3,
  });

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col px-8 pt-10 pb-10">

        {/* TOP ICON ROW */}
        <div className="flex items-start justify-between">

          {/* TOP LEFT ICON */}
          <img
            ref={topLeftRef}
            src={topLeftImg}
            alt=""
            className="w-[110px] -rotate-12"
          />

          {/* TOP RIGHT ICON */}
          <img
            ref={topRightRef}
            src={topRightImg}
            alt=""
            className="w-[90px] rotate-12"
          />
        </div>

        {/* HEADING */}
        <div className="pt-20">
          <h2 className="salo text-start text-[#E96428] uppercase leading-none text-[50px]">
            Vision Driven <br /> Legacy Built
          </h2>
        </div>

        {/* PARA */}
        <div className="pt-10">
          <p className="jost text-start text-black/60 text-[16px] leading-[120%] max-w-[320px]">
            Timeless craftsmanship meets contemporary vision.
            Designed for those who value legacy, precision,
            and progress.
          </p>
        </div>

        {/* SUB HEAD */}
        <div className="pt-10">
          <p className="jost text-start uppercase text-black text-[25px] leading-[120%] tracking-tight font-[500]">
            MODERN LEGACY & <br /> REFINED STYLE
          </p>
        </div>

      </div>
    </section>
  );
};

export default MobSection2;