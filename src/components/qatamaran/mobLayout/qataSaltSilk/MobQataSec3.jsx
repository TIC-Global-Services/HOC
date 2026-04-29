import React from "react";
import qataLeftImg from "../../../../assets/client/qatamaran/qataLeftImg.png";
import qataRightImg from "../../../../assets/client/qatamaran/qataRightImg.png";
import treeIcon from "../../../../assets/client/qatamaran/heroFloat2.png";
import MobQataSec4 from "./MobQataSec4";

const MobQataSec3 = () => {
  return (
    <>
    <section
      className="w-full min-h-screen flex flex-col"
    >

      {/* ─── TOP IMAGE ─── */}
      <div className="w-full h-[50vh] relative">
        <img
          src={qataLeftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── CENTER CONTENT ─── */}
      <div className="w-full flex flex-col items-center justify-center px-5 py-10 gap-6 text-center">

        {/* TEXT */}
        <p className="jost text-black text-start font-[500] text-[20px] leading-[140%] tracking-tight capitalize max-w-[320px]">
          "Honoring Heritage refining craft. <br /> defining modern elegance."
        </p>

        {/* ICON */}
        <div className="w-[120px]">
          <img src={treeIcon} alt="" className="w-full object-contain" />
        </div>

      </div>

      {/* ─── BOTTOM IMAGE ─── */}
      <div className="w-full h-[70vh] relative">
        <img
          src={qataRightImg}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>
    </section>

    {/* Section */}
    <MobQataSec4 />
    </>
  );
};

export default MobQataSec3;