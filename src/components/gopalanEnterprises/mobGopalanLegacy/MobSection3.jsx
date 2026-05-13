import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import qataLeftImg from "../../../assets/client/gopalan/groupImg.png";
import treeIcon from "../../../assets/client/gopalan/heroImg1.png";

const MobSection3 = () => {
  const iconRef = useRef(null);

  useScrollFloat(iconRef, { yFactor: 0.6, rFactor: 0.3 });

  return (
    <section className="w-full h-[120vh] flex flex-col overflow-hidden">

      {/* TOP IMAGE */}
      <div className="w-full h-[60vh]">
        <img
          src={qataLeftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full h-[60vh] flex flex-col items-center justify-center px-5 py-10 gap-6">

        <p className="jost text-black text-start font-[500] text-[20px] leading-[160%] tracking-tight capitalize max-w-[450px] w-[28ch]">
          A brand transformation shaped by legacy and growth—translating four 
          decades of trust into a <span className="text-[30px] salo text-[#E96428]"> cohesive identity </span> for a multi-vertical future. 
          An identity evolution rooted in heritage, designed to 
          unify diverse verticals under a clear, future-ready visual system.
        </p>

        {/* ANIMATED ICON */}
        <div ref={iconRef} className="w-[250px]">
          <img src={treeIcon} alt="icon" className="w-full object-contain" />
        </div>

      </div>
    </section>
  );
};

export default MobSection3;