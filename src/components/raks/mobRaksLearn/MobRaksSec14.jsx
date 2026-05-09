import React from "react";

import GridOverlay from "../../GridOverlay";

const MobRaksSec14 = () => {
  return (
    <section
      className="
        w-full
        min-h-[40dvh]
        flex
        items-center
        justify-center
        px-5
        relative
        overflow-hidden
        bg-white
      "
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

      <h2 className="salo text-[50px] text-[#000085] text-center uppercase leading-none relative z-10">
        Learn Bold Lead
      </h2>
    </section>
  );
};

export default MobRaksSec14;