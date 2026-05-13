import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topImg from "../../../assets/client/raks/img/panel2.png";
import leftIcon from "../../../assets/client/raks/img/heroImg2.png";

import GridOverlay from "../../GridOverlay";

const MobRaksSec3 = () => {
  const iconRef = useRef(null);

  useScrollFloat(iconRef, {
    yFactor: 0.6,
    rFactor: 0.6,
  });

  return (
    <section className="w-full h-screen flex flex-col relative overflow-hidden bg-white">
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
        <img src={topImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* ─── BOTTOM CONTENT ─── */}
      <div className="w-full h-full flex items-center justify-around relative z-10">
        {/* LEFT ICON */}
        <div ref={iconRef} className="w-[120px]">
          <img src={leftIcon} alt="icon" className="w-full object-contain" />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-[240px] text-start">
          <p className="jost text-black text-[16px] leading-[120%] capitalize">
            <span className="block">"Empowering Voices.</span>

            <span className="block translate-x-2">Inspiring Minds.</span>

            <span className="block translate-x-2">Shaping The Future."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobRaksSec3;
