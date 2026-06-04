import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

const topLeftImg = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/signatureRightImg.png";
const bottomImg = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg4.png";
const pinIcon = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/signatureImg.png";

const MobSyedSec3 = () => {
const pinRef = useRef(null);

  useScrollFloat(pinRef, { yFactor: 0.6, rFactor: 0.4 }); // more dynamic

  return (
    <section className="relative w-full h-[110vh] bg-white overflow-hidden px-5 py-12">
      <div
        className="absolute top-0 left-0 w-[70vw] sm:w-[75vw] max-w-[320px]"
      >
        <img src={topLeftImg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-5 py-[22vh] mt-[5%]">
        <p className="jost text-black text-[16px] leading-[140%] tracking-tight text-start max-w-[330px]">
          Full-canvas tailoring rooted in generations of expertise.
          A seamless blend of time-honoured{" "}
          <span className=" salo font-[500] text-[20px] text-[#262666]">
            craftsmanship and modern refinement.
          </span>{" "}
          Hand-cut, individually measured, and meticulously finished. Every garment is tailored to achieve a flawless
          fit and enduring sophistication.
        </p>
      </div>

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[240px]">
        <img
          ref={pinRef}
          src={pinIcon}
          alt="icon"
          className="absolute -top-3 -left-5 w-[25vw] max-w-[100px] rotate-[-10deg] z-[30]"
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
