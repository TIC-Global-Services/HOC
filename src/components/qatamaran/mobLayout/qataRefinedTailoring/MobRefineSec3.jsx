import React from "react";

import topCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import bottomCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import tagIcon from "../../../../assets/client/qatamaran/heroFloat3.png";
import tagIcon2 from "../../../../assets/client/qatamaran/heroFloat4.png";
import grid from "../../../../assets/client/padlr/img/checkBg.png";

const MobRefineSec3 = () => {
  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundColor: "white",
      }}
    >

      {/* ─── TOP LEFT IMAGE ─── */}
      <div
        className="absolute"
        style={{
          top: "8%",
          left: "15%",
          width: "38%",
          height: "42%",
        }}
      >
        {/* PIN */}
        <img
          src={tagIcon}
          alt=""
          className="absolute z-10 -rotate-12"
          style={{
            top: "-5%",
            left: "-30%",
            width: "50%",
          }}
        />

        {/* IMAGE */}
        <img
          src={topCubImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>

      {/* ─── BOTTOM RIGHT IMAGE ─── */}
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "6%",
          width: "70%",
          height: "38%",
        }}
      >
        {/* PIN */}
        <img
          src={tagIcon2}
          alt=""
          className="absolute z-10 rotate-12"
          style={{
            top: "-10%",
            left: "50%",
            width: "30%",
          }}
        />

        {/* IMAGE */}
        <img
          src={bottomCubImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ transform: "rotate(12deg)" }}
        />
      </div>

    </section>
  );
};

export default MobRefineSec3;