import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useScrollFloat";

import grid from "../../../assets/client/padlr/img/checkBg.png";
import elegantPairImg from "../../../assets/client/syedBawkher/img/elegantPairImg.png";
import syedCircleImg from "../../../assets/client/syedBawkher/img/heroImg4.png";
import texturalImg from "../../../assets/client/syedBawkher/img/heroImg3.png";
import MobSyedSec3 from "./MobSyedSec3";

const MobSyedSec2 = () => {
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  useScrollFloat(topRef, { xFactor: 0.6, yFactor: 0.15, rFactor: 0.12 });
  useScrollFloat(middleRef, { xFactor: 1.0, yFactor: 0.25, rFactor: 0 });
  useScrollFloat(bottomRef, { xFactor: 1.4, yFactor: 0.35, rFactor: 0 });

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* IMAGES */}
        <img
          ref={topRef}
          src={syedCircleImg}
          className="absolute top-[15%] left-[5%] w-[150px] -rotate-12"
        />

        <img
          ref={middleRef}
          src={texturalImg}
          className="absolute top-[10%] right-[5%] w-[150px]"
        />

        <img
          ref={bottomRef}
          src={elegantPairImg}
          className="absolute bottom-[15%] right-[5%] w-[200px]"
        />

        {/* CONTENT */}
        <div
          className="absolute px-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
          }}
        >
          <div className="flex flex-col gap-8 text-start">
            <h2 className="salo text-[#262666] uppercase leading-none text-[50px]">
              PRECISION <br /> TAILORED
            </h2>

            <p className="jost font-[500] text-black/40 text-[16px] leading-[100%]">
              Crafted through generations of expertise, each piece reflects
              precision and purpose. A seamless blend of heritage and
              refinement, tailored for the modern gentleman.
            </p>

            <p className="jost uppercase text-black text-[22px] leading-[100%] tracking-tight font-[500]">
              DETAIL & DISCIPLINE
            </p>
          </div>
        </div>
      </section>

      {/* NEXT SECTION */}
      <MobSyedSec3 />
    </>
  );
};

export default MobSyedSec2;