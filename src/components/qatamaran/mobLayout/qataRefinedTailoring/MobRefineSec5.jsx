import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";
import GridOverlay from "../../../GridOverlay";


const topImg =  "https://ik.imagekit.io/hoc01/assets/client/qatamaran/block4Top.png";
const leftIcon =  "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat1.png";
const rightIcon = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/coromandelCoast.png";

const MobRefineSec5 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useScrollFloat(leftRef, { yFactor: 0.8, rFactor: 0.8 });
  useScrollFloat(rightRef, { yFactor: 0.8, rFactor: 0.8 });

  return (
    <section
      className="w-full min-h-screen sm:h-auto flex flex-col relative">

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
      <div className="w-full">
        <img
          src={topImg}
          alt=""
          className="w-full object-contain"
        />
      </div>

      {/* ─── TEXT CONTENT  ─── */}
      <div className="w-full flex justify-center px-5 py-10 sm:py-20">
        
        <div className="max-w-[340px] sm:max-w-[600px] text-left space-y-4">

          {/* HEADING */}
          <h2 className="salo text-[#1E382D] text-[50px] sm:text-[60px] md:text-[70px] leading-[110%] uppercase">
            TIMELESS TAILORING
          </h2>

          {/* PARAGRAPH */}
          <p className="jost text-black text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[140%] w-[35ch] sm:w-full">
            Qatamaran is a contemporary prêt-à-porter menswear label inspired by Chennai’s deep-rooted tailoring legacy. 
            Blending skilled craftsmanship with refined precision, the brand embodies a sense of enduring elegance. 
            Created for{" "}
            <span className="salo text-[20px] sm:text-[24px] md:text-[26px] text-[#1E382D]">
              The Modern Gentleman,
            </span>{" "}
            it seamlessly fuses tradition with a subtle touch of coastal influence, offering styles that are both sophisticated and effortlessly distinctive.
          </p>

        </div>
      </div>

      {/* ─── BOTTOM ICONS ─── */}
      <div className="w-full flex justify-between items-end px-5 pt-10">

        {/* LEFT ICON */}
        <div ref={leftRef} className="w-[90px] absolute left-[10%] bottom-[1%] z-[30]">
          <img src={leftIcon} alt="icon" className="w-full object-contain" />
        </div>

        {/* RIGHT ICON */}
        <div ref={rightRef} className="w-[100px] absolute right-[10%] bottom-[6%] z-[30]">
          <img src={rightIcon} alt="icon" className="w-full object-contain" />
        </div>

      </div>

      {/* ─── BOTTOM GREEN STRIP ─── */}
    <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#1E382D] z-10" />

    </section>
  );
};

export default MobRefineSec5;