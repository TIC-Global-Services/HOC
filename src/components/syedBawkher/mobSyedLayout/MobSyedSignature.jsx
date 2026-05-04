import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import craftImg from "../../../assets/client/syedBawkher/img/signatureRightImg.png";
import elegantLogoImg from "../../../assets/client/syedBawkher/img/signatureImg.png";
import circleLogoImg from "../../../assets/client/syedBawkher/img/heroImg1.png";
import grid from "../../../assets/client/padlr/img/checkBg.png";
import MobSyedSec2 from "./MobSyedSec2";

const MobSyedSignature = () => {
  const topIconRef = useRef(null);
  const aboutIconRef = useRef(null);

  useScrollFloat(topIconRef, { yFactor: 0.5, rFactor: 0.3 });
  useScrollFloat(aboutIconRef, { yFactor: 0.7, rFactor: 0.4 });

  return (
    <>
      <section className="w-full bg-[#EBE2CE] text-[#262666] relative">

        {/* TITLE */}
        <div className="px-4 py-14 relative">
          
          {/* TITLE TEXT */}
          <h1 className="text-start salo text-[60px] leading-none uppercase">
            Signature Craft
          </h1>

          {/* ICON RIGHT (ANIMATED) */}
          <img
            ref={topIconRef}
            src={circleLogoImg}
            alt="icon"
            className="absolute right-4 top-0 -translate-y-1/2 w-[100px]"
          />
        </div>

        {/* ROWS */}
        <div className="flex flex-col border-t-2 border-white">
          {["Measured.", "Crafted.", "Perfected."].map((text, i) => (
            <div key={i} className="border-b-2 border-white px-4 py-10">
              <h2 className="salo text-start text-[60px] leading-none uppercase">
                {text}
              </h2>
            </div>
          ))}
        </div>

        {/* ABOUT SECTION */}
        <div className="text-start px-4 py-16 relative">

          {/* LOGO RIGHT (ANIMATED) */}
          <img
            ref={aboutIconRef}
            src={elegantLogoImg}
            alt=""
            className="absolute right-4 top-6 w-[150px]"
          />

          {/* TITLE */}
          <h2 className="salo text-[42px] leading-none uppercase mb-6">
            About
          </h2>

          {/* TEXT */}
          <p className="jost capitalize font-[300] text-[16px] leading-[120%] max-w-[340px] pt-3">
            Syed Bawkher is built on a legacy of precision tailoring and
            enduring craftsmanship. From the first measurement to the final
            stitch, every garment is shaped with intent—transforming fine
            materials into expressions of timeless elegance.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full bg-[#EBE2CE]">
          <img src={craftImg} alt="about" className="w-[70%] object-cover" />
        </div>

      </section>

      {/* NEXT SECTION */}
      <MobSyedSec2 />
    </>
  );
};

export default MobSyedSignature;