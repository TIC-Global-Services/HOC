import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import topLeftImg from "../../../../assets/client/qatamaran/coromandelCoast.png";
import bottomLeftImg from "../../../../assets/client/qatamaran/heroFloat1.png";
import topRightImg from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobQataSec2 = () => {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);

  useScrollFloat(topLeftRef, { yFactor: 0.3, rFactor: 0.2 });
  useScrollFloat(topRightRef, { yFactor: 0.5, rFactor: 0.3 });
  useScrollFloat(bottomLeftRef, { yFactor: 0.7, rFactor: 0.4 });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* IMAGES */}
      <img
        ref={topLeftRef}
        src={topLeftImg}
        className="absolute top-[15%] left-[5%] w-[110px] -rotate-12"
      />

      <img
        ref={topRightRef}
        src={topRightImg}
        className="absolute top-[65%] right-[5%] w-[110px] -rotate-12"
      />

      <img
        ref={bottomLeftRef}
        src={bottomLeftImg}
        className="absolute bottom-[8%] left-[5%] w-[110px] -rotate-12"
      />

      {/* CONTENT */}
      <div
        className="absolute px-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
        }}
      >
        <div className="flex flex-col gap-8 text-start">
          <h2 className="salo text-[#1E382D] uppercase leading-none text-[50px]">
            Tide bound <br /> Tailoring
          </h2>

          <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
            Classic techniques meet contemporary expression. Designed for the
            man who moves with quiet confidence.
          </p>

          <p className="jost uppercase text-black text-[22px] leading-[100%] tracking-tight font-[500]">
            Modern Gentlemen & <br /> Timeless Style
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobQataSec2;