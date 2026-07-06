import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

const qataLeftImg = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/qataLeftImg.png";
const treeIcon = "https://ik.imagekit.io/hoc01/assets/client/qatamaran/heroFloat2.png";

const MobQataSec3 = () => {
  const iconRef = useRef(null);

  useScrollFloat(iconRef, { yFactor: 0.6, rFactor: 0.3 });

  return (
    <section className="w-full h-full flex flex-col overflow-hidden">

      {/* TOP IMAGE */}
      <div className="w-full h-[60vh] sm:h-[120dvh] relative">
        <img
          src={qataLeftImg}
          alt=""
          className="w-full h-full object-cover sm:object-fill"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center px-5 py-10 gap-6">

        <p className="jost text-black text-start font-[500] text-[20px] leading-[140%] tracking-tight max-w-[320px]">
          "Honoring Heritage refining craft. <br /><span className="pl-[3%]">defining modern elegance."</span>
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