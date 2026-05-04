import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import qataLeftImg from "../../../../assets/client/qatamaran/qataLeftImg.png";
import treeIcon from "../../../../assets/client/qatamaran/heroFloat2.png";

const MobQataSec3 = () => {
  const iconRef = useRef(null);

  useScrollFloat(iconRef, { yFactor: 0.6, rFactor: 0.3 });

  return (
    <section className="w-full h-[90vh] flex flex-col overflow-hidden">

      {/* TOP IMAGE */}
      <div className="w-full h-[50vh]">
        <img
          src={qataLeftImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center px-5 py-10 gap-6">

        <p className="jost text-black text-start font-[500] text-[20px] leading-[140%] tracking-tight capitalize max-w-[320px]">
          "Honoring Heritage refining craft. <br /> defining modern elegance."
        </p>

        {/* ANIMATED ICON */}
        <div ref={iconRef} className="w-[120px]">
          <img src={treeIcon} alt="icon" className="w-full object-contain" />
        </div>

      </div>
    </section>
  );
};

export default MobQataSec3;