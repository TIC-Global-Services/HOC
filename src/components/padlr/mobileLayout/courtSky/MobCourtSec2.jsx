import React from "react";

const batlogo = "https://ik.imagekit.io/hoc01/assets/client/padlr/batIcon.png";
const courtImg2 = "https://ik.imagekit.io/hoc01/assets/client/padlr/courtImg2.png";
const courtImg3 = "https://ik.imagekit.io/hoc01/assets/client/padlr/courtImg3.png";

import GridOverlay from "../../../GridOverlay";

const MobCourtSec2 = () => {
  return (
    <section className="w-full h-screen flex flex-col overflow-hidden relative bg-[#8FC4E9]">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* ─── TOP ─── */}
      <div className="relative w-full z-10">
        <img
          src={courtImg2}
          alt=""
          className="w-[50%] object-cover"
        />

        {/* TITLE */}
        <h2 className="absolute top-[30%] left-1/2 -translate-x-[14%] text-start text-white salo leading-none text-[60px]">
          COURT <br /> SKY
        </h2>
      </div>

      {/* ─── MIDDLE CONTENT ─── */}
      <div className="flex items-end justify-between px-5 py-8 gap-4 relative z-10">

        {/* LEFT TEXT */}
        <div className="w-[55%]">
          <p className="salo text-start text-white leading-none tracking-tight text-[30px]  sm:text-4xl">
            BOLD, <br />
            RICH, AND <br />
            UNAPOLOGETIC.
          </p>

          <p className="jost text-start leading-none tracking-tight text-white/80 mt-3 sm:mt-1 text-[14px] sm:text-xl">
            Hex Precision
          </p>

          <p className="jost text-start leading-none tracking-tight text-white/80 text-[14px]">
            RGB Consistency
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[45%] flex justify-end">
          <img
            src={courtImg3}
            alt=""
            className="w-[150px] rotate-[-5deg]"
          />
        </div>

      </div>

      {/* ─── BOTTOM TEXT ─── */}
      <div className="relative px-5 mt-[15%] pb-10 z-10">

        <p className="jost text-start text-white/90 max-w-[250px] sm:max-w-lg text-[14px] sm:text-xl leading-[20px] tracking-tight">
          Padlr is a modern destination built around the fast-growing culture
          of padel—where sport, community, and lifestyle come together.
          Designed for both{" "}
          <span className="salo text-[20px]">
            Performance and Experience
          </span>
          , it offers premium courts, vibrant social energy, and a space that
          goes beyond just playing the game.
        </p>

        {/* BAT ICON */}
        <img
          src={batlogo}
          alt="bat"
          className="absolute right-4 bottom-0 w-[90px] sm:w-[100px]"
        />

      </div>

    </section>
  );
};

export default MobCourtSec2;