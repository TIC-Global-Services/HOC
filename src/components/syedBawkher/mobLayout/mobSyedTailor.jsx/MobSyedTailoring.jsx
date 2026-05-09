import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import buttonImg from "../../../../assets/client/page/button.png";
import syedLogo from "../../../../assets/client/syedBawkher/img/heroImg1.png";

import GridOverlay from "../../../GridOverlay";

const MobSyedTailoring = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, {
    yFactor: 0.4,
    rFactor: 0.3,
  });

  useScrollFloat(bottomRef, {
    yFactor: 0.6,
    rFactor: 0.4,
  });

  return (
    <section
      className="w-full h-[80vh] relative bg-[#EBE2CE] overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* ─── TOP ICON ─── */}
      <img
        ref={topRef}
        src={buttonImg}
        alt="icon"
        className="
          absolute 
          top-[10%] 
          right-[30%] 
          w-[25vw] 
          max-w-[120px]
          z-10
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
          z-10
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
            Syed Bawkher is a heritage tailoring house built on generations
            of craftsmanship—where tradition, precision, and timeless style
            come together. Designed for the modern gentleman, it offers
            bespoke garments, refined detailing, and an experience that goes
            beyond just dressing.
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
          w-[25vw] 
          max-w-[150px]
          z-10
        "
      />
    </section>
  );
};

export default MobSyedTailoring;