import React from "react";

const MobCourtSec6 = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">

      {/* RIGHT BLUE PANEL */}
      <div className="absolute right-0 top-0 h-full w-[70%] bg-[#8FC4E9]" />

      {/* TEXT */}
      <div className="relative z-10 text-start leading-none">

        {/* BRAND */}
        <div className="salo text-[100px] leading-none tracking-wide">
          <span className="text-[#8FC4E9] inline-block translate-x-[-0.20em]">
            B<span className="text-white">RAND</span>
          </span>  
        </div>

        {/* VOICE */}
        <div className="salo text-[100px] leading-none tracking-wide">
          <span className="text-[#8FC4E9] inline-block translate-x-[-0.15em]">
            V<span className="text-white">OICE</span>
          </span>
        </div>

      </div>

    </section>
  );
};

export default MobCourtSec6;