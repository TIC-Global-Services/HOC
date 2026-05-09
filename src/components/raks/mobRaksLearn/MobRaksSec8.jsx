import React from "react";

import topImg from "../../../assets/client/raks/img/panel6.png";
import iconImg from "../../../assets/client/raks/img/heroImg2.png";

import GridOverlay from "../../GridOverlay";

const MobRaksSec8 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col relative overflow-hidden bg-white">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full relative z-10">
        <img
          src={topImg}
          alt="Top Visual"
          className="w-full object-cover"
        />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="flex flex-col items-center px-5 py-20 gap-8 relative z-10">

        {/* ICON (CENTER) */}
        <img
          src={iconImg}
          alt="Icon"
          className="w-[150px]"
        />

        {/* HEADING (CENTER) */}
        <h2 className="salo text-[30px] text-center uppercase leading-none">
          Creative Play
        </h2>

        {/* PARAGRAPH (LEFT ALIGN) */}
        <p className="jost text-[16px] text-black leading-[140%] text-start max-w-[320px]">
          Where Little Ideas Turn Into Big Creations A Space to Imagine,
          Build, and Grow Where Little Ideas Turn Into Big Creations
          Innovation.
        </p>
      </div>
    </section>
  );
};

export default MobRaksSec8;