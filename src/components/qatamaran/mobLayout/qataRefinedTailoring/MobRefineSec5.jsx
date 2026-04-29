import React from "react";

import topImg from "../../../../assets/client/qatamaran/block4Top.png";
import leftIcon from "../../../../assets/client/qatamaran/heroFloat1.png";
import rightIcon from "../../../../assets/client/qatamaran/coromandelCoast.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobRefineSec5 = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundColor: "#ffffff",
      }}
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full h-auto">
        <img
          src={topImg}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* ─── TEXT CONTENT ─── */}
      <div className="flex flex-col items-center text-start px-5 py-10 gap-4">

        {/* HEADING */}
        <h2 className="salo text-[#1E382D] text-[50px] leading-[110%] uppercase">
          TIMELESS TAILORING
        </h2>

        {/* PARAGRAPH */}
        <p className="jost text-start text-black text-[16px] leading-[20px] max-w-[325px] capitalize">
          Qatamaran is a contemporary prêt-à-porter menswear label inspired by Chennai’s deep-rooted tailoring legacy. 
          Blending skilled craftsmanship with refined precision, the brand embodies a sense of enduring elegance. 
          Created for <span className="salo text-[20px] text-[#1E382D]"> The Modern Gentleman,</span> it seamlessly fuses tradition with a subtle touch of coastal influence, offering styles that are both sophisticated and effortlessly distinctive.

        </p>

      </div>

      {/* ─── BOTTOM ICONS ─── */}
      <div className="w-full flex justify-between items-end px-5 pb-10">

        {/* LEFT ICON */}
        <div className="w-[80px]">
          <img src={leftIcon} alt="" className="w-full object-contain" />
        </div>

        {/* RIGHT ICON */}
        <div className="w-[80px]">
          <img src={rightIcon} alt="" className="w-full object-contain" />
        </div>

      </div>

    </section>
  );
};

export default MobRefineSec5;