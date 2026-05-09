import React, { useRef } from "react";

import topIcon from "../../../assets/client/gopalan/heroImg3.png";
import bottomIcon from "../../../assets/client/gopalan/heroImg2.png";

import GridOverlay from "../../GridOverlay";
import useScrollFloat from "../../../hooks/useScrollFloat";

const Section6 = () => {
  const topIconRef = useRef(null);
  const bottomIconRef = useRef(null);

  // TOP ICON FLOAT
  useScrollFloat(topIconRef, {
    y: 20,
    x: 10,
    rotate: 8,
    duration: 3,
  });

  // BOTTOM ICON FLOAT
  useScrollFloat(bottomIconRef, {
    y: 25,
    x: -10,
    rotate: -8,
    duration: 3.5,
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

      {/* MAIN WRAPPER */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* FIXED CONTENT AREA */}
        <div className="relative w-[50vw] h-full">

          {/* TOP LEFT ICON */}
          <div
            ref={topIconRef}
            className="absolute top-[12%] left-[10%] will-change-transform"
          >
            <img
              src={topIcon}
              alt="top icon"
              className="object-contain"
              style={{
                width: "clamp(80px, 40vh, 400px)",
              }}
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-[520px] flex flex-col gap-[clamp(18px,2vw,36px)]">

              {/* HEADING */}
              <h2
                className="
                  salo
                  uppercase
                  text-black
                  leading-none
                  tracking-tight
                  text-start
                  text-[clamp(24px,2.8vw,54px)]
                "
              >
                Where Legacy Meets Modern Vision
              </h2>

              {/* PARAGRAPH */}
              <p
                className="
                  jost
                  text-black
                  leading-[140%]
                  tracking-tight
                  text-start
                  max-w-[390px]
                  text-[clamp(14px,1.2vw,24px)]
                "
              >
                At Gopalan Group, every space is thoughtfully envisioned
                to embody timeless architecture, modern innovation, and
                enduring excellence—crafted to inspire elevated living
                with trust, purpose, and sophistication.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT ICON */}
          <div
            ref={bottomIconRef}
            className="absolute bottom-[5%] right-[10%] will-change-transform"
          >
            <img
              src={bottomIcon}
              alt="bottom icon"
              className="object-contain"
              style={{
                width: "clamp(90px, 30vh, 300px)",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section6;