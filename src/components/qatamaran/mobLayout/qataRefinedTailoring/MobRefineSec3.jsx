import React, { useRef } from "react";
import useScrollFloat from "../../../../hooks/useScrollFloat";

import topCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import bottomCubImage from "../../../../assets/client/qatamaran/syedCub.png";
import tagIcon from "../../../../assets/client/qatamaran/heroFloat3.png";
import tagIcon2 from "../../../../assets/client/qatamaran/heroFloat4.png";

import GridOverlay from "../../../GridOverlay";

const MobRefineSec3 = () => {
  const topIconRef = useRef(null);
  const bottomIconRef = useRef(null);

  useScrollFloat(topIconRef, { yFactor: 0.4, rFactor: 0.3 });
  useScrollFloat(bottomIconRef, { yFactor: 0.6, rFactor: 0.4 });

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-white">

      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* ─── TOP LEFT IMAGE ─── */}
      <div
        className="absolute z-10"
        style={{
          top: "8%",
          left: "15%",
          width: "38%",
          height: "42%",
        }}
      >
        {/* PIN */}
        <img
          ref={topIconRef}
          src={tagIcon}
          alt="icon"
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
        className="absolute z-10"
        style={{
          bottom: "5%",
          right: "6%",
          width: "70%",
          height: "38%",
        }}
      >
        {/* PIN */}
        <img
          ref={bottomIconRef}
          src={tagIcon2}
          alt="icon"
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