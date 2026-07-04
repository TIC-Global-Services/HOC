import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

const topLeftImg = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/signatureRightImg.png";
const bottomImg = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/heroImg4.png";
const pinIcon = "https://ik.imagekit.io/hoc01/assets/client/syed%20Bawkher/signatureImg.png";

const MobSyedSec3 = () => {
  const pinRef = useRef(null);

  useScrollFloat(pinRef, { yFactor: 0.6, rFactor: 0.4 }); // more dynamic

  return (
    <section className="relative w-full min-h-[80vh] bg-white overflow-hidden px-5 py-12 flex">
      <div
        className="relative top-0 left-0 w-full flex flex-col gap-6 sm:gap-8 items-start"
      >
        <img src={topLeftImg} alt="" className="w-full h-auto object-contain" />
        <p className="jost text-black text-[16px] sm:text-[18px] md:text-[20px] leading-[140%] sm:leading-[150%] tracking-tight text-start w-full">
          Full-canvas tailoring rooted in generations of expertise.
          A seamless blend of time-honoured{" "}
          <span className=" salo font-[500] text-[20px] sm:text-[24px] md:text-[26px] text-[#262666]">
            craftsmanship and modern refinement.
          </span>{" "}
          Hand-cut, individually measured, and meticulously finished. Every garment is tailored to achieve a flawless
          fit and enduring sophistication.
        </p>
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-center px-5 py-10 mt-[10%]">
       
      </div> */}

      {/* <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[240px]"> */}
      {/* <img
          ref={pinRef}
          src={pinIcon}
          alt="icon"
          className="absolute -top-3 -left-5 w-[25vw] max-w-[100px] rotate-[-10deg] z-[30]"
        /> */}

      {/* <img
          src={bottomImg}
          alt=""
          className="w-full object-cover rotate-[-6deg] shadow-md"
        /> */}
      {/* </div> */}
    </section>
  );
};

export default MobSyedSec3;
