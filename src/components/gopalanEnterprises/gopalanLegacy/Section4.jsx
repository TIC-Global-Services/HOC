import React, { useRef } from "react";

import minimalImg from "../../../assets/client/gopalan/heroImg1.png";
import GridOverlay from "../../GridOverlay";

import useScrollFloat from "../../../hooks/useScrollFloat";

const Section4 = () => {
  const iconRef = useRef(null);

  // FLOAT ANIMATION
  useScrollFloat(iconRef, {
    y: 20,
    x: -10,
    rotate: 8,
    duration: 3,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridOverlay
          color="0,0,0"
          opacity={0.15}
          size={100}
          position="99px 0px"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* FIXED CONTENT WIDTH */}
        <div className="relative w-[35vw] h-full flex items-center justify-center">

          {/* TEXT */}
          <p
            className="
              jost
              capitalize
              font-[500]
              text-black
              leading-[160%]
              tracking-tight
              text-start
              text-[clamp(14px,2vw,26px)]
            "
          >
            A brand transformation shaped by legacy and growth
            translating four decades of trust into a{" "}

            <span className="salo text-[#E96428] text-[clamp(24px,4vw,60px)]">
              cohesive identity
            </span>{" "}

            for a multi-vertical future. An identity evolution rooted in
            heritage, designed to unify diverse verticals under a clear,
            future-ready visual system.
          </p>
        </div>

        {/* SEPARATE ICON */}
        <div
          ref={iconRef}
          className="
            absolute
            bottom-[8%]
            right-[8%]
            will-change-transform
          "
        >
          <img
            src={minimalImg}
            alt="icon"
            className="object-contain"
            style={{
              width: "clamp(120px, 18vw, 320px)",
            }}
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#E96428]" />
    </section>
  );
};

export default Section4;