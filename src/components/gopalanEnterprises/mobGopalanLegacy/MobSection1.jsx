import React, { useRef } from "react";
import useScrollFloat from "../../../hooks/useMobileVideo";

import minimalImg from "../../../assets/client/gopalan/heroImg1.png";
import strokeImg from "../../../assets/client/gopalan/heroImg4.png";
import GEVideo from "../../../assets/client/gopalan/GE_Visual Identity 2_Animaiton.mp4";

const MobSection1 = () => {
  const craftRef = useRef(null);
  const treeRef = useRef(null);

  useScrollFloat(craftRef, {
    yFactor: 0.5,
    rFactor: 0.4,
  });

  useScrollFloat(treeRef, {
    yFactor: 0.7,
    rFactor: 0.3,
  });

  return (
    <section className="w-full bg-[#E96428] text-white">
      {/* TITLE */}
      <div className="px-4 py-14 relative">
        <h1 className="text-start salo text-[60px] leading-none uppercase">
          Legacy & Future
        </h1>

        {/* ICON RIGHT */}
        <img
          ref={craftRef}
          src={minimalImg}
          alt="icon"
          className="
            absolute
            right-4
            top-2
            -translate-y-1/2
            w-[150px]
          "
        />
      </div>

      {/* ROWS */}
      <div className="flex flex-col border-t border-white">
        {["Legacy.", "Evolution.", "Cohesion."].map((text, i) => (
          <div
            key={i}
            className="
                border-b
                border-white
                px-4
                py-10
              "
          >
            <h2
              className="
                  salo
                  text-start
                  text-[60px]
                  leading-none
                  uppercase
                "
            >
              {text}
            </h2>
          </div>
        ))}
      </div>

      {/* ABOUT SECTION */}
      <div className="text-start px-6 pt-20 pb-10 relative flex flex-col">
        {/* TOP CONTENT */}
        <div>
          {/* TITLE */}
          <h2 className="salo text-[60px] leading-none uppercase">About</h2>

          {/* TEXT */}
          <p
            className="
            jost
            capitalize
            font-[300]
            text-[16px]
            leading-[20px]
            max-w-[320px]
            pt-4
          "
          >
            For over four decades, Gopalan Group has shaped spaces and
            experiences through a legacy built on trust, quality, and
            innovation.
          </p>
        </div>

        {/* BOTTOM ICON */}
        <div className="flex justify-end pt-12">
          <img
            ref={treeRef}
            src={strokeImg}
            alt="icon"
            className="
        w-[160px]
        -rotate-[24deg]
      "
          />
        </div>
      </div>

      {/* VIDEO */}
      <div className="w-full bg-[#EAEAEA] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full
            h-auto
            object-cover
          "
        >
          <source src={GEVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MobSection1;
