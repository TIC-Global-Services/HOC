import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topLeftImg from "../../../assets/client/gopalan/heroImg2.png";
import GridOverlay from "../../GridOverlay";

const MobSection2 = () => {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);

  useScrollFloat(topLeftRef, { yFactor: 0.3, rFactor: 0.2 });
  useScrollFloat(topRightRef, { yFactor: 0.5, rFactor: 0.3 });
  useScrollFloat(bottomLeftRef, { yFactor: 0.7, rFactor: 0.4 });

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0" />

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* IMAGES */}
      <img
        ref={topLeftRef}
        src={topLeftImg}
        className="absolute top-[15%] left-[5%] w-[110px] -rotate-12"
      />

      {/* CONTENT */}
      <div
        className="absolute px-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
          width: "90%",
        }}
      >
        <div className="flex flex-col gap-10 text-start">
          <h2 className="salo text-[#E96428] uppercase leading-none text-[50px]">
            Vision Driven <br /> Legacy Built
          </h2>

          <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
            Timeless craftsmanship meets contemporary vision. Designed for those
            who value legacy, precision, and progress.
          </p>

          <p className="jost uppercase text-black text-[22px] leading-[120%] tracking-tight font-[500]">
            MODERN LEGACY & <br /> REFINED STYLE
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobSection2;
