import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import topLeftImg from "../../../assets/client/syedBawkher/img/signatureRightImg.png";
import bottomImg from "../../../assets/client/syedBawkher/img/syedBawkher4.png";
import pinIcon from "../../../assets/client/syedBawkher/img/signatureImg.png";

const MobSyedSec3 = () => {
  const topRef = useRef(null);
  const pinRef = useRef(null);

  useScrollFloat(topRef, { yFactor: 0.3, rFactor: 0.2 }); // subtle
  useScrollFloat(pinRef, { yFactor: 0.6, rFactor: 0.4 }); // more dynamic

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden px-5 py-12">
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-[65vw] sm:w-[75vw] max-w-[300px]"
      >
        <img src={topLeftImg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-5 py-[20vh]">
        <p className="jost text-black text-[13px] leading-[24px] tracking-tight text-start max-w-[330px] capitalize">
          Full-canvas tailoring rooted in generations of expertise. 
          A seamless blend of time-honoured{" "}
          <span className="text-[16px] salo font-[400] text-[#262666]">
            craftsmanship and modern refinement.
          </span>{" "}
          Hand-cut, individually measured, and meticulously finished. Every garment is tailored to achieve a flawless 
          fit and enduring sophistication.
        </p>
      </div>

      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[220px]">
        <img
          ref={pinRef}
          src={pinIcon}
          alt="icon"
          className="absolute -top-3 -left-3 w-[25vw] max-w-[100px] rotate-[-10deg]"
        />

        <img
          src={bottomImg}
          alt=""
          className="w-full object-cover rotate-[-6deg] shadow-md"
        />
      </div>
    </section>
  );
};

export default MobSyedSec3;
