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
      className="w-full min-h-screen relative bg-[#EBE2CE] px-5 py-10 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${grid})`,
      }}
    >

      {/* ─── TOP ICON (ANIMATED) ─── */}
      <div className="w-full relative h-[120px]">
        <img
          ref={topRef}
          src={buttonImg}
          alt="icon"
          className="absolute left-[70%] -translate-x-1/2 top-1/2 w-[100px]"
        />
      </div>

      {/* ─── TEXT CONTENT ─── */}
      <div className="flex flex-col justify-center translate-x-[4%] text-start gap-6">

        {/* HEADING */}
        <h2 className="salo font-[400] uppercase text-[#262666] text-[100px] tracking-wide leading-none">
          Tailor <br /> Heritage
        </h2>

        {/* SUB TEXT */}
        <p className="salo font-[400] uppercase text-[#262666] text-[40px] leading-none">
          Crafted <br /> In Heritage
        </p>

        {/* PARAGRAPH */}
        <p className="jost font-[400] text-[16px] leading-[24px] tracking-[-0.03em] capitalize text-[#262666]">
          Syed Bawkher is a heritage tailoring house built on generations of
          craftsmanship—where tradition, precision, and timeless style come
          together. Designed for the modern gentleman, it offers bespoke
          garments, refined detailing, and an experience that goes beyond just
          dressing.
        </p>

      </div>

      {/* ─── BOTTOM ICON (ANIMATED) ─── */}
      <div className="w-full flex justify-end">
        <img
          ref={bottomRef}
          src={syedLogo}
          alt="icon"
          className="w-[150px]"
        />
      </div>

    </section>
  );
};

export default MobSyedTailoring;