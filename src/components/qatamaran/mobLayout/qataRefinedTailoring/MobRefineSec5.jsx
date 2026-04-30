import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import topImg from "../../../../assets/client/qatamaran/block4Top.png";
import leftIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import rightIcon from "../../../../assets/client/qatamaran/coromandelCoast.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobRefineSec5 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useScrollFloat(leftRef, { yFactor: 0.8, rFactor: 0.8 });
  useScrollFloat(rightRef, { yFactor: 0.8, rFactor: 0.8 });

  return (
    <section
      className="w-full h-[100vh] flex flex-col relative"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#ffffff",
      }}
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full">
        <img
          src={topImg}
          alt=""
          className="w-full object-contain"
        />
      </div>

      {/* ─── TEXT CONTENT  ─── */}
      <div className="w-full flex justify-center px-5 py-10">
        
        <div className="max-w-[340px] text-left space-y-4">

          {/* HEADING */}
          <h2 className="salo text-[#1E382D] text-[50px] leading-[110%] uppercase">
            TIMELESS TAILORING
          </h2>

          {/* PARAGRAPH */}
          <p className="jost text-black text-[16px] leading-[22px] capitalize">
            Qatamaran is a contemporary prêt-à-porter menswear label inspired by Chennai’s deep-rooted tailoring legacy. 
            Blending skilled craftsmanship with refined precision, the brand embodies a sense of enduring elegance. 
            Created for{" "}
            <span className="salo text-[20px] text-[#1E382D]">
              The Modern Gentleman,
            </span>{" "}
            it seamlessly fuses tradition with a subtle touch of coastal influence, offering styles that are both sophisticated and effortlessly distinctive.
          </p>

        </div>
      </div>

      {/* ─── BOTTOM ICONS ─── */}
      <div className="w-full flex justify-between items-end px-5 pt-10">

        {/* LEFT ICON (ANIMATED) */}
        <div ref={leftRef} className="w-[100px]">
          <img src={leftIcon} alt="icon" className="w-full object-contain" />
        </div>

        {/* RIGHT ICON (ANIMATED) */}
        <div ref={rightRef} className="w-[100px]">
          <img src={rightIcon} alt="icon" className="w-full object-contain" />
        </div>

      </div>

      {/* ─── BOTTOM GREEN STRIP ─── */}
    <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#1E382D] z-10" />

    </section>
  );
};

export default MobRefineSec5;