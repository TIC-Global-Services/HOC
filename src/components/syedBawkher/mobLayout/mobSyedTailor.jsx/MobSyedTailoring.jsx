import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import grid from "../../../../assets/client/padlr/img/checkBg.png";
import buttonImg from "../../../../assets/client/page/button.png";
import syedLogo from "../../../../assets/client/syedBawkher/img/heroImg1.png";

const MobSyedTailoring = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, { yFactor: 0.4, rFactor: 0.3 });
  useScrollFloat(bottomRef, { yFactor: 0.6, rFactor: 0.4 });

  return (
    <section
      className="w-full h-[80vh] relative bg-[#EBE2CE] overflow-hidden"
      style={{ backgroundImage: `url(${grid})` }}
    >
      {/* ─── TOP ICON ─── */}
      <img
        ref={topRef}
        src={buttonImg}
        alt="icon"
        className="
        absolute 
        top-[10%] 
        right-[30%] 
        w-[25vw] max-w-[120px]
      "
      />

      {/* ─── CENTER TEXT ─── */}
      <div
        className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[90%]
    "
      >
        <div className="flex flex-col gap-6 text-start">
          <h2 className="salo font-[400] uppercase text-[#262666] text-[100px] leading-none">
            Tailor <br /> Heritage
          </h2>

          <p className="salo font-[400] uppercase text-[#262666] text-[40px] leading-none">
            Crafted <br /> In Heritage
          </p>

          <p className="jost font-[400] text-[14px] leading-[22px] tracking-[-0.03em] capitalize text-[#262666]">
            Syed Bawkher is a heritage tailoring house built on generations of craftsmanship—where tradition, precision, and timeless style come together. Designed for the modern gentleman, it offers bespoke garments, refined detailing, and an experience that goes beyond just dressing.
          </p>
        </div>
      </div>

      {/* ─── BOTTOM ICON ─── */}
      <img
        ref={bottomRef}
        src={syedLogo}
        alt="icon"
        className="
        absolute 
        bottom-[5%] 
        right-0 
        w-[25vw] max-w-[150px]
     "
      />
    </section>
  );
};

export default MobSyedTailoring;
